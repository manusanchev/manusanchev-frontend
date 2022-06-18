import vueScroll from "vue-scrollto";
import { INavbarHeaderSectionItem } from "@src/types";

const useScrollToSection = (item: INavbarHeaderSectionItem | HTMLElement, offset: number = -100) => {
  vueScroll.scrollTo(`#${item.id}`, 400, { offset, easing: "smooth" });
};

export default useScrollToSection;
