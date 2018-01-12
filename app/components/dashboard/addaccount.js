import React, { Component } from 'react';
import GlobalCss from '../../../asset/css/global_style';
import { Container, Content, List, ListItem, Header, Icon, Text, Button,Item,Thumbnail,Label,H1, H2, H3,Body,Left,Title,Form } from 'native-base';
import { Actions } from 'react-native-router-flux'; 
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Addaccount extends Component<{}> {
	
	 constructor(props) {
        super(props);
			
    }
	
	static navigationOptions = ({ navigation }) => ({
		header: (
		  <Header style={{backgroundColor:"#fff",paddingLeft:0}}>
				  <Left>
					<Button transparent onPress={() => navigation.goBack()}>
					  <Icon name='arrow-back' />
					</Button>
				  </Left>
				  <Body>
					<Title style={{color:'#000'}}>Account</Title>
				  </Body>
		  </Header>
		)
	  });
    
  render() {
    return (
		<Container style={GlobalCss.maincontainer}>
			  <Grid>
				
				
			  </Grid>
		  </Container>
    );
  }
}

