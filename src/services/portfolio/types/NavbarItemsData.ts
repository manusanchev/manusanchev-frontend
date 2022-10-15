export enum NavbarSectionName {
  aboutSection = "about",
  experienceSection = "experience",
  projectsSection = "projects",
  contactSection = "contact",
  blogSection = "blog",
}

export interface NavbarItem {
  text: string;
  id: string;
}

const NavbarItemsData: NavbarItem[] = [
  {
    text: "Sobre mi",
    id: NavbarSectionName.aboutSection,
  },
  {
    text: "Experiencia",
    id: NavbarSectionName.experienceSection,
  },
  {
    text: "Proyectos",
    id: NavbarSectionName.projectsSection,
  },
  {
    text: "Blog",
    id: NavbarSectionName.blogSection,
  },

  {
    text: "Contacto",
    id: NavbarSectionName.contactSection,
  },
];

export default NavbarItemsData;
