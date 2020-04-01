import React, { Component } from 'react';
import {
  View, Text,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  ScrollView,
  FlatList,
  ImageBackground
 
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

import homeAction from '../../redux/Home/actions';
import Loading from '../../uiElements/Loading';

const {getCategories,clearProps} = homeAction;

import styles from './styles';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

let caregoryResultdata;
// const imageWidth = Dimensions.get('window').width;
class Home extends Component {
  fieldRef = React.createRef();


  constructor(props){
    super(props);
    this.state = {
     isLogged:false,
     emailError: false,
    }
};

static getDerivedStateFromProps(props, state) {
  const { params } = props.navigation.state;
  state.loginsuccessmessage=''
  state.countriesArrayResultDesc=[]
    state.productsArrayResultDesc=[]

      if(props.catagoryResult!=undefined){
        caregoryResultdata=props.catagoryResult.documentCatedories
      }

     
      console.log(caregoryResultdata)
   
}





  
  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    try {
      const accesstoken = await AsyncStorage.getItem('accesstoken')
        if(accesstoken != null){
              this.props.dispatch(getCategories(accesstoken))
        }else{
          this.props.navigation.navigate('LoginOrSignup')
        }
    } catch(e) {
      // error reading value
    }
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


  
  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#e0e0e0",
        }}
      />
    );
  }

  

  
  imagePressForId=async(id)=>{
    
      try {
      //  alert(id)
        await AsyncStorage.setItem('categoryid',String(id));
        this.props.navigation.navigate('RcpManualList')
      } catch (error) {
        console.log(error);
    }
  }


  render() {
    function Item({ _id,URL,imagePress,name }) {
      return (
        <View style={styles.item}>
                <TouchableOpacity onPress={()=>imagePress(_id)}>
                  <Image
                        style={{ flex: 1,
                          width: wp('40%'),
                          height:  wp('40%'),
                          alignSelf:'center',
                          resizeMode: 'contain'}}
                        source={{uri:'https://smartapprcp.s3-ap-southeast-1.amazonaws.com/'+URL}}
                      >
                         </Image>
                       
                        <View   style={{
                           width: '100%',
                           
                            marginTop:10,
                           justifyContent: 'center',
                           alignItems: 'center',
                           //Here is the trick
                           bottom: 0,
                            
                        }}>
                       <Text style={{fontSize:wp('6%'),fontWeight:'bold'}}>{name}</Text>

                        </View>
                       
                     
                </TouchableOpacity>
                <View style={{paddingBottom:wp('5%')}}>

                </View>
                 
        </View>
      );
    }
   



     
        return (
        
          <SafeAreaView style={styles.wrapper}>
      
      <NavBarDefault name={'Product Use Manuals'}  onPress={() => this.props.navigation.navigate('FirstHomeScreen')}/>
            <ScrollView>

            <View style={{flex:1,alignItems:'center',backgroundColor:'white'}}>
                      <Image
                        style={{width:imageWidth/4,height:imageWidth/4}}
                      
                          source={require('../../images/splash.png')}
                      />
              
                    <View style={{backgroundColor:'white'}}>
                 
                    {this.props.loading && <Loading navigation={this.props.navigation} animating={true} />}

                         <FlatList
                            data={caregoryResultdata}
                            renderItem={({ item }) => 
                            <Item 
                            imagePress={()=>this.imagePressForId(item.id)}
                            _id={item.id}
                            URL={item.url}
                             name={item.name}
                                 title={item.id,item.url} />}
                                 keyExtractor={item => item.id}
                        />


  <View style={{paddingBottom:55}}>

                      </View>
          
                    </View>



                 
                      


        
     
                        
                      </View>
             
                    
                    
                    
              
            </ScrollView>
                    
                    
             
                      </SafeAreaView>
                     
            
      );
     
    
      
    
  }
}

const mapStateToProps = state =>({ 
  catagoryResult:state.homeReducer.catagoryResult,

  loading:state.homeReducer.loading,


});

export default connect(mapStateToProps)(Home);