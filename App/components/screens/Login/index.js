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

const {loginUser,clearProps} = registerAction;

import styles from './styles';

// const imageWidth = Dimensions.get('window').width;
class Login extends Component {
  fieldRef = React.createRef();


  constructor(props){
    super(props);
    this.state = {
     isLogged:false,
     emailError: false,
     loginsuccessmessage:'',
   
     emailmessageerrorstate:'',
     emailmessagestate:'',
     passwordmessagestate:'',
     passwordmessageerrorstate:'',
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


static getDerivedStateFromProps(props, state) {
  const { params } = props.navigation.state;
  state.loginsuccessmessage=''
  
  console.log(props.loginsuccessEmail)
      if(props.loginsuccessEmail!=undefined){
       if(props.loginsuccessEmail=='success'){
         
       console.log(props.accesstoken.result.access_token)
          _storeAccess= async()=>{
            try {
              await AsyncStorage.setItem('accesstoken',props.accesstoken.result.access_token);
              props.navigation.navigate('TabView')
            } catch (error) {
              console.log(error);
          }
          }
          _storeAccess()
         
        props.dispatch(clearProps())
  
       
     }else{
       console.log(props.loginsuccessEmail.email[0]+"llolo")
         state.loginsuccessmessage=props.loginsuccessEmail.email[0]
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

  onSubmit = () => {
    let { current: field } = this.fieldRef;

    console.log(field.value());
  };

  formatText = (text) => {
    return text.replace(/[^+\d]/g, '');
  };

  btnPress=()=>{

    if(this.state.emailmessagestate=='' || this.state.emailmessagestate==undefined){
      this.setState({emailmessageerrorstate:'Username / Email address field is empty'})

    }else if(this.state.passwordmessagestate=='' || this.state.passwordmessagestate==undefined){
      this.setState({passwordmessageerrorstate:'Password Field is Empty'})

    }else{
      
  //  alert(this.state.emailmessagestate)

    //  this.props.dispatch(loginUser(obj));
    //  this.props.dispatch(clearProps());
    //   if (this.state.passwordmessagestate.length < 6) {
    //     this.setState({passwordmessageerrorstate:'Password must be at least 6 characters long'})
       
    // } else if (this.state.passwordmessagestate.length > 50) {
    //   this.setState({passwordmessageerrorstate:'Please Enter new password too long'})
    
    // } else if (this.state.passwordmessagestate.search(/\d/) == -1) {
    //   this.setState({passwordmessageerrorstate:'Contain at least one number,'})
      
    // } else if (this.state.passwordmessagestate.search(/[a-z]/) == -1) {
    //   this.setState({passwordmessageerrorstate:'Contain at least one lowercase letter'})
     
    // }else if (this.state.passwordmessagestate.search(/[A-Z]/) == -1) {
    //   this.setState({passwordmessageerrorstate:'Contain at least one uppercase letter'})
   
    // } else if (this.state.passwordmessagestate.search(/[!@#$%^&*]/) == -1) {
    //     this.setState({passwordmessageerrorstate:'Contain at least one Special character'})

    if (this.state.passwordmessagestate.length < 6) {
      this.setState({passwordmessageerrorstate:'Password must be at least 6 characters long'})
    }else{
      const obj = {
        email :this.state.emailmessagestate,
        password : this.state.passwordmessagestate
     }

     this.props.dispatch(loginUser(obj));
     this.props.dispatch(clearProps());
     

    }

     

    }


  }

  focusEmail=()=>{
    this.setState({emailmessageerrorstate:''})
    this.setState({loginsuccessmessage:''})
  }

  blurEmail=()=>{
    if(this.state.emailmessagestate==''){
      this.setState({emailmessageerrorstate:'Username / Email address field is empty'})
  }
  }

  focusPassword=()=>{
    this.setState({passwordmessageerrorstate:''})
    this.setState({loginsuccessmessage:''})
  }

  blurPassword=()=>{
    if(this.state.passwordmessagestate==''){
      this.setState({passwordmessageerrorstate:'Password Field is Empty'})
  }
  }


  render() {
         if(this.state.orientation=='portrait'){
        return (
        
          <SafeAreaView style={styles.wrapper}>
              <NavBarDefault onPress={() => this.props.navigation.navigate('LoginOrSignup')}/>
       
            <ScrollView style={{backgroundColor:'#ffffff'}}>

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
               
                onChangeText={text => {
                  this.setState({emailmessagestate: text });
                }}
                fontSize={wp('4%')}
               
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
            

          <TextField
                label={"Password"}
               // value={this.state.text}
               
                onChangeText={text => {
                  this.setState({passwordmessagestate: text });
                }}
                error={this.state.passwordmessageerrorstate}
                fontSize={wp('4%')}
                onFocus={()=>this.focusPassword()}
                onBlur={()=>this.blurPassword()}
                secureTextEntry
                baseColor="gray"
                tintColor="red"
                containerStyle={{ width: wp('80%')}}
                formatText={text => {
                  console.log(text);
                  return text;
                }}
              />
           
           <Buttons  text="Login" btnfontSize={wp('4%')}
                          btnbackgroundColor='#D11F2E' 
                          btnborderColor='#D11F2E'
                          btntxtncolor="#ffffff"
                          btnHight={70}
                          btnMarginRight={wp('10%')}  
                          btnMarginLeft={wp('10%')} 
                          onPress={()=>this.btnPress()}/>
                           {this.state.loginsuccessmessage==''?
                        null
                          :
                          <Text style={{alignContent:'center',color:'red',fontSize:wp('3.5%')}}>
                           {this.state.loginsuccessmessage}
                         </Text>

                          }
                    

                                 
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('ForgetPassword')}}>
              <View style={{  alignItems: 'center' }}>
              <Text style={{ color:'red', marginTop: wp('5%'),fontSize:wp('4%') }} >
                 Forgot Password?
              </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {this.props.navigation.navigate('SignUpfirst') }}>
              <View style={{ alignItems: 'center',paddingBottom:wp('20%') }}>
              <Text style={{ color:'grey',fontSize:wp('3%')}} >
                 Don't have an account?
              </Text>
              </View>
            </TouchableOpacity>

                    </View>



                 
                      


        
     
                        
                      </View>
             
                    
                    
                    
              
            </ScrollView>
                    
                    
             
                      </SafeAreaView>
                     
            
      );
   }else if(this.state.orientation=='landscape'){
    return (
        
      <SafeAreaView style={styles.wrapper1}>
          <NavBarDefault onPress={() => this.props.navigation.navigate('LoginOrSignup')}/>
   
        <ScrollView style={{backgroundColor:'#ffffff'}}>

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
           
            onChangeText={text => {
              this.setState({emailmessagestate: text });
            }}
            fontSize={wp('4%')}
           
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
        

      <TextField
            label={"Password"}
           // value={this.state.text}
           
            onChangeText={text => {
              this.setState({passwordmessagestate: text });
            }}
            error={this.state.passwordmessageerrorstate}
            fontSize={wp('4%')}
            onFocus={()=>this.focusPassword()}
            onBlur={()=>this.blurPassword()}
            secureTextEntry
            baseColor="gray"
            tintColor="red"
            containerStyle={{ width: wp('80%')}}
            formatText={text => {
              console.log(text);
              return text;
            }}
          />
       
       <Buttons  text="Login" btnfontSize={wp('4%')}
                      btnbackgroundColor='#D11F2E' 
                      btnborderColor='#D11F2E'
                      btntxtncolor="#ffffff"
                      btnHight={70}
                      btnMarginRight={wp('10%')}  
                      btnMarginLeft={wp('10%')} 
                      onPress={()=>this.btnPress()}/>
                       {this.state.loginsuccessmessage==''?
                    null
                      :
                      <Text style={{alignContent:'center',color:'red',fontSize:wp('3.5%')}}>
                       {this.state.loginsuccessmessage}
                     </Text>

                      }
                

                             
        <TouchableOpacity onPress={() => { this.props.navigation.navigate('ForgetPassword')}}>
          <View style={{  alignItems: 'center' }}>
          <Text style={{ color:'red', marginTop: wp('5%'),fontSize:wp('4%') }} >
             Forgot Password?
          </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {this.props.navigation.navigate('SignUpfirst') }}>
          <View style={{ alignItems: 'center',paddingBottom:wp('20%') }}>
          <Text style={{ color:'grey',fontSize:wp('3%')}} >
             Don't have an account?
          </Text>
          </View>
        </TouchableOpacity>

                </View>



             
                  


    
 
                    
                  </View>
         
                
                
                
          
        </ScrollView>
                
                
         
                  </SafeAreaView>
                 
        
  );
   }
     
    
      
    
  }
}

const mapStateToProps = state =>({ 
  loginsuccessEmail:state.startUpReducer.loginsuccessEmail,
  loading:state.startUpReducer.loading,
  accesstoken:state.startUpReducer.accesstoken

});

export default connect(mapStateToProps)(Login);