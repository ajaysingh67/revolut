import React, { Component } from 'react';
import GlobalCss from '../../asset/css/global_style';
import {ScrollView} from 'react-native';
import { Container, Content, List, ListItem, Header, Input, Icon, Text, Picker, Button,Item,Thumbnail,Form,Label,H1, H2, H3 } from 'native-base';
import { Actions } from 'react-native-router-flux'; 
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Addphone extends Component<{}> {
	
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
					        <Col style={{backgroundColor:'green'}} >
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
							
							<Row size={1} >
							   <Content>
								  <H1 style={GlobalCss.h1}>And what's your email?</H1>
								  <H3 style={{color:'#545454',paddingBottom:10,textAlign:'center',flex:1}}>We will only use it to advise you for any important changes.</H3>
							   </Content>
							</Row>
							<Row size={2}>
							  <Content>
								  <Form>
									<Item floatingLabel>
									  <Label>Email</Label>
									  <Input />
									</Item>
								  </Form>
							  </Content>
							 </Row>
					</Grid>
				</Row>
				<Row size={1}>
				    <Content>
						 <Button full onPress={() => Actions.account()}>
							<Text>Next</Text>
						  </Button>
					  </Content>
				</Row>
			  </Grid>
		  </Container>
	  </ScrollView>
    );
  }
}

