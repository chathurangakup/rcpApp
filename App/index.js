import React from 'react';
import { Provider } from 'react-redux';
import {
   StatusBar
   
  } from 'react-native';
//import EStyleSheet from 'react-native-extended-stylesheet';
import { View,Text} from 'react-native';
import configureStore from '../App/components/redux/store';

 import Login from './components/screens/ConfirmRegistration';

 import Navigators from './components/navigators/Appnavigators';


 
const store = configureStore();

export default () =>
<Provider store={store}>
<View style={{ flex: 1 }}>
 {/* <GeneralStatusBarColor backgroundColor="#C7003B"
barStyle="light-content"/> */}

    <Navigators/>
    
   
    </View>
    </Provider>

