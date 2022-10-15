import { ExperienceSectionItem } from "@services/portfolio/types/ExperienceSectionItem";
import { AboutSectionItem } from "@services/portfolio/types/AboutSectionItem";
import { ProjectSectionItem } from "@services/portfolio/types/ProjectSectionItem";
import { BlogSectionItem } from "@services/portfolio/types/BlogSectionItem";
import { ContactSectionItem } from "@services/portfolio/types/ContactSectionItem";

export interface IPortfolioService {
  getExperienceData(): Promise<ExperienceSectionItem[]>;
  getAboutMeData(): Promise<AboutSectionItem[]>;
  getProjectsData(): Promise<ProjectSectionItem[]>;
  getBlogData(): Promise<BlogSectionItem[]>;
  getContactData(): Promise<ContactSectionItem[]>;
}
