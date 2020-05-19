import React, { Component } from 'react';
import {
  View, Text,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  ScrollView
 
} from 'react-native';



import CodeFiled from 'react-native-confirmation-code-field';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage';

import Buttons from '../../uiElements/Buttons/RoundButtons';
import NavBarDefault from '../../uiElements/NavBarDefault';

const imageWidth = Dimensions.get('window').width;



//const {loginUser,clearProps} = registerAction;

import styles from './styles';

const codeLength = 4;
// const imageWidth = Dimensions.get('window').width;
class ForgeVerificationCode extends Component {
 


  constructor(props){
    super(props);
    this.state = {
      isdisable:true,
      btnColor:'#e6eef0'
    }
};








  
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


 

  btnPress=async()=>{

      if(this.state.code!=''){
        try {
          await AsyncStorage.setItem('verificationcode',String(this.state.code));
          this.props.navigation.navigate('FogetpasswordUpdatePassword')
        } catch (error) {
          console.log(error);
      }  
      }

  }

  focusEmail=()=>{
    this.setState({emailmessageerrorstate:''})
    this.setState({loginsuccessmessage:''})
  }

  blurEmail=()=>{
    if(this.state.emailmessagestate==''){
      this.setState({emailmessageerrorstate:'Email name  is empty'})
  }
  }

  onFinishCheckingCode = code => {
     //alert(code)
      this.setState({code:code})
      var len=code.length;
     
      if(len==4){
          this.setState({btnColor:'#D11F2E'})
          this.setState({isdisable:false})
      }else{
          this.setState({isdisable:true})
          this.setState({btnColor:'#e6eef0'})
      } 
       
    };
  
   
  
    cellProps = ({ hasValue, index, isFocused }) => {
      if (hasValue) {
          return {
            style: [styles.input, styles.inputNotEmpty],
          };
        }
    
        return {
          style: styles.input,
        };
    };
  
  containerProps = { style: styles.inputWrapStyle };
  




  render() {
     
        return (
        
          <SafeAreaView style={styles.wrapper}>
               <NavBarDefault name={'Forgot Password'}  onPress={() => this.props.navigation.navigate('ForgetPassword')}/>
            <ScrollView>

            <View style={{flex:3,alignItems:'center'}}>
                      <Image
                        style={{width:wp('50%'),height:wp('50%')}}
                          source={require('../../images/splash.png')}
                      />

   {this.props.loading && <Loading navigation={this.props.navigation} animating={true} />}


                    <View style={{flex:1,alignItems:'center', width: '100%',}}>

                      <View style={{padding:wp('4%')}}>
                      <Text style={{fontSize:wp('4%')}}>
                      Please enter verification code
                      </Text>
                      </View>
                      
                      
                 
                    <CodeFiled
          variant="clear"
          codeLength={codeLength}
          keyboardType="numeric"
          cellProps={this.cellProps}
          containerProps={this.containerProps}
          ref={this.field}
          onFulfill={this.onFinishCheckingCode}
          autoFocus={true}
          ignoreCase={true}
          blurOnSubmit={true}
          
          //normalizeCode={}
         
       
      />  
            

<View style={{flex:1,marginTop:wp('10%'),marginBottom:wp('5%')}}>

<Buttons  text="Reset Password" btnfontSize={wp('5%')}
                          btnbackgroundColor={this.state.btnColor}
                          btnborderColor={this.state.btnColor}
                          btntxtncolor="#ffffff"
                          btnHight={70}
                          disabled={this.state.isdisable}
                          btnMarginRight={imageWidth/50}  
                          btnMarginLeft={imageWidth/50} 
                          onPress={()=>this.btnPress()}/>

    

</View>
         

           
         
                    </View>



                 
                      


        
     
                        
                      </View>
             
                    
                    
                    
              
            </ScrollView>

            
                    
                    
             
                      </SafeAreaView>
                     
            
      );
     
    
      
    
  }
}

// const mapStateToProps = state =>({ 
//   loginsuccessEmail:state.startUpReducer.loginsuccessEmail,
//   loading:state.startUpReducer.loading,
//   accesstoken:state.startUpReducer.accesstoken

// });

export default ForgeVerificationCode;