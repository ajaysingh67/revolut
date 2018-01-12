import React, { Component } from 'react';
import GlobalCss from '../../asset/css/global_style';
import {ScrollView} from 'react-native';
import { Container, Content, List, ListItem, Header, Input, Icon, Text, Picker, Button,Item,Thumbnail,Form,Label,H1, H2, H3 } from 'native-base';
import { Actions } from 'react-native-router-flux'; 
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Address extends Component<{}> {
	
	 constructor(props) {
        super(props);
			this.state = {
		  selected2: undefined
		};
    }
    onValueChange2(value: string) {
		this.setState({
		  selected2: value
		});
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
					        <Col size={80}  style={{backgroundColor:'green'}} >
							</Col>
							<Col size={20}  >
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
				
				   
							<Row size={1}>
								  <H1 style={GlobalCss.h1}>Where do you live?</H1>
							</Row>
							<Row size={6}>
							  <Content>
								   <Form>
										
										  <Label>Country</Label>
										  <Picker
											  mode="dropdown"
											  placeholder="Select One"
											  selectedValue={this.state.selected2}
											  onValueChange={this.onValueChange2.bind(this)}
											  style={{borderColor:"red",borderWidth:1}}
											>
											  <Item label="Austria" value="1" />
											  <Item label="Belize" value="2" />
											  <Item label="Botswana" value="3" />
											  <Item label="Canada" value="4" />
											  <Item label="China" value="5" />
											  <Item label="India" value="6" />
											</Picker>
										
										 <Item floatingLabel style={{marginTop:-10}} >
											<Label>Postal code</Label>
										  <Input />
										</Item>
										 <Item floatingLabel last >
											<Label>Address line 1</Label>
										  <Input />
										</Item>
										 <Item floatingLabel last>
											<Label>Address line 2</Label>
										  <Input />
										</Item>
										 <Item floatingLabel last>
											<Label>City</Label>
										  <Input />
										</Item>
										<Item floatingLabel last>
											<Label>Region</Label>
										  <Input />
										</Item>
									  </Form>
										 <Button full onPress={() => Actions.addemail()}>
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

