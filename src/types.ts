export interface IAboutMeSectionItem {
  year: string;
  text: string;
}

export interface IExperienceSectionItem {
  techName: string;
  summary: string;
  link: string;
}

export interface INavbarHeaderSectionItem {
  text: string;
  id: string;
}

export interface IProjectSectionItem {
  title: string;
  description: string;
  websiteUrl?: string;
  sourceCodeUrl?: string;
}

export interface IApi {
  fetchExperienceData(): IExperienceSectionItem[];
  fetchAboutMeData(): IAboutMeSectionItem[];
  fetchNavbarData(): INavbarHeaderSectionItem[];
}

export enum SectionName {
  aboutSection = "about",
  experienceSection = "experience",
  projectsSection = "projects",
  contactSection = "contact",
  blogSection = "blog",
}
