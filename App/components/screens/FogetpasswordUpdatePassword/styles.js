
import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';
const imageWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: imageWidth / 380});
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default EStyleSheet.create({
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 68,
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

    alignItems: 'center',
    paddingTop:"50rem",
  },
  header:{
    backgroundColor: "#D11F2E",
    height:imageWidth/3,
    flexDirection:'row',
    justifyContent: 'space-between'
   
  },
  container:{
    height:'100%'
  }
});