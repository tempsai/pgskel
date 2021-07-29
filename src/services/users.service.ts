import BaseService from "./base.service";

export default class UserService extends BaseService {
  CURRENT_PATH: string;

  constructor() {
    super();
    this.CURRENT_PATH = "users";
  }

  async getUsers() {
    return this.request("GET", this.CURRENT_PATH);
  }

  async getUserById(id: string) {
    return this.request("GET", this.CURRENT_PATH + id);
  }
}
