import { IPortfolioService } from "@src/services/portfolio/types/IPortfolioService";
import { ExperienceSectionItem } from "@src/services/portfolio/types/ExperienceSectionItem";
import { BlogSectionItem } from "@src/services/portfolio/types/BlogSectionItem";
import { AboutSectionItem } from "@src/services/portfolio/types/AboutSectionItem";
import { ContactSectionItem } from "@src/services/portfolio/types/ContactSectionItem";
import { ProjectSectionItem } from "@src/services/portfolio/types/ProjectSectionItem";

export default class PortfolioService implements IPortfolioService {
  async getExperienceData(): Promise<ExperienceSectionItem[]> {
    return Promise.resolve([]);
  }

  getBlogData(): Promise<BlogSectionItem[]> {
    return Promise.resolve([]);
  }
  getProjectsData(): Promise<ProjectSectionItem[]> {
    return Promise.resolve([]);
  }
  getContactData(): Promise<ContactSectionItem[]> {
    return Promise.resolve([]);
  }
  getAboutMeData(): Promise<AboutSectionItem[]> {
    return Promise.resolve([
      {
        text: "dwqd",
        year: "dwqd",
      },
    ]);
  }
}
