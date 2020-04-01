
import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';
const imageWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: imageWidth / 380});
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default EStyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection:'column',
   
  },
  wrappersplash:{
    flex: 1,
    backgroundColor: 'white',
    justifyContent:'center',
    alignItems:'center'
  },

  signupwrapper:{
    flex: 1, 
    justifyContent: 'center', 
    alignContent: 'center',
    backgroundColor:'#ffffff',
    borderRightWidth:1,
    borderColor:'black'
  },
  signupText:{
    textAlign: 'center',
    color:'#006b88',
    fontSize:"20rem",
    fontWeight:'bold'
    
  },
  loginwrapper:{
    flex: 1,
     justifyContent: 'center',
      alignContent: 'center' 
  },
  logintext:{
    textAlign: 'center',
    color:'#006b88',
    fontWeight:'bold',
    fontSize:"20rem",
  },
  btnwrapper: {
    flexDirection: 'column',
  },
  txtattributes: {
  },
  btnwmargin: {
    marginBottom: "35rem",
  },
  logostyles: {
    width: "100rem",
    height: "120rem",
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageandSlider: {
    flex: 6,
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  }
});