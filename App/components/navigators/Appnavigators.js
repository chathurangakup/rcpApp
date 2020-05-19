import React from 'react'
import {
  
    Image,
    Text,
    View,
    Platform
   
   
  } from 'react-native';
import {createAppContainer,createSwitchNavigator
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import PropsTypes from 'prop-types';
// import { connect } from 'react-redux';

import Start from '../screens/StartUp';
import LoginOrSignup from '../screens/LoginOrSignup';
import Login from '../screens/Login';
import SignUpfirst from '../screens/SignUpfirst';
import SignUpsecond from '../screens/SignUpsecond';
import ForgetPassword from '../screens/ForgetPassword';
import VerificationCode from '../screens/VerificationCode';
import FogetpasswordUpdatePassword from '../screens/FogetpasswordUpdatePassword';
import ConfirmRegistration from '../screens/ConfirmRegistration';

//home
import FirstHomeScreen from '../screens/FirstHomeScreen';
import RcpVedios from '../screens/RcpVedios';
import RcpVedioList from '../screens/RcpVedioList';
import RcpManuals from '../screens/RcpManuals';
import RcpManualList from '../screens/RcpManualList';
import RcpManualListPdf from '../screens/RcpManualListPdf';
import RcpVedioPlayer from '../screens/RcpVedioPlayer';

//profile
import ProfileHome from '../screens/Profile';
import ContactUs from '../screens/ContactUs';
import AboutUs from '../screens/AboutUs';
import ProfileEdit from '../screens/ProfileEdit';
import ChanagePassword from '../screens/ChanagePassword';

import CatelogueHome from '../screens/Catelogue';

//favourire
import FirstFavouriteScreen from '../screens/FirstFavouriteScreen';
import FavouriteVedioList from '../screens/FavouriteVedioList';
import FavouriteDocumentList from '../screens/FavouriteDocumentList';
import FavouriteDocumentPdf from '../screens/FavouriteDocumentPdf';
import FavouriteVedioPlayer from '../screens/FavouriteVedioPlayer';

const StartNavigator = createStackNavigator({
    Start: {
        screen: Start,
        navigationOptions:{
            header:()=> null,
        },
        navigatorStyle: {
            navBarHidden: true
        }
    },
    LoginOrSignup: {
        screen: LoginOrSignup,
        navigationOptions:{
            header:()=> null,
        }
        
    },
    Login: {
        screen: Login,
        navigationOptions:{
            header:()=> null,
        }
        
    },
    SignUpfirst: {
        screen: SignUpfirst,
        navigationOptions:{
            header:()=> null,
        }
        
    },
    SignUpsecond: {
        screen: SignUpsecond,
        navigationOptions:{
            header:()=> null,
        }
        
    },
    ForgetPassword: {
      screen: ForgetPassword,
      navigationOptions:{
          header:()=> null,
      }
      
  },
  VerificationCode: {
    screen: VerificationCode,
    navigationOptions:{
        header:()=> null,
    }
},
FogetpasswordUpdatePassword: {
  screen: FogetpasswordUpdatePassword,
  navigationOptions:{
      header:()=> null,
  }
},
ConfirmRegistration: {
  screen: ConfirmRegistration,
  navigationOptions:{
      header:()=> null,
  }
},
   
},{
       navigationOptions: {
            headerStyle: {
                elevation: 0,
                shadowOpacity: 0
                }
        },
         // transitionConfig: () => fromLeft(1000),
        // transitionConfig: () => fromLeft(1000)   
}
);


//hole screen navigations
const Home = createStackNavigator({
   
    FirstHomeScreen:{
      screen:FirstHomeScreen,
      navigationOptions:{
        header:()=> null,
    }
    },
    RcpVedios:{
        screen:RcpVedios,
        navigationOptions:{
          header:()=> null,
      }
      },
      RcpVedioList:{
        screen:RcpVedioList,
        navigationOptions:{
          header:()=> null,
      }
      },
      RcpManuals:{
        screen:RcpManuals,
        navigationOptions:{
          header:()=> null,
      }
      },
      RcpManualList:{
        screen:RcpManualList,
        navigationOptions:{
          header:()=> null,
      }
      },
      RcpManualListPdf:{
        screen:RcpManualListPdf,
        navigationOptions:{
          header:()=> null,
      }
      },
      RcpVedioPlayer:{
        screen:RcpVedioPlayer,
        navigationOptions:{
          header:()=> null,
      }
      },
  
}
  
  );

  //hole screen navigations
const Favourite = createStackNavigator({
   
  FirstFavouriteScreen:{
      screen:FirstFavouriteScreen,
      navigationOptions:{
        header:()=> null,
    }
    },
    FavouriteVedioList:{
      screen:FavouriteVedioList,
      navigationOptions:{
        header:()=> null,
    }
    },

    FavouriteVedioPlayer:{
      screen:FavouriteVedioPlayer,
      navigationOptions:{
        header:()=> null,
    }
    },
    FavouriteDocumentList:{
      screen:FavouriteDocumentList,
      navigationOptions:{
        header:()=> null,
    }
    },
    FavouriteDocumentPdf:{
      screen:FavouriteDocumentPdf,
      navigationOptions:{
        header:()=> null,
    }
  },

    
  
}
  
  );

    //hole screen navigations
const Catalogue = createStackNavigator({
   
   CatelogueHome:{
      screen:CatelogueHome,
      navigationOptions:{
        header:()=> null,
    }
    },
  
}
  
  );


  const Profile = createStackNavigator({
   
    ProfileHome:{
      screen:ProfileHome,
      navigationOptions:{
        header:()=> null,
    }
    },
    ContactUs:{
      screen:ContactUs,
      navigationOptions:{
        header:()=> null,
    }
    },
    AboutUs:{
      screen:AboutUs,
      navigationOptions:{
        header:()=> null,
    }
    },
    ProfileEdit:{
      screen:ProfileEdit,
      navigationOptions:{
        header:()=> null,
    }
    },
    ChanagePassword:{
      screen:ChanagePassword,
      navigationOptions:{
        header:()=> null,
    }
    },

    
  
  
}
  
  );









const TabView = createBottomTabNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
       
        tabBarIcon: ({ focused }) => {
            const image = focused 
            ? require('../../components/images/home_s.png') 
            : require('../../components/images/home_n.png')
            return (
                <Image 
                    source={image}
                    //style={{width:wp('9%'),height:wp('14%')}}
                    style={{width:wp('8%'),height:wp('9%')}}
                />
            )
      }
    }
    },
    Favourite: {
      screen: Favourite,
      navigationOptions: {
       
        tabBarIcon: ({ focused }) => {
            const image = focused 
            ? require('../../components/images/star_s.png') 
            : require('../../components/images/star_n.png')
            return (
                <Image 
                    source={image}
                    //style={{width:wp('14%'),height:wp('14%')}}
                   style={{width:wp('8%'),height:wp('9%')}}
                />
            )
      }
      }
    },

    Catalogue: {
      screen: Catalogue,
      navigationOptions: {
     
        tabBarIcon: ({ focused }) => {
            const image = focused 
            ? require('../../components/images/catalogue_s.png') 
            : require('../../components/images/catalogue_n.png')
            return (
                <Image 
                    source={image}
                   // style={{width:wp('16%'),height:wp('14%')}}
                    style={{width:wp('8%'),height:wp('9%')}}
                />
            )
      }
      }, 
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            
            tabBarIcon: ({ focused }) => {
                const image = focused 
                ? require('../../components/images/profile_s.png') 
                : require('../../components/images/profile_n.png')
                return (
                    <Image 
                        source={image}
                       // style={{width:wp('10%'),height:wp('14%')}}
                       style={{width:wp('8%'),height:wp('9%')}}
                    />
                )
          }
        },
        },
  },
    {
      order: ['Home','Favourite', 'Catalogue', 'Profile'],
      
      tabBarOptions: {
        showIcon: true,
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
         //showLabel:false,
        style: {
          backgroundColor: '#ffcf01',
          height: wp('15%'),
        
         
        },
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        labelStyle: {
      
    
          fontSize:wp('3%'),
          justifyContent:'center',
          alignSelf:'center'
        },
       
        safeAreaInset:{
            bottom:'always',
            
        },
    
        tabBarPosition: 'bottom',
        lazyLoad: true,
        shifting: true,
        borderTopColor: "#fff",
      },
      
    }
  );
  

const getstart=false;

 const createRootNavigator =createSwitchNavigator(
     
        {
         StartNavigator: {
            screen: StartNavigator
         },
         TabView: {
            screen: TabView
          },
        },
        {
            initialRouteName: getstart ? "TabView" : "StartNavigator",
        
           
          }
      );



const App = createAppContainer(createRootNavigator);

export default App;

