import React, { Component } from 'react';
import GlobalCss from '../../asset/css/global_style';
import {StatusBar,ScrollView} from 'react-native';
import { Container, Content, List, Left, Right, Input, Icon, Text, Body, Button,Item,Thumbnail,Form,Label,H1, H2, H3,Header,Title } from 'native-base';
import { Actions } from 'react-native-router-flux'; 
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Addotp extends Component<{}> {
	 constructor(props) {
        super(props);
			
      }
   
	 static navigationOptions = ({ navigation }) => ({
		header: (
		  <Header style={{backgroundColor:"#fff",paddingLeft:0}}>
			<Grid >
			    <Col size={15}  >
				   <Button large transparent onPress={() => navigation.goBack()} style={{paddingLeft:0,paddingRight:0}}>
						<Icon name="arrow-back" style={{fontSize:35}} />
				   </Button>
				</Col>
				<Col size={85} style={{backgroundColor:'blue',height:10,marginTop:25}} >
				       <Grid style={{}}>
					        <Col size={40}  style={{backgroundColor:'green'}} >
							</Col>
							<Col size={60}  >
							</Col>
					   </Grid>
				</Col>
			</Grid>
		  </Header>
		)
	  });
  render() {
    return (
	  <ScrollView>
		<Container style={GlobalCss.maincontainer}>
		    
			  <Grid>
				<Row size={3}>
				    <Grid>
							<Row size={1}>
								  <Content contentContainerStyle={{flex: 1}} >
									  <H1 style={GlobalCss.h1}  >Enter the 6-digit code</H1>
									  <H3 style={{color:'#545454',justifyContent: 'center',alignItems: 'center'}}>We've sent it to +9795959522</H3>
								   </Content>
							</Row>
							<Row size={4}>
							  <Content>
								  <Form>
								  <Grid>
									<Col size={16}>
										<Item floatingLabel>
										  <Input maxLength={1}  />
										</Item>
									</Col>
									<Col size={16}>
										<Item floatingLabel>
										  <Input maxLength={1}  />
										</Item>
									</Col>
									<Col size={16}>
										<Item floatingLabel>
										  <Input maxLength={1} />
										</Item>
									</Col>
									<Col size={16}>
										<Item floatingLabel>
										  <Input maxLength={1} />
										</Item>
									</Col>
									<Col size={16}>
										<Item floatingLabel>
										  <Input maxLength={1} />
										</Item>
									</Col>
									<Col size={16}>
										<Item floatingLabel>
										  <Input maxLength={1} />
										</Item>
									</Col>
									</Grid>
								  </Form>
								  
							  </Content>
							 </Row>
					</Grid>
				</Row>
				<Row size={1}>
				    <Content>
						 <Button full onPress={() => Actions.personaldetail()}>
							<Text>Next</Text>
						  </Button>
						  <H3 style={GlobalCss.bottomheading}>You can resend your code if it does't arrive .</H3>
					  </Content>
				</Row>
			  </Grid>
		  </Container>
	   </ScrollView>
    );
  }
}

