// * Dependency Inversion Principle
// * definition: "high-level modules should not depend on low-level modules. Both should depend on abstractions";
// *             "abstractions should not depend on details. Details should depend on abstractions."
// * purpose: to make your architecture more flexible

// ! step1: Extract Interface to make it more flexible

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

export const step1 = () => {
  const computer = new Computer();
  const laptop = new Laptop();
  const tablet = new Tablet();
  const programmer = new Programmer();

  // ! Programmer should not depend on low-level module Computer, Laptop, Tablet
  programmer.code(computer);
  programmer.code(laptop);
  programmer.code(tablet);
};
