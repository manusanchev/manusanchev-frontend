import vueScroll from "vue-scrollto";
import { INavbarHeaderSectionItem } from "@src/types";

const useScrollToSection = (item: INavbarHeaderSectionItem | HTMLElement, offset: number = -100) => {
  vueScroll.scrollTo(`#${item.id}`, 100, { offset, easing: "ease-in" });
};

export default useScrollToSection;
