// * Single Responsibility Principle
// * 單一職責原則
// * 定義: "是指一個類別只負責一件事情"
// * 總結: 跟據不同類別來拆分職責
// * 目的: 降低耦合性，提高可讀性，可維護性，可擴展性

// ! 單一職責原則應該要根據不同的scope來拆分職責
// ! Ex: 根據class, function, module, package, project, service, domain, layer, ...

export class Account {
  constructor(id: string) {
    this.id = id;
  }

  id: string;

  imageUrl?: string;
}

export class AccountDao {
  async save(account: Account) {}
}

export class AccountService {
  constructor(private readonly dao: AccountDao) {}

  async uploadImage(img: File): Promise<string> {
    return Promise.resolve("image url");
  }

  async addAccount(body: { id: string; img: File }) {
    const { id, img } = body;
    const account = new Account(id);

    // ! uploadImage應該拉到共同處理檔案的service
    account.imageUrl = await this.uploadImage(img);

    await this.dao.save(account);
  }
}
