import { HomeType } from "../types";

export const homeData: HomeType = {
  hero: {
    title: "Jogos Educacionais Criados para Salas de Aula Reais",
    subtitle:
      "Criamos jogos digitais e analógicos personalizados para transformar o ensino de Geografia nas escolas.",
    cta: {
      primary: "Ver Jogos",
      secondary: "Solicitar um Projeto Personalizado",
    },
    image: {
      src: "/images/home-hero.png",
      alt: "Alunos jogando GeoJogos em sala de aula",
    },
  },
  about: {
    title: "O que é o GeoJogos?",
    paragraphs: [
      "Um estúdio de jogos educacionais dedicado a transformar a forma como a Geografia é ensinada e aprendida nas escolas.",
      "Desenvolvemos jogos alinhados ao currículo, com foco em habilidades geográficas e pensamento crítico.",
      "Nossos jogos são projetados por educadores e designers de jogos para uso prático em sala de aula.",
    ],
    cta: "Saiba Mais Sobre Nós",
  },
  services: [
    {
      iconKey: "Cpu",
      title: "Simulações Digitais",
      description:
        "Ambientes digitais interativos que permitem explorar fenômenos geográficos.",
    },
    {
      iconKey: "Box",
      title: "Jogos de Tabuleiro",
      description:
        "Jogos analógicos projetados para atividades colaborativas em sala de aula.",
    },
    {
      iconKey: "Gamepad2",
      title: "Jogos Educacionais Digitais",
      description:
        "Jogos digitais projetados para engajar os alunos em conceitos geográficos de forma lúdica.",
    },
  ],
  benefits: [
    {
      iconKey: "Users",
      title: "Aprendizado Ativo",
      description:
        "Ativa participação dos alunos por meio de desafios e decisões.",
    },
    {
      iconKey: "Globe",
      title: "Contexto Real",
      description:
        "Conteúdo contextualizado com cenários reais e dados geográficos.",
    },
  ],
  featured: {
    title: "Jogos em Destaque",
    subtitle:
      "Explore nossa coleção de jogos educacionais projetados para salas de aula de Geografia.",
    cta: "Ver Todos os Jogos",
  },
  partners: [
    {
      name: "UFCG",
      logo: "/UFCG-lateral.png",
      alt: "Logo Escola Parceira com a UFCG",
    },
    {
      name: "UFRN",
      logo: "/UFRN.png",
      alt: "Logo Escola Parceira com a UFRN",
    },
  ],
  cta: {
    title: "Pronto para Transformar Sua Sala de Aula de Geografia?",
    subtitle:
      "Vamos criar um jogo personalizado adaptado ao seu currículo, alunos e objetivos educacionais.",
    primary: "Iniciar um Projeto Personalizado",
    secondary: "Contato",
  },
};

export default homeData;
