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
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'react-native-material-textfield';
import { Dropdown } from 'react-native-material-dropdown';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';

import Buttons from '../../uiElements/Buttons/RoundButtons'
import NavBarDefault from '../../uiElements/NavBarDefault';
const imageWidth = Dimensions.get('window').width;

import styles from './styles';
import registerAction from '../../redux/StartUp/actions';
//import Loading from '../../../components/uiElements/Loading';

const {registerEmail,getIndustries,clearProps,} = registerAction;

let industriesArraydata=[];
// const imageWidth = Dimensions.get('window').width;
class LoginOrSignup extends Component {
  fieldRef = React.createRef();


  constructor(props){
    super(props);

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
    

    this.state = {
     isLogged:false,
     emailError: false,
     firstnamestate:'',
     firstnameerrorstate:'',

     titleerrorstate:'',

     lastnamestate:'',
     lastnameerrorstate:'',
     emailstate:'',
     emailerrorstate:'',
     phonenostate:'',
     phonenoerrorstate:'',
     organizationstate:'',
     organizationerrorstate:'',
     titlestate:'',
     industraiidstate:'',
     industraiiderrorstate:'',

     industriesArrayResultDesc:[],
     industriesArrayObj:{},

     organization:''
    }

   
};



static getDerivedStateFromProps(props, state) {
  state.industriesArrayResultDesc=[]
  
  console.log(props.industriesArray)
      if(props.industriesArray!=undefined){
        for( var i=0, len= props.industriesArray.length; i < len; i++ ){
        
            state.industriesArrayObj = { 
              
              value:props.industriesArray[i].name,
              id:props.industriesArray[i].id,
            };
             state.industriesArrayResultDesc.push(state.industriesArrayObj)
             industriesArraydata=state.industriesArrayResultDesc

         
        }//end for
       
      }

}



  
  componentDidMount() {
    this.props.dispatch(getIndustries());
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

  focusFirstName=()=>{
   // alert('kkk')
   this.setState({firstnameerrorstate:''});
  
  }

  blurFirstName=()=>{
    if(this.state.firstnamestate==''){
        this.setState({firstnameerrorstate:'First Name is Empty'})
    }else if(this.state.titlestate==''){
      this.setState({titleerrorstate:'Title is Empty'})
    }
   // alert('kjjkk'
  }

  focusLastName=()=>{
    // alert('kkk')
    this.setState({lastnameerrorstate:''})
   }
 
   blurLastName=()=>{
     if(this.state.lastnamestate==''){
         this.setState({lastnameerrorstate:'Last Name is Empty'})
     }
    // alert('kjjkk')
   }

   focusEmail=()=>{
    this.setState({emailerrorstate:''})
   }
   blurEmail=()=>{
    if(this.state.emailstate==''){
      this.setState({emailerrorstate:'Email is Empty'})
   }else {
   
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(re.test(String(this.state.emailstate).toLowerCase())==false){
        this.setState({emailerrorstate:'Email is Error'})
      }
   }
 }

 focusPhonenumber=()=>{
  // alert('kkk')
  this.setState({phonenoerrorstate:''})
 }

 blurPhonenumber=()=>{
   if(this.state.phonenostate==''){
       this.setState({phonenoerrorstate:'Phone no is empty'})
   }else if(this.state.phonenostate.length<3){
    this.setState({phonenoerrorstate:'The phone no must be between 2 and 15 digits'})
   }
  // alert('kjjkk')
 }
 
 focusOrganization=()=>{
  // alert('kkk')
  this.setState({organizationerrorstate:''})
 }

 blurOrganization=()=>{
   if(this.state.organizationstate==''){
       this.setState({organizationerrorstate:'Organization  is empty'})
   }
  // alert('kjjkk')
 }

 btnPress=async()=>{

  

  if(this.state.firstnamestate==''){
    this.setState({firstnameerrorstate:'First Name is Empty'})
  }else if(this.state.titlestate==''){
     this.setState({titleerrorstate:'Title is Empty'})
  }else if(this.state.lastnamestate==''){
    this.setState({lastnameerrorstate:'Last Name is Empty'})
   }else if(this.state.phonenostate==''){
    this.setState({phonenoerrorstate:'Phone no is empty'})
   }else if(this.state.emailstate==''){
    this.setState({emailerrorstate:'Email is Empty'})
   }else if(this.state.organizationstate==''){
    this.setState({organizationerrorstate:'Organization  is empty'})
   }else if(this.state.industraiidstate==''){
    this.setState({industraiiderrorstate:'Industrial  is empty'})
   }else{

    if(this.state.emailerrorstate!=''){

    }else if(this.state.phonenoerrorstate!=''){

    }else{
      try {
        await AsyncStorage.setItem('title', this.state.titlestate);
        await AsyncStorage.setItem('firstname',  this.state.firstnamestate);
        await AsyncStorage.setItem('lastname', this.state.lastnamestate);
        await AsyncStorage.setItem('email', this.state.emailstate);
        await AsyncStorage.setItem('phoneno', this.state.phonenostate);
        await AsyncStorage.setItem('organization', this.state.organizationstate);
        await AsyncStorage.setItem('industryid', this.state.industraiidstate.toString());
        this.props.navigation.navigate('SignUpsecond')
       
     } catch (error) {
       console.log(error);
     }

    }
     
   }
  


 }

 


  render() {

    let titles = [{
      value: 'Mr.',
  }, {
      value: 'Mrs.',
  }, {
      value: 'Miss',
  }, {
      value: 'Other',
  }];
     
        return (
        
          <SafeAreaView style={styles.wrapper}>
        <NavBarDefault name={'Registration'}  onPress={() => this.props.navigation.navigate('LoginOrSignup')}/>
        <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
            <ScrollView contentContainerStyle={{flexGrow: 1}}
  keyboardShouldPersistTaps='handled'>

            <View style={{flex:1,alignItems:'center'}}>
                      <Image
                        style={{width:wp('50%'),height:wp('50%')}}
                          source={require('../../images/splash.png')}
                      />



                    <View style={{alignItems:'center', width: '100%'}}>
                    {this.state.orientation=='landscape' ?
                    <View style={{ flexDirection: 'row',flex:2,alignItems:'center',width: '100%' }}>
                    <View style={{flex:1.5,marginBottom:12}}>
                      
                      <Dropdown
                              label='Title'
                              data={titles}
                              baseColor='gray'
                              rippleInsets={{ top: 32, bottom: 20}}
                              containerStyle={styles.dropdown}
                              fontSize={wp('4%')}
                              containerStyle={{
                                 marginLeft:wp('28%'),
                                 marginRight:20,
                                 
                                borderBottomWidth:1,
                                borderBottomColor:'gray',   
                              } 
                              }
                              inputContainerStyle={{ borderBottomColor: 'transparent' }}
                              onChangeText={(value) => this.setState({ titlestate: value })}
                          />
                      

                    </View>
                        

                      <View style={{flex:1.4}}>
                      <TextField
              label={"*First Name"}
             // va={this.state.firstnamestate}
             
              onChangeText={text => {
                this.setState({firstnamestate: text });
              }}
              fontSize={wp('4%')}
              labelFontSize={wp('3%')}
              error={this.state.firstnameerrorstate}
             onFocus={()=>this.focusFirstName()}
             onBlur={()=>this.blurFirstName()}
              baseColor="gray"
              tintColor="red"
              containerStyle={{ width: wp('53%')}}
              formatText={text => {
                console.log(text);
                return text;
              }}
            />
            </View>
                        
        </View>

        //landscape

:
<View style={{ flexDirection: 'row',flex:2,alignItems:'center',width: '100%' }}>
<View style={{flex:0.6,marginBottom:12}}>
  
  <Dropdown
          label='Title'
          data={titles}
          baseColor='gray'
          rippleInsets={{ top: 32, bottom: 20}}
          containerStyle={styles.dropdown}
          fontSize={wp('4%')}
          labelFontSize={wp('3%')}
          containerStyle={{
             marginLeft:wp('10%'),
             marginRight:20,
             
            borderBottomWidth:1,
            borderBottomColor:'gray',   
          } 
          }
          inputContainerStyle={{ borderBottomColor: 'transparent' }}
          onChangeText={(value) => this.setState({ titlestate: value })}
      />
  

</View>
    

  <View style={{flex:1}}>
  <TextField
label={"*First Name"}
// va={this.state.firstnamestate}

onChangeText={text => {
this.setState({firstnamestate: text });
}}
fontSize={wp('4%')}
labelFontSize={wp('3%')}
error={this.state.firstnameerrorstate}

onFocus={()=>this.focusFirstName()}
onBlur={()=>this.blurFirstName()}
baseColor="gray"
tintColor="red"
containerStyle={{ width: wp('53%')}}
formatText={text => {
console.log(text);
return text;
}}//portrate
/>
</View>
    
</View>

                  
                  }
                    
          {this.state.titlestate=='' ?
           <View style={{paddingRight:wp('55%'),left:0}}>
           <Text style={{color:'red'}}>{this.state.titleerrorstate}</Text>
          </View>
         :
         null
        }
       
         

            <TextField
                label={"*Last Name"}
               // value={this.state.text}
               
                onChangeText={text => {
                  this.setState({ lastnamestate:text });
                }}
                fontSize={wp('4%')}
                labelFontSize={wp('3%')}
                error={this.state.lastnameerrorstate}
                onFocus={()=>this.focusLastName()}
               onBlur={()=>this.blurLastName()}
                baseColor="gray"
                tintColor="red"
                containerStyle={{ width: wp('80%')}}
                formatText={text => {
                  console.log(text);
                  return text;
                }}
              />  

               <TextField
                label={"*Email Address"}
                value={this.state.text}
                fontSize={wp('4%')}
              labelFontSize={wp('3%')}
                onChangeText={text => {
                  this.setState({ emailstate:text });
                }}
                error={this.state.emailerrorstate}
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
                label={"*Phone Number"}
               // value={this.state.text}
               maxLength={15}
               fontSize={wp('4%')}
               labelFontSize={wp('3%')}
                onChangeText={(text) => {
                  let num = text.replace(".", '');
               if(isNaN(num)){
                this.setState({phonenoerrorstate:'Please enter valid phone number'})
                }else{
                  this.setState({ phonenostate:text });
                }
                 
                }}
                error={this.state.phonenoerrorstate}
                onFocus={()=>this.focusPhonenumber()}
                onBlur={()=>this.blurPhonenumber()}
               keyboardType='number-pad'
                baseColor="gray"
                tintColor="red"
                containerStyle={{ width: wp('80%')}}
                formatText={text => {
                  console.log(text);
                  return text;
                }}
              />      
                   
            

          <TextField
                label={"Organization"}
               // value={this.state.text}
               fontSize={wp('4%')}
              labelFontSize={wp('3%')}
                onChangeText={text => {
                  this.setState({ organizationstate:text });
                }}
                error={this.state.organizationerrorstate}
                onFocus={()=>this.focusOrganization()}
                onBlur={()=>this.blurOrganization()}
                
                baseColor="gray"
                tintColor="red"
                containerStyle={{ width: wp('80%')}}
                formatText={text => {
                  console.log(text);
                  return text;
                }}
              />





<Dropdown
                                label='Industry'
                             
                                data={industriesArraydata}
                                baseColor='gray'
                                rippleInsets={{ top: 32, bottom: 20}}
                                containerStyle={styles.dropdown}
                                topofDropdoenItem={wp('3%')}
                                fontSize={wp('4%')}
                                labelFontSize={wp('3%')}
                                containerStyle={{
                           
                                 
                                  width:wp('80%'),
                                  marginVertical:'2%',
                                  justifyContent:'center',
                                 
                                 
                                  borderBottomWidth:1,
                                  borderBottomColor:'gray',   
                                  
                                  
                                  paddingLeft:10,
                                  paddingRight:10,
                                 
                                  
                              }}


inputContainerStyle={{ borderBottomWidth: 2,borderBottomColor:'black', }}
                                inputContainerStyle={{ borderBottomColor: 'transparent' }}
                                onChangeText={(value,index,data) => this.setState({industraiidstate:data[index].id})}
                            />
                            <View style={{alignSelf:'flex-start',paddingLeft:wp('10%')}}>
                            {this.state.industraiidstate==''?
         <Text style={{color:'red'}}>
             {this.state.industraiiderrorstate}
      </Text>:
           null
           
          }
                  </View>
          
      

                  
   
                    
     
           

                    </View>

                  <View style={{marginBottom:wp('35%')}}>
                  <Buttons  text="Next" btnfontSize={wp('4%')}
                          btnbackgroundColor='#D11F2E' 
                          btnborderColor='#D11F2E'
                          btntxtncolor="#ffffff"
                          btnHight={70}
                          btnMarginRight={imageWidth/50}  
                          btnMarginLeft={imageWidth/50} 
                          onPress={()=>this.btnPress()}/>
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
  industriesArray:state.startUpReducer.industriesArray
});

export default connect(mapStateToProps)(LoginOrSignup);
