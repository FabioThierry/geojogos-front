import { ContactType } from "../types";

export const contactData: ContactType = {
  metadata: {
    title: "Contato",
    description:
      "Entre em contato com GeoJogos para projetos de jogos educacionais personalizados, parcerias com escolas ou colaboração em pesquisa.",
  },
  hero: {
    title: "Entre em Contato",
    subtitle:
      "Tem um projeto em mente? Quer saber mais sobre nossos jogos educacionais? Gostaríamos de ouvir você. Vamos discutir como podemos ajudar a transformar a educação em Geografia em sua escola.",
  },
  info: {
    title: "Informações de Contato",
    lead: "Entre em contato através do formulário ou nos contacte diretamente.",
    email: "fabio@geojogos.com.br",
    location: "Campina Grande, Paraíba, Brasil",
  },
  reasons: [
    {
      iconKey: "Building2",
      title: "Projetos Personalizados",
      description:
        "Interessado em desenvolver um jogo educacional personalizado para sua escola ou instituição.",
    },
    {
      iconKey: "GraduationCap",
      title: "Parcerias com Escolas",
      description:
        "Explore oportunidades de parceria para implementação de jogos educacionais.",
    },
    {
      iconKey: "MessageSquare",
      title: "Colaboração em Pesquisa",
      description:
        "Colabore em pesquisa acadêmica relacionada à aprendizagem baseada em jogos em Geografia.",
    },
  ],
  form: {
    title: "Envie-nos uma Mensagem",
  },
};

export default contactData;
