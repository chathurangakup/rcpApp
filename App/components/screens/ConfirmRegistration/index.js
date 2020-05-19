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
import { ScrollView } from 'react-native-gesture-handler';

// const imageWidth = Dimensions.get('window').width;
class LoginOrSignup extends Component {
 

  constructor(props){
    super(props);
    this.state = {
     isLogged:false,
    }
};



  
  componentDidMount() {
   // this.getData()
    
  }


  
  componentWillUnmount() {

  }
 

  gotoLogin = () => {
    
    this.props.navigation.navigate('Login');
  }


  gotoSignUp = () => {
    // this.props.navigation.navigate('SignUp');
   }
 


  render() {
     
        return (
          <SafeAreaView style={styles.wrapper}>
   
            <ScrollView>
         
          
          
          
                      <View style={{flex:1,alignItems:'center',marginTop:wp('0%')}}>
                      <Image
                        style={{width:wp('50%'),height:wp('50%')}}
                          source={require('../../images/splash.png')}
                    />

                    <View style={{alignItems:'center',paddingTop:wp('4%'),paddingBottom:wp('4%'),width: '70%',
   }}>
                   <Text style={{  textAlign: 'center', fontSize: wp('4%'),paddingBottom:wp('4%') }}>Thank You for your registration, one of our team members will review your details and will grant access with in <Text style={{color:'#FECD2F'}}>12-24 hours.</Text></Text>
                  <Text style={{  textAlign: 'center', fontSize: wp('4%') }}>Please check your inbox provided during the sign up process. If you haven’t received an email please check spam/junk mail folder in your mail box.</Text>
                
                    </View>

                    <View style={{alignItems:'center',padding:10, width: '70%'}}>
                       </View>

                    <View style={{flex:1,marginBottom:imageWidth/20,marginTop:10,  alignItems:'center',paddingTop:20}}>
                         <Buttons  text="Login" btnfontSize={wp('4%')}
                          btnbackgroundColor='#D11F2E' 
                          btnborderColor='#D11F2E'
                          btntxtncolor="#ffffff"
                          btnHight={70}
                          btnMarginRight={imageWidth/50}  
                          btnMarginLeft={imageWidth/50} 
                          onPress={()=>this.gotoLogin()}/>
                      
                      </View>
                    
                    
                      </View>
                     
                    
                      </ScrollView>
                    
               
                    
                      </SafeAreaView>
            
      );
     
    
      
    
  }
}

export default LoginOrSignup;