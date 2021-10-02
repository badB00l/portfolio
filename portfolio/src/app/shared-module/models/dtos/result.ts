import { IDob, IID, ILogin, IName, IPicture, IResult } from "../i-dtos/idtos";

export class Result implements IResult{
  private _gender: string;
  private _name: IName;
  private _location: Location;
  private _email: string;
  private _login: ILogin;
  private _dob: IDob;
  private _registered: IDob;
  private _phone: string;
  private _cell: string;
  private _id: IID;
  private _picture: IPicture;
  private _nat: string;


	constructor(gender: string, name: IName, location: Location, email: string, login: ILogin, dob: IDob, registered: IDob, phone: string, cell: string, id: IID, picture: IPicture, nat: string) {
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
     * @return {IName}
     */
	public get name(): IName {
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
     * @return {ILogin}
     */
	public get login(): ILogin {
		return this._login;
	}

    /**
     * Getter dob
     * @return {IDob}
     */
	public get dob(): IDob {
		return this._dob;
	}

    /**
     * Getter registered
     * @return {IDob}
     */
	public get registered(): IDob {
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
     * @return {IID}
     */
	public get id(): IID {
		return this._id;
	}

    /**
     * Getter picture
     * @return {IPicture}
     */
	public get picture(): IPicture {
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
     * @param {IName} value
     */
	public set name(value: IName) {
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
     * @param {ILogin} value
     */
	public set login(value: ILogin) {
		this._login = value;
	}

    /**
     * Setter dob
     * @param {IDob} value
     */
	public set dob(value: IDob) {
		this._dob = value;
	}

    /**
     * Setter registered
     * @param {IDob} value
     */
	public set registered(value: IDob) {
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
     * @param {IID} value
     */
	public set id(value: IID) {
		this._id = value;
	}

    /**
     * Setter picture
     * @param {IPicture} value
     */
	public set picture(value: IPicture) {
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
