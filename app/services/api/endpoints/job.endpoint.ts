import { ApiEndpoint } from "../api-endpoint"
import {JobHttpResponse} from "../interfaces";

export class JobEndpoint extends ApiEndpoint {
  search(page: number = 1): Promise<any> {
    return this.client.get<JobHttpResponse[]>("jobs")
  }

  getById(jobId: string): Promise<any> {
    return this.client.get<JobHttpResponse[]>(`jobs/${jobId}/details`)
  }
}
