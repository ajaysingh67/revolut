import { StyleSheet } from 'react-native';
const GlobalCss = StyleSheet.create({
  maincontainer: {backgroundColor:'#fff',padding:20,flex:1},
  containerclass:{backgroundColor:'#fff'},
  h1:{fontWeight:'bold',marginBottom:10,marginTop:10,fontSize:23,textAlign:'center',flex:1},
  bottomheading:{color:'#545454',marginTop:10,marginBottom:10,fontSize:18,textAlign:'center',flex:1},
  footerbrn:{paddingLeft:0,backgroundColor:'#fff'},
  footertext:{paddingLeft:7,paddingRight:7,color:'#767676'},
  footericon:{color:'#767676'},
  footercontainer:{backgroundColor:'#fff'},
  accounticon:{color:'#fff',fontSize:30},
  accountbutton:{borderRadius:50,paddingBottom:25,paddingTop:25,paddingLeft:18,paddingRight:18},
  profilebutton:{borderRadius:50,paddingBottom:30,paddingTop:30,paddingLeft:18,paddingRight:18,backgroundColor:'#e1e1e1'},
  accountbtncenter:{flex: 1,justifyContent: 'center',alignItems:'center',flexDirection:'column'},
  mainheading:{color:'#111111',fontSize:25,textAlign:'center',paddingTop:10,paddingBottom:10,fontWeight:'bold'}
})

export default GlobalCss;
