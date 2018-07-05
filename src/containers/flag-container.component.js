import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentational/flag-list.component.js';
import { getCountries, searchCountries, deleteCountry, deleteCountries, searchCapital, searchCurrency, searchLanguage } from '../actions/actions-countries.js';
import '../country.css';

class CountryFlagContainer extends Component {
      constructor(props) {
          super(props);
      }

      componentDidMount() {
            this.props.dispatch(getCountries());
            this.props.dispatch(searchCountries(''));
            this.props.dispatch(searchCapital(''));
            this.props.dispatch(searchCurrency(''));
            this.props.dispatch(searchLanguage(''));
      }

      searchName(event) {
            this.props.dispatch(searchCountries(event.target.value));
      }
      searchCapital(event) {
            this.props.dispatch(searchCapital(event.target.value));
      }
      searchCurrency(event) {
            this.props.dispatch(searchCurrency(event.target.value));
      }
      searchLanguage(event) {
            this.props.dispatch(searchLanguage(event.target.value));
      }

      deleteCountry(id){
            this.props.dispatch(deleteCountry(id));
      }

      deleteCountries(){
            this.props.dispatch(deleteCountries());
      }
      render() {
        return (
              <div>
                    <div className="search-bar">
                    <h1> Search by: </h1>
                        <div className="search text-center">
                              <h3>Name</h3>
                              <input type="text" onChange={this.searchName.bind(this)} />
                        </div>
                        <div className="search text-center">
                              <h3>Capital</h3>
                              <input type="text" onChange={this.searchCapital.bind(this)} />
                        </div>
                        <div className="search text-center">
                              <h3>Currency</h3>
                              <input type="text" onChange={this.searchCurrency.bind(this)} />
                        </div>
                        <div className="search text-center">
                              <h3>Language</h3>
                              <input type="text" onChange={this.searchLanguage.bind(this)} />
                        </div>
                    </div>
                  <div>
                        <button className="delete-button" onClick={this.deleteCountries.bind(this)}>REMOVE ALL</button>
                  </div>
                  <CountryFlagList countries={this.props.visibleCountries} deleteCountry={this.deleteCountry.bind(this)} />
              </div>
        )
      }
}

const mapStateToProps = function (store) {
  return {
        countries: store.countriesReducer.countries,
        visibleCountries: store.countriesReducer.visibleCountries
  };
};

export default connect(mapStateToProps)(CountryFlagContainer);
