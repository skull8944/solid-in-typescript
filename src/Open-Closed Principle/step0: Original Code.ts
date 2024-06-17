// * Open-Closed Principle
// * definition: "software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification";
// * purpose: to make the code more maintainable and flexible
// * conclusion: use abstract class or interface to make the code open for extension and closed for modification

export const step0 = (region: "LA" | "NA") => {
  console.log(`doing logic`);

  switch (region) {
    case "LA":
      console.log(`LA logic`);
      break;
    case "NA":
      console.log(`NA logic`);
      break;
    default:
      throw new Error("Invalid region");
  }
};
