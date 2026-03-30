import { CustomProjectsType } from "../types";

export const customProjectsData: CustomProjectsType = {
  metadata: {
    title: "Projetos Personalizados",
    description:
      "Desenvolvimento de jogos educacionais personalizados para escolas e professores. Criamos jogos adaptados ao seu currículo, realidade local e objetivos educacionais.",
  },
  hero: {
    title: "Desenvolvimento de Jogos Personalizados para Escolas",
    subtitle:
      "Cada sala de aula é única. Criamos jogos educacionais personalizados adaptados ao seu currículo específico, alunos e objetivos educacionais. Seja digital ou analógico, projetamos jogos que funcionam para sua realidade.",
    image: "/custom-game.jpg",
    imageAlt: "Processo de desenvolvimento de jogos personalizados",
    cta: "Iniciar um Projeto Personalizado",
  },
  adaptations: [
    {
      iconKey: "BookOpen",
      title: "Currículo da Escola",
      description:
        "Jogos alinhados com seus requisitos curriculares específicos e padrões de aprendizagem.",
    },
    {
      iconKey: "MapPin",
      title: "Realidade Local",
      description:
        "Conteúdo que reflete a geografia, marcos e contexto cultural de sua região.",
    },
    {
      iconKey: "Users",
      title: "Faixa Etária dos Alunos",
      description:
        "Dificuldade e complexidade adaptadas ao nível de desenvolvimento de seus alunos.",
    },
    {
      iconKey: "Target",
      title: "Objetivos Educacionais",
      description:
        "Mecânicas de jogo projetadas para alcançar seus objetivos de aprendizagem específicos.",
    },
  ],
  formats: [
    {
      iconKey: "Monitor",
      title: "Jogos Digitais",
      features: [
        "Experiências web interativas ou baseadas em aplicativos",
        "Rastreamento automático de progresso",
        "Dificuldade adaptativa",
        "Integração de conteúdo multimídia",
        "Funciona em computadores e tablets",
      ],
    },
    {
      iconKey: "Puzzle",
      title: "Jogos de Tabuleiro",
      features: [
        "Componentes e materiais físicos",
        "Colaboração face a face",
        "Experiências de aprendizagem tátil",
        "Sem necessidade de tecnologia",
        "Inclui guia para professor",
      ],
    },
  ],
  examples: [
    {
      title: "Quiz Regional de Geografia",
      description:
        "Um jogo de quiz personalizado com os municípios, marcos e características geográficas do seu estado.",
      image: "/digital-geography-quiz-game-brazil-map.jpg",
    },
    {
      title: "Jogo de Tabuleiro de Clima Local",
      description:
        "Um jogo de tabuleiro explorando padrões climáticos e desafios ambientais específicos de sua região.",
      image: "/educational-board-game-climate-zones-world-map.jpg",
    },
    {
      title: "Simulação de Planejamento Urbano",
      description:
        "Uma simulação digital usando dados reais de sua cidade ou bairro para lições de geografia urbana.",
      image: "/city-planning-simulation-game-urban-development.jpg",
    },
  ],
  process: [
    {
      step: 1,
      title: "Consulta Inicial",
      description:
        "Discutimos suas necessidades educacionais, requisitos curriculares e objetivos do projeto.",
    },
    {
      step: 2,
      title: "Proposta e Planejamento",
      description:
        "Criamos uma proposta detalhada incluindo conceito do jogo, cronograma e entregas.",
    },
    {
      step: 3,
      title: "Desenvolvimento",
      description:
        "Nossa equipe projeta e desenvolve o jogo com check-ins regulares e sessões de feedback.",
    },
    {
      step: 4,
      title: "Testes e Refinamento",
      description:
        "Testamos o jogo com alunos reais e incorporamos feedback para melhorias.",
    },
    {
      step: 5,
      title: "Entrega e Suporte",
      description:
        "Você recebe o jogo final com guias para professores e suporte contínuo.",
    },
  ],
  cta: {
    title: "Pronto para Iniciar Seu Projeto Personalizado?",
    subtitle:
      "Conte-nos sobre suas necessidades educacionais e vamos criar algo incrível para seus alunos.",
    link: "Entre em Contato",
  },
};

export default customProjectsData;
