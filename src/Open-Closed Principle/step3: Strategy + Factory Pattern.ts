// * Open-Closed Principle
// * definition: "software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification";
// * conclusion: use abstract class or interface to make the code open for extension and closed for modification
// * purpose: to make the code more maintainable and flexible

// ! step3: separate regional logic by Factory + Strategy Pattern

interface IRegionStrategy {
  doLogic(): void;
}

class NAStrategy implements IRegionStrategy {
  doLogic(): void {
    console.log(`NA logic`);
  }
}

class LAStrategy implements IRegionStrategy {
  doLogic(): void {
    console.log(`LA logic`);
  }
}

// * Use Factory Pattern to create strategy
// * hide the logic of creating strategy inside the factory
class RegionStrategyFactory {
  static getRegionStrategy(region: "LA" | "NA") {
    switch (region) {
      case "LA":
        return new LAStrategy();
      case "NA":
        return new NAStrategy();
      default:
        throw new Error("Invalid region");
    }
  }
}

// * now folder structure would be like:
// * - strategies
// *   - IRegionStrategy.ts
// *   - NA.strategy.ts
// *   - LA.strategy.ts
// * - factories
// *   - RegionStrategy.factory.ts
// * - main.ts

export const step3 = (region: "LA" | "NA") => {
  console.log(`doing logic`);

  // * now we don't need to know how to create the strategy
  const strategy = RegionStrategyFactory.getRegionStrategy(region);
  // * now we don't need to know the logic of each region
  strategy.doLogic();
};
