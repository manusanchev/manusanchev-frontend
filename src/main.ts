import App from "./App.vue";
import { ViteSSG } from "vite-ssg/single-page";
import "@src/assets/style/index.css";
import { Api } from "@src/api/Api";
import { IApi, SectionNameData } from "@src/types";

export const createApp = ViteSSG(App, (context) => {
  const api: IApi = new Api();
  context.app.provide(SectionNameData.experienceSectionData, api.fetchExperienceData());
  context.app.provide(SectionNameData.aboutSectionData, api.fetchAboutMeData());
  context.app.provide(SectionNameData.headerSectionData, api.fetchNavbarData());
  context.app.provide(SectionNameData.projectsSectionData, api.fetchProjectsData());
});
