// * Open-Closed Principle
// * definition: "software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification";
// * conclusion: use abstract class or interface to make the code open for extension and closed for modification
// * purpose: to make the code more maintainable and flexible

// * Step2: separate regional logic by Strategy Pattern

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

// * now folder structure would be like:
// * - strategies
// *   - IRegionStrategy.ts
// *   - NA.strategy.ts
// *   - LA.strategy.ts
// * - main.ts

export const step2 = (region: "LA" | "NA") => {
  console.log(`doing logic`);

  // ! still need to know how to create the strategy
  let strategy: IRegionStrategy;
  switch (region) {
    case "LA":
      strategy = new LAStrategy();

      break;
    case "NA":
      strategy = new NAStrategy();

      break;
    default:
      throw new Error("Invalid region");
  }

  // * now we don't need to know the logic of each region
  strategy.doLogic();
};
