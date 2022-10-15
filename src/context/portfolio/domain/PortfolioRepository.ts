import { ExperienceSectionItem } from "@context/portfolio/domain/ExperienceSectionItem";
import { AboutSectionItem } from "@context/portfolio/domain/AboutSectionItem";
import { ProjectSectionItem } from "@context/portfolio/domain/ProjectSectionItem";
import { BlogSectionItem } from "@context/portfolio/domain/BlogSectionItem";
import { ContactSectionItem } from "@context/portfolio/domain/ContactSectionItem";

export interface PortfolioRepository {
  getExperienceData(): ExperienceSectionItem[];
  getAboutMeData(): AboutSectionItem[];
  getProjectsData(): ProjectSectionItem[];
  getBlogData(): BlogSectionItem[];
  getContactData(): ContactSectionItem[];
}
