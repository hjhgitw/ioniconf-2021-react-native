import { Api } from "./api"
import {AxiosInstance} from "axios";

export class ApiEndpoint {
  constructor(protected api: Api) {}

  protected get client(): AxiosInstance {
    return this.api.clientWithoutAuth();
  }

  // protected get authClient(): AxiosInstance {
  //   return this.api.clientWithAuth();
  // }
}
