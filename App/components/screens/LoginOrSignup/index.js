import React, { Component } from 'react';
import {
  View, Text,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  Modal
} from 'react-native';

import Buttons from '../../uiElements/Buttons/RoundButtons'
const imageWidth = Dimensions.get('window').width;
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


import styles from './styles';

// const imageWidth = Dimensions.get('window').width;
class LoginOrSignup extends Component {
 

  constructor(props){
    super(props);
    this.state = {
     isLogged:false,
     orientation:''
    }

    const isPortrait = () => {
      const dim = Dimensions.get('screen');
      return dim.height >= dim.width;
    };

    this.state = {
      orientation: isPortrait() ? 'portrait' : 'landscape'
    };

    // Event Listener for orientation changes
    Dimensions.addEventListener('change', () => {
      this.setState({
        orientation: isPortrait() ? 'portrait' : 'landscape'
      });
    });

};



  
  componentDidMount() {
   // this.getData()
   
  
    
  }




  
  componentWillUnmount() {

  }
 

  gotoLogin = () => {
    this.props.navigation.navigate('SignUpfirst');
    this.props.navigation.navigate('Login');
  }


  gotoSignUp = () => {
    // this.props.navigation.navigate('SignUp');
   }

   
 


  render() {
    if(this.state.orientation=='portrait'){
      return (
        <SafeAreaView   style={styles.wrapper}>
                    <View style={{flex:1,alignItems:'center',marginTop:wp('0%')}}>
                    
                    

                  
                   
                  <View style={{alignItems:'center',paddingLeft:wp('5%'),paddingRight:wp('5%'), width: wp('100%')}}>
                  <Image
                         style={{width:wp('60%'),height:wp('60%')}}
                        source={require('../../images/splash.png')}
                       />
                  <Text style={{  textAlign: 'center', fontSize: wp('4%') }}>Welcome to the Rubbermaid Commercial Smart App, 
                      a platform that allows you to access Rubbermaid Commercial Training Resources anytime, anywhere.</Text>
                   
                  </View>
                  
                    </View>
                    <View style={{flex:1,marginBottom:wp('10%'),marginTop:wp('20%'),  alignItems:'center',paddingTop:wp('30%')}}>
                       <Buttons  text="Login" btnfontSize={wp('4%')}
                        btnbackgroundColor='#D11F2E' 
                        btnborderColor='#D11F2E'
                        btntxtncolor="#ffffff"
                        btnHight={wp('15%')}
                        btnMarginRight={imageWidth/50}  
                        btnMarginLeft={imageWidth/50} 
                        onPress={()=>this.gotoLogin()}/>
                       <Buttons  text="Sign Up" 
                        btnfontSize={wp('4%')}
                        btnbackgroundColor='#ffffff' 
                        btntxtncolor="#D11F2E" 
                        btnborderColor='#D11F2E' 
                        btnMarginRight={imageWidth/50}  
                        btnMarginLeft={imageWidth/50}  
                        onPress={()=>this.props.navigation.navigate('SignUpfirst')}/>
                    </View>
                    </SafeAreaView>
          
    );
   
  

    }else if(this.state.orientation=='landscape'){
      return (
        <SafeAreaView  ref = "rootView" style={styles.wrapper}>
                    <View style={{flex:1,alignItems:'center',marginTop:wp('0%')}}>
                    
                    <Image
                         style={{width:wp('35%'),height:wp('35%')}}
                        source={require('../../images/splash.png')}
                       />

                  
                   
                  <View style={{alignItems:'center',paddingLeft:wp('5%'),paddingRight:wp('5%'), width: wp('100%')}}>
                
                  <Text style={{  textAlign: 'center', fontSize: wp('4%') }}>Welcome to the Rubbermaid Commercial Smart App, 
                      a platform that allows you to access Rubbermaid Commercial Training Resources anytime, anywhere.</Text>
                   
                  </View>
                  
                    </View>
                    <View style={{flex:1,marginBottom:wp('5%'),  alignItems:'center',paddingTop:wp('25%')}}>
                       <Buttons  text="Login" btnfontSize={wp('4%')}
                        btnbackgroundColor='#D11F2E' 
                        btnborderColor='#D11F2E'
                        btntxtncolor="#ffffff"
                        btnHight={wp('12%')}
                        btnMarginRight={imageWidth/50}  
                        btnMarginLeft={imageWidth/50} 
                        onPress={()=>this.gotoLogin()}/>
                       <Buttons  text="Sign Up" 
                        btnfontSize={wp('4%')}
                        btnbackgroundColor='#ffffff' 
                        btntxtncolor="#D11F2E" 
                        btnborderColor='#D11F2E' 
                        btnMarginRight={imageWidth/50}  
                        btnMarginLeft={imageWidth/50}  
                        onPress={()=>this.props.navigation.navigate('SignUpfirst')}/>
                    </View>
                    </SafeAreaView>
          
    );
   
  
    }
     
       
      
    
  }
}

export default LoginOrSignup;