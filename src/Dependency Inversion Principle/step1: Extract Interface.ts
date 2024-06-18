// * Dependency Inversion Principle
// * 依賴反轉原則
// * 定義: "高階模組不應該依賴於低階模組，兩者都應該依賴於抽象，抽象不應該依賴於細節，細節應該依賴於抽象"
// * 總結: 透過抽象來減少模組之間的耦合度
// * 目的: 讓架構更具彈性，容易擴展和維護

// ! step1: 抽象出一個interface，讓高階模組(Programmer)不再依賴於低階模組(Computer, Laptop, Tablet)

export interface IProgrammable {
  coding(): void;
}

export class Computer implements IProgrammable {
  name: string = "Computer";

  coding() {
    console.log(`using ${this.name} to code...`);
  }
}

export class Laptop implements IProgrammable {
  name: string = "Laptop";

  coding() {
    console.log(`using ${this.name} to code...`);
  }
}

export class Tablet implements IProgrammable {
  name: string = "Tablet";

  coding() {
    console.log(`using ${this.name} to code...`);
  }
}

export class Programmer {
  // ! 現在只依賴於IProgrammable interface而不是具體的Computer, Laptop, Tablet
  code(device: IProgrammable) {
    device.coding();
  }
}

export const step1 = () => {
  const computer = new Computer();
  const laptop = new Laptop();
  const tablet = new Tablet();
  const programmer = new Programmer();

  programmer.code(computer);
  programmer.code(laptop);
  programmer.code(tablet);
};
