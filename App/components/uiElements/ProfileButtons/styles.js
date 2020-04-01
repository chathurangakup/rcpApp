
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  Dimensions,
  PixelRatio
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const imageWidth = Dimensions.get('window').width;

export default EStyleSheet.create({
    wrapper: {
   
        // alignItems: 'center',
        
      paddingLeft:20,
      paddingRight:20,
       
       
       
       
        // paddingTop: StatusBar.currentHeight,
        // paddingBottom: StatusBar.currentHeight
      },
      buttonText: {
         
        alignItems: 'center',
        fontWeight:'bold',
       
      
        textAlign:'center',
      },
      btnwrapper:{
       
        paddingLeft:wp('8%'),
        
         marginBottom:wp('4%'),
         marginTop:wp('3%'),
       
        width:imageWidth,
       
        
      },
      lineStyle:{
        marginTop:10,
        borderWidth: 0.5,
        borderColor:'#f5f5f5',
       
   }
});
