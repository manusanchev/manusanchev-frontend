import vueScroll from "vue-scrollto";
import { NavbarItem } from "@src/services/portfolio/types/NavbarItemsData";

const useScrollToSection = (item: NavbarItem | HTMLElement, offset: number = -100) => {
  vueScroll.scrollTo(`#${item.id}`, 400, { offset, easing: "smooth" });
};

export default useScrollToSection;
