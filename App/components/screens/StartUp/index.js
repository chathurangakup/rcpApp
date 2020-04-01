import React, { Component } from 'react';
import {
  View, Text,
  Image,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  Alert,
  Modal, Button, TouchableOpacity,
  StatusBar
} from 'react-native';
import { PropTypes } from 'prop-types';
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-community/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import styles from './styles';

const imageWidth = Dimensions.get('window').width;

// const imageWidth = Dimensions.get('window').width;
class StartScreen extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      Alert_Visibility: false 
     }
  }

  static propTypes = {
    navigation: PropTypes.object,
  };

  Show_Custom_Alert(visible) {
 
    this.setState({Alert_Visibility: visible});
    
  }
  ok_Button=()=>{
 
    Alert.alert("OK Button Clicked.");
 
  }

  btnPress(){

    NetInfo.fetch().then(state => {
          if(state.isConnected==true){
            //this.props.navigation.navigate('WebView')
          }else{
            this.Show_Custom_Alert(true)
          }
    });
   
  }

  componentDidMount() {
   // StatusBar.setHidden(true);

     setTimeout( () => {
      console.log('TIME IS UP1');
      NetInfo.fetch().then(state => {
        console.log('TIME IS UP1');
        if(state.isConnected==true){
          console.log('TIME IS UP2');
          this.getData()
         
        }else{
          this.Show_Custom_Alert(true)
        }
      });

    },3000);
   
 }



 getData = async () => {
  try {
    const accesstoken = await AsyncStorage.getItem('accesstoken')
      if(accesstoken != null){
            this.props.navigation.navigate('TabView');
      }else{
        this.props.navigation.navigate('LoginOrSignup')
      }
  } catch(e) {
    // error reading value
  }
}

 componentWillUnmount() {
  //StatusBar.setHidden(false);
}

  render() {
   // const { navigate } = this.props.navigation;
    
    return (
      <SafeAreaView style={styles.wrapper}>

<Modal
 
 visible={this.state.Alert_Visibility}

 transparent={true}

 animationType={"fade"}

 onRequestClose={ () => { this.Show_Custom_Alert(!this.state.Alert_Visibility)} } >


   <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>


       <View style={styles.Alert_Main_View}>


           <Text style={styles.Alert_Title}>No Internet Connection</Text>


           <View style={{ width: '100%', height: 2, backgroundColor: '#fff'}} />


           <Text style={styles.Alert_Message}>Please Check your Internet connection</Text>


           <View style={{ width: '100%', height: 1, backgroundColor: '#fff'}} />


           <View style={{flexDirection: 'row', height: '30%'}}>

               

              
               <TouchableOpacity 
                   style={styles.buttonStyle} 
                   onPress={() => { this.Show_Custom_Alert(!this.state.Alert_Visibility)} } 
                   activeOpacity={0.7} 
                   >

                   <Text style={styles.TextStyle}> OK </Text>
       
               </TouchableOpacity>

           </View>
         
       </View>

   </View>


</Modal>




            <View style={{flex:1,alignItems:'center',marginTop:wp('15%')}}>
            <Image
               style={{width:wp('80%'),height:wp('80%')}}
                source={require('../../images/splash.png')}
           />
           
            </View>

            {/* <View style={{flex:2,marginTop:50}}>
            <ImageBackground source={require('../../images/Illustration.png')} style={{width: '100%', height: '100%'}}>
            <View style={styles.text1}>
                          <Text style={styles.text1style}>Money at your fingertips</Text>
                    </View>
                    <View style={styles.text2}>
                          <Text style={styles.textdisplay}>We move money your</Text>
                          <Text  style={styles.textdisplay}>way, your terms!</Text>
                    </View>
          </ImageBackground>
                   
            </View>
             
            <View style={{flex:1,marginBottom:imageWidth/10,alignItems:'center'}}>
               <Buttons  text="Get Started" btnfontSize={16} btnbackgroundColor='#F45300' btntxtncolor="#ffffff" btnMarginRight={imageWidth/12} btnMarginLeft={imageWidth/12} onPress={()=>this.btnPress()}/>
            </View> */}
              
             
            </SafeAreaView>
    );
  }
}

export default StartScreen;