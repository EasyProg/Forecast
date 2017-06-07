import React, { Component } from 'react';
import '../App.css';
import {Provider} from 'react-redux';
import {fetchData} from '../actions/actions';
import configureStore from '../store/configureStore';
import FirstTabsComp from '../containers/FirstTabsComp';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
export const store = configureStore();
const link_day = 'http://api.apixu.com/v1/forecast.json?key=fe3ca5b09d1c4d03b7f220122170306&days=10&q=';
export const city = 'Kiev';
store.dispatch(fetchData(link_day + city));
export default class App extends Component {
  render() {
    return (
     <Provider store={store}>
      <div className="App">
        <MuiThemeProvider>
        <FirstTabsComp/>
        </MuiThemeProvider>
      </div>
     </Provider>
    );
  }
}