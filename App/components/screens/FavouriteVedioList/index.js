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
import { Thumbnail } from 'react-native-thumbnail-video';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import ViewMoreText from 'react-native-view-more-text';

import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';

import Buttons from '../../uiElements/Buttons/RoundButtons'
import NavBarDefault from '../../uiElements/NavBarDefault';
const imageWidth = Dimensions.get('window').width;

import favouriteAction from '../../redux/Favourite/actions';
import Loading from '../../uiElements/Loading';

const {getFavouriteVedioList,selectFavouriteVedio,clearProps} = favouriteAction;

import styles from './styles';




function Item({ name, _url,onPress,description,onPressStar,onpressrenderViewMore,onpressrenderViewLess }) {
  return (
    
      <View>
        <TouchableOpacity onPress={onPress}>
          <ImageBackground style={styles.thumbnail}  source={{uri: _url}}>
               
                    
                    <Icon name="star"
                             size={wp('5%')}
                            onPress={onPressStar}
                            style={{
                            position: 'absolute',
                            right: wp('5%'),
                            top: 10,
                            bottom: 0
                        }} />
                   
              
          </ImageBackground>
         
          <Text style={styles.title}>{name}</Text>
          {/* <Text style={{ fontSize: 15, marginHorizontal: 30, color: "blue" }}>Product</Text> */}
          <ViewMoreText
          numberOfLines={3}
          renderViewMore={onpressrenderViewMore}
          renderViewLess={onpressrenderViewLess}
          textStyle={{fontSize:  wp('3.5%'), marginHorizontal: 10, color: 'gray',}}
        >
          <Text >
           {description}
          </Text>
        </ViewMoreText>
          </TouchableOpacity>
      </View>
  );
}

let favouritevedioResultdate;

class VideoList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
     search:'',
    nodatemessage:'',
    search:''
    }
  };

  static getDerivedStateFromProps(props, state) {
    const { params } = props.navigation.state; 
    favouritevedioResultdate=[]
    state.nodatemessage=''
    if(props.favoritevedioListResult!=undefined){
     
      if(props.favoritevedioListResult=='err'){
          state.nodatemessage='err'
      }else{
      //  alert('lll')
        favouritevedioResultdate=props.favoritevedioListResult
      }

    }

    if(props.selectVedioResult!=undefined){
      if(props.selectVedioResult.status='success'){
        _storeAccess= async()=>{
          try {
            const accesstoken = await AsyncStorage.getItem('accesstoken')
          
           // alert(categoryid)
              if(accesstoken != null){
                    props.dispatch(getFavouriteVedioList(accesstoken))
                    props.dispatch(clearProps())
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
   
  
  }

   
  componentDidMount() {
    this.getData();
    this.focusListener = this.props.navigation.addListener('didFocus', () => {
      this.getData();
  });
  }

  getData = async () => {
    try {
      const accesstoken = await AsyncStorage.getItem('accesstoken')
    
     // alert(categoryid)
        if(accesstoken != null){
              this.props.dispatch(getFavouriteVedioList(accesstoken))
        }else{
          this.props.navigation.navigate('LoginOrSignup')
        }
    } catch(e) {
      // error reading value
    }
  }

  focussearch=()=>{
      alert('ll')
  }

  goVedio=async(id,category_id)=>{
    try {
    
      await AsyncStorage.setItem('vedioid',String(id))
      await AsyncStorage.setItem('category_id',String(category_id))
   
      this.props.navigation.navigate('FavouriteVedioPlayer')
    
  } catch(e) {
    // error reading value
  }
  }


  deselectVedio=async(id)=>{
    try {
      const accesstoken = await AsyncStorage.getItem('accesstoken')
    
     // alert(categoryid)
        if(accesstoken != null){
              this.props.dispatch(selectFavouriteVedio(accesstoken,id))
              
        }else{
          this.props.navigation.navigate('LoginOrSignup')
        }
    } catch(e) {

    }
      //
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
      return (
          <SafeAreaView style={{flex:1}}>
           <NavBarDefault name={'Videos'}  onPress={() => this.props.navigation.navigate('FirstFavouriteScreen')}/>
           <View style={{paddingLeft:10,paddingRight:10}}>
           {/* <SearchBar
        placeholder="Type Here..."
        onChangeText={(txt)=>this.setState({search:txt})}
        onFocus={()=>this.focussearch()}
        onBlur={()=>this.blurSearch()}
        value={this.state.search}
        searchIcon={{ size: 24, name:'search',
        type:'font-awesome'}}
        inputContainerStyle={{ backgroundColor: 'white' , width: '90%', borderColor: 'white' }}
        containerStyle={{ backgroundColor: 'white' , borderWidth: 0, borderColor: 'black', borderTopWidth: 0, height: 50 }}
        noIcon={true}
        
      /> */}
           </View>
           {this.props.loading && <Loading navigation={this.props.navigation} animating={true} />}

          
              <View style={styles.container}>
              
                {favouritevedioResultdate.length==0?
                <Text>No data</Text>
             :

           
              

            
              <FlatList
              data={favouritevedioResultdate}
              renderItem={({ item }) =>
               <Item 
               description={item.description}
               name={item.name}
               onpressrenderViewLess={this.renderViewLess}
               onpressrenderViewMore={this.renderViewMore}
               _url={item.thumbnail_medium} 
               onPressStar={()=>this.deselectVedio(item.id)}
               onPress={()=>this.goVedio(item.id,item.category_id)} />}
               keyExtractor={item => item.id}
              numColumns={1}
          />
 

            
            
     
                
              }
                 
              </View>
          </SafeAreaView>
      );
  }
}


 

const mapStateToProps = state =>({ 
  selectVedioResult:state.favouriteReducer.selectVedioResult,
  favoritevedioListResult:state.favouriteReducer.favoritevedioListResult,
  loading:state.favouriteReducer.loading,


});

export default connect(mapStateToProps)(VideoList);

