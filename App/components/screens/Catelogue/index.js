import React, { Component } from 'react';
import {
  View, Text,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  ScrollView
 
} from 'react-native';
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'react-native-material-textfield';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { WebView } from 'react-native-webview';
import Pdf from 'react-native-pdf';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';



const imageWidth = Dimensions.get('window').width;

import catelogueAction from '../../redux/Catelogue/actions';
import Loading from '../../uiElements/Loading';

const {getPdf,clearProps,} = catelogueAction;

import styles from './styles';

// const imageWidth = Dimensions.get('window').width;
class Catelogue extends Component {
  fieldRef = React.createRef();


  constructor(props){
    super(props);
    this.pdf = null;
    this.state = {
     isLogged:false,
     emailError: false,
    }
};



  
  componentDidMount() {
    
  }
  
  componentWillUnmount() {

  }
 

  gotoSignUp = () => {
    this.props.navigation.navigate('SignUp');
  }

  gotoLogin = () => {
    this.props.navigation.navigate('Login');
  }

  onSubmit = () => {
    let { current: field } = this.fieldRef;

    console.log(field.value());
  };

  formatText = (text) => {
    return text.replace(/[^+\d]/g, '');
  };


  render() {
    let source = {uri:'https://smartapprcp.s3.ap-southeast-1.amazonaws.com/rcp_other/catelogue/RCP+ANZ+Catalogue+.pdf'};
        return (
          <SafeAreaView style={{flex:1}}>
            <View style={{padding:15}}>
            <Text style={{fontSize:wp('5%'),fontWeight:'bold'}}>RCP Catalogue</Text>
            </View>
           
         
                <Pdf
                   ref={(pdf)=>{this.pdf = pdf;}}
                    source={source}
                    onLoadComplete={(numberOfPages,filePath)=>{
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages)=>{
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error)=>{
                        console.log(error);
                    }}
                    onPressLink={(uri)=>{
                        console.log(`Link presse: ${uri}`)
                    }}
                    style={styles.pdf}/>
          </SafeAreaView>
       
                     
            
      );
     
    
      
    
  }
}

const mapStateToProps = state =>({ 
  loginsuccessEmail:state.catelogueReducer.loginsuccessEmail,
  loading:state.catelogueReducer.loading,
  accesstoken:state.catelogueReducer.accesstoken

});

export default connect(mapStateToProps)(Catelogue);