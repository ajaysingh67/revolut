import React, { Component } from 'react';
import GlobalCss from '../../../asset/css/global_style';
import {Image,View} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Segment, Content, Text } from 'native-base';
import { Actions } from 'react-native-router-flux'; 
import { Col, Row, Grid } from 'react-native-easy-grid';
import Footerbar from './footerbar';

export default class analytics extends Component<{}> {
	
	 constructor(props) {
        super(props);
		this.state = {
			  seg: 2
			};
			
    }
	
  render() {
    return (
		<Container style={GlobalCss.containerclass}>
			   <Grid>
			        <Row size={1} style={{backgroundColor:'#0a9dff'}} >
					     <View style={{flex:1,justifyContent:'center'}}><Text style={{textAlign:'center',color:'#fff',fontSize:30}}>€0</Text></View>
					 </Row>
					 <Row size={2} >
					    <View style={{flex:1,marginTop:20}}>
					     <Segment style={{backgroundColor:'#fff'}}>
							  <Button  style={{height:50,paddingLeft:0,paddingRight:0}} info={this.state.seg === 1 ? true : false} light={this.state.seg !== 1 ? true : false} onPress={() => this.setState({ seg: 1 })}>
								<Text style={{fontWeight:'bold'}}>CATEGORY</Text>
							  </Button>
							  <Button  style={{height:50,paddingLeft:0,paddingRight:0}} info={this.state.seg === 2 ? true : false} light={this.state.seg !== 2 ? true : false} onPress={() => this.setState({ seg: 2 })}>
								<Text style={{fontWeight:'bold'}}>MERCHANT</Text>
							  </Button>
							  <Button  style={{height:50,paddingLeft:0,paddingRight:0}} info={this.state.seg === 3 ? true : false} light={this.state.seg !== 3 ? true : false} onPress={() => this.setState({ seg: 3 })}>
								<Text style={{fontWeight:'bold'}}>COUNTRY</Text>
							  </Button>
							</Segment>
						 </View>
							
					 </Row>
					 <Row size={5} >
						  <Content padder>
								{this.state.seg === 1 &&
								<Text>
									CATEGORY Selected
								</Text> }
								{this.state.seg === 2 &&
								<Text>
									MERCHANT Selected
								</Text>}
								{this.state.seg === 3 &&
								<Text>
									COUNTRY Selected
								</Text>}
						  </Content>
					 </Row>
			   </Grid>
				
			  <Footerbar />
		  </Container>
    );
  }
}

