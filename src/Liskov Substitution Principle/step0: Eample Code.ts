// * Liskov Substitution Principle
// * 里氏替換原則
// * 定義: "父類別的物件應該可以在不影響程式正確性的情況下被子類別的物件替換"
// * 總結: 如果子類別無法替換父類別的物件，那麼繼承關係可能有問題
// * 目的: 防止替換父類別的物件時發生意外行為，提高程式碼的可靠性

// * 父類別
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

  // ! Error: OtherEmployee不是WistronEmployee類別或其子類別
  healthCheck(Other);
};
