import { ICoordinates } from "../i-dtos/idtos";

export class Coordinates implements ICoordinates{
  private _latitude: string;
  private _longitude: string;


	constructor(latitude: string, longitude: string) {
    this._latitude = latitude;
    this._longitude = longitude;
	}

    /**
     * Getter latitude
     * @return {string}
     */
	public get latitude(): string {
		return this._latitude;
	}

    /**
     * Setter latitude
     * @param {string} value
     */
	public set latitude(value: string) {
		this._latitude = value;
	}

    /**
     * Getter longitude
     * @return {string}
     */
	public get longitude(): string {
		return this._longitude;
	}

    /**
     * Setter longitude
     * @param {string} value
     */
	public set longitude(value: string) {
		this._longitude = value;
	}

}
