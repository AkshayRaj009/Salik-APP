/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import I18n from 'redux-i18n'

import Routes from "../salik/Salik/routes"
import { Provider } from 'react-redux';
import configureStore from './Salik/src/Redux/store';
import translations from './Salik/src/constants/translations';


function App(): JSX.Element {



  const store = configureStore()
  return (
    <Provider store={store}>
      <I18n translations={translations} initialLang="ar">
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </I18n>


    </Provider>

  );
}


export default App;
