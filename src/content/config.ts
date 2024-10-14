import { z, defineCollection } from "astro:content";

// se puede abstraer de aquí a un schema más especifico del contexto
const projectsCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.string(),
      sortDate: z.string(),
      links: z
        .object({
          github: z.string().optional(),
          npm: z.string().optional(),
          demo: z.string().optional(),
        })
        .optional(),
      image: z
        .object({
          url: image(),
          alt: z.string(),
        })
        .optional(),
      video: z
        .object({
          url: z.string(),
          alt: z.string(),
        })
        .optional(),
    }),
});

export const collections = {
  projects: projectsCollection,
};
