// * Dependency Inversion Principle
// * 依賴反轉原則
// * 定義: "高階模組不應該依賴於低階模組，兩者都應該依賴於抽象，抽象不應該依賴於細節，細節應該依賴於抽象"
// * 總結: 透過抽象來減少模組之間的耦合度
// * 目的: 讓架構更具彈性，容易擴展和維護

// ! step2: 使用Factory Pattern來建立物件實例

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

// * 使用Factory Pattern來建立物件實例，避免直接使用new來建立物件，減少實作個別物件於主要程式碼中，提高程式碼的可讀性、耦合度、維護性
export class ProgrammableFactory {
  static getProgrammable(type: string) {
    switch (type) {
      case "computer":
        return new Computer();
      case "laptop":
        return new Laptop();
      case "tablet":
        return new Tablet();
      default:
        throw new Error("Invalid type");
    }
  }
}

export const step2 = () => {
  const programmer = new Programmer();

  // ! 透過Factory Pattern來建立不同的Programmable物件，而不用知道Computer, Laptop, Tablet的實作細節
  const computer = ProgrammableFactory.getProgrammable("computer");
  const laptop = ProgrammableFactory.getProgrammable("laptop");
  const tablet = ProgrammableFactory.getProgrammable("tablet");

  programmer.code(computer);
  programmer.code(laptop);
  programmer.code(tablet);
};
