export interface IDomain {
}
export interface IResponseWrapper extends IDomain {
  results: Array<IResult>,
  info: IInfo
}
export interface IInfo extends IDomain {
  seed:    string;
  results: number;
  page:    number;
  version: string;
}

export interface IResult extends IDomain {
  gender:     string;
  name:       IName;
  location:   Location;
  email:      string;
  login:      ILogin;
  dob:        IDob;
  registered: IDob;
  phone:      string;
  cell:       string;
  id:         IID;
  picture:    IPicture;
  nat:        string;
}

export interface IDob extends IDomain {
  date: Date
  age:  number;
}

export interface IID extends IDomain {
  name:  string;
  value: null;
}

export interface ILocation extends IDomain {
  street:      IStreet;
  city:        string;
  state:       string;
  country:     string;
  postcode:    number;
  coordinates: ICoordinates;
  timezone:    ITimezone;
}

export interface ICoordinates extends IDomain {
  latitude:  string;
  longitude: string;
}

export interface IStreet extends IDomain {
  number: number;
  name:   string;
}

export interface ITimezone extends IDomain {
  offset:      string;
  description: string;
}

export interface ILogin extends IDomain {
  uuid:     string;
  username: string;
  password: string;
  salt:     string;
  md5:      string;
  sha1:     string;
  sha256:   string;
}

export interface IName extends IDomain {
  title: string;
  first: string;
  last:  string;
}

export interface IPicture extends IDomain {
  large:     string;
  medium:    string;
  thumbnail: string;
}
