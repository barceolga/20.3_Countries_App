import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentational/flag-list.component.js';
import { getCountries, searchCountries, deleteCountry, deleteCountries, searchCapital, searchCurrency, searchLanguage } from '../actions/actions-countries.js';
import '../country.css';

class CountryFlagContainer extends Component {
      constructor(props) {
        super();
        this.state = {
          value: 'name'
        }

      }

      componentDidMount() {
            this.props.dispatch(getCountries());
            this.props.dispatch(searchCountries(''));
            this.props.dispatch(searchCapital(''));
            this.props.dispatch(searchCurrency(''));
            this.props.dispatch(searchLanguage(''));
      }

      searchBy(event) {
            let action;
            switch(this.state.value) {
              case 'name':
                  action= searchCountries;
              break;
              case 'capital':
                  action= searchCapital;
              break;
              case 'currency':
                  action= searchCurrency;
              break;
              case 'language':
                  action= searchLanguage;
              break;
            }

            this.props.dispatch(action(event.target.value));
      }

      deleteCountry(id){
            this.props.dispatch(deleteCountry(id));
      }

      deleteCountries(){
            this.props.dispatch(deleteCountries());
      }
      searchType(event){
            event.preventDefault();
            console.log(event.target.value);
            this.setState({
              value: event.target.value
            })
      }
      render() {
        return (
              <div>
                    <div className="search-bar">
                    <h1> Search by: </h1>
                    <select className="select-button" value={this.state.value} onChange={this.searchType.bind(this)}>
                        <option value="name">Name</option>
                        <option value="capital">Capital</option>
                        <option value="currency">Currency</option>
                        <option value="language">Language</option>
                    </select>
                        <div className="search text-center">

                              <input type="text" onChange={this.searchBy.bind(this)} />
                        </div>

                    </div>
                  <div className="remove-bar">
                        <button className="delete-button" onClick={this.deleteCountries.bind(this)}>Remove all</button>
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
