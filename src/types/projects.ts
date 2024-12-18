import { defineCollection, z } from "astro:content";

export const projectsCollection = defineCollection({
  type: "data",
  schema: () =>
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
          alt: z.string(),
        })
        .optional(),
      video: z
        .object({
          alt: z.string(),
        })
        .optional(),
    }),
});
