import { IStreet } from "../i-dtos/idtos";

export class Street implements IStreet {
  private _number: number;
  private _name: string;


	constructor(number: number, name: string) {
		this._number = number;
		this._name = name;
	}


    /**
     * Getter number
     * @return {number}
     */
	public get number(): number {
		return this._number;
	}

    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Setter number
     * @param {number} value
     */
	public set number(value: number) {
		this._number = value;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}


}
