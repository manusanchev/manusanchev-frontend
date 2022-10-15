import { IPortfolioService } from "@src/services/portfolio/types/IPortfolioService";
import { ExperienceSectionItem } from "@src/services/portfolio/types/ExperienceSectionItem";
import { BlogSectionItem } from "@src/services/portfolio/types/BlogSectionItem";
import { AboutSectionItem } from "@src/services/portfolio/types/AboutSectionItem";
import { ContactSectionItem } from "@src/services/portfolio/types/ContactSectionItem";
import { ProjectSectionItem } from "@src/services/portfolio/types/ProjectSectionItem";

import about from "@static/data/about.json";
import contact from "@static/data/contact.json";
import experience from "@static/data/experience.json";
import blog from "@static/data/blog.json";
import projects from "@static/data/projects.json";

export default class PortfolioService implements IPortfolioService {
  async getExperienceData(): Promise<ExperienceSectionItem[]> {
    return experience
  }

  async getBlogData(): Promise<BlogSectionItem[]> {
    return blog
  }
  async getProjectsData(): Promise<ProjectSectionItem[]> {
    return projects
  }
  async getContactData(): Promise<ContactSectionItem[]> {
    return contact
  }
  async getAboutMeData(): Promise<AboutSectionItem[]> {
    return about;
  }
}
