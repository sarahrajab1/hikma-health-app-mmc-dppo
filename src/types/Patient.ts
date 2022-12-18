import { LanguageString } from "./LanguageString";

export interface Patient {
  id: string
  given_name: LanguageString
  surname: LanguageString
  date_of_birth: string
  country: LanguageString
  hometown: LanguageString
  sex: string
  phone: string
  camp: string
  locality: string
  city: string
  hai_village: string
  blok_no: string
  house_no: string
  occupation: string
  insurance: string
  private_insurance: string
  first_register_date: string
  id_number: string
  record_number: string
}

export interface NewPatient {
  id: string
  given_name: string
  surname: string
  date_of_birth: string
  country: string
  hometown: string
  sex: string
  phone: string
  locality: string
  city: string
  hai_village: string
  blok_no: string
  house_no: string
  occupation: string
  insurance: string
  private_insurance: string
  first_register_date: string
  id_number: string
  record_number: string
}