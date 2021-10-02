import { IDob } from "../i-dtos/idtos";

export class Dob implements IDob{
  private _date: Date;
  private _age: number;


	constructor(date: Date, age: number) {
    this._date = date;
    this._age = age;
	}

    /**
     * Getter date
     * @return {Date}
     */
	public get date(): Date {
		return this._date;
	}

    /**
     * Getter age
     * @return {number}
     */
	public get age(): number {
		return this._age;
	}

    /**
     * Setter date
     * @param {Date} value
     */
	public set date(value: Date) {
		this._date = value;
	}

    /**
     * Setter age
     * @param {number} value
     */
	public set age(value: number) {
		this._age = value;
	}
}
