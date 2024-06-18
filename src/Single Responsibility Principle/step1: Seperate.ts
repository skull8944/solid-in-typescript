// * Single Responsibility Principle
// * definition: "Each class in your system should have only one responsibility."
// * conclusion: "separate by function, class, module, package, etc."
// * purpose: "to make the software easier to implement and prevent bugs"

// ! Single Responsibility Principle should apply to diff scope based on the context
// ! Ex: separate by function, class, module, package, etc.

// * step1: separate by domain responsibility

class Account {
  constructor(id: string) {
    this.id = id;
  }

  id: string;

  imageUrl?: string;
}

class AccountDao {
  async save(account: Account) {}
}

class FileService {
  async uploadImage(img: File): Promise<string> {
    return Promise.resolve("image url");
  }
}

class AccountService {
  constructor(
    private readonly dao: AccountDao,
    private readonly fileService: FileService
  ) {}

  async addAccount(body: { id: string; img: File }) {
    const { id, img } = body;
    const account = new Account(id);

    // * now we don't need to write uploadImage logic here
    // * we just need to call the service
    account.imageUrl = await this.fileService.uploadImage(img);

    await this.dao.save(account);
  }
}
