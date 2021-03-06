/*Example of React Native Video*/
import React, { Component } from 'react';
//Import React
import { Platform, StyleSheet, Text, View,FlatList,Image,SafeAreaView,TouchableOpacity,ImageBackground,Dimensions } from 'react-native';
//Import Basic React Native Component
import Video from 'react-native-video';
//import VideoPlayer from 'react-native-vimeo';
import VideoPlayer from 'react-native-video-controls';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import WebView from 'react-native-webview';
import ViewMoreText from 'react-native-view-more-text';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//Import React Native Video to play video
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import NavBarDefault from '../../uiElements/NavBarDefault';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';


import homeAction from '../../redux/Home/actions';
import Loading from '../../uiElements/Loading';

const {getVedioPlayerList,selecthomeFavouriteVedio,clearProps} = homeAction;


function Item({ title,descrption, url,onPress,isfavourite,onPressStar,onpressrenderViewMore,onpressrenderViewLess}) {
  return (
      <View  style={styles.thumbnail1}>
          <TouchableOpacity onPress={onPress} >
          <ImageBackground style={styles.thumbnail}  source={{uri: url}}>
               
               {isfavourite=='yes'?
                 <Icon name="star"
                 size={wp('5%')}
                 onPress={onPressStar}
                 style={{
                 position: 'absolute',
                 right: wp('5%'),
                 top: 10,
                 bottom: 0
                }} />
             :

             <Icon name="staro"
             size={wp('5%')}
             onPress={onPressStar}
             style={{
             position: 'absolute',
             right: wp('5%'),
             top: 10,
             bottom: 0
         }} />

               }   
     </ImageBackground>
     </TouchableOpacity>
           <Text style={styles.title}>{title}</Text>
           <ViewMoreText
          numberOfLines={3}
          renderViewMore={onpressrenderViewMore}
          renderViewLess={onpressrenderViewLess}
          textStyle={{fontSize: wp('3.5%'), marginHorizontal: 10, color: 'gray'}}
        >
          <Text >
           {descrption}
          </Text>
        </ViewMoreText>
        
      </View>
  );
}

let vedioResultdate=[];

class VedioPlayer extends Component {
  videoPlayer;
  constructor(props) {
    super(props);

  


    this.state = {
      currentTime: 0,
      duration: 0,
      isFullScreen: false,
      isLoading: true,
      paused: false,
      playerState: PLAYER_STATES.PLAYING,
      screenType: 'content',
      videoUrl:'',
      accesstokenstate:'',
      isselectstar:'',
      vedionamestate:'',

      orientation:''
    };

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
    //  this.getUserInfo()
      
    });
  }

  static getDerivedStateFromProps(props, state) {
    vedioResultdate=[]
   
   console.log(props.vedioPlayerListResult)
   if(props.vedioPlayerListResult!=undefined){
        state.vedionamestate=props.vedioPlayerListResult.details.name;
        state.mainvediourl=props.vedioPlayerListResult.details.url;
        state.isfavourite=props.vedioPlayerListResult.details.favourite;
        
        if( state.isfavourite=='yes'){
            state.isselectstar='star'
        }else{
          state.isselectstar='staro'
        }
        console.log(state.mainvediourl)
        vedioResultdate=props.vedioPlayerListResult.records

   }
    


   if(props.selecthomeVedioResult!=undefined){
   
    if(props.selecthomeVedioResult.status='success'){
    
      _storeAccess= async()=>{
        try {
          const accesstoken = await AsyncStorage.getItem('accesstoken')
          const vedioid = await AsyncStorage.getItem('vedioid')
          const category_id = await AsyncStorage.getItem('categoryid')
      
          if(accesstoken != null){
                props.dispatch(getVedioPlayerList(accesstoken,category_id,vedioid))
         
            }else{
             props.navigation.navigate('LoginOrSignup')
            }
      
  } catch(e) {
  console.log(e)
  }
      }
      _storeAccess()
    }
  }
  }

  onSeek = seek => {
    //Handler for change in seekbar
    this.videoPlayer.seek(seek);
  };

  onPaused = playerState => {
    //Handler for Video Pause
    this.setState({
      paused: !this.state.paused,
      playerState,
    });
  };

  onReplay = () => {
    //Handler for Replay
    this.setState({ playerState: PLAYER_STATES.PLAYING });
    this.videoPlayer.seek(0);
  };

  onProgress = data => {
    const { isLoading, playerState } = this.state;
    // Video Player will continue progress even if the video already ended
    if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
      this.setState({ currentTime: data.currentTime });
    }
  };
  
  onLoad = data => this.setState({ duration: data.duration, isLoading: false });
  
  onLoadStart = data => this.setState({ isLoading: true });
  
  onEnd = () => this.setState({ playerState: PLAYER_STATES.ENDED });
  
  onError = () => alert('Oh! ', error);
  
  exitFullScreen = () => {
    alert('Exit full screen');
  };
  
  enterFullScreen = () => {};
  
  onFullScreen = () => {
    if (this.state.screenType == 'content')
      this.setState({ screenType: 'cover' });
    else this.setState({ screenType: 'content' });
  };
  renderToolbar = () => (
    <View>
      <Text> toolbar </Text>
    </View>
  );
  onSeeking = currentTime => this.setState({ currentTime });

  getVimeoPageURL(vediourl) {
    return vediourl;
}

componentDidMount(){
  this.getUserInfo();
}

 getUserInfo = async() => {
  //let username = name.toLowerCase().trim();
 // const URL = `https://api.github.com/users/${username}`;


  // return fetch('https://player.vimeo.com/video/391154424')
  //     .then(res => res.json())
  //     .then(res => this.setState({
  //       thumbnailUrl: res.video.thumbs['640'],
  //       videoUrl: res.request.files.hls.cdns[res.request.files.hls.default_cdn].url,
  //       video: res.video,
  //     }));

//   try {
//     const accesstoken = await AsyncStorage.getItem('accesstoken')
//     const categoryid = await AsyncStorage.getItem('categoryid')
//     const vedioid = await AsyncStorage.getItem('vedioid')
//     this.setState({accesstokenstate:accesstoken})

//     const responce=await fetch('https://player.vimeo.com/video/160616422',{
//       method:'GET',
//     headers: {
//       "Origin":'smartapp.rcpanz.com.au',
//       'Authorization': 'bearer '+accesstoken,
//     },
//     body: '',
//   });
//   console.log( responce)
//  // const result =  responce.json();
  
    
   // alert(categoryid)
     

 try {
            const accesstoken = await AsyncStorage.getItem('accesstoken')
            const categoryid = await AsyncStorage.getItem('categoryid')
            const vedioid = await AsyncStorage.getItem('vedioid')
          
            if(accesstoken != null){
                 this.props.dispatch(getVedioPlayerList(accesstoken,categoryid,vedioid))
              }else{
                this.props.navigation.navigate('LoginOrSignup')
              }
        
  } catch(e) {
    // error reading value
  }

}

goVedio=async(id)=>{
  try{
    await AsyncStorage.setItem('vedioid',String(id))
  }catch(e){

  }

  try {
    const accesstoken = await AsyncStorage.getItem('accesstoken')
    const categoryid = await AsyncStorage.getItem('categoryid')
  
    if(accesstoken != null){
     
      this.props.dispatch(getVedioPlayerList(accesstoken,categoryid,id))
      }else{
        this.props.navigation.navigate('LoginOrSignup')
      }

} catch(e) {
// error reading value
}
}


onPressStar=async(id)=>{
  try {
    const accesstoken = await AsyncStorage.getItem('accesstoken')
    const category_id = await AsyncStorage.getItem('categoryid')
    const vedioid = await AsyncStorage.getItem('vedioid')

  
    if(accesstoken != null){
      this.props.dispatch(selecthomeFavouriteVedio(accesstoken,vedioid))
    
       this.props.dispatch(clearProps())
      if(this.state.isselectstar=='star'){
        this.setState({isselectstar:'staro'})
      }else if(this.state.isselectstar=='staro'){
        this.setState({isselectstar:'star'})
      }
    
      }else{
        this.props.navigation.navigate('LoginOrSignup')
      }

} catch(e) {
// error reading value
}
}


renderViewMore(onPress){
  return(
   
<Text onPress={onPress} style={{paddingLeft:wp('2%'),fontSize:wp('3.5%')}}>View more</Text>
    
   
  )
}
renderViewLess(onPress){
  return(
    <Text onPress={onPress} style={{paddingLeft:wp('2%'),fontSize:wp('3.5%')}}>View less</Text>
  )
}


  render() {
if(this.state.orientation=='portrait'){
  return (
    <SafeAreaView style={{flex:1}}>
      <NavBarDefault  name={'Videos'} onPress={() => this.props.navigation.navigate('RcpVedioList')}/>
     <View style={styles.container}>
     {this.props.loading && <Loading navigation={this.props.navigation} animating={true} />}
   
     
      {/* <View style={{position:'absolute',right:0,marginTop:wp('1%'),marginRight:wp('3%'),zIndex:1,height:wp('20%'),width:wp('20%')}}>
                   <Icon 
                          name={this.state.isselectstar}
                          size={wp('10%')}
                          color='black'
                          onPress={()=>this.onPressStar()}
                          style={{
                              position: 'absolute',
                              right:0,
                              top: 10,
                              bottom: 0
                          }} 
                    />
                  
      </View> */}
     {/* <View style={{padding:wp('1%'),backgroundColor:'white'}}>
                        <Text style={{fontSize:wp('4%'),fontWeight:"bold"}}>{this.state.vedionamestate}</Text>
     </View> */}
 <View style={{flexDirection: 'row'}}>
            <View style={{flex:1.5,  backgroundColor: 'white',paddingLeft:wp('3%')}} >
            <Text style={{fontSize:wp('5%'),fontWeight:"bold"}}>{this.state.vedionamestate}</Text>
            </View>
          
          </View>

          <View style={{position:'absolute',right:0,marginTop:wp('1%'),marginRight:wp('3%'),zIndex:1,height:wp('20%'),width:wp('20%')}} >
            <Icon 
                          name={this.state.isselectstar}
                          size={wp('10%')}
                          color='black'
                          onPress={()=>this.onPressStar()}
                          style={{
                              position: 'absolute',
                              right:0,
                              top: 10,
                              bottom: 0
                          }} 
                    />
            </View>
      <WebView
              ref="webviewBridge"
              originWhitelist={['*']}
              style={{
                  // Accounts for player border
                  marginTop: 8,
                  marginLeft: 0,
              }}
                 source={{ uri: this.state.mainvediourl,
                 headers: {
                  'origin': 'https://smartapp.rcpanz.com.au',
                  'referer': 'https://smartapp.rcpanz.com.au/',
               
                 }}}
                
              scalesPageToFit={this.props.scalesPageToFit}
              scrollEnabled={false}
              onMessage={this.onBridgeMessage}
              onError={error => console.error(error)}
              bounces={false}
          />  
{/* <VideoPlayer
   ref={ref => {
    this.player = ref;
  }}
  source={{uri: 'https://player.vimeo.com/video/160616422',
    headers: {
      "Origin":'smartapp.rcpanz.com.au',
      'Authorization': 'bearer '+this.state.accesstokenstate,
    }}}
  navigator={this.props.navigator}
  fullscreen={true}
  resizeMode={'cover'}
/>  */}

      {/* <MediaControls
        duration={this.state.duration}
        isLoading={this.state.isLoading}
        mainColor="#333"
        onFullScreen={this.onFullScreen}
        onPaused={this.onPaused}
        onReplay={this.onReplay}
        onSeek={this.onSeek}
        onSeeking={this.onSeeking}
        playerState={this.state.playerState}
        progress={this.state.currentTime}
        toolbar={this.renderToolbar()}
      /> */}
      
    </View>
      <View style={{flex:1,padding:0}}>
      <FlatList
          data={vedioResultdate}
        
          renderItem={({ item }) => 
          <Item 
            title={item.name}
             url={item.thumbnail_large}
             descrption={item.description}
             onpressrenderViewLess={this.renderViewLess}
             onpressrenderViewMore={this.renderViewMore}
             isfavourite={item.favourite}
             onPress={()=>this.goVedio(item.id)} />}
            
              keyExtractor={item => item.id}
              numColumns={1}
      />
  </View>
  </SafeAreaView>

  );




}else if(this.state.orientation=='landscape'){
  return(
    <SafeAreaView style={{flex:1}}>
      <NavBarDefault  name={'Videos'}  onPress={() => this.props.navigation.navigate('RcpVedioList')}/>
     <View style={styles.container}>
     {this.props.loading && <Loading navigation={this.props.navigation} animating={true} />}
     <View style={{flexDirection: 'row'}}>
            <View style={{flex:1.5,  backgroundColor: 'white',paddingLeft:wp('3%')}} >
            <Text style={{fontSize:wp('5%'),fontWeight:"bold"}}>{this.state.vedionamestate}</Text>
            </View>
          
          </View>

     <View style={{position:'absolute',right:0,marginTop:wp('5%'),marginRight:wp('3%'),zIndex:1,height:wp('20%'),width:wp('20%')}}>
                   <Icon 
                          name={this.state.isselectstar}
                          size={wp('10%')}
                          color='black'
                          onPress={()=>this.onPressStar()}
                          style={{
                              position: 'absolute',
                              right: 10,
                              top: 10,
                              bottom: 0
                          }} 
                    />
      </View>
      <WebView
              ref="webviewBridge"
              originWhitelist={['*']}
              style={{
                  // Accounts for player border
                  marginTop: 8,
                  marginLeft: -10,
              }}
                 source={{ uri: this.state.mainvediourl,
                 headers: {
                  'origin': 'https://smartapp.rcpanz.com.au',
                  'referer': 'https://smartapp.rcpanz.com.au/',
               
                 }}}
                
              scalesPageToFit={this.props.scalesPageToFit}
              scrollEnabled={false}
              onMessage={this.onBridgeMessage}
              onError={error => console.error(error)}
              bounces={false}
          />  
{/* <VideoPlayer
   ref={ref => {
    this.player = ref;
  }}
  source={{uri: 'https://player.vimeo.com/video/160616422',
    headers: {
      "Origin":'smartapp.rcpanz.com.au',
      'Authorization': 'bearer '+this.state.accesstokenstate,
    }}}
  navigator={this.props.navigator}
  fullscreen={true}
  resizeMode={'cover'}
/>  */}

      {/* <MediaControls
        duration={this.state.duration}
        isLoading={this.state.isLoading}
        mainColor="#333"
        onFullScreen={this.onFullScreen}
        onPaused={this.onPaused}
        onReplay={this.onReplay}
        onSeek={this.onSeek}
        onSeeking={this.onSeeking}
        playerState={this.state.playerState}
        progress={this.state.currentTime}
        toolbar={this.renderToolbar()}
      /> */}
      
    </View>
    </SafeAreaView>
  );
 
}

   
  }
}

const mapStateToProps = state =>({ 
  selecthomeVedioResult:state.homeReducer.selecthomeVedioResult,
  vedioPlayerListResult:state.homeReducer.vedioPlayerListResult,
  loading:state.homeReducer.loading,


});

export default connect(mapStateToProps)(VedioPlayer);