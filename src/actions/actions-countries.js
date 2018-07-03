export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRY = 'GET_COUNTRY';
export const DELETE_COUNTRY = 'DELETE_COUNTRY';
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
export const SET_CONTINTENT ='SET_CONTINTENT';

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
    type: GET_COUNTRIES,
    id
  }
}

export function searchCountries(searchText) {
  return {
    type: SEARCH_COUNTRIES,
    searchText
  }
}

export function setContintent(name) {
  return {
    type: SET_CONTINTENT,
    name
  }
}
