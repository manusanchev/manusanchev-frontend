import {createContainer, AwilixContainer, asClass, Lifetime, InjectionMode} from "awilix";
import PortfolioService from "@services/portfolio/PortfolioService";

class Container {
  container!: AwilixContainer;

  constructor() {
    this.container = createContainer({
      injectionMode: InjectionMode.PROXY,
    });
    this.registerServices();
  }

  registerServices() {
    this.container.register({
      portfolioService: asClass(PortfolioService, { lifetime: Lifetime.SINGLETON }),
    });
  }

  getContainerInstance() {
    return this.container;
  }
}

export default Container;
