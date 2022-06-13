import {
  IAboutMeSectionItem,
  IApi, IBlogSectionItem,
  IExperienceSectionItem,
  INavbarHeaderSectionItem,
  IProjectSectionItem
} from "@src/types";
import { experienceData } from "@src/api/data/ExperienceData";
import { aboutMeData } from "@src/api/data/AboutMeData";
import { navbarItemsData } from "@src/api/data/NavbarItemsData";
import { projectsData } from "@src/api/data/ProjectsData";
import { blogPostsData } from "@src/api/data/BlogPostsData";

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

  fetchBlogData(): IBlogSectionItem[] {
    return blogPostsData;

  }
}
