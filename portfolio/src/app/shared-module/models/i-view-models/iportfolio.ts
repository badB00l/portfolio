import { IViewDomain } from "./iviewdomain";

export interface IPortfolio extends IViewDomain {
  name?: string;
  surname?: string;
  title?: string;
  email?: string;
  phoneNumber?: string;
  birthDate?: Date;
  password?: string;
}
