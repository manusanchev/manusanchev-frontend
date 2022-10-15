import { inject } from "vue";
import { IPortfolioService } from "@src/services/portfolio/types/IPortfolioService";

const usePortfolioService = () => {
  const container = inject<any>("container");
  const { portfolioService }: { portfolioService: IPortfolioService } = container;

  return portfolioService;
};

export default usePortfolioService;
