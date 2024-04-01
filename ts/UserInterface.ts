export interface BasicUserInfo {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
}

export interface User extends BasicUserInfo {
    address: Address;
    company: Company;
}

export interface GeoLocation {
    lat: string;
    lng: string;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: GeoLocation;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}