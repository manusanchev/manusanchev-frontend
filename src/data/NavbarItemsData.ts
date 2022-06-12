export enum navbarAnchorLinkSections {
  aboutSection = "about",
  experienceSection = "experience",
  projectsSection = "projects",
  contactSection = "contact",
  blogSection = "blog",
}
export interface navbarItem {
  text: string;
  id: string;
}

export const navbarItemsData: navbarItem[] = [
  {
    text: "Sobre mi",
    id: navbarAnchorLinkSections.aboutSection,
  },
  {
    text: "Experiencia",
    id: navbarAnchorLinkSections.experienceSection,
  },
  {
    text: "Proyectos",
    id: navbarAnchorLinkSections.projectsSection,
  },
  {
    text: "Contacto",
    id: navbarAnchorLinkSections.contactSection,
  },
  {
    text: "Blog",
    id: navbarAnchorLinkSections.blogSection,
  },
];
