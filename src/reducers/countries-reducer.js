import { GET_COUNTRIES, GET_COUNTRY, SEARCH_COUNTRIES, SEARCH_CAPITAL, SEARCH_CURRENCY, SEARCH_LANGUAGE, DELETE_COUNTRY, SET_CONTINTENT, DELETE_COUNTRIES } from '../actions/actions-countries.js';
import countriesData from '../data/countries.json';

const initialState = {
  countries: countriesData,
  selectedCountry: {},
  visibleCountries: []
};

const countriesReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
            return Object.assign({}, state, {countries: state.countries});
    case GET_COUNTRY:
            const selectedCountry = state.countries.find(country => country.id === parseInt(action.id));
            return Object.assign({}, state, {selectedCountry});
    case SEARCH_COUNTRIES:
            const foundCountries = state.countries.filter(country => country.name.toLowerCase().includes(action.searchText.toLowerCase()));
            return Object.assign({}, state, {
              visibleCountries: foundCountries,
            });
    case SEARCH_LANGUAGE:
            const foundByLanguage = state.countries.filter(country => country.languages.toLowerCase().includes(action.searchText.toLowerCase()));
            return Object.assign({}, state, {
              visibleCountries: foundByLanguage
            });
    case SEARCH_CAPITAL:
            const foundByCapital = state.countries.filter(country => country.capital.toLowerCase().includes(action.searchText.toLowerCase()));
            return Object.assign({}, state, {
                visibleCountries: foundByCapital
            });
    case SEARCH_CURRENCY:
            const foundByCurrency = state.countries.filter(country => country.currency.toLowerCase().includes(action.searchText.toLowerCase()));
            return Object.assign({}, state, {
                visibleCountries: foundByCurrency
            });
    case DELETE_COUNTRY:
            const leftCountries = state.countries.filter(country => country.id !== parseInt(action.id));
            const leftVisibleCountries = state.visibleCountries.filter(country => country.id !== parseInt(action.id));
            return Object.assign({}, state, {countries: leftCountries, visibleCountries: leftVisibleCountries});
    case SET_CONTINTENT:
            const continentCountries = state.countries.filter(country => country.continent === action.name);
            return Object.assign({}, state, {visibleCountries: continentCountries});
    case DELETE_COUNTRIES:
            return Object.assign({}, state, {countries: [], visibleCountries: []});

    default:
            return state;
  }
}

export default countriesReducer;
