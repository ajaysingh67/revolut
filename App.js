import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Splash from './app/components/splash';
import Addphone from './app/components/addphone';
import Addotp from './app/components/addotp';
import Personaldetail from './app/components/personaldetail';
import Address from './app/components/address';
import Addemail from './app/components/addemail';
import Account from './app/components/dashboard/account';
import Addaccount from './app/components/dashboard/addaccount';
import Exchange from './app/components/dashboard/exchange';
import Rateconversion from './app/components/dashboard/rateconversion';
import Topup from './app/components/dashboard/topup';
import Analytics from './app/components/dashboard/analytics';
import Cards from './app/components/dashboard/cards';
import Payments from './app/components/dashboard/payments';
import More from './app/components/dashboard/more';

const App = () => {
	
  return (
    <Router>
      <Scene key="root">
	    <Scene key="splash"
          component={Splash}
		  hideNavBar
        />
		<Scene key="addphone"
          component={Addphone}
		  hideNavBar
		  initial
        />
		<Scene key="addotp"
          component={Addotp}
		  title="Otp"
		  
        />
		<Scene key="personaldetail"
          component={Personaldetail}
		  title="Personal Detail"
		  
        />
		<Scene key="address"
          component={Address}
		  
        />
		<Scene key="addemail"
          component={Addemail}
		  
        />
		<Scene key="account"
          component={Account}
		  title="Personal Detail"
		  hideNavBar
		  
        />
		<Scene key="addaccount"
          component={Addaccount}
		  hideNavBar
		  
        />
		<Scene key="exchange"
          component={Exchange}
		  hideNavBar
		  
        />
		<Scene key="rateconversion"
          component={Rateconversion}
		  hideNavBar
		  
        />
		<Scene key="topup"
          component={Topup}
		  hideNavBar
		  
        />
		<Scene key="analytics"
          component={Analytics}
		  hideNavBar
		  
        />
		<Scene key="cards"
          component={Cards}
		  hideNavBar
		  
        />
		<Scene key="payments"
          component={Payments}
		  hideNavBar
		  
        />
		<Scene key="more"
          component={More}
		  hideNavBar
		  
        />
		
      </Scene>
     </Router>
  );
}
export default App;