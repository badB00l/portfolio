import { IApi } from "./iapi";

export interface IEnv {
  production: boolean;
  SERVER_BASE_PATH: string;
  configurations: {
    api: IApi;
  }
}
