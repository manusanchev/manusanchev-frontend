import { ExperienceSectionItem } from "@src/services/portfolio/types/ExperienceSectionItem";
import { AboutSectionItem } from "@src/services/portfolio/types/AboutSectionItem";
import { ProjectSectionItem } from "@src/services/portfolio/types/ProjectSectionItem";
import { BlogSectionItem } from "@src/services/portfolio/types/BlogSectionItem";
import { ContactSectionItem } from "@src/services/portfolio/types/ContactSectionItem";

export interface IPortfolioService {
  getExperienceData(): Promise<ExperienceSectionItem[]>;
  getAboutMeData(): Promise<AboutSectionItem[]>;
  getProjectsData(): Promise<ProjectSectionItem[]>;
  getBlogData(): Promise<BlogSectionItem[]>;
  getContactData(): Promise<ContactSectionItem[]>;
}
