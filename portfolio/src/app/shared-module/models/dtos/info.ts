import { IInfo } from "../i-dtos/idtos";

export class Info implements IInfo{
  private _seed: string;
  private _results: number;
  private _page: number;
  private _version: string;


	constructor(seed: string, results: number, page: number, version: string) {
		this._seed = seed;
		this._results = results;
		this._page = page;
		this._version = version;
	}


    /**
     * Getter seed
     * @return {string}
     */
	public get seed(): string {
		return this._seed;
	}

    /**
     * Getter results
     * @return {number}
     */
	public get results(): number {
		return this._results;
	}

    /**
     * Getter page
     * @return {number}
     */
	public get page(): number {
		return this._page;
	}

    /**
     * Getter version
     * @return {string}
     */
	public get version(): string {
		return this._version;
	}

    /**
     * Setter seed
     * @param {string} value
     */
	public set seed(value: string) {
		this._seed = value;
	}

    /**
     * Setter results
     * @param {number} value
     */
	public set results(value: number) {
		this._results = value;
	}

    /**
     * Setter page
     * @param {number} value
     */
	public set page(value: number) {
		this._page = value;
	}

    /**
     * Setter version
     * @param {string} value
     */
	public set version(value: string) {
		this._version = value;
	}


}
