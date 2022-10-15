import { IPortfolioService } from "@services/portfolio/types/IPortfolioService";
import { ExperienceSectionItem } from "@services/portfolio/types/ExperienceSectionItem";
import { BlogSectionItem } from "@services/portfolio/types/BlogSectionItem";
import { AboutSectionItem } from "@services/portfolio/types/AboutSectionItem";
import { ContactSectionItem } from "@services/portfolio/types/ContactSectionItem";
import { ProjectSectionItem } from "@services/portfolio/types/ProjectSectionItem";

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
