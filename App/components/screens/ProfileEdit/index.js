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

import profileAction from '../../redux/Profile/actions';
import Loading from '../../uiElements/Loading';

const {getProfiledetails,getCountries,getIndustries,editProfiledetails,clearProps,} = profileAction;

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
     titlestate: '',
     firstnamestate:'',
     firstnamecnagestate:'',
     last_namestate:'',
     last_namechangestate:'',
     emailstate:'',
     emailchangestate:'',
     phone_nostate:'',
     phone_nochangestate:'',
     profile_image_urlstate:'',
     organizationstate:'',
     organizationchangestate:'',
     distributerstate:'',
     distributerchangestate:'',
     industry_idstate:'',
     industry_changeidstate:'',
     industry_namestate:'',
     role_idstate:'',
     role_namestate:'',
     country_idstate:'',
     country_idchangestate:'',
     countryid_changestate:'',
     country_namestate:'',
     statestate:'',
     statechangestate:'',

     industriesArrayResultDesc:[],
     industriesArrayObj:{},

     countriesArrayResultDesc:[],
     countriesArrayObj:{},

    }
};



static getDerivedStateFromProps(props, state) {
  const { params } = props.navigation.state; 

  state.nodatemessage='';

  state.industriesArrayResultDesc=[];
  state.countriesArrayResultDesc=[];

  if(props.profiledataArray!=undefined){
      state.titlestate=props.profiledataArray.title,
      state.firstnamestate=props.profiledataArray.first_name
      state.last_namestate=props.profiledataArray.last_name,
      state.emailstate=props.profiledataArray.email,
      state.phone_nostate=props.profiledataArray.phone_no,
      state.profile_image_urlstate=props.profiledataArray.profile_image_url,
      state.organizationstate=props.profiledataArray.organization,
      state.distributerstate=props.profiledataArray.distributer,
      state.industry_idstate=props.profiledataArray.industry_id,
      state.industry_namestate=props.profiledataArray.industry_name,
      state.role_idstate=props.profiledataArray.role_id,
      state.role_namestate=props.profiledataArray.role_name,
      state.country_idstate=props.profiledataArray.country_id,
      state.country_namestate=props.profiledataArray.country_name,
      state.statestate=props.profiledataArray.state
      
  }

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


   if(props.editprofiledata!=undefined){
    _storeAccess= async()=>{
      try {
        const accesstoken = await AsyncStorage.getItem('accesstoken')
        props.dispatch(getProfiledetails(accesstoken))
        props.dispatch(getCountries(accesstoken))
        props.dispatch(getIndustries(accesstoken))
        props.dispatch(clearProps())
        alert('successfully updated')
      } catch (error) {
        console.log(error);
    }
    }
    _storeAccess()

   }
    console.log(props.editprofiledata);

  }

 
componentDidMount() {
  this.getData()
}

getData = async () => {
  try {
    const accesstoken = await AsyncStorage.getItem('accesstoken')
  
   // alert(categoryid)
      if(accesstoken != null){
            this.props.dispatch(getProfiledetails(accesstoken))
             this.props.dispatch(getCountries(accesstoken))
            this.props.dispatch(getIndustries(accesstoken))
      }else{
        this.props.navigation.navigate('LoginOrSignup')
      }
  } catch(e) {
    // error reading value
  }
}

  
  componentWillUnmount() {

  }
 



  logoutPress=async()=>{
    console.log('kkk')
    try {
      const accesstoken = await AsyncStorage.getItem('accesstoken')
      this.props.dispatch(logout(accesstoken))
      console.log('kkk')
      
       
    } catch(e) {
      // error reading value
    } 

    try {
    
        await AsyncStorage.setItem('accesstoken','')
     
        this.props.navigation.navigate('LoginOrSignup')
      
    } catch(e) {
      // error reading value
    } 
  }

  btnPress=async()=>{

    if(this.state.firstnamestate=='' && this.state.firstnamecnagestate==''){
      alert("empty text field1")

    }else if(this.state.last_namestate=='' && this.state.last_namechangestate==''){
      alert("empty text field2")
    }else if(this.state.emailstate=='' && this.state.emailchangestate==''){
      alert("empty text field3")
    }else if(this.state.phone_nostate=='' && this.state.phone_nochangestate==''){
      alert("empty text field4")
    }else if(this.state.statestate=='' && this.state.statechangestate==''){
      alert("empty text field5")
    }else if(this.state.organizationstate=='' && this.state.organizationchangestate==''){
      alert("empty text field6")
    }else if(this.state.industry_idstate=='' && this.state.industry_changeidstate==''){
      alert("empty text field7")
    }else if(this.state.country_idstate=='' && this.state.countryid_changestate==''){
      alert("empty text field8")
    }else{

      const obj = {
        title : this.state.titlestate,
        "first_name" : this.state.firstnamecnagestate !== undefined && this.state.firstnamecnagestate !== "" ? this.state.firstnamecnagestate : this.state.firstnamestate,
        "last_name" :  this.state.last_namechangestate !== undefined && this.state.last_namechangestate !== "" ? this.state.last_namechangestate : this.state.last_namestate,
        "email" : this.state.emailchangestate !== undefined && this.state.emailchangestate !== "" ? this.state.emailchangestate : this.state.emailstate,
        "phone_no" : this.state.phone_nochangestate !== undefined && this.state.phone_nochangestate !== "" ? this.state.phone_nochangestate : this.state.phone_nostate,
        "state" : this.state.statechangestate !== undefined && this.state.statechangestate !== "" ? this.state.statechangestate : this.state.statestate,
        "country_id" : this.state.country_idchangestate !== undefined && this.state.country_idchangestate !== "" ? this.state.country_idchangestate : this.state.country_idstate,
        "organization" : this.state.organizationchangestate !== undefined && this.state.organizationchangestate !== "" ? this.state.organizationchangestate : this.state.organizationstate,
        "distributer" : this.state.distributerchangestate !== undefined && this.state.distributerchangestate !== "" ? this.state.distributerchangestate : this.state.distributerstate,
        "industry_id" : this.state.industry_changeidstate !== undefined && this.state.industry_changeidstate !== "" ? this.state.industry_changeidstate : this.state.industry_idstate,
      }
  
      try {
        const accesstoken = await AsyncStorage.getItem('accesstoken')
      
       // alert(categoryid)
          if(accesstoken != null){
                this.props.dispatch(editProfiledetails(accesstoken,obj))
                
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
      <SafeAreaView >
              <KeyboardAvoidingView
                   style={styles.container}
                   behavior="padding"
                >
    
        <ScrollView >
            <View style={styles.header}>
              <View style={{padding:wp('5%')}}>
                  <Text style={{fontSize:wp('6%'),color:'white',fontWeight:'bold'}}>Edit Profile</Text>
              </View>
            <View>
            <View style={{padding:wp('6%')}}>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('ChanagePassword')}>
                <Text style={{color:'white',fontWeight:'bold',fontSize:wp('4%')}}>Change password</Text>
              </TouchableOpacity>
              </View>
            </View>
          </View>

          {this.props.loading && <Loading navigation={this.props.navigation} animating={true} />}
          <View style={styles.bodycontainer}>
          {this.props.imgurl==undefined || this.props.imgurl=="" ?
          <Image style={styles.avatar} source={require('../../images/face2.png')}/>
          :
          <Image style={styles.avatar} source={{uri:this.props.imgurl}}/>
          }
          <View style={styles.body}>
            <View style={styles.bodyContent}>
               
              <View style={{alignItems:'center', width: '100%',height:'100%'}}>
                    <View style={{ flexDirection: 'row',width: '100%' }}>
                    <View style={{flex:0.4}}>
                        <Dropdown
                                  label='Title'
                                  data={titles}
                                  value={this.state.titlestate}
                                  baseColor='gray'
                                  rippleInsets={{ top: 0, bottom: 0}}
                                  fontSize={wp('4%')}
                                  labelFontSize={wp('3%')}
                                  containerStyle={{
                                    marginLeft:wp('10%'),
                                  
                                    marginRight:20,
                                    
                                    borderBottomWidth:0,
                                    borderBottomColor:'gray',   
                                  } 
                                  }
                              
                                  onChangeText={(value) => this.setState({ titlestate: value })}
                              />
                      </View> 
                     

                        <View style={{flex:0.6}}>
                        <TextField
                            label={"*First Name"}
                          // va={this.state.firstnamestate}
                           defaultValue={this.state.firstnamestate}
                           fontSize={wp('4%')}
                           labelFontSize={wp('3%')}
                            onChangeText={text => {
                              this.setState({firstnamecnagestate: text });
                            }}
                            error={this.state.firstnameerrorstate}
                        
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

                          <TextField
                              label={"*Last Name"}
                            // value={this.state.text}
                            fontSize={wp('4%')}
                            labelFontSize={wp('3%')}
                              defaultValue={this.state.last_namestate}
                              onChangeText={text => {
                                this.setState({ last_namechangestate:text });
                              }}
                              error={this.state.lastnameerrorstate}
                             
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
                                defaultValue={this.state.emailstate}
                                onChangeText={text => {
                                  this.setState({ emailchangestate:text });
                                }}
                                error={this.state.emailerrorstate}
                               
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
                            fontSize={wp('4%')}
                            labelFontSize={wp('3%')}
                            defaultValue={this.state.phone_nostate}
                              onChangeText={text => {
                                this.setState({ phone_nochangestate:text });
                              }}
                              error={this.state.phonenoerrorstate}
                             
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
                label={"State"}
               // value={this.state.text}
               fontSize={wp('4%')}
               labelFontSize={wp('3%')}
               defaultValue={this.state.statestate}
                onChangeText={text => {
                  this.setState({ statechangestate:text });
                }}
                error={this.state.organizationerrorstate}
               
              
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
               defaultValue={this.state.organizationstate}
                onChangeText={text => {
                  this.setState({ organizationchangestate:text });
                }}
                error={this.state.organizationerrorstate}
               
              
                baseColor="gray"
                tintColor="red"
                containerStyle={{ width: wp('80%')}}
                formatText={text => {
                  console.log(text);
                  return text;
                }}
              />


<TextField
                label={"Distributer"}
               // value={this.state.text}
               fontSize={wp('4%')}
               labelFontSize={wp('3%')}
               defaultValue={this.state.distributerstate}
               onChangeText={text => {
                  this.setState({ distributerchangestate:text });
                }}
                error={this.state.organizationerrorstate}
                
                
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
                               value={this.state.industry_namestate}
                                data={industriesArraydata}
                                baseColor='gray'
                                rippleInsets={{ top: 32, bottom: 20}}
                                fontSize={wp('4%')}
                                labelFontSize={wp('3%')}
                                containerStyle={styles.dropdown}
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
                                onChangeText={(value,index,data) => this.setState({industry_changeidstate:data[index].id})}
                            /> 
           {this.state.industraiidstate==''?
         <Text style={{color:'red'}}>
             {this.state.industraiiderrorstate}
      </Text>:
           null
           
          }


<Dropdown
                                label='Country'
                              value={this.state.country_namestate}
                                data={countriesArraydata}
                                baseColor='gray'
                                fontSize={wp('4%')}
                                labelFontSize={wp('3%')}
                                rippleInsets={{ top: 32, bottom: 20}}
                                containerStyle={styles.dropdown}
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
                                onChangeText={(value,index,data) => this.setState({countryid_changestate:data[index].id})}
                            /> 
           {this.state.industraiidstate==''?
         <Text style={{color:'red'}}>
             {this.state.industraiiderrorstate}
      </Text>:
           null
           
          }
      
      
      <View style={{marginBottom:wp('15%')}}>
      <Buttons  text="Update" btnfontSize={wp('4%')}
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

  loading:state.profileReducer.loading,
  profiledataArray:state.profileReducer.profiledataArray,
  industriesArray:state.profileReducer.industriesArray,
  countriesArray:state.profileReducer.countriesArray,
  editprofiledata:state.profileReducer.editprofiledata



});

export default connect(mapStateToProps)(Profile);