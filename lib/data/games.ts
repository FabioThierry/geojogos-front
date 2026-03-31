export interface Game {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  coverImage: string;
  type: "Digital" | "Jogo de Tabuleiro";
  category: "Geografia" | "Interdisciplinar";
  targetLevel: string;
  educationalObjectives: string[];
  skillsDeveloped: string[];
  howToUse: string;
  featured: boolean;
}

export const games: Game[] = [
  {
    id: "1",
    slug: "jump-in-cg-acude-velho",
    title: "Jump in CG: Açude Velho",
    shortDescription:
      "Jump in CG é uma aventura no calçadão às margens do Açude Velho.",
    fullDescription:
      "Jump In CG é um jogo digital educativo desenvolvido com o software Construct 2, como parte de uma iniciativa para promover o ensino de Geografia por meio de experiências interativas. Ambientado no Açude Velho, um ponto emblemático da cidade de Campina Grande (PB), o jogo convida os jogadores a explorarem esse espaço urbano, reconhecendo elementos geográficos, históricos e culturais. A proposta é que o jogador interaja com o cenário, identifique locais e compreenda a dinâmica urbana a partir de uma perspectiva lúdica e crítica.",
    coverImage: "/jump-in-cg.jpg",
    type: "Digital",
    category: "Geografia",
    targetLevel: "Ensino Fundamental e Médio (6-9ª série)",
    educationalObjectives: [
      "Estimular o reconhecimento dos espaços urbanos locais.",
      "Promover o ensino de Geografia por meio da ludicidade.",
      "Desenvolver a leitura crítica do território e suas transformações.",
      "Incentivar o protagonismo dos estudantes na construção do conhecimento geográfico.",
    ],
    skillsDeveloped: ["Espaciais", "Cognitivas", "Tecnológicas", "Sociais"],
    howToUse:
      "Os professores podem utilizar Jump In CG como recurso didático em aulas sobre urbanização, paisagem e território. Eles podem propor atividades de reconhecimento de espaços locais com base no jogo, estimular debates sobre o uso e ocupação do espaço urbano, incentivar os alunos a criarem mapas mentais ou narrativas sobre o Açude Velho e até mesmo promover projetos interdisciplinares que envolvam História, Artes e Ciências Humanas, ampliando o olhar dos estudantes sobre o ambiente em que vivem.",
    featured: true,
  },
  {
    id: "2",
    slug: "limpa-riacho-coleta-seletiva",
    title: "Limpa Riacho: Coleta Seletiva ",
    shortDescription:
      "Jogo educativo que promove a consciência ambiental ao desafiar os jogadores a limpar um riacho poluído",
    fullDescription:
      "Limpa Riacho é um jogo educativo voltado para a conscientização ambiental, especialmente sobre a preservação dos recursos hídricos. Nele, o jogador assume o papel de um agente ambiental que precisa limpar um riacho poluído, enfrentando desafios como coleta de resíduos, identificação de fontes de poluição e tomada de decisões sustentáveis. O jogo combina elementos de aventura com educação ambiental, promovendo o engajamento dos alunos em temas ecológicos de forma divertida e reflexiva.",
    coverImage: "/Limopa-riacho.jpeg",
    type: "Digital",
    category: "Interdisciplinar",
    targetLevel: "Ensino Fundamental e Médio (6-9ª série)",
    educationalObjectives: [
      "Sensibilizar os alunos sobre a importância da preservação dos recursos hídricos.",
      "Promover a educação ambiental por meio de experiências interativas.",
      "Estimular atitudes sustentáveis e cidadania ecológica.",
      "Desenvolver o senso crítico sobre práticas humanas e seus impactos ambientais.",
    ],
    skillsDeveloped: [
      "Ambientais",
      "Cognitivas",
      "Socioemocionais",
      "Tecnológicas",
    ],
    howToUse:
      "Os professores podem utilizar Limpa Riacho em projetos de educação ambiental e ciências, promovendo discussões sobre práticas sustentáveis e políticas públicas, realizando atividades complementares como visitas a rios locais ou produção de cartazes, e estimulando os alunos a criarem campanhas de conscientização baseadas no jogo. Além disso, o jogo pode ser integrado a atividades interdisciplinares com Biologia, Geografia e Educação Moral e Cívica, fortalecendo o vínculo entre o conteúdo escolar e a realidade ambiental dos estudantes.",
    featured: true,
  },
  {
    id: "3",
    slug: "expedicao-paraiba",
    title: "Expedição Paraíba",
    shortDescription:
      "Jogo digital pedagógico que explora os municípios da Paraíba, combinando elementos cartográficos e geográficos em uma plataforma interativa.",
    fullDescription:
      "Expedição Paraíba é um jogo digital pedagógico criado para apoiar o ensino de Geografia no nível básico, o jogo combina elementos cartográficos e geográficos do estado da Paraíba em uma plataforma interativa. Ele permite que os jogadores explorem todos os 223 municípios do estado em dois modos distintos: Modo Livre, que possibilita a locomoção aberta entre os municípios, e Modo Campanha, em que o personagem Chico, um geógrafo fictício, guia os jogadores por missões educativas. O jogo integra mapas temáticos, dados estatísticos e recursos de geoprocessamento, aproximando os estudantes da linguagem cartográfica e da realidade geográfica local. O jogo se destaca por unir ludicidade, tecnologia e educação, tornando o aprendizado mais dinâmico e envolvente.",
    coverImage: "/expedicao-paraiba.jpg",
    type: "Digital",
    category: "Geografia",
    targetLevel: "Ensino Fundamental e Médio (6-9ª série)",
    educationalObjectives: [
      "Promover o ensino de Geografia de forma lúdica e interativa.",
      "Estimular a leitura e interpretação de mapas e dados cartográficos.",
      "Aproximar os estudantes da realidade geográfica da Paraíba.",
      "Introduzir noções básicas de geoprocessamento e sistemas de informação geográfica (SIG).",
      "Incentivar reflexões sobre aspectos sociais, ambientais, econômicos e culturais dos municípios.",
    ],
    skillsDeveloped: [
      "Cartográficas",
      "Cognitivas",
      "Tecnológicas",
      "Sociais e culturais",
    ],
    howToUse:
      "Os professores podem utilizar o Expedição Paraíba como recurso didático para enriquecer suas aulas de Geografia, explorando os mapas temáticos e dados disponíveis no jogo para discutir conteúdos como divisão política, bacias hidrográficas, clima, vegetação, territórios indígenas e quilombolas, além de indicadores sociais e econômicos. O jogo pode ser integrado em atividades práticas de leitura cartográfica, debates sobre a realidade dos municípios, projetos interdisciplinares envolvendo História e Ciências Ambientais, ou ainda como ferramenta para introduzir noções de geoprocessamento de forma acessível. Além disso, o modo campanha, com missões guiadas pelo personagem Chico, pode ser usado para estimular a curiosidade e o protagonismo dos alunos, tornando o aprendizado mais participativo e próximo de sua realidade cotidiana.",
    featured: true,
  },
  {
    id: "4",
    slug: "alavantu-em-campina",
    title: "Alavantú em Campina",
    shortDescription:
      "Jogo de tabuleiro educativo para trabalhar a cidade de Campina Grande e seus lugares.",
    fullDescription:
      "Alavantú em Campina é um jogo de tabuleiro educativo inspirado nas tradições culturais do Nordeste brasileiro, especialmente nos festejos juninos de Campina Grande, conhecida como palco de uma das maiores festas de São João do mundo. O jogo busca valorizar a cultura popular por meio da ludicidade, permitindo que os jogadores vivenciem elementos típicos das festas juninas — como quadrilhas, músicas, comidas e símbolos regionais — em um ambiente interativo. Além de divertir, o jogo promove a aproximação dos estudantes com aspectos culturais e históricos locais, fortalecendo a identidade regional e estimulando o respeito à diversidade cultural.",
    coverImage: "/alavantu.png",
    type: "Jogo de Tabuleiro",
    category: "Geografia",
    targetLevel: "Ensino Fundamental e Médio (6-9ª série)",
    educationalObjectives: [
      "Valorizar a cultura popular nordestina e suas tradições.",
      "Promover o ensino de Geografia a partir de manifestações culturais.",
      "Estimular a reflexão sobre identidade cultural e patrimônio imaterial.",
      "Incentivar o protagonismo dos estudantes na preservação e valorização das tradições locais.",
    ],
    skillsDeveloped: [
      "Reconhecimento visual-espacial",
      "Cognitivas",
      "Sociais",
      "Culturais",
    ],
    howToUse:
      "Os professores podem utilizar o Alavantú em Campina como recurso didático em aulas de Geografia, promovendo discussões sobre cultura popular, identidade regional e patrimônio imaterial. O jogo pode ser integrado em projetos interdisciplinares que envolvam música, dança e literatura, estimulando os alunos a relacionarem o conteúdo escolar com suas vivências culturais. Além disso, pode servir como ponto de partida para atividades práticas, como a organização de apresentações de quadrilhas juninas, produção de cartazes sobre tradições locais ou debates sobre a importância da preservação cultural. Dessa forma, o jogo se torna uma ferramenta que une ludicidade, aprendizado e valorização da cultura nordestina.",
    featured: false,
  },
  {
    id: "5",
    slug: "jornada-para-alem-mar",
    title: "Jornada para Além-Mar",
    shortDescription:
      "Jogo de tabuleiro que aborda a exploração marítima e as rotas comerciais globais.",
    fullDescription:
      "O jogo conta sobre o período das Grandes Navegações aos jogadores através de mapa, ações, interações e conquistas territoriais. Com uma dinâmica semelhante a jogos como o Monopoly e o Business Tour, conta com um tabuleiro, personagens para os jogadores, fichas de domínio territorial, dados e folha de instruções.",
    coverImage: "/alem-mar.jpg",
    type: "Jogo de Tabuleiro",
    category: "Interdisciplinar",
    targetLevel: "Ensino Fundamental e Médio (6-9ª série)",
    educationalObjectives: [
      "Compreender os principais eventos e motivações das Grandes Navegações.",
      "Identificar as rotas comerciais históricas e suas implicações geográficas.",
      "Analisar os impactos da globalização no comércio internacional.",
      "Conectar a história ao comércio contemporâneo.",
    ],
    skillsDeveloped: [
      "Raciocínio estratégico",
      "Análise geográfica",
      "Pensamento crítico",
      "Trabalho em equipe",
    ],
    howToUse:
      "Os professores podem utilizar o Jornada para Além-Mar como recurso didático em aulas de História e Geografia, promovendo discussões sobre as Grandes Navegações, rotas comerciais e globalização. O jogo pode ser integrado em projetos interdisciplinares que envolvam História, Geografia e Economia, estimulando os alunos a relacionarem o conteúdo escolar com a realidade histórica e contemporânea. Além disso, pode servir como ponto de partida para atividades práticas, como a criação de mapas históricos, debates sobre os impactos das navegações ou análises comparativas entre comércio passado e presente. Dessa forma, o jogo se torna uma ferramenta que une ludicidade, aprendizado e reflexão crítica sobre a história global.",
    featured: false,
  },
];

export function getGameBySlug(slug: string): Game | undefined {
  return games.find((game) => game.slug === slug);
}

export function getFeaturedGames(): Game[] {
  return games.filter((game) => game.featured);
}

export function filterGames(
  type?: "Digital" | "Jogo de Tabuleiro",
  category?: "Geografia" | "Interdisciplinar",
): Game[] {
  return games.filter((game) => {
    if (type && game.type !== type) return false;
    if (category && game.category !== category) return false;
    return true;
  });
}
