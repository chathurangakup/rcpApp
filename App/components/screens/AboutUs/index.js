import React, { Component } from 'react';
import {
  View, Text,
  Image,
  ActivityIndicator,
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
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { WebView } from 'react-native-webview';

import Buttons from '../../uiElements/Buttons/RoundButtons'
import NavBarDefault from '../../uiElements/NavBarDefault';
const imageWidth = Dimensions.get('window').width;

import registerAction from '../../redux/StartUp/actions';
import Loading from '../../uiElements/Loading';

const {loginUser,clearProps} = registerAction;

import styles from './styles';

// const imageWidth = Dimensions.get('window').width;
class ForgetPassword extends Component {
  fieldRef = React.createRef();


  constructor(props){
    super(props);
    this.state = {
     isLogged:false,
     visible: true 
   
    
    }
};


static getDerivedStateFromProps(props, state) {
    
}





  
  componentDidMount() {
   // this.props.dispatch(clearProps());
  }
  
  componentWillUnmount() {

  }
 

  gotoSignUp = () => {
    this.props.navigation.navigate('SignUp');
  }

  gotoLogin = () => {
    this.props.navigation.navigate('Login');
  }

  showSpinner() {
    console.log('Show Spinner');
    this.setState({ visible: true });
  }
 
  hideSpinner() {
    console.log('Hide Spinner');
    this.setState({ visible: false });
  }
 

 
  render() {
     
        return (
        
      //     <View
      //     style={this.state.visible === true ? styles.stylOld : styles.styleNew}>
            
      //         <View style={{ flex:1,  justifyContent: 'center'}}>
      //         {this.state.visible ? (
      //       <ActivityIndicator
      //         color="#20366B"
      //         size="large"
      //         style={styles.ActivityIndicatorStyle}
      //       />
      //     ) : null}

             
         
      
    
      //   <WebView
      //   source={{uri:'https://www.rubbermaidcommercial.com/contact-us/'}}
      //   style={styles.WebViewStyle}
      //    //Enable Javascript support
      //    javaScriptEnabled={true}
      //    //For the Cache
      //    domStorageEnabled={true}
      //    //View to show while loading the webpage
      //    //Want to show the view or not
      //    //startInLoadingState={true}
      //   onLoadStart={() => this.showSpinner()}
      //   onLoad={() => this.hideSpinner()}
      //   //Want to show the view or not
      
      // />
      //  </View>
      //  </View>



<SafeAreaView style={{ flex: 1}}>
<NavBarDefault name='About Us' onPress={() => this.props.navigation.navigate('ProfileHome')}/>
<WebView
startInLoadingState={true}
  onLoad={() => this.hideSpinner()}
  style={{ flex: 1 }}
  source={{ uri: 'https://www.rubbermaidcommercial.com/about-us/' }}
/>
{/* {this.state.visible && (
  <ActivityIndicator
    style={styles.ActivityIndicatorStyle}
    size="large"
  />
)} */}
</SafeAreaView>

     
                    
             
                    
                     
            
      );
     
    
      
    
  }
}

// const mapStateToProps = state =>({ 
//   loginsuccessEmail:state.startUpReducer.loginsuccessEmail,
//   loading:state.startUpReducer.loading,
//   accesstoken:state.startUpReducer.accesstoken

// });

export default ForgetPassword;