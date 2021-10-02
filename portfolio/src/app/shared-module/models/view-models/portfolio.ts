import { IPortfolio } from "../i-view-models/iportfolio";

export class Portfolio implements IPortfolio{
  private _name?: string;
  private _surname?: string;
  private _title?: string;
  private _email?: string;
  private _phoneNumber?: string;
  private _birthDate?: Date;
  private _password?: string;
  private _backgroundPicUrl?: string;
  private _thumbnailPicUrl?: string;


	constructor(name?: string,
              surname?: string,
              title?: string,
              email?: string,
              phoneNumber?: string,
              birthDate?: Date,
              password?: string,
              backgroundPicUrl?: string,
              thumbnailPicUrl?: string) {
		this._name = name;
		this._surname = surname;
		this._title = title;
		this._email = email;
		this._phoneNumber = phoneNumber;
		this._birthDate = birthDate;
		this._password = password;
    this._backgroundPicUrl = backgroundPicUrl;
    this._thumbnailPicUrl = thumbnailPicUrl;
	}


    /**
     * Getter name
     * @return {string | undefined }
     */
	public get name(): string | undefined {
		return this._name;
	}

    /**
     * Getter surname
     * @return {string | undefined }
     */
	public get surname(): string | undefined {
		return this._surname;
	}

    /**
     * Getter title
     * @return {string | undefined }
     */
	public get title(): string | undefined  {
		return this._title;
	}

    /**
     * Getter email
     * @return {string | undefined }
     */
	public get email(): string | undefined  {
		return this._email;
	}

    /**
     * Getter phoneNumber
     * @return {string | undefined }
     */
	public get phoneNumber(): string | undefined  {
		return this._phoneNumber;
	}

    /**
     * Getter birthDate
     * @return {Date}
     */
	public get birthDate(): Date | undefined{
		return this._birthDate;
	}

    /**
     * Getter password
     * @return {string | undefined}
     */
	public get password(): string | undefined  {
		return this._password;
	}

    /**
       * Getter backgroundPicUrl
       * @return {string | undefined}
       */
	public get backgroundPicUrl(): string | undefined  {
		return this._backgroundPicUrl;
	}

   /**
       * Getter thumbnailPicUrl
       * @return {string | undefined}
       */
	public get thumbnailPicUrl(): string | undefined  {
		return this._thumbnailPicUrl;
	}

    /**
     * Setter name
     * @param {string | undefined } value
     */
	public set name(value: string | undefined) {
		this._name = value;
	}

    /**
     * Setter surname
     * @param {string | undefined } value
     */
	public set surname(value: string | undefined ) {
		this._surname = value;
	}

    /**
     * Setter title
     * @param {string | undefined } value
     */
	public set title(value: string | undefined ) {
		this._title = value;
	}

    /**
     * Setter email
     * @param {string | undefined } value
     */
	public set email(value: string | undefined ) {
		this._email = value;
	}

    /**
     * Setter phoneNumber
     * @param {string | undefined } value
     */
	public set phoneNumber(value: string | undefined ) {
		this._phoneNumber = value;
	}

    /**
     * Setter birthDate
     * @param {Date | undefined} value
     */
	public set birthDate(value: Date | undefined) {
		this._birthDate = value;
	}

    /**
     * Setter password
     * @param {string | undefined} value
     */
	public set password(value: string | undefined ) {
		this._password = value;
	}

    /**
   * Setter backgroundPicUrl
   * @param {string | undefined} value
   */
	public set backgroundPicUrl(value: string | undefined ) {
		this._backgroundPicUrl = value;
	}

      /**
   * Setter thumbnailPicUrl
   * @param {string | undefined} value
   */
	public set thumbnailPicUrl(value: string | undefined ) {
		this._thumbnailPicUrl = value;
	}

}
