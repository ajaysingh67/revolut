import React, { Component } from 'react';
import GlobalCss from '../../asset/css/global_style';
import {ScrollView,View} from 'react-native';
import { Container, Content, List, ListItem, Header, Input, Icon, Text, Picker, Button,Item,Thumbnail,Form,Label,H1, H2, H3 } from 'native-base';
import { Actions } from 'react-native-router-flux'; 
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Personaldetail extends Component<{}> {
	
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
					        <Col size={60}  style={{backgroundColor:'green'}} >
							</Col>
							<Col size={40}  >
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
								  <Content>
									<H1 style={GlobalCss.h1}>What's your personal details?</H1>
								  </Content>
							</Row>
							<Row size={4}>
							
							  
							  <Content>
							       <View style={{flex: 1,flexDirection:'row',justifyContent:'center'}}>
										<Button vertical style={GlobalCss.profilebutton}>
											<Icon name="md-person-add" style={{fontSize:35, color: '#545454'}} />
										</Button>
									</View>
								   <Form>
										<Item floatingLabel>
										  <Label>Legal first name</Label>
										  <Input />
										</Item>
										 <Item floatingLabel last>
											<Label>Legal last name</Label>
										  <Input />
										</Item>
										<Item floatingLabel last>
											<Label>Date of birth</Label>
										  <Input />
										</Item>
									  </Form>
							  </Content>
							 </Row>
					</Grid>
				</Row>
				<Row size={1}>
				    <Content>
						 <Button full onPress={() => Actions.address()}>
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

