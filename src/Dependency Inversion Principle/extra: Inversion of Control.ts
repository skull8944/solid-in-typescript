// * Inversion of Control
// * definition: "a design principle in which the control of object creation and program flow is inverted to a container or framework";
// * conclusion: don't new instance by yourself, let the container or framework to new instance
// * purpose: to make your architecture more flexible
// * why it can obey DIP: because the control of object creation is inverted to a container or framework, so the high-level module does not depend on the low-level module

import { container } from "tsyringe";

class DB {
  constructor() {}

  query() {
    console.log("querying...");
  }
}

class Dao {
  private readonly db: DB;
  constructor() {
    // * using container to resolve DB instance
    this.db = container.resolve(DB);
  }

  test() {
    this.db.query();
  }
}

class Service {
  private readonly dao: Dao;
  constructor() {
    // * using container to resolve Dao instance
    this.dao = container.resolve(Dao);
  }

  test() {
    this.dao.test();
  }
}

class Controller {
  private readonly service: Service;
  constructor() {
    // * using container to resolve Service instance
    this.service = container.resolve(Service);
  }

  test() {
    this.service.test();
  }
}

// * register all classes to container
container.register(DB, { useClass: DB });
container.register(Dao, { useClass: Dao });
container.register(Service, { useClass: Service });
container.register(Controller, { useClass: Controller });

// request -> Controller -> Service -> Dao -> DB
export const IoC = () => {
  const controller = container.resolve(Controller);

  // querying...
  controller.test();
};
