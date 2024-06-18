// * Dependency Injection
// * 依賴注入
// * 定義: 一種實現"依賴反轉原則"的設計模式，其中class的依賴關係從外部注入
// * 總結: 依賴注入是一種實現依賴反轉原則的方式，透過constructor或method注入依賴
// * 目的: 讓架構更具彈性，降低class之間的耦合度，提高程式碼的可讀性和可維護性
// * 為什麼符合DIP: 因為依賴是從外部注入的，所以高階模組不再依賴於低階模組

import { container, injectable } from "tsyringe";

@injectable()
export class DB {
  query() {
    console.log("querying...");
  }
}

@injectable()
export class Dao {
  // * 透過constructor injection來注入DB實例
  constructor(private readonly db: DB) {}

  test() {
    this.db.query();
  }
}

@injectable()
export class Service {
  // * 透過constructor injection來注入Dao實例
  constructor(private readonly dao: Dao) {}

  test() {
    this.dao.test();
  }
}

@injectable()
export class Controller {
  // * 透過constructor injection來注入Service實例
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