import { Component } from "vue";


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

export interface IBlogSectionItem {
  title: string;
  url: string;
}

export interface IContactSectionItem {
  icon: Component;
  url: string;
  additionalData?: string | undefined;
  hintTime: string;
}

export interface IApi {
  fetchExperienceData(): IExperienceSectionItem[];
  fetchAboutMeData(): IAboutMeSectionItem[];
  fetchNavbarData(): INavbarHeaderSectionItem[];
  fetchProjectsData(): IProjectSectionItem[];
  fetchBlogData(): IBlogSectionItem[];
  fetchContactData(): IContactSectionItem[];
}

export enum NavbarSectionName {
  aboutSection = "about",
  experienceSection = "experience",
  projectsSection = "projects",
  contactSection = "contact",
  blogSection = "blog",
}

export enum SectionNameData {
  aboutSectionData = "aboutData",
  experienceSectionData = "experienceData",
  projectsSectionData = "projectsData",
  blogSectionData = "blogData",
  headerSectionData = "headerData",
  contactSectionData = "contactData",
}
