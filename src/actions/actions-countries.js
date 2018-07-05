export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRY = 'GET_COUNTRY';
export const DELETE_COUNTRY = 'DELETE_COUNTRY';
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
export const SEARCH_CAPITAL = 'SEARCH_CAPITAL';
export const SEARCH_CURRENCY = 'SEARCH_CURRENCY';
export const SEARCH_LANGUAGE = 'SEARCH_LANGUAGE';
export const SET_CONTINTENT ='SET_CONTINTENT';
export const DELETE_COUNTRIES = 'DELETE_COUNTRIES';

export function getCountries() {
  return {
    type: GET_COUNTRIES
  }
}

export function deleteCountry(id) {
  return {
    type: DELETE_COUNTRY,
    id
  }
}

export function getCountry(id) {
  return {
    type: GET_COUNTRY,
    id
  }
}

export function searchCountries(searchText) {
  return {
    type: SEARCH_COUNTRIES,
    searchText
  }
}
export function searchCapital (searchText) {
  return {
    type: SEARCH_CAPITAL,
    searchText
  }
}
export function searchCurrency(searchText) {
  return {
    type: SEARCH_CURRENCY,
    searchText
  }
}
export function searchLanguage(searchText) {
  return {
    type: SEARCH_LANGUAGE,
    searchText
  }
}

export function setContinent(name) {
  return {
    type: SET_CONTINTENT,
    name,
  }
}

export function deleteCountries() {
  return {
    type: DELETE_COUNTRIES
  }
}
