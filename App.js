import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from './store/reducers';
import Home from './src/routes';

import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (  
    <Provider store={createStore(Reducers)}>
        <NavigationContainer>
            <Home/>
        </NavigationContainer>
    </Provider>
  );
}