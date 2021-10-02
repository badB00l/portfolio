import { IID } from "../i-dtos/idtos";

export class ID implements IID{
  private _name: string;
  private _value: null;


	constructor(name: string, value: null) {
		this._name = name;
		this._value = value;
	}


    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Getter value
     * @return {null}
     */
	public get value(): null {
		return this._value;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Setter value
     * @param {null} value
     */
	public set value(value: null) {
		this._value = value;
	}


}
