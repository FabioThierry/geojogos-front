export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  coverImage: string;
  author: string;
  publishedAt: string;
  category: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "porque-os-jogos-transformam-o-ensino-de-geografia",
    title: "Porque os Jogos Transformam o Ensino de Geografia",
    summary:
      "Explorando a pesquisa por trás da aprendizagem baseada em jogos e seus benefícios específicos para o ensino de conceitos geográficos e pensamento espacial.",
    content: `
      <p>A aprendizagem baseada em jogos surgiu como uma das abordagens pedagógicas mais eficazes para o ensino de geografia. Pesquisas mostram consistentemente que os alunos que aprendem por meio de jogos demonstram melhor retenção, compreensão mais profunda e habilidades de raciocínio espacial mais fortes.</p>
      
      <h2>A Ciência por Trás da Aprendizagem Baseada em Jogos</h2>
      <p>Quando os alunos jogam jogos educacionais, eles envolvem múltiplos sistemas cognitivos simultaneamente. A combinação de processamento visual, tomada de decisão e feedback imediato cria um ambiente de aprendizagem ideal que a instrução tradicional muitas vezes não consegue igualar.</p>
      
      <h2>Benefícios Específicos para a Geografia</h2>
      <p>A geografia apresenta desafios únicos de ensino: conceitos abstratos, relações espaciais e sistemas complexos. Os jogos abordam esses desafios fornecendo mapas interativos, ambientes simulados e oportunidades de exploração prática.</p>
      
      <h2>Implementando Jogos em Sua Sala de Aula</h2>
      <p>A integração bem-sucedida de jogos requer um planejamento cuidadoso. Considere seus objetivos de aprendizagem, tempo disponível e necessidades dos alunos ao selecionar e implementar jogos educacionais.</p>
    `,
    coverImage: "/classroom-students-playing-educational-game-geogra.jpg",
    author: "GeoJogos Team",
    publishedAt: "2024-11-15",
    category: "Aprendizagem Baseada em Jogos",
    tags: ["educação", "jogos", "geografia", "pedagogia"],
  },
  {
    id: "2",
    slug: "desenvolvendo-o-pensamento-espacial-atraves-dos-jogos-de-tabuleiro",
    title: "Desenvolvendo o Pensamento Espacial Através dos Jogos de Tabuleiro",
    summary:
      "Como os jogos analógicos podem desenvolver efetivamente o raciocínio cartográfico e a inteligência espacial em alunos de todas as idades.",
    content: `
      <p>O pensamento espacial é fundamental para a literacia geográfica, e os jogos de tabuleiro oferecem um meio único para desenvolver essas habilidades cruciais. Ao contrário das alternativas digitais, os jogos físicos exigem a manipulação direta do espaço e dos materiais.</p>
      
      <h2>Compreendendo a Inteligência Espacial</h2>
      <p>A inteligência espacial abrange a capacidade de visualizar, manipular e raciocinar sobre relações espaciais. Esse conjunto de habilidades é essencial não apenas para a geografia, mas também para a matemática, ciências e muitas áreas profissionais.</p>
      
      <h2>Jogos de Tabuleiro como Treinadores Espaciais</h2>
      <p>Os jogos de tabuleiro desenvolvem naturalmente o pensamento espacial por meio da navegação em mapas, gerenciamento de territórios e manipulação física de peças. A natureza tátil dos jogos de tabuleiro envolve diferentes caminhos de aprendizagem do que as atividades baseadas em tela.</p>
      
      <h2>Resultados de Pesquisa</h2>
      <p>Estudos mostram que alunos que jogam regularmente jogos de tabuleiro espaciais demonstram melhorias mensuráveis na leitura de mapas, rotação mental e habilidades de resolução de problemas geográficos.</p>
    `,
    coverImage: "/students-board-game-map-spatial-thinking-classroom.jpg",
    author: "GeoJogos Team",
    publishedAt: "2024-10-28",
    category: "Pesquisa Pedagógica",
    tags: [
      "pensamento espacial",
      "jogos de tabuleiro",
      "cartografia",
      "pesquisa",
    ],
  },
  {
    id: "3",
    slug: "personalizando-jogos-para-o-curriculo-local",
    title: "Personalizando Jogos para o Currículo Local",
    summary:
      "A importância de adaptar jogos educacionais para refletir a geografia local, cultura e requisitos curriculares específicos.",
    content: `
      <p>Jogos educacionais genéricos muitas vezes não atingem o objetivo porque não conseguem se conectar com as experiências de vida dos alunos. Jogos personalizados que refletem a geografia local criam experiências de aprendizagem mais significativas.</p>
      
      <h2>Por que a Localização é Importante</h2>
      <p>Os alunos se envolvem mais profundamente com conteúdos que reconhecem. Quando os jogos apresentam marcos locais, características regionais e contextos familiares, a aprendizagem se torna mais relevante e memorável.</p>
      
      <h2>Alinhamento Curricular</h2>
      <p>Cada escola e região tem requisitos curriculares específicos. Jogos personalizados podem ser projetados para atender a objetivos de aprendizagem exatos, garantindo que o tempo de jogo apoie diretamente as metas educacionais.</p>
      
      <h2>O Processo de Personalização</h2>
      <p>Trabalhando com educadores, identificamos conceitos-chave, características locais e objetivos pedagógicos para criar jogos que atendam a contextos educacionais específicos, mantendo uma jogabilidade envolvente.</p>
    `,
    coverImage: "/teacher-customizing-educational-materials-local-ma.jpg",
    author: "GeoJogos Team",
    publishedAt: "2024-10-10",
    category: "Desenvolvimento Personalizado",
    tags: ["personalização", "currículo", "conteúdo local", "educação"],
  },
  {
    id: "4",
    slug: "jogos-digitais-vs-analogicos-na-educacao-encontrando-o-equilibrio-ideal",
    title:
      "Jogos Digitais vs. Analógicos na Educação: Encontrando o Equilíbrio Ideal",
    summary:
      "Comparando os benefícios educacionais dos jogos digitais e físicos, e estratégias para usar ambos de forma eficaz nas salas de aula de geografia.",
    content: `
      <p>A disputa entre jogos digitais e analógicos muitas vezes apresenta uma falsa dicotomia. Ambos os formatos oferecem vantagens únicas, e as abordagens educacionais mais eficazes aproveitam os pontos fortes de cada um.</p>
      
      <h2>Vantagens dos Jogos Digitais</h2>
      <p>Os jogos digitais se destacam em fornecer feedback imediato, dificuldade adaptativa, rastreamento de dados e simulação de sistemas complexos. Eles podem alcançar os alunos individualmente e escalar facilmente em todas as salas de aula.</p>
      
      <h2>Vantagens dos Jogos Analógicos</h2>
      <p>Os jogos físicos promovem interação social, aprendizagem tátil e colaboração face a face. Eles não exigem infraestrutura tecnológica e incentivam diferentes tipos de engajamento.</p>
      
      <h2>Integração Estratégica</h2>
      <p>A melhor abordagem utiliza ambos os formatos de forma estratégica. Jogos digitais funcionam bem para prática e avaliação individuais, enquanto os jogos de tabuleiro são excelentes para aprendizagem colaborativa e atividades baseadas em discussão.</p>
    `,
    coverImage: "/digital-tablet-board-game-comparison-education.jpg",
    author: "GeoJogos Team",
    publishedAt: "2024-09-22",
    category: "Aprendizagem Baseada em Jogos",
    tags: [
      "jogos digitais",
      "jogos de tabuleiro",
      "comparação",
      "estratégias de ensino",
    ],
  },
  {
    id: "5",
    slug: "avaliacao-por-meio-do-jogo-medindo-a-aprendizagem-sem-provas",
    title: "Avaliação Por Meio do Jogo: Medindo a Aprendizagem Sem Provas",
    summary:
      "Como os jogos educacionais fornecem dados ricos de avaliação e maneiras alternativas de avaliar a compreensão dos alunos sobre conceitos geográficos.",
    content: `
      <p>Testes tradicionais capturam apenas uma instantânea do conhecimento do aluno. Os jogos oferecem oportunidades de avaliação contínua que revelam uma compreensão mais profunda e desenvolvimento de habilidades.</p>
      
      <h2>Jogos como Ferramentas de Avaliação</h2>
      <p>Cada decisão que um aluno toma durante o jogo fornece dados sobre sua compreensão. Esse fluxo contínuo de informações oferece um quadro mais completo do que os testes periódicos.</p>
      
      <h2>Tipos de Avaliação Baseada em Jogos</h2>
      <p>Os jogos podem avaliar recordação de conhecimento, aplicação, análise e síntese. Jogos bem projetados revelam não apenas o que os alunos sabem, mas como eles pensam e resolvem problemas.</p>
      
      <h2>Implementação Prática</h2>
      <p>Os professores podem usar protocolos de observação, registros de jogo e atividades de reflexão para capturar dados de avaliação das sessões de jogo sem interromper a experiência de aprendizagem.</p>
    `,
    coverImage: "/teacher-observing-students-game-assessment-evaluat.jpg",
    author: "GeoJogos Team",
    publishedAt: "2024-09-05",
    category: "Pesquisa Pedagógica",
    tags: ["avaliação", "resultados de aprendizagem", "pesquisa"],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRecentPosts(limit = 3): BlogPost[] {
  return [...blogPosts]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, limit);
}
