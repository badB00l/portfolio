import { ILogin } from "../i-dtos/idtos";

export class Login implements ILogin{
  private _uuid: string;
  private _username: string;
  private _password: string;
  private _salt: string;
  private _md5: string;
  private _sha1: string;
  private _sha256: string;


	constructor(uuid: string, username: string, password: string, salt: string, md5: string, sha1: string, sha256: string) {
		this._uuid = uuid;
		this._username = username;
		this._password = password;
		this._salt = salt;
		this._md5 = md5;
		this._sha1 = sha1;
		this._sha256 = sha256;
	}


    /**
     * Getter uuid
     * @return {string}
     */
	public get uuid(): string {
		return this._uuid;
	}

    /**
     * Getter username
     * @return {string}
     */
	public get username(): string {
		return this._username;
	}

    /**
     * Getter password
     * @return {string}
     */
	public get password(): string {
		return this._password;
	}

    /**
     * Getter salt
     * @return {string}
     */
	public get salt(): string {
		return this._salt;
	}

    /**
     * Getter md5
     * @return {string}
     */
	public get md5(): string {
		return this._md5;
	}

    /**
     * Getter sha1
     * @return {string}
     */
	public get sha1(): string {
		return this._sha1;
	}

    /**
     * Getter sha256
     * @return {string}
     */
	public get sha256(): string {
		return this._sha256;
	}

    /**
     * Setter uuid
     * @param {string} value
     */
	public set uuid(value: string) {
		this._uuid = value;
	}

    /**
     * Setter username
     * @param {string} value
     */
	public set username(value: string) {
		this._username = value;
	}

    /**
     * Setter password
     * @param {string} value
     */
	public set password(value: string) {
		this._password = value;
	}

    /**
     * Setter salt
     * @param {string} value
     */
	public set salt(value: string) {
		this._salt = value;
	}

    /**
     * Setter md5
     * @param {string} value
     */
	public set md5(value: string) {
		this._md5 = value;
	}

    /**
     * Setter sha1
     * @param {string} value
     */
	public set sha1(value: string) {
		this._sha1 = value;
	}

    /**
     * Setter sha256
     * @param {string} value
     */
	public set sha256(value: string) {
		this._sha256 = value;
	}


}
