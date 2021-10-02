import { IPicture } from "../i-dtos/idtos";

export class Picture implements IPicture{
  private _large: string;
  private _medium: string;
  private _thumbnail: string;


	constructor(large: string, medium: string, thumbnail: string) {
		this._large = large;
		this._medium = medium;
		this._thumbnail = thumbnail;
	}


    /**
     * Getter large
     * @return {string}
     */
	public get large(): string {
		return this._large;
	}

    /**
     * Getter medium
     * @return {string}
     */
	public get medium(): string {
		return this._medium;
	}

    /**
     * Getter thumbnail
     * @return {string}
     */
	public get thumbnail(): string {
		return this._thumbnail;
	}

    /**
     * Setter large
     * @param {string} value
     */
	public set large(value: string) {
		this._large = value;
	}

    /**
     * Setter medium
     * @param {string} value
     */
	public set medium(value: string) {
		this._medium = value;
	}

    /**
     * Setter thumbnail
     * @param {string} value
     */
	public set thumbnail(value: string) {
		this._thumbnail = value;
	}

}
