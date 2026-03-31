import { Footer } from "../types";

export const footerData: Footer = {
  brand: {
    name: "GeoJogos",
    description:
      "Jogos educacionais projetados para salas reais. Transformando a educação em Geografia através do jogo.",
    logoAlt: "Logo GeoJogos",
  },
  navigation: {
    title: "Navegação",
    items: [
      { name: "Home", href: "/" },
      { name: "Sobre", href: "/about" },
      { name: "Jogos", href: "/games" },
      { name: "Projetos Personalizados", href: "/custom-projects" },
      // { name: "Blog", href: "/blog" },
      { name: "Contato", href: "/contact" },
    ],
  },
  resources: {
    title: "Recursos",
    items: [
      { name: "Jogos Digitais", href: "/games?type=digital" },
      { name: "Jogos de Tabuleiro", href: "/games?type=boardgame" },
      { name: "Para Professores", href: "/custom-projects" },
      { name: "Pesquisa", href: "/blog" },
    ],
  },
  contact: {
    title: "Contato",
    email: "fabio@geojogos.com.br",
    location: "Campina Grande, Paraíba, Brasil",
    social: {
      linkedin: "LinkedIn",
      instagram: "Instagram",
      youtube: "YouTube",
    },
  },
  copyright: "GeoJogos. Todos os direitos reservados.",
};

export default footerData;
