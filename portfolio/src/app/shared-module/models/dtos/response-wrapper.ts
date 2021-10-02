import { IResponseWrapper } from "../i-dtos/idtos";
import { Info } from "./info";
import { Result } from "./result";

export class ResponseWrapper implements IResponseWrapper {
  private _results: Result[];
  private _info: Info;


	constructor(results: Result[], info: Info) {
		this._results = results;
		this._info = info;
	}


    /**
     * Getter results
     * @return {Result[]}
     */
	public get results(): Result[] {
		return this._results;
	}

    /**
     * Getter info
     * @return {Info}
     */
	public get info(): Info {
		return this._info;
	}

    /**
     * Setter results
     * @param {Result[]} value
     */
	public set results(value: Result[]) {
		this._results = value;
	}

    /**
     * Setter info
     * @param {Info} value
     */
	public set info(value: Info) {
		this._info = value;
	}

}
