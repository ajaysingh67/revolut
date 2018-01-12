import React, { Component } from 'react';
import GlobalCss from '../../../asset/css/global_style';
import {StatusBar,Image,View} from 'react-native';
import Footerbar from './footerbar';
import { Container, Content, List, Left, Right, Icon, Text, Body, Button,Item,Thumbnail,H1, H2, H3,Title,Footer,FooterTab,Card,CardItem } from 'native-base';
import { Actions } from 'react-native-router-flux'; 
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Account extends Component<{}> {
	 constructor(props) {
        super(props);
			
      }
  
  render() {
    return (
		<Container style={GlobalCss.containerclass}>
		    
			  <Grid>
					<Row size={4} style={{backgroundColor:'#0a9dff'}}>
						<Grid>
								<Row size={1}>
									  <Left>
										<Button transparent onPress={() => Actions.addaccount()} >
										  <Icon name='md-swap' style={GlobalCss.accounticon} />
										</Button>
									  </Left>
									  <Right >
										<Button transparent onPress={() => Actions.rateconversion()} >
										  <Icon name='md-trending-up' style={GlobalCss.accounticon}/>
										</Button>
									  </Right>
								</Row>
								<Row size={2}>
								      <View  style={{flex: 1}}>
										  <Text style={{color:'#fff',fontSize:40,textAlign:'center'}}>€0.00</Text>
										  <Text style={{color:'#fff',fontWeight:'bold',textAlign:'center'}}>GBP . British Pound</Text>
									  </View>
								</Row>
								<Row size={3}>
								        <View  style={{flex: 1,flexDirection:'row'}}>
											 <View style={GlobalCss.accountbtncenter}>
												<View style={{flex: 2}}>
													<Button vertical style={GlobalCss.accountbutton} onPress={() => Actions.topup()}>
														<Icon name="add" style={{fontSize:35}} />
													</Button>
												</View>
												<View style={{flex: 1}}>
													<Text style={{color:'#fff',fontWeight:'bold'}}>Top Up</Text>
												 </View>
											 </View>
											 <View style={GlobalCss.accountbtncenter}>
												<View style={{flex: 2}}>
													<Button vertical style={GlobalCss.accountbutton} onPress={() => Actions.exchange()} >
														  <Icon name="refresh" style={{fontSize:35}}  />
													</Button>
												</View>
												  <View style={{flex: 1}}>
													<Text style={{color:'#fff',fontWeight:'bold'}}>Exchange</Text>
												  </View>
											 </View>
										 </View>
								
								</Row>
						</Grid>
					</Row>
					<Row size={3}>
						<Grid style={{margin:10}}>
								<Row>
									  <Content >
										  <H1 style={GlobalCss.h1}  >Welcome to a world beyond banking,Ajay!</H1>
										    <Card>
												<CardItem > 
                                                     <Image source={require('../../../asset/images/accountcard.png')} />												
													 <H3 style={{fontSize:18}}>Order a Revolut card now</H3>
												</CardItem>
											</Card>

									   </Content>
								</Row>
								
						</Grid>
				    </Row>
				
			  </Grid>
			  
			  <Footerbar />
				  
		  </Container>
    );
  }
}

