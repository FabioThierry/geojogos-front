#!/usr/bin/env node
/**
 * Gera as imagens de compartilhamento (Open Graph) dos jogos e injeta as
 * meta tags de OG em cada public/<slug>/index.html.
 *
 * Motivo: os builds exportados pelo Construct 3 não possuem nenhuma tag
 * Open Graph, então ao compartilhar o link do jogo (ex.: no WhatsApp) não
 * aparece nenhuma imagem de prévia. Além disso, um novo export do Construct 3
 * sobrescreve o index.html e apaga as tags.
 *
 * Este script é idempotente: basta rodar `npm run games:og` novamente depois
 * de reexportar qualquer jogo e tudo é reaplicado.
 *
 * Uso: npm run games:og
 */
import { readFile, writeFile, access, stat } from "node:fs/promises";
import path from "node:path";

const SITE_URL = "https://www.geojogos.com.br";

// Para cada jogo: título/descrição (os mesmos do site) e a cor de fundo da
// tela de loading do Construct 3 (definida em public/<slug>/style.css).
const GAMES = [
  {
    slug: "limpa-riacho-coleta-seletiva",
    title: "Limpa Riacho: Coleta Seletiva",
    description:
      "Jogo educativo que promove a consciência ambiental ao desafiar os jogadores a limpar um riacho poluído.",
    background: "#706ea9",
  },
  {
    slug: "expedicao-paraiba",
    title: "Expedição Paraíba",
    description:
      "Jogo digital pedagógico que explora os municípios da Paraíba, combinando elementos cartográficos e geográficos em uma plataforma interativa.",
    background: "#000000",
  },
];

const OG_WIDTH = 1200;
const OG_HEIGHT = 675; // 16:9 (mesma proporção da loading-logo)

const START = "<!-- og:start (gerado por scripts/games-og.mjs) -->";
const END = "<!-- og:end -->";

const escapeAttr = (value) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");

function buildBlock(game, imageUrl) {
  const title = escapeAttr(game.title);
  const description = escapeAttr(game.description);
  const pageUrl = `${SITE_URL}/${game.slug}/index.html`;

  return [
    START,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="GeoJogos">`,
    `<meta property="og:locale" content="pt_BR">`,
    `<meta property="og:title" content="${title}">`,
    `<meta property="og:description" content="${description}">`,
    `<meta property="og:url" content="${pageUrl}">`,
    `<meta property="og:image" content="${imageUrl}">`,
    `<meta property="og:image:secure_url" content="${imageUrl}">`,
    `<meta property="og:image:type" content="image/jpeg">`,
    `<meta property="og:image:width" content="${OG_WIDTH}">`,
    `<meta property="og:image:height" content="${OG_HEIGHT}">`,
    `<meta property="og:image:alt" content="${title}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${title}">`,
    `<meta name="twitter:description" content="${description}">`,
    `<meta name="twitter:image" content="${imageUrl}">`,
    END,
  ].join("\n");
}

async function fileExists(file) {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
}

async function generateImage(game) {
  const source = path.join("public", game.slug, "icons", "loading-logo.png");
  if (!(await fileExists(source))) {
    console.warn(`  ! imagem base ausente: ${source} (pulando geração)`);
    return false;
  }

  let sharp;
  try {
    ({ default: sharp } = await import("sharp"));
  } catch {
    console.warn("  ! pacote 'sharp' indisponível (pulando geração da imagem)");
    return false;
  }

  const out = path.join("public", game.slug, "og-image.jpg");
  await sharp(source)
    .resize(OG_WIDTH, OG_HEIGHT, { fit: "cover" })
    .flatten({ background: game.background })
    .jpeg({ quality: 82 })
    .toFile(out);

  const { size } = await stat(out);
  console.log(`  ✓ imagem: ${out} (${Math.round(size / 1024)} KB)`);
  return true;
}

async function injectMeta(game) {
  const htmlPath = path.join("public", game.slug, "index.html");
  // A imagem é sempre gerada lado a lado com o index.html; se uma nova
  // imagem não pôde ser gerada, mantemos a que já está versionada.
  const imageUrl = `${SITE_URL}/${game.slug}/og-image.jpg`;
  const block = buildBlock(game, imageUrl);

  let html = await readFile(htmlPath, "utf8");

  if (html.includes(START)) {
    html = html.replace(new RegExp(`${START}[\\s\\S]*?${END}`), block);
  } else if (html.includes("</head>")) {
    html = html.replace("</head>", `${block}\n</head>`);
  } else {
    throw new Error(`${htmlPath}: não encontrei </head> para inserir as tags`);
  }

  await writeFile(htmlPath, html);
  console.log(`  ✓ meta tags: ${htmlPath}`);
}

for (const game of GAMES) {
  console.log(`• ${game.slug}`);
  await generateImage(game);
  await injectMeta(game);
}

console.log("\nPronto. Não esqueça de commitar as imagens e os index.html.");
