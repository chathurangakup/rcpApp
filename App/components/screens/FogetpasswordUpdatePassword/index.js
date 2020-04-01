import React, { Component } from 'react';
import {
  View, Text,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView
 
} from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import {
  TextField,
 
} from 'react-native-material-textfield';
import { Dropdown } from 'react-native-material-dropdown';

import Buttons from '../../uiElements/Buttons/RoundButtons'
import NavBarDefault from '../../uiElements/NavBarDefault';
import ProfileButton from  '../../uiElements/ProfileButtons';
const imageWidth = Dimensions.get('window').width;

import signupAction from '../../redux/StartUp/actions';
import Loading from '../../uiElements/Loading';

const {updatePassword,clearProps,} = signupAction;

import styles from './styles';

// const imageWidth = Dimensions.get('window').width;
let industriesArraydata;
let countriesArraydata;
class Profile extends Component {
  fieldRef = React.createRef();


  constructor(props){
    super(props);
    this.state = {
     isLogged:false,
     passwordstate:"",
     confirmpasswordstate:'',

    }
};



static getDerivedStateFromProps(props, state) {
  const { params } = props.navigation.state; 
   console.log(props.updatePasswordResult+"kkk")
   if(props.updatePasswordResult!=undefined){
      if(props.updatePasswordResult=='error'){
           alert('Sorry...! No Records')
            props.dispatch(clearProps())
      }else{
        alert('Successfully updated')
       
     
        props.dispatch(clearProps())
        props.navigation.navigate('Login')
      }
   }

}

 
componentDidMount() {
  
}



  
  componentWillUnmount() {

  }
 



  btnPress=async()=>{

    if(this.state.passwordstate=='' ){
      alert("Password is empty")

    }else if(this.state.confirmpasswordstate==''){
      alert("confirm password is empty")
    
    }else if(this.state.passwordstate!=this.state.confirmpasswordstate){
      alert("Password not equal")
    }else{

     
  
      try {
  
        const verificationcode = await AsyncStorage.getItem('verificationcode')
       
        const obj = {
          reset_code : verificationcode,
          new_password: this.state.passwordstate,
          confirm_password : this.state.confirmpasswordstate
       
        }
      
    
          if(verificationcode != null){
            console.log(verificationcode)
                this.props.dispatch(updatePassword(obj))
                
          }else{
                this.props.navigation.navigate('LoginOrSignup')
          }
      } catch(e) {
        // error reading value
      }

   }

   
    // console.log(this.state.titlestate)
    // console.log(this.state.industry_changeidstate)
  }


  render() {



   return ( 
      <SafeAreaView >
              <KeyboardAvoidingView
                   style={styles.container}
                   behavior="padding"
                >
    
        <ScrollView >
           
        <NavBarDefault name={'Update password'}  onPress={() => this.props.navigation.navigate('VerificationCode')}/>
           
          {this.props.loading && <Loading navigation={this.props.navigation} animating={true} />}
          <View style={styles.bodycontainer}>
          {/* {this.props.imgurl==undefined || this.props.imgurl=="" ?
          <Image style={styles.avatar} source={require('../../images/face2.png')}/>
          :
          <Image style={styles.avatar} source={{uri:this.props.imgurl}}/>
          } */}
          <View style={styles.body}>
        

       
          <View style={{paddingTop:0,alignSelf:'center'}}>
                     <Image
                        style={{width:wp('50%'),height:wp('50%')}}
                          source={require('../../images/splash.png')}
                      />
                  <Text style={{fontSize:wp('6%'),color:'red',fontWeight:'bold'}}>Update Password</Text>
              </View>
            <View style={styles.bodyContent}>
           
               
              <View style={{alignItems:'center', width: '100%',height:'100%'}}>

             
                 
                          <TextField
                              label={"*Password"}
                            // value={this.state.text}
                            //  defaultValue={this.state.last_namestate}
                            fontSize={wp('4%')}
                            labelFontSize={wp('3%')}
                              onChangeText={text => {
                                this.setState({ passwordstate:text });
                              }}
                              error={this.state.lastnameerrorstate}
                              secureTextEntry
                              baseColor="gray"
                              tintColor="red"
                              containerStyle={{ width: wp('80%')}}
                              formatText={text => {
                                console.log(text);
                                return text;
                              }}
                            />  

                              <TextField
                                label={"*Confirm password"}
                               // value={this.state.text}
                               // defaultValue={this.state.emailstate}
                               fontSize={wp('4%')}
                               labelFontSize={wp('3%')}
                                onChangeText={text => {
                                  this.setState({ confirmpasswordstate:text });
                                }}
                                error={this.state.emailerrorstate}
                                secureTextEntry
                                baseColor="gray"
                                tintColor="red"
                                containerStyle={{ width: wp('80%')}}
                                formatText={text => {
                                  console.log(text);
                                  return text;
                                }}
                              />   

                             



 
      <View style={{paddingTop:wp('5%'),paddingBottom:wp('5%')}}>
      <Buttons  text="Update Password" btnfontSize={wp('4%')}
                          btnbackgroundColor='#D11F2E' 
                          btnborderColor='#D11F2E'
                          btntxtncolor="#ffffff"
                          btnHight={70}
                          btnMarginRight={imageWidth/50}  
                          btnMarginLeft={imageWidth/50} 
                          onPress={()=>this.btnPress()}/>

      </View>

     
                    

                 
                       
           

                    </View>

                 
               
                   
                 
                      


        
     
                        
            </View>
        </View>
      </View>
      </ScrollView>
      </KeyboardAvoidingView>
   </SafeAreaView>
                     
            
      );
     
    
      
    
  }
}

const mapStateToProps = state =>({ 

  loading:state.startUpReducer.loading,
  updatePasswordResult:state.startUpReducer.updatePasswordResult



});

 export default connect(mapStateToProps)(Profile);
