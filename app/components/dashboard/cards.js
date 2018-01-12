import React, { Component } from 'react';
import GlobalCss from '../../../asset/css/global_style';
import { Actions } from 'react-native-router-flux'; 
import { Container, Content, List, ListItem, Header, Icon, Text, Button,Item,Thumbnail,Label,H1, H2, H3,Body,Left,Title,Form } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Footerbar from './footerbar';

export default class Cards extends Component<{}> {
	
	 constructor(props) {
        super(props);
			
    }
	static navigationOptions = ({ navigation }) => ({
		header: (
		  <Header style={{backgroundColor:"#fff",paddingLeft:0}}>
				  
				  <Body>
					<Title style={{color:'#000'}}>Cards</Title>
				  </Body>
		  </Header>
		)
	  });
    
	
    
  render() {
    return (
	   <Container style={GlobalCss.containerclass}>
			  <Grid>
				
				
			  </Grid>
			  <Footerbar />
		</Container>
    );
  }
}

