// * Open-Closed Principle
// * 開放封閉原則
// * 定義: "軟體中的物件(類別、模組、函式等等)應該可以擴展，但是不可以修改"
// * 總結: 使用抽象類別或介面來使程式碼對擴展開放，對修改封閉。
// * 目的： 增加程式碼的可擴展性，降低程式碼的維護成本

// * Step2: 引入Strategy Pattern來拆分職責，讓程式碼更容易擴展

// * 透過實作 RegionStrategy 來拆分不同區域的邏輯
// * 常見的資料夾結構:
// * - strategies
// *   - IRegionStrategy.ts
// *   - LA.strategy.ts
// *   - NA.strategy.ts
// *   - ...
// * - main.ts
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

export const step2 = (region: "LA" | "NA") => {
  console.log(`doing logic`);

  // ! 現在仍需知道如何在這裡取得對應的strategy
  let strategy: IRegionStrategy;
  switch (region) {
    case "LA":
      strategy = new LAStrategy();

      break;
    case "NA":
      strategy = new NAStrategy();

      break;
    default:
      throw new Error("Invalid region");
  }

  // * 現在只需要知道要執行哪個邏輯，不需要知道邏輯內容
  strategy.doLogic();
};
