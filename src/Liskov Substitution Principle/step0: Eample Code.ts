// * Liskov Substitution Principle
// * definition: "objects of a superclass shall be replaceable with objects of its subclasses without breaking the application"
// * purpose: to prevent unexpected behavior when replacing a superclass object with a subclass object
// * conclusion: if a subclass can't replace a superclass object, then the inheritance relationship is wrong

class WistronEmployee {
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  id: string;
  name: string;
}

class RD extends WistronEmployee {
  constructor(id: string, name: string) {
    super(id, name);
  }
}

class TL extends WistronEmployee {
  constructor(id: string, name: string) {
    super(id, name);
  }
}

class OtherEmployee {
  name = "OtherEmployee";
}

const healthCheck = (employee: WistronEmployee) => {
  console.log(`${employee.name} is doing health check`);
};

const liskov = () => {
  const Cathy = new WistronEmployee("01", "Cathy");
  const Asce = new RD("02", "Asce");
  const Jay = new TL("03", "Jay");
  const Other = new OtherEmployee();

  // Cathy is doing health check
  healthCheck(Cathy);
  // Asce is doing health check
  healthCheck(Asce);
  // Jay is doing health check
  healthCheck(Jay);
  // ! Error: OtherEmployee is not type of WistronEmployee or not subtype of WistronEmployee
  healthCheck(Other);
};
