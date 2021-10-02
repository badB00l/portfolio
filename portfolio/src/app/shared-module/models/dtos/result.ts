import { IResult } from "../i-dtos/idtos";
import { Dob } from "./dob";
import { ID } from "./id";
import { Login } from "./login";
import { Name } from "./name";
import { Picture } from "./picture";
import { Location } from "./location";

export class Result extends Object implements IResult {
  private _gender: string;
  private _name: Name;
  private _location: Location;
  private _email: string;
  private _login: Login;
  private _dob: Dob;
  private _registered: Dob;
  private _phone: string;
  private _cell: string;
  private _id: ID;
  private _picture: Picture;
  private _nat: string;


	constructor(gender: string, name: Name, location: Location, email: string, login: Login, dob: Dob, registered: Dob, phone: string, cell: string, id: ID, picture: Picture, nat: string) {
    super();
    this._gender = gender;
		this._name = name;
		this._location = location;
		this._email = email;
		this._login = login;
		this._dob = dob;
		this._registered = registered;
		this._phone = phone;
		this._cell = cell;
		this._id = id;
		this._picture = picture;
		this._nat = nat;
	}


    /**
     * Getter gender
     * @return {string}
     */
	public get gender(): string {
		return this._gender;
	}

    /**
     * Getter name
     * @return {Name}
     */
	public get name(): Name {
		return this._name;
	}

    /**
     * Getter location
     * @return {Location}
     */
	public get location(): Location {
		return this._location;
	}

    /**
     * Getter email
     * @return {string}
     */
	public get email(): string {
		return this._email;
	}

    /**
     * Getter login
     * @return {Login}
     */
	public get login(): Login {
		return this._login;
	}

    /**
     * Getter dob
     * @return {Dob}
     */
	public get dob(): Dob {
		return this._dob;
	}

    /**
     * Getter registered
     * @return {Dob}
     */
	public get registered(): Dob {
		return this._registered;
	}

    /**
     * Getter phone
     * @return {string}
     */
	public get phone(): string {
		return this._phone;
	}

    /**
     * Getter cell
     * @return {string}
     */
	public get cell(): string {
		return this._cell;
	}

    /**
     * Getter id
     * @return {ID}
     */
	public get id(): ID {
		return this._id;
	}

    /**
     * Getter picture
     * @return {Picture}
     */
	public get picture(): Picture {
		return this._picture;
	}

    /**
     * Getter nat
     * @return {string}
     */
	public get nat(): string {
		return this._nat;
	}

    /**
     * Setter gender
     * @param {string} value
     */
	public set gender(value: string) {
		this._gender = value;
	}

    /**
     * Setter name
     * @param {Name} value
     */
	public set name(value: Name) {
		this._name = value;
	}

    /**
     * Setter location
     * @param {Location} value
     */
	public set location(value: Location) {
		this._location = value;
	}

    /**
     * Setter email
     * @param {string} value
     */
	public set email(value: string) {
		this._email = value;
	}

    /**
     * Setter login
     * @param {Login} value
     */
	public set login(value: Login) {
		this._login = value;
	}

    /**
     * Setter dob
     * @param {Dob} value
     */
	public set dob(value: Dob) {
		this._dob = value;
	}

    /**
     * Setter registered
     * @param {Dob} value
     */
	public set registered(value: Dob) {
		this._registered = value;
	}

    /**
     * Setter phone
     * @param {string} value
     */
	public set phone(value: string) {
		this._phone = value;
	}

    /**
     * Setter cell
     * @param {string} value
     */
	public set cell(value: string) {
		this._cell = value;
	}

    /**
     * Setter id
     * @param {ID} value
     */
	public set id(value: ID) {
		this._id = value;
	}

    /**
     * Setter picture
     * @param {Picture} value
     */
	public set picture(value: Picture) {
		this._picture = value;
	}

    /**
     * Setter nat
     * @param {string} value
     */
	public set nat(value: string) {
		this._nat = value;
	}

}
