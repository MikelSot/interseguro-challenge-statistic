export interface Response {
  code?: string
  message?: string
}

export type Responses = Response[]

export interface MessageResponse {
  data?: unknown
  errors?: Responses
  messages?: Responses
}
