import React, { Component } from 'react';
import {
  View, Text,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  ScrollView,
  FlatList,
  ImageBackground,
  Modal
 
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
import { Dropdown } from 'react-native-material-dropdown';


import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';

import Buttons from '../../uiElements/Buttons/RoundButtons'
import NavBarDefault from '../../uiElements/NavBarWithFilter';
const imageWidth = Dimensions.get('window').width;

import homeAction from '../../redux/Home/actions';
import Loading from '../../uiElements/Loading';

const {getVideoList,selecthomeFavouriteVedio,getCategories,getProductsHome,clearProps} = homeAction;

import styles from './styles';





function Item({ name, _url,onPress,description,onPressStar,isfavourite,onpressrenderViewMore,onpressrenderViewLess }) {
  return (
    
      <View style={styles.thumbnail1} >
        <TouchableOpacity onPress={onPress}> 
        <ImageBackground style={styles.thumbnail}  source={{uri: _url}} >
               {isfavourite=='yes'?
                   <Icon name='star'
                   size={wp('5%')}
                   onPress={onPressStar}
                   style={{
                   position: 'absolute',
                   right: wp('5%'),
                   top: 10,
                   bottom: 0
               }} />
               :

               <Icon name='staro'
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
          <Text style={styles.title}>{name}</Text>
          {/* <Text style={{ fontSize: 15, marginHorizontal: 30, color: "blue" }}>Product</Text> */}
          <ViewMoreText
          numberOfLines={3}
          renderViewMore={onpressrenderViewMore}
          renderViewLess={onpressrenderViewLess}
          textStyle={{fontSize: wp('3.5%'), marginHorizontal: 10, color: 'gray'}}
        >
          <Text >
           {description}
          </Text>
        </ViewMoreText>
        
      </View>
  );
}

let vedioResultdate;
let caregoryResultdata;
let productsResultdata;
class VideoList extends React.Component {

  constructor(props){
    super(props);

    const isPortrait = () => {
      const dim = Dimensions.get('screen');
      return dim.height >= dim.width;
    };

    this.state = {
      orientation: isPortrait() ? 'portrait' : 'landscape',
     
     
    };

    // Event Listener for orientation changes
    Dimensions.addEventListener('change', () => {
      this.setState({
        orientation: isPortrait() ? 'portrait' : 'landscape'
      });
     
    });


    this.state = {
     search:'',
    nodatemessage:'',
    search:'',
    isfavourite:'',
    Alert_Visibility:false,

    countriesArrayResultDesc:[],
    countriesArrayObj:{},

    productsArrayResultDesc:[],
    productsArrayObj:{},

    orderbystate:'',
    orderbynamestate:'',
    categorystate:'',
    categorynamestate:'All',
    productstate:'all',
    productnamestate:'All',

    orientation:'',
    numofcol:'',

    lastpage_state:'',
    current_page_state:1

    }
  };

  static getDerivedStateFromProps(props, state) {
    const { params } = props.navigation.state; 
    //vedioResultdate=[]
    state.nodatemessage=''
    state.countriesArrayResultDesc=[]
    state.productsArrayResultDesc=[]

    if(props.vedioListResult!=undefined){
      if(props.vedioListResult=='err'){
          state.nodatemessage='err'
      }else{
      //  alert('lll')
        vedioResultdate=props.vedioListResult
      }

    }

    if(props.selecthomeVedioResult!=undefined){
       console.log(props.selecthomeVedioResult)
      if(props.selecthomeVedioResult.status='success'){
        _storeAccess= async()=>{
          try {
            const accesstoken = await AsyncStorage.getItem('accesstoken')
            const categoryid = await AsyncStorage.getItem('categoryid')
          
           // alert(categoryid)
              if(accesstoken != null){
                    props.dispatch(getVideoList(accesstoken,categoryid,'all','all','',1))
                   
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

console.log(props.catagoryResult)
console.log("props.catagoryResult")

    if(props.catagoryResult!=undefined){
      for( var i=0, len= props.catagoryResult.videoCategories.length; i < len; i++ ){

        state.countriesArrayObj = { 
          value:props.catagoryResult.videoCategories[i].name,
          id:props.catagoryResult.videoCategories[i].id,
        };
         state.countriesArrayResultDesc.push(state.countriesArrayObj)
         caregoryResultdata=state.countriesArrayResultDesc
    }//end for
     
    }

console.log(props.productsArray)
    if(props.productsArray!=undefined){
      for( var i=0, len= props.productsArray.length; i < len; i++ ){

        state.productsArrayObj = { 
          value:props.productsArray[i].name,
          id:props.productsArray[i].id,
        };
         state.productsArrayResultDesc.push(state.productsArrayObj)
         productsResultdata=state.productsArrayResultDesc
    }//end for
     
    }

 

  if(props.vedioListResultPagination!=undefined){
    console.log(props.vedioListResultPagination.last_page)
    state.lastpage_state=props.vedioListResultPagination.last_page;
   // state.current_page_state=props.vedioListResultPagination.current_page

  }
    


  }

   
  componentDidMount() {
    this.getData()
 
    this.focusListener = this.props.navigation.addListener('didFocus', () => {
      this.getDataWhenback();
  });
  }


  getDataWhenback = async () => {
    try {
      const accesstoken = await AsyncStorage.getItem('accesstoken')
    

        if(this.state.categorystate==''){
          const categoryid = await AsyncStorage.getItem('categoryid')

            

          if(accesstoken != null){
            this.props.dispatch(getVideoList(accesstoken,categoryid,this.state.productstate,'all',this.state.orderbystate,this.state.current_page_state))
             this.props.dispatch(getCategories(accesstoken))
            this.props.dispatch(getProductsHome(accesstoken))
            }else{
              this.props.navigation.navigate('LoginOrSignup')
            }

        }else{

          const categoryid = this.state.categorystate

          if(accesstoken != null){
            this.props.dispatch(getVideoList(accesstoken,categoryid,this.state.productstate,'all',this.state.orderbystate,this.state.current_page_state))
             this.props.dispatch(getCategories(accesstoken))
            this.props.dispatch(getProductsHome(accesstoken))
            }else{
              this.props.navigation.navigate('LoginOrSignup')
            }

        }


     // alert(categoryid)
      
    } catch(e) {
      // error reading value
    }
  }

  



  getData = async () => {
    try {
      const accesstoken = await AsyncStorage.getItem('accesstoken')
      const categoryid = await AsyncStorage.getItem('categoryid')
     // alert(categoryid)
        if(accesstoken != null){
              this.props.dispatch(getVideoList(accesstoken,categoryid,'all','all','',1))
              this.props.dispatch(getCategories(accesstoken))
              this.props.dispatch(getProductsHome(accesstoken))
        }else{
          this.props.navigation.navigate('LoginOrSignup')
        }
    } catch(e) {
      // error reading value
    }
  }

  focussearch=()=>{
      //alert('ll')
  }

  blurSearch=async()=>{
    try {
      const accesstoken = await AsyncStorage.getItem('accesstoken')
      const categoryid = await AsyncStorage.getItem('categoryid')
     // alert(categoryid)
        if(accesstoken != null){
              this.props.dispatch(getVideoList(accesstoken,categoryid,this.state.productstate,this.state.search,'',1))
        }else{
          this.props.navigation.navigate('LoginOrSignup')
        }
    } catch(e) {
      // error reading value
    }
  }

  goVedio=async(id)=>{
    try {
    
      await AsyncStorage.setItem('vedioid',String(id))
   
      this.props.navigation.navigate('RcpVedioPlayer')
    
  } catch(e) {
    // error reading value
  } 
   
  }


  deselectVedio=async(id)=>{
    try {
      const accesstoken = await AsyncStorage.getItem('accesstoken')
    
     // alert(categoryid)
        if(accesstoken != null){
          
              this.props.dispatch(selecthomeFavouriteVedio(accesstoken,id))
            //  alert(id)
              this.props.dispatch(clearProps())
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


  Show_Custom_Alert=async(visible)=> {
    try {
      const accesstoken = await AsyncStorage.getItem('accesstoken')
     // alert(this.state.productstate)
      if(this.state.categorystate==''){
        const categoryid  = await AsyncStorage.getItem('categoryid')
        if(accesstoken != null){
          this.props.dispatch(getVideoList(accesstoken,categoryid,this.state.productstate,'all',this.state.orderbystate,this.state.current_page_state))
         
        }else{
          this.props.navigation.navigate('LoginOrSignup')
        }
      }else{
        const categoryid  = this.state.categorystate
        if(accesstoken != null){
          this.props.dispatch(getVideoList(accesstoken,categoryid,this.state.productstate,'all',this.state.orderbystate,this.state.current_page_state))
         
            }else{
              this.props.navigation.navigate('LoginOrSignup')
            }
      }
     // 
     // alert(categoryid)
       
    } catch(e) {
      // error reading value
    }
    this.setState({Alert_Visibility: visible});
    
  }

  productResultDropdown=(value,index)=>{
    //alert(value+""+index)
    this.setState({productstate:index});
    this.setState({productnamestate:value})
  }

  categoryResultDropdown=(value,index)=>{
    this.setState({categorystate:index});
    this.setState({categorynamestate:value})
  }

  orderbyResultDropdown=(value,lable)=>{
    this.setState({orderbystate:lable});
    this.setState({orderbynamestate:value})
  }

  onPressNextBtn=async()=>{
    if(this.state.lastpage_state>this.state.current_page_state){
      var i=this.state.current_page_state+1
      this.setState({current_page_state:i})

      try {
        const accesstoken = await AsyncStorage.getItem('accesstoken')
       // alert(this.state.productstate)
        if(this.state.categorystate==''){
          const categoryid  = await AsyncStorage.getItem('categoryid')
          if(accesstoken != null){
            this.props.dispatch(getVideoList(accesstoken,categoryid,'all','all','',this.state.current_page_state))
           
          }else{
            this.props.navigation.navigate('LoginOrSignup')
          }
        }else{
          const categoryid  = this.state.categorystate
          if(accesstoken != null){
            this.props.dispatch(getVideoList(accesstoken,categoryid,'all','all','',this.state.current_page_state))
           
              }else{
                this.props.navigation.navigate('LoginOrSignup')
              }
        }
       // 
       // alert(categoryid)
         
      } catch(e) {
        // error reading value
      }

    }

  }



  onPressPreviousBtn=async()=>{
    if(1<this.state.current_page_state){
      var i=this.state.current_page_state-1
      this.setState({current_page_state:i})

      try {
        const accesstoken = await AsyncStorage.getItem('accesstoken')
       // alert(this.state.productstate)
        if(this.state.categorystate==''){
          const categoryid  = await AsyncStorage.getItem('categoryid')
          if(accesstoken != null){
            this.props.dispatch(getVideoList(accesstoken,categoryid,'all','all','',this.state.current_page_state))
           
          }else{
            this.props.navigation.navigate('LoginOrSignup')
          }
        }else{
          const categoryid  = this.state.categorystate
          if(accesstoken != null){
            this.props.dispatch(getVideoList(accesstoken,categoryid,'all','all','',this.state.current_page_state))
           
              }else{
                this.props.navigation.navigate('LoginOrSignup')
              }
        }
       // 
       // alert(categoryid)
         
      } catch(e) {
        // error reading value
      }

    }

  }



  render() {

    let titles = [{
      value: 'A to Z',
      lable:'numeric_asc'
  }, {
      value: 'Z to A',
      lable:'numeric_desc'
  }, {
      value: 'New to Old',
      lable:'date_asc'
  }, {
      value: 'Old to New',
      lable:'date_desc'
  }];
      return (
          <SafeAreaView style={{flex:1}}>
           <NavBarDefault name={'Videos'}  onPress={() => this.props.navigation.navigate('RcpVedios')}  onPressStar={()=>this.setState({Alert_Visibility:true})}/>

          
           <View >
           <SearchBar
            placeholder="Type Here..."
            onChangeText={(txt)=>this.setState({search:txt})}
            onFocus={()=>this.focussearch()}
            onBlur={()=>this.blurSearch()}
            value={this.state.search}
            inputStyle={{fontSize:wp('5%')}}
            leftIconContainerStyle={{fontSize:wp('5%')}}
            onClear={()=>this.getData()}
            searchIcon={{ size: wp('5%'), name:'search',
            type:'font-awesome'}}
            inputContainerStyle={{ backgroundColor: 'white' , width: '90%', borderColor: 'white' }}
            containerStyle={{ backgroundColor: 'white' , borderWidth: 0, borderColor: 'black', borderTopWidth: 0, }}
            noIcon={true}
            
          />

           </View>

           
         
           {this.props.loading && <Loading navigation={this.props.navigation} animating={true} />}

{this.state.orientation=='landscape'?
 <View style={styles.container}>
              
 {this.state.nodatemessage=='err'?
 <Text>No data</Text>
:
<FlatList
data={vedioResultdate}
renderItem={({ item }) =>
 <Item 
 description={item.description}
 name={item.name}
 isfavourite={item.favourite}
 onpressrenderViewLess={this.renderViewLess}
 onpressrenderViewMore={this.renderViewMore}
 _url={item.thumbnail_large} 
 onPressStar={()=>this.deselectVedio(item.id)}
 onPress={()=>this.goVedio(item.id)} />}
 keyExtractor={item => item.id}
 numColumns={1}
/>

}


<View style={{flexDirection:'row',alignItems:'center',position: 'absolute',backgroundColor:'white', //Here is the trick
    bottom: 0}}>
               <View style={{flex:1,height:hp('5%'),alignItems:'flex-start',justifyContent:'center',paddingLeft:wp('5%')}}>
               <TouchableOpacity onPress={()=>this.onPressPreviousBtn()}>
               <Text style={{color:'#D11F2E',fontSize:wp('4%')}}>Previous</Text>
                 </TouchableOpacity>
                  
               </View>
               <View style={{flex:1,alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                   <Text style={{fontSize:wp('4%')}}>{this.state.current_page_state} </Text>
                   <Text style={{fontSize:wp('4%')}}>/</Text>
                    <Text style={{fontSize:wp('4%')}}> {this.state.lastpage_state}</Text>
               </View>
               <View style={{flex:1,alignItems:'flex-end',justifyContent:'center',marginRight:wp('5%')}}>
                 <TouchableOpacity onPress={()=>this.onPressNextBtn()} >
                      <Text style={{color:'#D11F2E',fontSize:wp('4%')}}>Next</Text>
                 </TouchableOpacity>
                  
                </View>
             
             </View>


  
</View>

:
<View style={styles.container}>
              
              {this.state.nodatemessage=='err'?
              <Text>No data</Text>
             :
             <FlatList
             data={vedioResultdate}
             renderItem={({ item }) =>
              <Item 
              description={item.description}
              name={item.name}
              isfavourite={item.favourite}
              onpressrenderViewLess={this.renderViewLess}
              onpressrenderViewMore={this.renderViewMore}
              _url={item.thumbnail_large} 
              onPressStar={()=>this.deselectVedio(item.id)}
              onPress={()=>this.goVedio(item.id)} />}
              keyExtractor={item => item.id}
             
              numColumns={1}
             />
             
             }

             <View style={{flexDirection:'row',alignItems:'center',position: 'absolute',backgroundColor:'white', //Here is the trick
    bottom: 0}}>
               <View style={{flex:1,height:hp('5%'),alignItems:'flex-start',justifyContent:'center',paddingLeft:wp('5%')}}>
               <TouchableOpacity onPress={()=>this.onPressPreviousBtn()}>
               <Text style={{color:'#D11F2E',fontSize:wp('4%')}}>Previous</Text>
                 </TouchableOpacity>
                  
               </View>
               <View style={{flex:1,alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                   <Text style={{fontSize:wp('4%')}}>{this.state.current_page_state} </Text>
                   <Text style={{fontSize:wp('4%')}}>/</Text>
                    <Text style={{fontSize:wp('4%')}}> {this.state.lastpage_state}</Text>
               </View>
               <View style={{flex:1,alignItems:'flex-end',justifyContent:'center',marginRight:wp('5%')}}>
                 <TouchableOpacity onPress={()=>this.onPressNextBtn()} >
                      <Text style={{color:'#D11F2E',fontSize:wp('4%')}}>Next</Text>
                 </TouchableOpacity>
                  
                </View>
             
             </View>
               
             </View>



}
          
                     <Modal
 
 visible={this.state.Alert_Visibility}

 transparent={true}

 animationType={"fade"}

 onRequestClose={ () => { this.Show_Custom_Alert(!this.state.Alert_Visibility)} } >


   <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>


       <View style={styles.Alert_Main_View}>

      
             <View style={{flex:1,padding:5}}>
           <Dropdown
                                label='Products'
                                data={productsResultdata}
                                baseColor='gray'
                                value={this.state.productnamestate}
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
                                onChangeText={(value,index,data) => this.productResultDropdown(value,data[index].id)}
                            /> 

             </View>
             <View style={{flex:1,padding:5}}>
             <Dropdown
                                label='Categories'
                              
                                data={caregoryResultdata}
                                baseColor='gray'
                                value={this.state.categorynamestate}
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
                                onChangeText={(value,index,data) => this.categoryResultDropdown(value,data[index].id)}
                            />

             </View>

             <View style={{flex:1,padding:5}}>
             <Dropdown
                                label='Sort By'
                              
                                data={titles}
                                baseColor='gray'
                                value={this.state.orderbynamestate}
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
                                onChangeText={(value,index,data) => this.orderbyResultDropdown(value,data[index].lable)}
                            />

             </View>

            
          
           <View style={{flexDirection: 'row', height: wp('15%'),}}>

               
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






          </SafeAreaView>
      );
  }
}


 

const mapStateToProps = state =>({ 
  catagoryResult:state.homeReducer.catagoryResult,
  selecthomeVedioResult:state.homeReducer.selecthomeVedioResult,
  vedioListResult:state.homeReducer.vedioListResult,
  loading:state.homeReducer.loading,
  productsArray:state.homeReducer.productsArray,
  vedioListResultPagination:state.homeReducer.vedioListResultPagination


});

export default connect(mapStateToProps)(VideoList);

