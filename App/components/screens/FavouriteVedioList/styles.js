
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
thumbnail1: {
  flex:1,

 
  width: wp('95%'),
 
},

thumbnail: {
 
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

});