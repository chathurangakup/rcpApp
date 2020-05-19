
import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';
const imageWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: imageWidth / 380});
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default EStyleSheet.create({
    textStyle: {
        height: wp('40%'),
        borderColor: 'gray',
        borderWidth: 0,
        width: wp('100%'),
        marginTop: wp('5%'),
        borderBottomWidth: 2,
      },
      errorText: {
        fontSize: 14,
        color: '#FF0000',
        width: '80%'
      },

      thumbnail1: {
        flex:1,
      
       
        width: wp('95%'),
       
      },
     
      thumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height:wp('60%'),
        width: wp('97%'),
        marginHorizontal: 10,
        marginVertical: 10,
      
      },
    container: {
      flex: 1,
    },
    toolbar: {
      marginTop: 30,
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 5,
    },
    mediaPlayer: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: 'black',
    },
    row: {
      flex: 1,
      justifyContent: "space-around"
  },
 
  title: {
    marginHorizontal: 10,
      fontSize: wp('5%'),
      fontWeight:'bold',
        color: 'gray', 
       
  },
});