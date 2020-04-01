
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
    height:imageWidth+imageWidth/2.5,
    backgroundColor:'white'
  },
  body:{
    marginTop:0,
   // borderColor: "white",
   
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    paddingTop:"72rem",
  },
  header:{
    backgroundColor: "#036C89",
    height:imageWidth/3,
    flexDirection:'row',
    justifyContent: 'space-between'
   
  },
  pdf: {
    flex:1,

    height:Dimensions.get('window').height,
}
});