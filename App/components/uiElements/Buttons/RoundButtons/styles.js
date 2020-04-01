
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  Dimensions,
  PixelRatio
} from 'react-native';

const imageWidth = Dimensions.get('window').width;

export default EStyleSheet.create({
    wrapper: {
   
        // alignItems: 'center',
        paddingTop:15,
        paddingBottom:15,
        borderRadius:10,
        borderWidth:1,
        
       
        // paddingTop: StatusBar.currentHeight,
        // paddingBottom: StatusBar.currentHeight
      },
      buttonText: {
         
        alignItems: 'center',
        fontWeight:'bold',
       
      
        textAlign:'center',
      },
      btnwrapper:{
       
       
        marginTop:15,
       
        
      }
});
