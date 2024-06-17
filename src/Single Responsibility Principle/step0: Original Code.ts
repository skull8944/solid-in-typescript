// * Single Responsibility Principle
// * definition: "Each class in your system should have only one responsibility."
// * conclusion: "separate by function, class, module, package, etc."
// * purpose: "to make the software easier to implement and prevent bugs"

// ! Single Responsibility Principle should apply to diff scope based on the context
// ! Ex: separate by function, class, module, package, etc.

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

    // ! uploadImage suppose to be another domain service
    account.imageUrl = await this.uploadImage(img);

    await this.dao.save(account);
  }
}
