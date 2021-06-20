import axios, { AxiosInstance } from "axios"
import { JobEndpoint } from "./endpoints"
import { ApiEndpoint } from "./api-endpoint"

const API_URL = 'https://ioniconf-2021-jobs.herokuapp.com/'; // move to env file


/**
 * Manages all requests to the API.
 */
export class ApiService {
  private axiosInstance: AxiosInstance

  endpoints = new Map<any, ApiEndpoint>()

  constructor() {
    this.setup();
  }

  /**
   * Sets up the API.  This will be called during the bootstrapping
   * sequence and will happen before the first React component
   * is mounted. So keep it light.
   *
   */
  setup() {
    this.axiosInstance = axios.create({
      baseURL: API_URL,
      timeout: 5000,
      headers: {
        Accept: "application/json",
      },
    })
  }

  public clientWithoutAuth(): AxiosInstance {
    return this.axiosInstance;
  }

  public get job(): JobEndpoint {
    return this.getEndpoint(JobEndpoint)
  }

  private getEndpoint<T extends ApiEndpoint>(Type: { new (api: ApiService): T }): T {
    let instance: T = this.endpoints.get(Type) as T
    if (!instance) {
      instance = new Type(this)
      this.endpoints.set(Type, instance)
    }
    return instance
  }
}

export const apiService = new ApiService();
