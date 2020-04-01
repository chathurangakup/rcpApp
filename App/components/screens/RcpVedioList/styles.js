
import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';
const imageWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: imageWidth / 380});
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 30,
},
thumbnail: {
  flex:1,

  height:wp('60%'),
  width: wp('95%'),
  marginHorizontal: 10,
  marginVertical: 10,
  alignSelf:'center',
  resizeMode: 'contain',
  marginRight:wp('3%')
},
title: {
  marginHorizontal: 10,
  fontSize: wp('5%'),
  fontWeight:'bold',
    color: 'gray', 
   
},




Alert_Main_View:{
 
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor : "#ffffff", 
  height: wp('80%') ,
  width: '90%',
  borderWidth: 1,
  borderColor: '#fff',
  borderRadius:7,
 
},
 
Alert_Title:{
 
  fontSize: 25, 
  color: "#fff",
  textAlign: 'center',
  padding: 10,
  height: '28%'
 
},
 
Alert_Message:{
 
    fontSize: 22, 
    color: "#fff",
    textAlign: 'center',
    padding: 10,
    height: '42%'
   
  },
 
buttonStyle: {
    
    width: wp('15%'),
    height: wp('20%'),
    justifyContent: 'center',
    alignItems: 'center'
 
},
   
TextStyle:{
    color:'black',
    textAlign:'center',
    fontSize: wp('5%'),
    marginTop: -5
},


 

 
Alert_Message:{
 
    fontSize: 22, 
    color: "#fff",
    textAlign: 'center',
    padding: 10,
    height: '42%'
   
  },

   





});