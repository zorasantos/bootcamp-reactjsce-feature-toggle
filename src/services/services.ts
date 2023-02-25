import { api } from "./api";

const baseURL = process.env.REACT_APP_PUBLIC_API_BASE_URL;

export type CreateUserProps = {
  email: string;
  password: string;
};

export type LoginProps = {
  payload: {
    email: string;
    password: string;
  }
  path: string
};


export function createUser(payload: CreateUserProps) {
  return api.post(`${baseURL}/user`, payload);
}

export function loginUser({ payload, path }: LoginProps) {
  return api.post(`${baseURL}/${path}`, payload);
}
