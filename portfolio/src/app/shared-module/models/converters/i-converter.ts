import { IDomain } from "../i-dtos/idtos";
import { IViewDomain } from "../i-view-models/iviewdomain";

export interface IConverter {
  modelToDto(dto: IViewDomain): IDomain;
  dtoToModel(dto: IDomain): IViewDomain;

}
