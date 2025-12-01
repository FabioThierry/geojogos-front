export interface Game {
  id: string
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  coverImage: string
  type: "digital" | "boardgame"
  category: "geography" | "interdisciplinary"
  targetLevel: string
  educationalObjectives: string[]
  skillsDeveloped: string[]
  howToUse: string
  featured: boolean
}

export const games: Game[] = [
  {
    id: "1",
    slug: "geoquiz-brazil",
    title: "GeoQuiz Brazil",
    shortDescription: "Interactive digital quiz game exploring Brazilian geography, regions, and cultural diversity.",
    fullDescription:
      "GeoQuiz Brazil is an engaging digital educational game designed to help students explore the diverse geography of Brazil. Through interactive quizzes, map challenges, and visual learning experiences, students discover the five regions, state capitals, biomes, and cultural characteristics that make Brazil unique. The game adapts to different skill levels and provides immediate feedback to reinforce learning.",
    coverImage: "/digital-geography-quiz-game-brazil-map.jpg",
    type: "digital",
    category: "geography",
    targetLevel: "Elementary and Middle School (6-9th grade)",
    educationalObjectives: [
      "Identify Brazilian states and their capitals",
      "Understand the five geographic regions of Brazil",
      "Recognize major biomes and their characteristics",
      "Develop spatial awareness and map reading skills",
    ],
    skillsDeveloped: ["Cartographic reasoning", "Spatial thinking", "Memory and recall", "Critical analysis"],
    howToUse:
      "Teachers can use GeoQuiz Brazil as a warm-up activity, review tool, or assessment method. The game works great for individual practice or team competitions. Progress tracking allows teachers to monitor student performance and identify areas needing reinforcement.",
    featured: true,
  },
  {
    id: "2",
    slug: "climate-explorers",
    title: "Climate Explorers",
    shortDescription: "Board game where students investigate climate zones and their impact on human activities.",
    fullDescription:
      "Climate Explorers is a strategic board game that takes students on a journey through Earth's climate zones. Players collect resources, make decisions based on climate conditions, and learn how geography influences human settlement, agriculture, and economic activities. The game combines competition with cooperation as players must sometimes work together to solve environmental challenges.",
    coverImage: "/educational-board-game-climate-zones-world-map.jpg",
    type: "boardgame",
    category: "interdisciplinary",
    targetLevel: "Middle and High School (7-12th grade)",
    educationalObjectives: [
      "Understand global climate classification systems",
      "Analyze relationships between climate and human activities",
      "Evaluate environmental challenges and solutions",
      "Connect geography with economics and social studies",
    ],
    skillsDeveloped: ["Strategic thinking", "Decision making", "Collaborative problem solving", "Systems thinking"],
    howToUse:
      "Climate Explorers works best in groups of 3-5 students. A full game takes approximately 45-60 minutes, making it ideal for a class period. Teachers can use the included discussion cards to facilitate post-game reflection and connect game experiences to curriculum content.",
    featured: true,
  },
  {
    id: "3",
    slug: "urban-planning-sim",
    title: "Urban Planning Simulator",
    shortDescription:
      "Digital simulation game where students design sustainable cities considering geographic factors.",
    fullDescription:
      "Urban Planning Simulator challenges students to design and manage cities while considering geographic constraints, environmental sustainability, and population needs. Students must balance economic development with environmental protection, making decisions about land use, transportation, and resource management. The simulation provides real-time feedback on the consequences of planning decisions.",
    coverImage: "/city-planning-simulation-game-urban-development.jpg",
    type: "digital",
    category: "interdisciplinary",
    targetLevel: "High School (9-12th grade)",
    educationalObjectives: [
      "Apply geographic concepts to urban planning",
      "Understand sustainability principles",
      "Analyze population dynamics and migration",
      "Evaluate infrastructure and resource management",
    ],
    skillsDeveloped: ["Spatial analysis", "Long-term planning", "Data interpretation", "Environmental awareness"],
    howToUse:
      "The simulator can be used as a multi-session project where students develop their cities over several class periods. Teachers can set specific challenges (population growth, natural disasters, resource scarcity) to test student understanding. Built-in reporting tools help assess student decision-making processes.",
    featured: true,
  },
  {
    id: "4",
    slug: "relief-adventure",
    title: "Relief Adventure",
    shortDescription:
      "Board game exploring landforms, topography, and physical geography through exploration mechanics.",
    fullDescription:
      "Relief Adventure is an exploration-based board game where students traverse different landforms and learn about physical geography. Players navigate mountains, valleys, plains, and coastal areas, collecting knowledge cards and completing geographic challenges. The game includes detailed terrain tiles that can be arranged in different configurations for varied gameplay.",
    coverImage: "/board-game-terrain-landforms-mountains-valleys.jpg",
    type: "boardgame",
    category: "geography",
    targetLevel: "Elementary School (4-6th grade)",
    educationalObjectives: [
      "Identify major landform types",
      "Understand topographic representation",
      "Learn about erosion and geological processes",
      "Connect physical geography to human settlement",
    ],
    skillsDeveloped: [
      "Visual-spatial recognition",
      "Vocabulary development",
      "Pattern recognition",
      "Observational skills",
    ],
    howToUse:
      "Relief Adventure is designed for groups of 2-4 students and takes 30-40 minutes to play. The modular board allows teachers to focus on specific landform types or create custom scenarios. Vocabulary cards included in the game help reinforce geographic terminology.",
    featured: false,
  },
  {
    id: "5",
    slug: "trade-routes",
    title: "Trade Routes",
    shortDescription: "Strategy game exploring historical and modern global trade networks and economic geography.",
    fullDescription:
      "Trade Routes is a strategic board game that immerses students in the world of global commerce. Players establish trade connections between continents, manage resources, and navigate economic and geographic challenges. The game covers historical trade routes like the Silk Road while also addressing modern global supply chains and their geographic implications.",
    coverImage: "/world-trade-routes-map-board-game-commerce.jpg",
    type: "boardgame",
    category: "interdisciplinary",
    targetLevel: "Middle and High School (8-12th grade)",
    educationalObjectives: [
      "Map major global trade routes",
      "Understand economic geography principles",
      "Analyze globalization and its effects",
      "Connect history with contemporary trade",
    ],
    skillsDeveloped: ["Economic reasoning", "Global awareness", "Strategic planning", "Historical thinking"],
    howToUse:
      "Trade Routes can be integrated into units on globalization, economic geography, or world history. The game includes era cards that allow focus on different historical periods. Teachers can use the built-in scenario system to create custom learning objectives.",
    featured: false,
  },
  {
    id: "6",
    slug: "watershed-quest",
    title: "Watershed Quest",
    shortDescription: "Digital game teaching hydrography, water cycles, and environmental conservation.",
    fullDescription:
      "Watershed Quest is an interactive digital game that takes students through the journey of water from precipitation to ocean. Players manage watersheds, protect water quality, and make decisions about land use that affect water systems. The game includes realistic simulations of water flow and contamination that demonstrate cause-and-effect relationships in environmental systems.",
    coverImage: "/water-cycle-watershed-rivers-digital-game.jpg",
    type: "digital",
    category: "geography",
    targetLevel: "Middle School (6-8th grade)",
    educationalObjectives: [
      "Trace water movement through the hydrologic cycle",
      "Identify watershed components and boundaries",
      "Understand human impacts on water systems",
      "Evaluate water conservation strategies",
    ],
    skillsDeveloped: ["Systems thinking", "Environmental literacy", "Cause-effect analysis", "Conservation awareness"],
    howToUse:
      "Watershed Quest includes guided missions and sandbox mode. Teachers can assign specific missions aligned with curriculum goals or allow students to explore freely. The game's data dashboard provides insights into student choices and understanding for assessment purposes.",
    featured: true,
  },
]

export function getGameBySlug(slug: string): Game | undefined {
  return games.find((game) => game.slug === slug)
}

export function getFeaturedGames(): Game[] {
  return games.filter((game) => game.featured)
}

export function filterGames(type?: "digital" | "boardgame", category?: "geography" | "interdisciplinary"): Game[] {
  return games.filter((game) => {
    if (type && game.type !== type) return false
    if (category && game.category !== category) return false
    return true
  })
}
