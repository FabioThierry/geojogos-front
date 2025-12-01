export interface Game {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  coverImage: string;
  type: "digital" | "boardgame";
  category: "geography" | "interdisciplinary";
  targetLevel: string;
  educationalObjectives: string[];
  skillsDeveloped: string[];
  howToUse: string;
  featured: boolean;
}

export const games: Game[] = [
  {
    id: "1",
    slug: "geoquiz-brazil",
    title: "GeoQuiz Brasil",
    shortDescription:
      "Jogo digital interativo de quiz explorando a geografia, regiões e diversidade cultural do Brasil.",
    fullDescription:
      "GeoQuiz Brasil é um envolvente jogo educacional digital projetado para ajudar os alunos a explorarem a diversa geografia do Brasil. Através de quizzes interativos, desafios de mapa e experiências de aprendizado visual, os alunos descobrem as cinco regiões, capitais dos estados, biomas e características culturais que tornam o Brasil único. O jogo se adapta a diferentes níveis de habilidade e fornece feedback imediato para reforçar o aprendizado.",
    coverImage: "/digital-geography-quiz-game-brazil-map.jpg",
    type: "digital",
    category: "geography",
    targetLevel: "Ensino Fundamental e Médio (6-9ª série)",
    educationalObjectives: [
      "Identificar os estados brasileiros e suas capitais",
      "Compreender as cinco regiões geográficas do Brasil",
      "Reconhecer os principais biomas e suas características",
      "Desenvolver consciência espacial e habilidades de leitura de mapas",
    ],
    skillsDeveloped: [
      "Raciocínio cartográfico",
      "Pensamento espacial",
      "Memória e recordação",
      "Análise crítica",
    ],
    howToUse:
      "Os professores podem usar o GeoQuiz Brasil como uma atividade de aquecimento, ferramenta de revisão ou método de avaliação. O jogo é ótimo para prática individual ou competições em equipe. O acompanhamento de progresso permite que os professores monitorem o desempenho dos alunos e identifiquem áreas que precisam de reforço.",
    featured: true,
  },
  {
    id: "2",
    slug: "climate-explorers",
    title: "Exploradores do Clima",
    shortDescription:
      "Jogo de tabuleiro onde os alunos investigam zonas climáticas e seu impacto nas atividades humanas.",
    fullDescription:
      "Exploradores do Clima é um jogo de tabuleiro estratégico que leva os alunos a uma jornada pelas zonas climáticas da Terra. Os jogadores coletam recursos, tomam decisões com base nas condições climáticas e aprendem como a geografia influencia o assentamento humano, a agricultura e as atividades econômicas. O jogo combina competição com cooperação, pois os jogadores às vezes precisam trabalhar juntos para resolver desafios ambientais.",
    coverImage: "/educational-board-game-climate-zones-world-map.jpg",
    type: "boardgame",
    category: "interdisciplinary",
    targetLevel: "Ensino Médio e Superior (7-12ª série)",
    educationalObjectives: [
      "Compreender os sistemas de classificação climática global",
      "Analisar as relações entre clima e atividades humanas",
      "Avaliar desafios e soluções ambientais",
      "Conectar geografia com economia e ciências sociais",
    ],
    skillsDeveloped: [
      "Pensamento estratégico",
      "Tomada de decisão",
      "Resolução colaborativa de problemas",
      "Pensamento sistêmico",
    ],
    howToUse:
      "Exploradores do Clima funciona melhor em grupos de 3-5 alunos. Um jogo completo leva aproximadamente 45-60 minutos, tornando-o ideal para um período de aula. Os professores podem usar os cartões de discussão incluídos para facilitar a reflexão pós-jogo e conectar as experiências do jogo ao conteúdo do currículo.",
    featured: true,
  },
  {
    id: "3",
    slug: "urban-planning-sim",
    title: "Simulador de Planejamento Urbano",
    shortDescription:
      "Jogo de simulação digital onde os alunos projetam cidades sustentáveis considerando fatores geográficos.",
    fullDescription:
      "O Simulador de Planejamento Urbano desafia os alunos a projetar e gerenciar cidades enquanto consideram restrições geográficas, sustentabilidade ambiental e necessidades populacionais. Os alunos devem equilibrar o desenvolvimento econômico com a proteção ambiental, tomando decisões sobre uso da terra, transporte e gestão de recursos. A simulação fornece feedback em tempo real sobre as consequências das decisões de planejamento.",
    coverImage: "/city-planning-simulation-game-urban-development.jpg",
    type: "digital",
    category: "interdisciplinary",
    targetLevel: "Ensino Médio (9-12ª série)",
    educationalObjectives: [
      "Aplicar conceitos geográficos ao planejamento urbano",
      "Compreender os princípios de sustentabilidade",
      "Analisar dinâmicas populacionais e migração",
      "Avaliar infraestrutura e gestão de recursos",
    ],
    skillsDeveloped: [
      "Análise espacial",
      "Planejamento de longo prazo",
      "Interpretação de dados",
      "Consciência ambiental",
    ],
    howToUse:
      "O simulador pode ser usado como um projeto de várias sessões onde os alunos desenvolvem suas cidades ao longo de vários períodos de aula. Os professores podem definir desafios específicos (crescimento populacional, desastres naturais, escassez de recursos) para testar a compreensão dos alunos. As ferramentas de relatório integradas ajudam a avaliar os processos de tomada de decisão dos alunos.",
    featured: true,
  },
  {
    id: "4",
    slug: "relief-adventure",
    title: "Aventura em Relevo",
    shortDescription:
      "Jogo de tabuleiro explorando formas de relevo, topografia e geografia física através de mecânicas de exploração.",
    fullDescription:
      "Aventura em Relevo é um jogo de tabuleiro baseado em exploração onde os alunos percorrem diferentes formas de relevo e aprendem sobre geografia física. Os jogadores navegam por montanhas, vales, planícies e áreas costeiras, coletando cartas de conhecimento e completando desafios geográficos. O jogo inclui peças de terreno detalhadas que podem ser dispostas em diferentes configurações para uma jogabilidade variada.",
    coverImage: "/board-game-terrain-landforms-mountains-valleys.jpg",
    type: "boardgame",
    category: "geography",
    targetLevel: "Ensino Fundamental (4-6ª série)",
    educationalObjectives: [
      "Identificar os principais tipos de relevo",
      "Compreender a representação topográfica",
      "Aprender sobre erosão e processos geológicos",
      "Conectar a geografia física ao assentamento humano",
    ],
    skillsDeveloped: [
      "Reconhecimento visual-espacial",
      "Desenvolvimento de vocabulário",
      "Reconhecimento de padrões",
      "Habilidades de observação",
    ],
    howToUse:
      "A Aventura em Relevo é projetada para grupos de 2-4 alunos e leva de 30 a 40 minutos para jogar. O tabuleiro modular permite que os professores se concentrem em tipos específicos de relevo ou criem cenários personalizados. As cartas de vocabulário incluídas no jogo ajudam a reforçar a terminologia geográfica.",
    featured: false,
  },
  {
    id: "5",
    slug: "trade-routes",
    title: "Rotas Comerciais",
    shortDescription:
      "Jogo de estratégia explorando redes comerciais globais históricas e modernas e geografia econômica.",
    fullDescription:
      "Rotas Comerciais é um jogo de tabuleiro estratégico que imerge os alunos no mundo do comércio global. Os jogadores estabelecem conexões comerciais entre continentes, gerenciam recursos e navegam por desafios econômicos e geográficos. O jogo abrange rotas comerciais históricas como a Rota da Seda, além de abordar as cadeias de suprimento globais modernas e suas implicações geográficas.",
    coverImage: "/world-trade-routes-map-board-game-commerce.jpg",
    type: "boardgame",
    category: "interdisciplinary",
    targetLevel: "Ensino Médio e Superior (8-12ª série)",
    educationalObjectives: [
      "Mapear as principais rotas comerciais globais",
      "Compreender os princípios da geografia econômica",
      "Analisar a globalização e seus efeitos",
      "Conectar a história ao comércio contemporâneo",
    ],
    skillsDeveloped: [
      "Raciocínio econômico",
      "Consciência global",
      "Planejamento estratégico",
      "Pensamento histórico",
    ],
    howToUse:
      "Rotas Comerciais podem ser integradas em unidades sobre globalização, geografia econômica ou história mundial. O jogo inclui cartas de era que permitem foco em diferentes períodos históricos. Os professores podem usar o sistema de cenários embutido para criar objetivos de aprendizagem personalizados.",
    featured: false,
  },
  {
    id: "6",
    slug: "watershed-quest",
    title: "Missão Bacia Hidrográfica",
    shortDescription:
      "Jogo digital ensinando hidrográfica, ciclos da água e conservação ambiental.",
    fullDescription:
      "Missão Bacia Hidrográfica é um jogo digital interativo que leva os alunos pela jornada da água desde a precipitação até o oceano. Os jogadores gerenciam bacias hidrográficas, protegem a qualidade da água e tomam decisões sobre o uso da terra que afetam os sistemas hídricos. O jogo inclui simulações realistas do fluxo de água e contaminação que demonstram relações de causa e efeito em sistemas ambientais.",
    coverImage: "/water-cycle-watershed-rivers-digital-game.jpg",
    type: "digital",
    category: "geography",
    targetLevel: "Ensino Médio (6-8ª série)",
    educationalObjectives: [
      "Rastrear o movimento da água através do ciclo hidrológico",
      "Identificar componentes e limites de bacias hidrográficas",
      "Compreender os impactos humanos nos sistemas hídricos",
      "Avaliar estratégias de conservação da água",
    ],
    skillsDeveloped: [
      "Pensamento sistêmico",
      "Alfabetização ambiental",
      "Análise de causa e efeito",
      "Consciência sobre conservação",
    ],
    howToUse:
      "Missão Bacia Hidrográfica inclui missões guiadas e modo sandbox. Os professores podem atribuir missões específicas alinhadas com os objetivos do currículo ou permitir que os alunos explorem livremente. O painel de dados do jogo fornece insights sobre as escolhas e compreensão dos alunos para fins de avaliação.",
    featured: true,
  },
];

export function getGameBySlug(slug: string): Game | undefined {
  return games.find((game) => game.slug === slug);
}

export function getFeaturedGames(): Game[] {
  return games.filter((game) => game.featured);
}

export function filterGames(
  type?: "digital" | "boardgame",
  category?: "geography" | "interdisciplinary"
): Game[] {
  return games.filter((game) => {
    if (type && game.type !== type) return false;
    if (category && game.category !== category) return false;
    return true;
  });
}
