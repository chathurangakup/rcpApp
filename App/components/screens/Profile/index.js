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
import ProfileButton from  '../../uiElements/ProfileButtons';
const imageWidth = Dimensions.get('window').width;

import profileAction from '../../redux/Profile/actions';
import Loading from '../../uiElements/Loading';

const {logout,clearProps,} = profileAction;

import styles from './styles';

// const imageWidth = Dimensions.get('window').width;
class Profile extends Component {
  fieldRef = React.createRef();


  constructor(props){
    super(props);
    this.state = {
     isLogged:false,
     emailError: false,
    }
};



  
  componentDidMount() {
    
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
     
        this.props.navigation.navigate('Start')
      
    } catch(e) {
      // error reading value
    } 
  }


  render() {
     
        return (
        
          <SafeAreaView style={styles.wrapper}>
       <ScrollView style={styles.container}>
          <View style={styles.header}>
            <View style={{padding:wp('5%')}}>
                <Text style={{fontSize:wp('6%'),color:'white',fontWeight:'bold'}}>My Profile</Text>
            </View>
          <View>
          <View style={{padding:wp('5%')}}>
             <TouchableOpacity onPress={this.openDialog}>
              <Text style={{color:'white',fontWeight:'bold'}}></Text>
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
              <Text style={styles.name}></Text>        
                <View style={{alignContent:'center'}}>
                  <ProfileButton text="Profile"
                     onPress={() => {
                      this.props.navigation.navigate('ProfileEdit')
                  }}
                  >
                  </ProfileButton>
          
                  <ProfileButton text="Contact Us"
                    onPress={() => {
                      this.props.navigation.navigate('ContactUs')
                  }}
                  >
                  </ProfileButton>
                   
                  <ProfileButton text="About Us"
                    onPress={() => {
                      this.props.navigation.navigate('AboutUs')
                  }}
                  >
                  </ProfileButton>

                  <ProfileButton text="Logout"
                    onPress={() => this.logoutPress()}
                  >
                  </ProfileButton>
                   
               </View>  
                     
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


});

export default connect(mapStateToProps)(Profile);