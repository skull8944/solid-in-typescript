// * Interface Segregation Principle
// * definition: "a client should never be forced to implement an interface that it doesn't use or clients shouldn't be forced to depend on methods they do not use"
// * purpose: to prevent a class from implementing an interface that it doesn't use

export interface Engineer {
  code(): void;
  codeReview(): void;
}

export class ResearchAndDevelopment implements Engineer {
  code() {
    console.log("RD Coding...");
  }

  codeReview() {
    console.log("RD Code Reviewing...");
  }
}

export class TechLead implements Engineer {
  code() {
    console.log("TL Coding...");
  }

  codeReview() {
    console.log("TL Code Reviewing...");
  }
}

const step0 = () => {
  const rd = new ResearchAndDevelopment();
  const tl = new TechLead();

  rd.code();
  // ! RD should not be able to do code review
  rd.codeReview();

  tl.code();
  tl.codeReview();
};
