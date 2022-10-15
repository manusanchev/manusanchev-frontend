import * as awilix from "awilix";
import PortfolioService from "@src/services/portfolio/PortfolioService";

class Container {
  container!: awilix.AwilixContainer;

  constructor() {
    this.container = awilix.createContainer({
      injectionMode: awilix.InjectionMode.PROXY,
    });
    this.registerServices();
  }

  registerServices() {
    this.container.register({
      portfolioService: awilix.asClass(PortfolioService, { lifetime: awilix.Lifetime.SINGLETON }),
    });
  }

  getContainerInstance() {
    return this.container;
  }
}

export default Container;
