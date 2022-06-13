import vueScroll from "vue-scrollto";
import { INavbarHeaderSectionItem } from "@src/types";

const useScrollToSection = (item: INavbarHeaderSectionItem) => {
  vueScroll.scrollTo(`#${item.id}`, 100, { offset: -100, easing: "ease-in" });
};

export default useScrollToSection;
