import { ApiService } from "./api.service"
import {AxiosInstance} from "axios";

export class ApiEndpoint {
  constructor(protected api: ApiService) {}

  public client(): AxiosInstance {
    return this.api.clientWithoutAuth();
  }
}
