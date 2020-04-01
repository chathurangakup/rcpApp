/*Example of React Native Video*/
import React, { Component } from 'react';
//Import React
import { Platform, StyleSheet, Text, View,FlatList,Image,SafeAreaView,TouchableOpacity,TouchableHighlight,Dimensions,
  ImageBackground } from 'react-native';
//Import Basic React Native Component
import Video from 'react-native-video';
//import VideoPlayer from 'react-native-vimeo';
import VideoPlayer from 'react-native-video-controls';
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import WebView from 'react-native-webview';
import ViewMoreText from 'react-native-view-more-text';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//Import React Native Video to play video
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import NavBarDefault from '../../uiElements/NavBarDefault';
//Media Controls to control Play/Pause/Seek and full screen
import styles from './styles';

import favouriteAction from '../../redux/Favourite/actions';
import Loading from '../../uiElements/Loading';

const {getFavouriteVedio,getVedioPlayerList,selectFavouriteVedio,clearProps} = favouriteAction;


function Item({ title,descrption, url,onPress,onPressStar,isfavourite,onpressrenderViewMore,onpressrenderViewLess  }) {
  return (
      <View>
          <TouchableOpacity onPress={onPress} >
          <ImageBackground style={styles.thumbnail}  source={{uri: url}}>
               
               {isfavourite=='yes'?
                 <Icon name="star"
                 size={wp('5%')}
                 onPress={onPressStar}
                 style={{
                 position: 'absolute',
                 right: 10,
                 top: 10,
                 bottom: 0
             }} />
             :

             <Icon name="staro"
             size={wp('5%')}
             onPress={onPressStar}
             style={{
             position: 'absolute',
             right: 10,
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
          textStyle={{fontSize:  wp('3.5%'), marginHorizontal: 10, color: 'gray'}}
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
      isselectstar:'star',
      isfavourite:'yes'
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


   console.log(props.selectVedioResult)
   if(props.selectVedioResult!=undefined){
    if(props.selectVedioResult.status='success'){
      _storeAccess= async()=>{
        try {
          const accesstoken = await AsyncStorage.getItem('accesstoken')
          const vedioid = await AsyncStorage.getItem('vedioid')
          const category_id = await AsyncStorage.getItem('category_id')
        
          if(accesstoken != null){
           props.dispatch(getVedioPlayerList(accesstoken,category_id,vedioid))
        
            }else{
             props.navigation.navigate('LoginOrSignup')
            }
      
  } catch(e) {
  // error reading value
  }
      }
      _storeAccess()
    }


   }
   
    // console.log(props.vedioListResult)
    // console.log(vedioResultdate+"lll")
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
            const vedioid = await AsyncStorage.getItem('vedioid')
            const category_id = await AsyncStorage.getItem('category_id')
          
            if(accesstoken != null){
              this.props.dispatch(getVedioPlayerList(accesstoken,category_id,vedioid))
              this.props.dispatch(clearProps())
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
    const category_id = await AsyncStorage.getItem('category_id')
  
    if(accesstoken != null){
      this.props.dispatch(getVedioPlayerList(accesstoken,category_id,id))
      this.props.dispatch(clearProps())
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
    const category_id = await AsyncStorage.getItem('category_id')
    const vedioid = await AsyncStorage.getItem('vedioid')

  
    if(accesstoken != null){
      this.props.dispatch(selectFavouriteVedio(accesstoken,vedioid))
     // this.props.dispatch(clearProps())
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
        <NavBarDefault name={'Videos'} onPress={() => this.props.navigation.navigate('FavouriteVedioList')}/>
       <View style={styles.container}>
       {this.props.loading && <Loading navigation={this.props.navigation} animating={true} />}
       <View style={{position:'absolute',right:0,marginTop:0,marginRight:10,zIndex:1,height:wp('20%'),width:wp('20%')}}>
                     <Icon name={this.state.isselectstar}
                             size={wp('10%')}
                            color='black'
                            onPress={()=>this.onPressStar()}
                            style={{
                            position: 'absolute',
                            right: 10,
                            top: 10,
                            bottom: 0
                        }} />
        </View>
        <WebView
                ref="webviewBridge"
                originWhitelist={['*']}
                style={{
                    // Accounts for player border
                    marginTop: -8,
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
/> */}

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
        <View style={{flex:1,padding:10}}>
          {vedioResultdate.length==0?
          <View style={{alignSelf:'center'}}>
                <Text>No data</Text>
          </View>
          
          :
          <FlatList
          data={vedioResultdate}
         
          renderItem={({ item }) => 
          <Item 
          title={item.name}
           url={item.thumbnail_medium}
           isfavourite={item.favourite}
           onpressrenderViewLess={this.renderViewLess}
           onpressrenderViewMore={this.renderViewMore}
           descrption={item.description}
            onPress={()=>this.goVedio(item.id)} />}
            
          keyExtractor={item => item.id}
          numColumns={1}
      />

          }
      
    </View>
    </SafeAreaView>

    );
  }else if(this.state.orientation=='landscape'){
    return(
      <SafeAreaView style={{flex:1}}>
      <NavBarDefault   name={'Videos'}  onPress={() => this.props.navigation.navigate('FavouriteVedioList')}/>
     <View style={styles.container}>
     {this.props.loading && <Loading navigation={this.props.navigation} animating={true} />}
     <View style={{position:'absolute',right:0,marginTop:0,marginRight:10,zIndex:1,height:wp('20%'),width:wp('20%')}}>
                   <Icon name={this.state.isselectstar}
                           size={wp('10%')}
                          color='black'
                          onPress={()=>this.onPressStar()}
                          style={{
                          position: 'absolute',
                          right: 10,
                          top: 10,
                          bottom: 0
                      }} />
      </View>
      <WebView
              ref="webviewBridge"
              originWhitelist={['*']}
              style={{
                  // Accounts for player border
                  marginTop: -8,
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
/> */}

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

  vedioPlayerListResult:state.favouriteReducer.vedioPlayerListResult,
  loading:state.favouriteReducer.loading,
  selectVedioResult:state.favouriteReducer.selectVedioResult


});

export default connect(mapStateToProps)(VedioPlayer);