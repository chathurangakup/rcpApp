
import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';
const imageWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: imageWidth / 380});
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default EStyleSheet.create({
  wrapper:{
        backgroundColor:'#ffffff'
  },
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
});