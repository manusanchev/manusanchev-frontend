import {
  IAboutMeSectionItem,
  IApi,
  IExperienceSectionItem,
  INavbarHeaderSectionItem,
  IProjectSectionItem,
} from "@src/types";
import { experienceData } from "@src/api/data/ExperienceData";
import { aboutMeData } from "@src/api/data/AboutMeData";
import { navbarItemsData } from "@src/api/data/NavbarItemsData";
import { projectsData } from "@src/api/data/ProjectsData";

export class Api implements IApi {
  fetchAboutMeData(): IAboutMeSectionItem[] {
    return aboutMeData;
  }

  fetchExperienceData(): IExperienceSectionItem[] {
    return experienceData;
  }

  fetchNavbarData(): INavbarHeaderSectionItem[] {
    return navbarItemsData;
  }

  fetchProjectsData(): IProjectSectionItem[] {
    return projectsData;
  }
}
