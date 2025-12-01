import { SiteNav } from "../types";

export const navData: SiteNav = {
  items: [
    { name: "Home", href: "/" },
    { name: "Sobre", href: "/about" },
    { name: "Jogos", href: "/games" },
    { name: "Projetos Personalizados", href: "/custom-projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contato", href: "/contact" },
  ],
  contactButton: "Entre em Contato",
  brand: { name: "GeoJogos", logoAlt: "Logo GeoJogos" },
};

export default navData;
