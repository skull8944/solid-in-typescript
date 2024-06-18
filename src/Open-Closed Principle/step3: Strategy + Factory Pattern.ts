// * Open-Closed Principle
// * 開放封閉原則
// * 定義: "軟體中的物件(類別、模組、函式等等)應該可以擴展，但是不可以修改"
// * 總結: 使用抽象類別或介面來使程式碼對擴展開放，對修改封閉。
// * 目的： 增加程式碼的可擴展性，降低程式碼的維護成本

// * step3: separate regional logic by Factory + Strategy Pattern

interface IRegionStrategy {
  doLogic(): void;
}

class NAStrategy implements IRegionStrategy {
  doLogic(): void {
    console.log(`NA logic`);
  }
}

class LAStrategy implements IRegionStrategy {
  doLogic(): void {
    console.log(`LA logic`);
  }
}

// * 透過 Factory Pattern 來建立不同Region的 Strategy
// * 避免直接使用new來建立物件，減少實作個別物件於主要程式碼中，提高程式碼的可讀性、耦合度、維護性
// * 常見的資料夾結構:
// * - strategies
// *   - IRegionStrategy.ts
// *   - LA.strategy.ts
// *   - NA.strategy.ts
// *   - ...
// * - factories
// *   - RegionStrategy.factory.ts
// * - main.ts
class RegionStrategyFactory {
  static getRegionStrategy(region: "LA" | "NA") {
    switch (region) {
      case "LA":
        return new LAStrategy();
      case "NA":
        return new NAStrategy();
      default:
        throw new Error("Invalid region");
    }
  }
}

export const step3 = (region: "LA" | "NA") => {
  console.log(`doing logic`);

  //  * 現在只需要透過factory取得對應的strategy，不需知道如何建立相對應的strategy
  const strategy = RegionStrategyFactory.getRegionStrategy(region);
  // * 現在只需要知道要執行哪個邏輯，不需要知道邏輯內容
  strategy.doLogic();
};
