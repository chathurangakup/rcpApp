
import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';
const imageWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: imageWidth / 380});
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default EStyleSheet.create({
  avatar: {
    width: wp('30%'),
    height: wp('30%'),
    borderRadius: wp('20%'),
    borderWidth: 4,
    borderColor: "white",
    marginTop:-70,
    alignSelf:'center',
    position: 'absolute',
   
  },
  bodycontainer:{
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 1,
    borderColor: "white",
   
    backgroundColor:'white'
  },
  body:{
    marginTop:0,
   // borderColor: "white",
   
  },
  bodyContent: {
 

    paddingTop:wp('20%'),
  },
  header:{
    backgroundColor: "#D11F2E",
    height:wp('30%'),
    flexDirection:'row',
    justifyContent: 'space-between'
   
  },
});