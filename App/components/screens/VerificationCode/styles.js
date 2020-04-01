
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  Dimensions,
  PixelRatio,
  Platform
} from 'react-native';
export const CELL_SIZE = 70;
export const CELL_BORDER_RADIUS = 10;
export const DEFAULT_CELL_BG_COLOR = '#e6eef0';
export const NOT_EMPTY_CELL_BG_COLOR = '#3557b7';
export const ACTIVE_CELL_BG_COLOR = '#f7fafe';

const imageWidth = Dimensions.get('window').width;

export default EStyleSheet.create({
    wrapper:{
        flex:1,
        marginTop:10,
    },
    btnwrapper:{
        flexDirection:'column',
    },
    txtattributes:{
       
    },
    btnwmargin:{
        marginBottom:35,
    },
    textInput:{
        paddingTop:5,
        paddingBottom:10,
        width:imageWidth/6,
        height:imageWidth/6,
        alignItems:'center',
        fontSize:25,
        backgroundColor:'#e6eef0',
        borderRadius:10,
        marginBottom:5,
      
        color:'#000000',
        marginHorizontal:25
    },
    verifictionwrappper:{
           flex:1,
           
           justifyContent:'center',
           marginLeft:imageWidth/10,
           marginRight:imageWidth/10,
          marginBottom: imageWidth/12
    },
    verifytext:{
      fontSize: 18
    },
    logostyles:{
        width: 135,
        height: 30,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:imageWidth/2/1.5,
    },
    logocontainer:{
        flex:2,
        marginTop:10
    },
    errormsg:{
      
        color:'red',
        
    },



    input: {
        margin: 0,
        height: CELL_SIZE,
        width: CELL_SIZE,
        lineHeight: 35,
        ...Platform.select({
          web: {
            lineHeight: 45,
          },
        }),
        fontSize: 30,
        borderRadius: CELL_BORDER_RADIUS,
        color: '#000000',
        backgroundColor: '#e6eef0',
    
        // IOS
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    
        // Android
        elevation: 3,
      },
});