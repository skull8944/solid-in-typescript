// * Dependency Inversion Principle
// * 依賴反轉原則
// * 定義: "高階模組不應該依賴於低階模組，兩者都應該依賴於抽象，抽象不應該依賴於細節，細節應該依賴於抽象"
// * 總結: 透過抽象來減少模組之間的耦合度
// * 目的: 讓架構更具彈性，容易擴展和維護

export class Computer {
  name: string = "Computer";

  coding() {
    console.log(`using ${this.name} to code...`);
  }
}

export class Laptop {
  name: string = "Laptop";

  coding() {
    console.log(`using ${this.name} to code...`);
  }
}

export class Tablet {
  name: string = "Tablet";

  coding() {
    console.log(`using ${this.name} to code...`);
  }
}

export class Programmer {
  code(device: Computer | Laptop | Tablet) {
    device.coding();
  }
}

export const step0 = () => {
  const computer = new Computer();
  const laptop = new Laptop();
  const tablet = new Tablet();
  const programmer = new Programmer();

  // ! Programmer不應該依賴於低階模組Computer, Laptop, Tablet
  programmer.code(computer);
  programmer.code(laptop);
  programmer.code(tablet);
};
