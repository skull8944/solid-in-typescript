// * Open-Closed Principle
// * definition: "software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification";
// * purpose: to make the code more maintainable and flexible
// * conclusion: use abstract class or interface to make the code open for extension and closed for modification

// ! Step2: separate regional logic by Strategy Pattern

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

export const step2 = (region: "LA" | "NA") => {
  console.log(`doing logic`);

  let strategy: RegionStrategy;
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

  strategy.doLogic();
};
