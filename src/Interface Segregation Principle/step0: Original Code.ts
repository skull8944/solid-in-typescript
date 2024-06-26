// * Interface Segregation Principle
// * definition: "a client should never be forced to implement an interface that it doesn't use or clients shouldn't be forced to depend on methods they do not use"
// * conclusion: split large interfaces into smaller, more specific ones so that clients will only have to know about the methods that are of interest to them
// * purpose: to prevent a class from implementing an interface that it doesn't use

export interface IEngineer {
  code(): void;
  codeReview(): void;
}

export class ResearchAndDevelopment implements IEngineer {
  code() {
    console.log("RD Coding...");
  }

  codeReview() {
    console.log("RD Code Reviewing...");
  }
}

export class TechLead implements IEngineer {
  code() {
    console.log("TL Coding...");
  }

  codeReview() {
    console.log("TL Code Reviewing...");
  }
}

export const step0 = () => {
  const rd = new ResearchAndDevelopment();
  const tl = new TechLead();

  rd.code();
  // ! RD should not be able to do code review
  rd.codeReview();

  tl.code();
  tl.codeReview();
};
