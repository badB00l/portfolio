import { ILocation, ITimezone } from "../i-dtos/idtos";
import { Coordinates } from "./coordinates";
import { Street } from "./street";

export class Location implements ILocation{
  private _street: Street;
  private _city: string;
  private _state: string;
  private _country: string;
  private _postcode: number;
  private _coordinates: Coordinates;
  private _timezone: ITimezone;


	constructor(street: Street, city: string, state: string, country: string, postcode: number, coordinates: Coordinates, timezone: ITimezone) {
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
     * @return {Street}
     */
	public get street(): Street {
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
     * @return {Coordinates}
     */
	public get coordinates(): Coordinates {
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
     * @param {Street} value
     */
	public set street(value: Street) {
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
     * @param {Coordinates} value
     */
	public set coordinates(value: Coordinates) {
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
