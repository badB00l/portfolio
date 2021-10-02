import { ITimezone } from "../i-dtos/idtos";

export class Timezone implements ITimezone {
  private _offset: string;
  private _description: string;


	constructor(offset: string, description: string) {
		this._offset = offset;
		this._description = description;
	}


    /**
     * Getter offset
     * @return {string}
     */
	public get offset(): string {
		return this._offset;
	}

    /**
     * Getter description
     * @return {string}
     */
	public get description(): string {
		return this._description;
	}

    /**
     * Setter offset
     * @param {string} value
     */
	public set offset(value: string) {
		this._offset = value;
	}

    /**
     * Setter description
     * @param {string} value
     */
	public set description(value: string) {
		this._description = value;
	}


}
