// * Dependency Inversion Principle
// * definition: "high-level modules should not depend on low-level modules. Both should depend on abstractions";
// *             "abstractions should not depend on details. Details should depend on abstractions."
// * purpose: to make your architecture more flexible

// ! step2: using Factory Pattern to create instance

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
  // ! now only depend on IProgrammable interface
  code(device: IProgrammable) {
    device.coding();
  }
}

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

  // ! use Factory Pattern to create instance
  const computer = ProgrammableFactory.getProgrammable("computer");
  const laptop = ProgrammableFactory.getProgrammable("laptop");
  const tablet = ProgrammableFactory.getProgrammable("tablet");

  programmer.code(computer);
  programmer.code(laptop);
  programmer.code(tablet);
};
