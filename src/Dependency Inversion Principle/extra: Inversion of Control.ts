// * Inversion of Control
// * 反轉控制
// * 定義: "一種設計原則，其中對象創建和程序流程的控制被反轉到容器或框架";
// * 總結: 不要自己new instance，讓容器或框架來創建instance
// * 目的: 讓架構更具彈性，不用知道instance是如何創建的，只需要知道如何使用
// * 為什麼符合DIP: 因為對象創建的控制被反轉到容器或框架，所以高階模組不再依賴於低階模組，而是依賴於容器或框架

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
    // * 透過container來解析DB實例
    this.db = container.resolve(DB);
  }

  test() {
    this.db.query();
  }
}

class Service {
  private readonly dao: Dao;
  constructor() {
    // * 透過container來解析Dao實例
    this.dao = container.resolve(Dao);
  }

  test() {
    this.dao.test();
  }
}

class Controller {
  private readonly service: Service;
  constructor() {
    // * 透過container來解析Service實例
    this.service = container.resolve(Service);
  }

  test() {
    this.service.test();
  }
}

// * 透過container來註冊各個class
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
