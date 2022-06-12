export interface ExperienceItem {
  techName: string;
  summary: string;
  link: string;
}

export const experienceData: ExperienceItem[] = [
  {
    techName: "Nuxt.js",
    summary:
      "Desarrollé aplicaciones Server Side Rendering con <span class='span-experience'>Vue</span>",
    link: "https://nuxtjs.org/",
  },
  {
    techName: "Vite",
    summary:
      "Alternativa a webpack con un modulo externo para SSR y vue con <span class='span-experience'>Typescript</span>",
    link: "https://vitejs.dev/",
  },
  {
    techName: "Laravel",
    summary: "Framework que mas utilicé del ecosistema <span class='span-experience'>PHP</span>",
    link: "https://laravel.com/",
  },
  {
    techName: "Express.js",
    summary:
      "Desarrollé APIs siguiendo <span class='span-experience'>arquitectura hexagonal</span> con este framework",
    link: "https://expressjs.com/",
  },
  {
    techName: "Tecnologias de Testing",
    summary:
      "He usado herramientas de Testing como <span class='span-experience'>Testing Library</span>, <span class='span-experience'>Jest</span> y <span class='span-experience'>Cypress</span>",
    link: "https://jestjs.io/",
  },
  {
    techName: "Tecnologias de BBDD",
    summary:
      "He trabajado con BBDD relacionales y no relacionales como <span class='span-experience'>SQL</span>, <span class='span-experience'>MySQL</span> y <span class='span-experience'>MongoDB</span>",
    link: "https://www.mongodb.com/",
  },
];
