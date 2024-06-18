// * Dependency Injection
// * definition: a design pattern that implements the Dependency Inversion Principle, where the dependencies of a class are injected from the outside
// * conclusion: Dependency Injection is a way to implement the Dependency Inversion Principle
// * purpose: to make your architecture more flexible
// * why it can obey DIP: because the dependencies are injected from the outside, so the high-level module does not depend on the low-level module

import { container, injectable } from "tsyringe";

@injectable()
export class DB {
  query() {
    console.log("querying...");
  }
}

@injectable()
export class Dao {
  // * using constructor injection
  constructor(private readonly db: DB) {}

  test() {
    this.db.query();
  }
}

@injectable()
export class Service {
  // * using constructor injection
  constructor(private readonly dao: Dao) {}

  test() {
    this.dao.test();
  }
}

@injectable()
export class Controller {
  // * using constructor injection
  constructor(private readonly service: Service) {}

  test() {
    this.service.test();
  }
}

// request -> Controller -> Service -> Dao -> DB
export const DI = () => {
  const controller = container.resolve(Controller);

  // querying...
  controller.test();
}