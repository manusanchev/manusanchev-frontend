import { PortfolioRepository } from "@context/portfolio/domain/PortfolioRepository";
import { ExperienceSectionItem } from "@context/portfolio/domain/ExperienceSectionItem";
import { BlogSectionItem } from "@context/portfolio/domain/BlogSectionItem";
import { AboutSectionItem } from "@context/portfolio/domain/AboutSectionItem";
import { ContactSectionItem } from "@context/portfolio/domain/ContactSectionItem";
import { ProjectSectionItem } from "@context/portfolio/domain/ProjectSectionItem";

export default class ApiPortfolioRepository implements PortfolioRepository {
  constructor() {}
  getExperienceData(): ExperienceSectionItem[] {}
  getBlogData(): BlogSectionItem[] {}
  getAboutMeData(): AboutSectionItem[] {}
  getContactData(): ContactSectionItem[] {}
  getProjectsData(): ProjectSectionItem[] {}
}
