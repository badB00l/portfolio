import { IName } from "../i-dtos/idtos";

export class Name implements IName{
  private _title: string;
  private _first: string;
  private _last: string;


	constructor(title: string, first: string, last: string) {
		this._title = title;
		this._first = first;
		this._last = last;
	}


    /**
     * Getter title
     * @return {string}
     */
	public get title(): string {
		return this._title;
	}

    /**
     * Getter first
     * @return {string}
     */
	public get first(): string {
		return this._first;
	}

    /**
     * Getter last
     * @return {string}
     */
	public get last(): string {
		return this._last;
	}

    /**
     * Setter title
     * @param {string} value
     */
	public set title(value: string) {
		this._title = value;
	}

    /**
     * Setter first
     * @param {string} value
     */
	public set first(value: string) {
		this._first = value;
	}

    /**
     * Setter last
     * @param {string} value
     */
	public set last(value: string) {
		this._last = value;
	}

}
