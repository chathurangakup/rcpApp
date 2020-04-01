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
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';

import Buttons from '../../uiElements/Buttons/RoundButtons'
import NavBarDefault from '../../uiElements/NavBarDefault';
const imageWidth = Dimensions.get('window').width;

import registerAction from '../../redux/StartUp/actions';
import Loading from '../../uiElements/Loading';

const {fogetPassword,clearProps} = registerAction;

import styles from './styles';

// const imageWidth = Dimensions.get('window').width;
class ForgetPassword extends Component {
  fieldRef = React.createRef();


  constructor(props){
    super(props);
    this.state = {
     isLogged:false,
     emailmessagestate: '',
     emailmessageerrorstate:''
    
    }
};


static getDerivedStateFromProps(props, state) {
     console.log(props.fogetPasswordResult)
     if(props.fogetPasswordResult!=undefined){
      if(props.fogetPasswordResult=='error'){
            alert('Email is not registered');
      }
      if(props.fogetPasswordResult=='success'){
      props.navigation.navigate('VerificationCode')
      }
     }
   
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


 

  btnPress=()=>{

    const obj = {
 
      email :this.state.emailmessagestate
  
    }
    this.props.dispatch(fogetPassword(obj))
       


  }

  focusEmail=()=>{
    this.setState({emailmessageerrorstate:''})
   
  }

  blurEmail=()=>{
    if(this.state.emailmessagestate==''){
      this.setState({emailmessageerrorstate:'Email name  is empty'})
  }
  }




  render() {
     
        return (
        
          <SafeAreaView style={styles.wrapper}>
              <NavBarDefault  name="Foget Password" onPress={() => this.props.navigation.navigate('LoginOrSignup')}/>
       
              <ScrollView style={{backgroundColor:'#ffffff',height:'100%'}}>


            <View style={{flex:1,alignItems:'center'}}>
                      <Image
                        style={{width:wp('50%'),height:wp('50%')}}
                          source={require('../../images/splash.png')}
                      />

   {this.props.loading && <Loading navigation={this.props.navigation} animating={true} />}

                    <View style={{alignItems:'center', width: '100%',height: '100%',}}>
                 
                    <TextField
                label={"Email Address"}
             //   value={this.state.text}
             fontSize={wp('4%')}
             labelFontSize={wp('3%')}
                onChangeText={text => {
                  this.setState({emailmessagestate: text });
                }}
                error={this.state.emailmessageerrorstate}
                onFocus={()=>this.focusEmail()}
                onBlur={()=>this.blurEmail()}
                baseColor="gray"
                tintColor="red"
                containerStyle={{ width: wp('80%')}}
                formatText={text => {
                  console.log(text);
                  return text;
                }}
              />
            

    
    <View style={{paddingTop:wp('5%')}}>
           
           <Buttons  text="Send Email" btnfontSize={wp('5%')}
                          btnbackgroundColor='#D11F2E' 
                          btnborderColor='#D11F2E'
                          btntxtncolor="#ffffff"
                          btnHight={70}
                          btnMarginRight={imageWidth/50}  
                          btnMarginLeft={imageWidth/50} 
                          onPress={()=>this.btnPress()}/>
                           {this.state.loginsuccessmessage==''?
                        null
                          :
                          <Text style={{alignContent:'center',color:'red'}}>
                           {this.state.loginsuccessmessage}
                         </Text>

                          }
                    
                    </View>
                                 
         

                    </View>



                 
                      


        
     
                        
                      </View>
             
                    
                    
                    
              
            </ScrollView>
                    
                    
             
                      </SafeAreaView>
                     
            
      );
     
    
      
    
  }
}

const mapStateToProps = state =>({ 

  loading:state.startUpReducer.loading,
  fogetPasswordResult:state.startUpReducer.fogetPasswordResult

});
export default connect(mapStateToProps)(ForgetPassword);
