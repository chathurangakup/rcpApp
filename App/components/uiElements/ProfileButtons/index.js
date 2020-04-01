import React, { Component } from 'react';
import { View, Image,Text, TouchableHighlight,StyleSheet,Dimensions,TouchableOpacity} from 'react-native';
import { PropTypes } from 'prop-types';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import styles from './styles';

const imageWidth = Dimensions.get('window').width;
import Icon from 'react-native-vector-icons/AntDesign';


class RoundButtons extends Component{
   
   render(){

    const { text,
      onPress,
      btnfontSize,
      btntxtncolor,
      btnbackgroundColor,
      btnWidth,
      btnHight,
      btnBorderColor,
      btnMarginLeft,btnMarginRight,
      disabled } = this.props;
   
    const fontSize=btnfontSize || wp('4%');
     const color=btntxtncolor || '#ffffff'
     const backgroundColor=btnbackgroundColor || '#ffffff';
     const borderColor=btnBorderColor || '#000000'
     const width=btnWidth || imageWidth;
     const height=btnHight || wp('4%');
     const marginLeft=btnMarginLeft || 20;
     const marginRight =btnMarginRight || 20;


       return(
         <View style={styles.btnwrapper}>
         <TouchableOpacity onPress={onPress}>
             <View style={{
               flexDirection:'row', 
               justifyContent:'space-between',
                 marginLeft:wp('15%')
           
           
             }}>
             <View style={{flex:1}}>
             <Text style={[{fontSize},{color:'black'}]}>{text}</Text>
             </View>
             <View style={{flex:1,marginLeft:wp('20%')}}>
             <Icon
                        style={{paddingTop:wp('1%')}}
                             name='right'
                             fontSize={wp('3%')}
                             color='#777777' />
             </View>
           
                   
                        
               </View>
                     
           
           
          </TouchableOpacity>
          <View style = {styles.lineStyle} />
         </View>
       
       ); 
   } 
 
}

RoundButtons.propTypes={
    text:PropTypes.string,
    onPress:PropTypes.func,
    btnfontSize:PropTypes.number,
    btntxtcolor:PropTypes.string,
    btnbackgroundColor:PropTypes.string,
    btnHight:PropTypes.number,
    btnWidth:PropTypes.number,
    btnMarginLeft:PropTypes.number,
    btnMarginLeft:PropTypes.number,
    btnBorderColor:PropTypes.string,
    disabled:PropTypes.boolean,
   
}

export default RoundButtons;