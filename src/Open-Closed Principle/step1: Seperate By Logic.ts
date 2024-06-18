// * Open-Closed Principle
// * definition: "software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification";
// * conclusion: use abstract class or interface to make the code open for extension and closed for modification
// * purpose: to make the code more maintainable and flexible

// * Step1: separate regional logic by function

// LA logic
const doLaLogic = () => {
  console.log(`LA logic`);
};

// NA logic
const doNaLogic = () => {
  console.log(`NA logic`);
};

export const step1 = (region: "LA" | "NA") => {
  console.log(`doing logic`);

  // * now if we want to add more regions, we just need to add more functions
  // ! but we still need to modify this function
  switch (region) {
    case "LA":
      doLaLogic();
      break;
    case "NA":
      doNaLogic();
      break;
    default:
      throw new Error("Invalid region");
  }
};
