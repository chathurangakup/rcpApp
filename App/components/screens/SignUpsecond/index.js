import React, { Component } from 'react';
import {
  View, Text,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Linking

 
} from 'react-native';
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'react-native-material-textfield';
import { Dropdown } from 'react-native-material-dropdown';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MultiSelect from 'react-native-multiple-select';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { CheckBox } from 'react-native-elements';


import Buttons from '../../uiElements/Buttons/RoundButtons'
import NavBarDefault from '../../uiElements/NavBarDefault';
import registerAction from '../../redux/StartUp/actions';
import Loading from '../../uiElements/Loading';

const {registerEmail,getCountries,getProducts,clearProps,} = registerAction;
const imageWidth = Dimensions.get('window').width;

import styles from './styles';

// const imageWidth = Dimensions.get('window').width;
let countriesArraydata;
let productdata;
class SignupSecond extends Component {
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
     selectedItems:[],
     selecteditemerror:'',
     countrynameerrorstate:'',
     countrynamestate:'',
     statenamestate:'',
     statenameerorstate:'',
     distributerstate:"",
     distributererrorstate:'',
     passwordstate:'',
     passworderrorstate:'',
     confirmpasswordstate:'',
     confirmpassworderrorstate:'',
     confirmpasswordnotmatcherrorstate:'',
     checked1:false,
     checked2:false,
     checked3:false,
     countriesidstate:'',
     countriesArrayResultDesc:[],
     countriesArrayObj:{},

     productsArrayResultDesc:[],
     productsArrayResultObj:{},

     successmessage:'',

     orientation:''

    }
};


static getDerivedStateFromProps(props, state) {
 
  state.countriesArrayResultDesc=[];
  state.productsArrayResultDesc=[]
  console.log(props.productsArray)
      if(props.productsArray!=undefined){

        for( var i=0, len= props.productsArray.length; i < len; i++ ){
          
          state.productsArrayResultObj = { 
            name:props.productsArray[i].name,
            id:props.productsArray[i].id,
          };
           state.productsArrayResultDesc.push(state.productsArrayResultObj)
           productdata=state.productsArrayResultDesc

          
      }//end for
        
        }//end for
        console.log(props.countriesArray)
        if(props.countriesArray!=undefined){
         // alert('ll')
          for( var i=0, len= props.countriesArray.length; i < len; i++ ){
          
              state.countriesArrayObj = { 
                
                value:props.countriesArray[i].name,
                id:props.countriesArray[i].id,
              };
               state.countriesArrayResultDesc.push(state.countriesArrayObj)
               countriesArraydata=state.countriesArrayResultDesc
  
           
          }//end for
         
        }

        if(props.successEmail!=undefined){
          if(props.successEmail=='success'){
             props.navigation.navigate('ConfirmRegistration')
          }else{
           
            if(props.successEmail.phone_no==undefined){

            }else{
              state.successmessage=props.successEmail.phone_no
            }
           
          }

        }

        console.log(props.productdata)
      

}



  
  componentDidMount() {
    this.props.dispatch(getCountries())
    this.props.dispatch(getProducts())
  
 
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

 
  onSelectedItemsChange = (Items) => {
    this.setState({selecteditemerror:''})
    this.setState({ selectedItems:Items });
  };

  btnPress=async()=>{
   // alert(this.state.countriesidstate)
    this.setState({confirmpassworderrorstate:''})
    this.setState({passworderrorstate:''})
   if(this.state.countriesidstate==''){
      this.setState({countrynameerrorstate:'Country name is empty'})
    }else if(this.state.selectedItems.length==0){
      this.setState({selecteditemerror:'Select one or more item'})
    }else if(this.state.statenamestate==''){
      this.setState({statenameerorstate:'State name is empty'})
    }else  if(this.state.distributerstate==''){
      this.setState({distributererrorstate:'Distributor name is empty'})
    }else if(this.state.passwordstate==''){
      this.setState({passworderrorstate:'Password  is empty'})
    }else if(this.state.confirmpasswordstate==''){
      this.setState({confirmpasswordnotmatcherrorstate:'Confirm password  is empty'})
    }else if(this.state.passwordstate!=this.state.confirmpasswordstate){
      this.setState({confirmpasswordnotmatcherrorstate:'Passwords do not match'})
    }else{
      if (this.state.passwordstate.length < 6) {
        this.setState({confirmpassworderrorstate:'Please Enter new password contain minimum 6 charactors'})
       
    } else if (this.state.passwordstate.length > 50) {
      this.setState({confirmpassworderrorstate:'Please Enter new password too long'})
    
    } else if (this.state.passwordstate.search(/\d/) == -1) {
      this.setState({confirmpassworderrorstate:'Contain at least one number,'})
      
    } else if (this.state.passwordstate.search(/[a-z]/) == -1) {
      this.setState({confirmpassworderrorstate:'Contain at least one lowercase letter'})
     
    }else if (this.state.passwordstate.search(/[A-Z]/) == -1) {
      this.setState({confirmpassworderrorstate:'Contain at least one uppercase letter'})
   
    } else if (this.state.passwordstate.search(/[!@#$%^&*]/) == -1) {
        this.setState({confirmpassworderrorstate:'Contain at least one Special character'})

    }else{
       if(this.state.checked1==false){
      alert(' Please Read & Agree by selecting Terms & Conditions And Privacy Policy.')
      }else if(this.state.checked2==false){
      alert(' Please Read & Agree by selecting Terms & Conditions And Privacy Policy.')
      // if(this.state.checked3==false){
      //   alert('please read and select " Terms and conditions"')
      // }
     }else{

  const title = await AsyncStorage.getItem('title');
  const firstname = await AsyncStorage.getItem('firstname');
  const lastname = await AsyncStorage.getItem('lastname');
  const email = await AsyncStorage.getItem('email');
  const organization = await AsyncStorage.getItem('organization');
  const industryid = await AsyncStorage.getItem('industryid');
  const phoneno = await AsyncStorage.getItem('phoneno');
  

  const obj = {
  
    
      first_name : firstname,
      last_name : lastname,
      email :email,
      password : this.state.passwordstate,
      password_confirmation : this.state.passwordstate,
      industry_id : parseInt(industryid) ,
      products : this.state.selectedItems,
      title : title,
      phone_no :phoneno,
      organization : organization,
      state : this.state.statenamestate,
      country_id : this.state.countriesidstate,
      terms_and_condition:this.state.checked1,
      marketing_agreement:this.state.checked3,
      privacy_policy:this.state.checked2

    

 }

 this.props.dispatch(registerEmail(obj));
}

     
    }//check password validation
         
  }
}



   
  //  alert(this.state.passwordstate+""+this.state.confirmpasswordstate)
  
  
   // console.log(this.state.checked)
  

  focusCountryName=()=>{
    this.setState({countrynameerrorstate:''})
  }
  blurCountryName=()=>{
    if(this.state.countrynamestate==''){
      this.setState({countrynameerrorstate:'Country name  is empty'})
  }
  }

  focusState=()=>{
    this.setState({statenameerorstate:''})
  }
  blurState=()=>{
    if(this.state.statenamestate==''){
      this.setState({statenameerorstate:'State  is empty'})
  }
  }

  focusDistributer=()=>{
    this.setState({distributererrorstate:''})
  }
  blurDistributer=()=>{
    if(this.state.distributerstate==''){
      this.setState({distributererrorstate:'Distributer  is empty'})
  }
  }

  focusPassword=()=>{
    this.setState({passworderrorstate:''})
  }
  blurPassword=()=>{
    if(this.state.passwordstate==''){
      this.setState({passworderrorstate:'Password  is empty'})
  }
  }
  focusConfirmpassword=()=>{
    // if(this.state.passwordstate!=''){
     
    //   if (this.state.passwordstate.length < 6) {
    //     alert(this.state.passwordstate.length );
    //     this.setState({confirmpassworderrorstate:'Please Enter new password contain minimum 6 charactors'})
       
    // } else if (this.state.passwordstate.length > 50) {
    //   this.setState({confirmpassworderrorstate:'Please Enter new password too long'})
    
    // } else if (this.state.passwordstate.search(/\d/) == -1) {
    //   this.setState({confirmpassworderrorstate:'Contain at least one number,'})
      
    // } else if (this.state.passwordstate.search(/[a-z]/) == -1) {
    //   this.setState({confirmpassworderrorstate:'Contain at least one lowercase letter'})
     
    // }else if (this.state.passwordstate.search(/[A-Z]/) == -1) {
    //   this.setState({confirmpassworderrorstate:'Contain at least one uppercase letter'})
   
    // } else if (this.state.passwordstate.search(/[!@#$%^&*]/) == -1) {
    //     this.setState({confirmpassworderrorstate:'Contain at least one Special character'})
    // }

  //  }
   
    this.setState({confirmpassworderrorstate:''})
    this.setState({confirmpasswordnotmatcherrorstate:''})
  }
  blurConfirmpassword=()=>{
    if(this.state.confirmpasswordstate==''){
      this.setState({confirmpasswordnotmatcherrorstate:'Confirm password is empty'})
  }
  }

  selectCountry=(id)=>{
    this.setState({countriesidstate:id})
    this.setState({countrynameerrorstate:''})
    this.setState({successmessage:''})
  }
 


  render() {
   
     
        return (
        
         <SafeAreaView style={styles.wrapper}>
        <NavBarDefault name={'Registration'}  onPress={() => this.props.navigation.navigate('SignUpfirst')}/>
          
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


{this.props.loading && <Loading navigation={this.props.navigation} animating={true} />}
                    <View style={{alignItems:'center', width: '100%'}}>
   


                  <Dropdown
                                label='*Country'
                              
                                data={countriesArraydata}
                                baseColor='gray'
                                rippleInsets={{ top: 32, bottom: 20}}
                                containerStyle={styles.dropdown}
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
                                onChangeText={(value,index,data) => this.selectCountry(data[index].id)}
                            />
                      <View style={{alignSelf:'flex-start',paddingLeft:wp('10%')}}>
                          {this.state.countriesidstate==''?
         <Text style={{color:'red'}}>
             {this.state.countrynameerrorstate}
      </Text>:
           null
           
          } 
                          </View>
                     

  


               <TextField
                label={"*State"}
               // value={this.state.text}
               
                onChangeText={text => {
                  this.setState({ statenamestate:text });
                }}
                error={this.state.statenameerorstate}
                fontSize={wp('4%')}
                labelFontSize={wp('3%')}
                onFocus={()=>this.focusState()}
                onBlur={()=>this.blurState()}
                baseColor="gray"
                tintColor="gray"
                containerStyle={{ width: wp('80%')}}
                formatText={text => {
                  console.log(text);
                  return text;
                }}
              />   

                <TextField
                label={"*Distributor"}
               // value={this.state.text}
               fontSize={wp('4%')}
               labelFontSize={wp('3%')}
                onChangeText={text => {
                  this.setState({distributerstate: text });
                }}
                error={this.state.distributererrorstate}
                onFocus={()=>this.focusDistributer()}
                onBlur={()=>this.blurDistributer()}
                baseColor="gray"
                tintColor="red"
                containerStyle={{ width: wp('80%')}}
                formatText={text => {
                  console.log(text);
                  return text;
                }}
              />   
              <View style={{marginTop:wp('4%'),paddingBottom:wp('1%')}}>
              <Text style={{fontSize:wp('3%')}}>Add Rubbermaid Commercial Products in Use</Text>
              </View>
             
  <View style={{width:wp('80%'),paddingTop:10 }}>
 
<MultiSelect
         
          items={productdata}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={(item)=>this.onSelectedItemsChange(item)}
          selectedItems={this.state.selectedItems}
          fontSize={wp('3%')}
          selectText="   Pick Items"
          searchInputPlaceholderText="Search Items..."
          onChangeInput={ (name)=> console.log(name)}
          hideSearch={true}
       
          tagRemoveIconColor="#000"
          tagBorderColor="#000"
          tagTextColor="#000"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: '#CCC' }}
          submitButtonColor="#D11F2E"
          submitButtonText="Submit"
        />
         <View>
           {this.state.selecteditemerror==''?
               null
                :
               <Text style={{color:'red'}}>
                    {this.state.selecteditemerror}
               </Text>
           }
          
         </View>
          
        </View>

  
                   
            

          <TextField
                label={"Password"}
                value={this.state.text}
                fontSize={wp('4%')}
               labelFontSize={wp('3%')}
                onChangeText={text => {
                  this.setState({ passwordstate:text });
                }}
                error={this.state.passworderrorstate}
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
              {this.state.confirmpassworderrorstate!=''?
               <View style={{paddingLeft:wp('5.5%'),paddingRight:wp('5.5%')}}>
               <Text style={{color:'red',fontSize:11}}>Password contain at least 6 charactors.1 Uppercase letter,1 lowercase letter,1 special charactor and one number </Text>
 
               </View>
              : 

              <View style={{paddingLeft:wp('5.5%'),paddingRight:wp('5.5%')}}>
              <Text style={{color:'grey',fontSize:11}}>Password contain at least 6 charactors.1 Uppercase letter,1 lowercase letter,1 special charactor and one number </Text>

              </View>
              
            }
              
             

          <TextField
                label={"Confirm Password"}
               // value={this.state.text}
               fontSize={wp('4%')}
               labelFontSize={wp('3%')}
                onChangeText={text => {
                  this.setState({ confirmpasswordstate:text });
                }}
                error={this.state.confirmpasswordnotmatcherrorstate}
                onFocus={()=>this.focusConfirmpassword()}
                onBlur={()=>this.blurConfirmpassword()}
                secureTextEntry
                baseColor="gray"
                tintColor="red"
                containerStyle={{ width: wp('80%')}}
                formatText={text => {
                  console.log(text);
                  return text;
                }}
              />
            

<View style={{ borderColor: 'red', flexDirection: 'row',flex:1,width: wp('100%') }}>
                     <View style={{flex:0.2,paddingLeft:wp('7%'),paddingRight:wp('5%')}}>
                          <CheckBox
                          checkedColor='red'
                                   checked={this.state.checked1}
                                    onPress={() => this.setState({ checked1: !this.state.checked1 })}
                                   />

                          </View>
                    <View style={{flex:0.8,paddingTop:10,paddingRight:5}}>
                    <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://smartapp.rcpanz.com.au/terms')}}> 
                          <Text style={{fontSize:wp('4%')}}>*I agree to the 
                            <Text style={{ color: 'red', textDecorationLine: 'underline',fontSize:wp('4%') }}> Terms & condition </Text>
                                                                of this Application.
                                                            </Text>
                     </TouchableOpacity> 
                    </View>

      
          </View>


          <View style={{ borderColor: 'red', flexDirection: 'row',flex:1,width: wp('100%')}}>
                                <View style={{flex:0.2,paddingLeft:wp('7%'),paddingRight:wp('5%')}}>
                          <CheckBox
                          checkedColor='red'
                                   checked={this.state.checked2}
                                    onPress={() => this.setState({ checked2: !this.state.checked2 })}
                                   />

                          </View>
                    <View style={{flex:0.8,paddingTop:wp('5%'),paddingRight:wp('3%')}}>
                      <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://smartapp.rcpanz.com.au/privacy')}}>
                      <Text style={{fontSize:wp('4%')}}>*Any personal information you provide to us when registering to use this application will be collected in accordance with our
                         <Text style={{ color: 'red', textDecorationLine: 'underline',fontSize:wp('4%') }}> Privacy Policy </Text>
                                                      
                                </Text>
                      </TouchableOpacity>
                    

                    </View>

                               

                    </View>
              </View>


          

                    <View style={{ borderColor: 'red', flexDirection: 'row',flex:1,width: wp('100%') }}>
                                <View style={{flex:0.2,paddingLeft:wp('7%'),paddingRight:wp('5%')}}>
                          <CheckBox
                          checkedColor='red'
                                   checked={this.state.checked3}
                                    onPress={() => this.setState({ checked3: !this.state.checked3 })}
                                   />

                          </View>
                    <View style={{flex:0.8,paddingTop:wp('5%'),paddingRight:wp('3%')}}>
                    <Text style={{justifyContent:'center',fontSize:wp('4%')}}>I wish to receive marketing communications from Newell Australia Pty Limited and I understand I can opt-out of receiving such marketing communications at any time using the unsubscribe facility provided in the marketing communication or by contacting Newell Australia Pty Limited.                
                      </Text>

                    </View>

                               

                    </View>
                   






                

                  <View style={{marginBottom:wp('35%')}}>
                  <Buttons  text="Register" btnfontSize={wp('5%')}
                          btnbackgroundColor='#D11F2E' 
                          btnborderColor='#D11F2E'
                          btntxtncolor="#ffffff"
                          btnHight={70}
                          btnMarginRight={imageWidth/50}  
                          btnMarginLeft={imageWidth/50} 
                          onPress={()=>this.btnPress()}/>
                          {this.state.successmessage==''?
                        null
                          :
                          <Text style={{alignContent:'center',color:'red'}}>
                           {this.state.successmessage}
                         </Text>

                          }
                    

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
  productsArray:state.startUpReducer.productsArray,
  countriesArray:state.startUpReducer.countriesArray,
  successEmail:state.startUpReducer.successEmail
});

export default connect(mapStateToProps)(SignupSecond);