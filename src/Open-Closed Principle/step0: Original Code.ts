// * Open-Closed Principle
// * 開放封閉原則
// * 定義: "軟體中的物件(類別、模組、函式等等)應該可以擴展，但是不可以修改"
// * 總結: 使用抽象類別或介面來使程式碼對擴展開放，對修改封閉。
// * 目的： 增加程式碼的可擴展性，降低程式碼的維護成本

export const step0 = (region: "LA" | "NA") => {
  console.log(`doing logic`);

  switch (region) {
    case "LA":
      console.log(`LA logic`);
      break;
    case "NA":
      console.log(`NA logic`);
      break;
    default:
      throw new Error("Invalid region");
  }
};
