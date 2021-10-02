import { ICoordinates, ILocation, IStreet, ITimezone } from "../i-dtos/idtos";

export class Location implements ILocation{
  private _street: IStreet;
  private _city: string;
  private _state: string;
  private _country: string;
  private _postcode: number;
  private _coordinates: ICoordinates;
  private _timezone: ITimezone;


	constructor(street: IStreet, city: string, state: string, country: string, postcode: number, coordinates: ICoordinates, timezone: ITimezone) {
		this._street = street;
		this._city = city;
		this._state = state;
		this._country = country;
		this._postcode = postcode;
		this._coordinates = coordinates;
		this._timezone = timezone;
	}


    /**
     * Getter street
     * @return {IStreet}
     */
	public get street(): IStreet {
		return this._street;
	}

    /**
     * Getter city
     * @return {string}
     */
	public get city(): string {
		return this._city;
	}

    /**
     * Getter state
     * @return {string}
     */
	public get state(): string {
		return this._state;
	}

    /**
     * Getter country
     * @return {string}
     */
	public get country(): string {
		return this._country;
	}

    /**
     * Getter postcode
     * @return {number}
     */
	public get postcode(): number {
		return this._postcode;
	}

    /**
     * Getter coordinates
     * @return {ICoordinates}
     */
	public get coordinates(): ICoordinates {
		return this._coordinates;
	}

    /**
     * Getter timezone
     * @return {ITimezone}
     */
	public get timezone(): ITimezone {
		return this._timezone;
	}

    /**
     * Setter street
     * @param {IStreet} value
     */
	public set street(value: IStreet) {
		this._street = value;
	}

    /**
     * Setter city
     * @param {string} value
     */
	public set city(value: string) {
		this._city = value;
	}

    /**
     * Setter state
     * @param {string} value
     */
	public set state(value: string) {
		this._state = value;
	}

    /**
     * Setter country
     * @param {string} value
     */
	public set country(value: string) {
		this._country = value;
	}

    /**
     * Setter postcode
     * @param {number} value
     */
	public set postcode(value: number) {
		this._postcode = value;
	}

    /**
     * Setter coordinates
     * @param {ICoordinates} value
     */
	public set coordinates(value: ICoordinates) {
		this._coordinates = value;
	}

    /**
     * Setter timezone
     * @param {ITimezone} value
     */
	public set timezone(value: ITimezone) {
		this._timezone = value;
	}


}
