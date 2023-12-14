export interface RegByEmailResponse {
  result: boolean;
  data: {
    password: string;
  };
  error: {
    phone: string[];
    rules1: string[];
    login: string[];
    name: string[];
  }
}
