export interface BlogPost {
  id: string
  slug: string
  title: string
  summary: string
  content: string
  coverImage: string
  author: string
  publishedAt: string
  category: string
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "why-games-transform-geography-education",
    title: "Why Games Transform Geography Education",
    summary:
      "Exploring the research behind game-based learning and its specific benefits for teaching geographic concepts and spatial thinking.",
    content: `
      <p>Game-based learning has emerged as one of the most effective pedagogical approaches for geography education. Research consistently shows that students who learn through games demonstrate better retention, deeper understanding, and stronger spatial reasoning skills.</p>
      
      <h2>The Science Behind Game-Based Learning</h2>
      <p>When students play educational games, they engage multiple cognitive systems simultaneously. The combination of visual processing, decision-making, and immediate feedback creates an optimal learning environment that traditional instruction often cannot match.</p>
      
      <h2>Specific Benefits for Geography</h2>
      <p>Geography presents unique teaching challenges: abstract concepts, spatial relationships, and complex systems. Games address these challenges by providing interactive maps, simulated environments, and hands-on exploration opportunities.</p>
      
      <h2>Implementing Games in Your Classroom</h2>
      <p>Successful integration of games requires thoughtful planning. Consider your learning objectives, available time, and student needs when selecting and implementing educational games.</p>
    `,
    coverImage: "/classroom-students-playing-educational-game-geogra.jpg",
    author: "GeoJogos Team",
    publishedAt: "2024-11-15",
    category: "Game-Based Learning",
    tags: ["education", "games", "geography", "pedagogy"],
  },
  {
    id: "2",
    slug: "developing-spatial-thinking-through-board-games",
    title: "Developing Spatial Thinking Through Board Games",
    summary:
      "How analog games can effectively develop cartographic reasoning and spatial intelligence in students of all ages.",
    content: `
      <p>Spatial thinking is fundamental to geographic literacy, and board games offer a unique medium for developing these crucial skills. Unlike digital alternatives, physical games require direct manipulation of space and materials.</p>
      
      <h2>Understanding Spatial Intelligence</h2>
      <p>Spatial intelligence encompasses the ability to visualize, manipulate, and reason about spatial relationships. This skill set is essential not only for geography but also for mathematics, science, and many professional fields.</p>
      
      <h2>Board Games as Spatial Trainers</h2>
      <p>Board games naturally develop spatial thinking through map navigation, territory management, and physical piece manipulation. The tactile nature of board games engages different learning pathways than screen-based activities.</p>
      
      <h2>Research Findings</h2>
      <p>Studies show that students who regularly engage with spatial board games demonstrate measurable improvements in map reading, mental rotation, and geographic problem-solving abilities.</p>
    `,
    coverImage: "/students-board-game-map-spatial-thinking-classroom.jpg",
    author: "GeoJogos Team",
    publishedAt: "2024-10-28",
    category: "Pedagogical Research",
    tags: ["spatial thinking", "board games", "cartography", "research"],
  },
  {
    id: "3",
    slug: "customizing-games-for-local-curriculum",
    title: "Customizing Games for Local Curriculum",
    summary:
      "The importance of adapting educational games to reflect local geography, culture, and specific curricular requirements.",
    content: `
      <p>Generic educational games often miss the mark because they fail to connect with students' lived experiences. Customized games that reflect local geography create more meaningful learning experiences.</p>
      
      <h2>Why Localization Matters</h2>
      <p>Students engage more deeply with content they recognize. When games feature local landmarks, regional characteristics, and familiar contexts, learning becomes more relevant and memorable.</p>
      
      <h2>Curriculum Alignment</h2>
      <p>Each school and region has specific curricular requirements. Custom games can be designed to address exact learning objectives, ensuring that gameplay time directly supports educational goals.</p>
      
      <h2>The Customization Process</h2>
      <p>Working with educators, we identify key concepts, local features, and pedagogical goals to create games that serve specific educational contexts while maintaining engaging gameplay.</p>
    `,
    coverImage: "/teacher-customizing-educational-materials-local-ma.jpg",
    author: "GeoJogos Team",
    publishedAt: "2024-10-10",
    category: "Custom Development",
    tags: ["customization", "curriculum", "local content", "education"],
  },
  {
    id: "4",
    slug: "digital-vs-analog-games-in-education",
    title: "Digital vs. Analog Games in Education: Finding the Right Balance",
    summary:
      "Comparing the educational benefits of digital and physical games, and strategies for using both effectively in geography classrooms.",
    content: `
      <p>The debate between digital and analog games often presents a false dichotomy. Both formats offer unique advantages, and the most effective educational approaches leverage the strengths of each.</p>
      
      <h2>Digital Game Advantages</h2>
      <p>Digital games excel at providing immediate feedback, adaptive difficulty, data tracking, and simulating complex systems. They can reach students individually and scale easily across classrooms.</p>
      
      <h2>Analog Game Advantages</h2>
      <p>Physical games promote social interaction, tactile learning, and face-to-face collaboration. They require no technology infrastructure and encourage different types of engagement.</p>
      
      <h2>Strategic Integration</h2>
      <p>The best approach uses both formats strategically. Digital games work well for individual practice and assessment, while board games excel for collaborative learning and discussion-based activities.</p>
    `,
    coverImage: "/digital-tablet-board-game-comparison-education.jpg",
    author: "GeoJogos Team",
    publishedAt: "2024-09-22",
    category: "Game-Based Learning",
    tags: ["digital games", "board games", "comparison", "teaching strategies"],
  },
  {
    id: "5",
    slug: "assessment-through-gameplay",
    title: "Assessment Through Gameplay: Measuring Learning Without Tests",
    summary:
      "How educational games provide rich assessment data and alternative ways to evaluate student understanding of geographic concepts.",
    content: `
      <p>Traditional tests capture only a snapshot of student knowledge. Games provide continuous assessment opportunities that reveal deeper understanding and skill development.</p>
      
      <h2>Games as Assessment Tools</h2>
      <p>Every decision a student makes during gameplay provides data about their understanding. This continuous stream of information offers a more complete picture than periodic testing.</p>
      
      <h2>Types of Game-Based Assessment</h2>
      <p>Games can assess knowledge recall, application, analysis, and synthesis. Well-designed games reveal not just what students know, but how they think and solve problems.</p>
      
      <h2>Practical Implementation</h2>
      <p>Teachers can use observation protocols, game logs, and reflection activities to capture assessment data from gameplay sessions without disrupting the learning experience.</p>
    `,
    coverImage: "/teacher-observing-students-game-assessment-evaluat.jpg",
    author: "GeoJogos Team",
    publishedAt: "2024-09-05",
    category: "Pedagogical Research",
    tags: ["assessment", "evaluation", "learning outcomes", "research"],
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getRecentPosts(limit = 3): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit)
}
