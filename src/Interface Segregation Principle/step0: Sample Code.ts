// * Interface Segregation Principle
// * 介面隔離原則
// * 定義: "一個客戶端不應該被迫實作它不使用的介面，或者說用戶端不應該強迫依賴它不使用的方法"
// * 總結: 將大型介面拆分成更小、更具體的介面，這樣客戶端只需要知道他們相對應的方法
// * 目的: 避免客戶端依賴它們不使用的方法，減少不必要的複雜度

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
  // ! RD 不應該可以 codeReview
  rd.codeReview();

  tl.code();
  tl.codeReview();
};
