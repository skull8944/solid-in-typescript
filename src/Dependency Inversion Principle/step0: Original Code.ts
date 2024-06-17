// * Dependency Inversion Principle
// * definition: "high-level modules should not depend on low-level modules. Both should depend on abstractions";
// *             "abstractions should not depend on details. Details should depend on abstractions."
// * purpose: to make your architecture more flexible

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

  // ! Programmer should not depend on low-level module Computer, Laptop, Tablet
  programmer.code(computer);
  programmer.code(laptop);
  programmer.code(tablet);
};
