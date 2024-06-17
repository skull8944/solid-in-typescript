// * Open-Closed Principle
// * definition: "software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification";
// * conclusion: use abstract class or interface to make the code open for extension and closed for modification
// * purpose: to make the code more maintainable and flexible

// ! step3: separate regional logic by Factory + Strategy Pattern

interface RegionStrategy {
  doLogic(): void;
}

class NAStrategy implements RegionStrategy {
  doLogic(): void {
    console.log(`NA logic`);
  }
}

class LAStrategy implements RegionStrategy {
  doLogic(): void {
    console.log(`LA logic`);
  }
}

// Use Factory Pattern to create strategy
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

export const step3 = (region: "LA" | "NA") => {
  console.log(`doing logic`);

  const strategy = RegionStrategyFactory.getRegionStrategy(region);
  strategy.doLogic();
};
