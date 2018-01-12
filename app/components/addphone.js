import React, { Component } from 'react';
import GlobalCss from '../../asset/css/global_style';
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button,Item,Thumbnail,Form,Label,H1, H2, H3 } from 'native-base';
import { Actions } from 'react-native-router-flux'; 
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Addphone extends Component<{}> {
	
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
  render() {
    return (
		<Container style={GlobalCss.maincontainer}>
			  <Grid>
				<Row size={3}>
				    <Grid>
							<Row size={2}>
							      <Thumbnail source={require('../../asset/images/logo.png')} style={{flex: 1}} />
							</Row>
							<Row size={1}>
								  <H1 style={GlobalCss.h1}>Hi,welcome to Auxesis!</H1>
							</Row>
							<Row size={4}>
							  <Content>
								  <Form>
								  <Grid>
								    <Col size={35}>
									    <Label>Country</Label>
										<Picker
											  mode="dropdown"
											  placeholder="Select One"
											  selectedValue={this.state.selected2}
											  onValueChange={this.onValueChange2.bind(this)}
											>
											  <Item label="+1" value="key0" />
											  <Item label="+2" value="key1" />
											  <Item label="+3" value="key2" />
											  <Item label="+91" value="key3" />
											  <Item label="+26" value="key4" />
											</Picker>
									</Col>
									<Col size={65}>
									<Item floatingLabel>
									  <Label>Phone Number</Label>
									  <Input />
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
						 <Button full onPress={() => Actions.addotp()} >
							<Text>Next</Text>
						  </Button>
						  <H3 style={GlobalCss.bottomheading}>Be entering your phone number,you agree to our Term and conditions</H3>
					  </Content>
				</Row>
			  </Grid>
		  </Container>
    );
  }
}

