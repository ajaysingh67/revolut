import React, { Component } from 'react';
import GlobalCss from '../../../asset/css/global_style';
import {StatusBar} from 'react-native';
import { Container, Content,Icon, Text, Button,Footer,FooterTab } from 'native-base';
import { Actions } from 'react-native-router-flux'; 

export default class Footerbar extends Component<{}> {
	 constructor(props) {
        super(props);
			
      }
  
  render() {
    return (
		  <Footer style={GlobalCss.footercontainer}>
				  <FooterTab>
					<Button vertical style={GlobalCss.footerbrn} onPress={() => Actions.account()} >
					  <Icon name="md-archive" style={GlobalCss.footericon} />
					  <Text style={GlobalCss.footertext}>Account</Text>
					</Button>
					<Button vertical style={GlobalCss.footerbrn} onPress={() => Actions.analytics()} >
					  <Icon name="md-stats" style={GlobalCss.footericon} />
					  <Text style={GlobalCss.footertext}>Analytics</Text>
					</Button>
					<Button vertical active style={GlobalCss.footerbrn} onPress={() => Actions.payments()} >
					  <Icon active name="md-repeat" style={GlobalCss.footericon} />
					  <Text style={GlobalCss.footertext}>Payments</Text>
					</Button>
					<Button vertical style={GlobalCss.footerbrn} onPress={() => Actions.cards()} >
					  <Icon name="md-card" style={GlobalCss.footericon} />
					  <Text style={GlobalCss.footertext}>Cards</Text>
					</Button>
					<Button vertical style={GlobalCss.footerbrn} onPress={() => Actions.more()}  >
					  <Icon name="ios-more" style={GlobalCss.footericon} />
					  <Text style={GlobalCss.footertext}>More</Text>
					</Button>
				  </FooterTab>
			 </Footer>
    );
  }
}

