/** @format */

export interface City {
  id: string;
  value: string;
  additionalValue?: any;
  isSelected: boolean;
  name: string;
}

export interface State {
  id: string;
  value: string;
  additionalValue?: any;
  isSelected: boolean;
  name: string;
}

export interface Country {
  id: string;
  value: string;
  image: string;
  name: string;
  isSelected: boolean;
  additionalValue: string;
  cities: City[];
  states: State[];
}

export interface TimeZone {
  id: string;
  value: string;
  additionalValue?: any;
  isSelected: boolean;
  name: string;
}

export interface BusinessType {
  id: string;
  value: string;
  additionalValue?: any;
  isSelected: boolean;
  name: string;
}

export interface RootObject {
  countries: Country[];
  timeZones: TimeZone[];
  businessTypes: BusinessType[];
}
export interface LucapayInterface {
  ContactName: string;
  ContactNumber: string;
  BusinessEmailAdress: string;
  ABNNumber: string;
  AccountingSoftWare: string;
  ChannelPlatForm?: string;
}
