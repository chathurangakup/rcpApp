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

import Buttons from '../../uiElements/Buttons/RoundButtons'
import NavBarDefault from '../../uiElements/NavBarDefault';
const imageWidth = Dimensions.get('window').width;

import styles from './styles';

// const imageWidth = Dimensions.get('window').width;
class LoginOrSignup extends Component {
  fieldRef = React.createRef();


  constructor(props){
    super(props);
    this.state = {
     isLogged:false,
     emailError: false,
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
     if(this.state.orientation=='portrait'){
      return (
        
        <SafeAreaView style={styles.wrapper}>
          <View style={{alignItems:'center',backgroundColor:'white'}}>
                    <Image
                      style={{width:wp('30%'),height:wp('25%')}}
                        source={require('../../images/splash.png')}
                    />
                          
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('RcpVedios')}>
                    <Image
                      style={{width:wp('70%'),height:wp('40%')}}
                        source={require('../../images/RCPvideo.png')}
                    />

                    </TouchableOpacity>

                 
                  
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('RcpManuals')}>
                    <Image
                   style={{width:wp('70%'),height:wp('45%')}}
                      source={require('../../images/RcpManuals.png')}
                    />
                    </TouchableOpacity>

                 
                

                
                    </View>
          
                    </SafeAreaView>
                   
          
    );
   
  
    

     }else if(this.state.orientation=='landscape'){
      return (
        
        <SafeAreaView style={styles.wrapper}>
    
     
          <ScrollView>

          <View style={{flex:1,alignItems:'center',backgroundColor:'white'}}>
                    <Image
                      style={{width:wp('50%'),height:wp('50%')}}
                        source={require('../../images/splash.png')}
                    />





                  <View style={{backgroundColor:'white'}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('RcpVedios')}>
                    <Image
                      style={{width:imageWidth/1.2,height:imageWidth/2}}
                        source={require('../../images/RCPvideo.png')}
                    />

                    </TouchableOpacity>
               
               
                    <View style={{paddingBottom:15}}>

                    </View>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('RcpManuals')}>

                  
                <Image
                      style={{width:imageWidth/1.2,height:imageWidth/2}}
                        source={require('../../images/RcpManuals.png')}
                    />
                      </TouchableOpacity>

<View style={{paddingBottom:55}}>

                    </View>
        
                  </View>



               
                    


      
   
                      
                    </View>
           
                  
                  
                  
            
          </ScrollView>
                  
                  
           
                    </SafeAreaView>
                   
          
    );
   

     }
       
    
  }
}

export default LoginOrSignup;