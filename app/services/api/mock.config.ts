export enum Method {
  GET = "GET",
  POST = "POST",
  DELETE = "DELETE",
  PATCH = "PATCH",
  PUT = "PUT",
}

export interface MockConfig {
  path: RegExp | string
  file?: string
  method?: Method
  payload?: any
  feature?: string
  statusCode?: number
}

// const getMockData = (path: string) => {
//   if (!__DEV__) return {}
//   return require("../../../assets/mock/" + path)
// }

export const MOCK_CONFIG: MockConfig[] = [
  {
    path: "customer/search",
    file: require("../../../assets/mock/customer/search.json"),
  },
  {
    path: "policies",
    file: require("../../../assets/mock/policy/policies.json"),
  },
  {
    path: "claims",
    file: require("../../../assets/mock/claim/claims.json"),
  },
]
