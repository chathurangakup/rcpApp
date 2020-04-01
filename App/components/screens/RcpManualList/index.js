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

const {getPdfList,selecthomeFavouriteDocuments,getCategories,getProductsHome,clearProps} = homeAction;

import styles from './styles';






function Item({ name, thumbnail,onPress,description,isfavourite,onPressStar,onpressrenderViewMore,onpressrenderViewLess  }) {
  const imgurl='https://smartapprcp.s3-ap-southeast-1.amazonaws.com/'+thumbnail;
  console.log(isfavourite)
  return (
    
      <View>
        <TouchableOpacity onPress={onPress}>
        <ImageBackground style={styles.thumbnail}  source={{uri: imgurl}}>
               {isfavourite=='yes'?
                   <Icon 
                   name='star'
                   size={wp('5%')}
                   color='black'
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
               color='black'
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
          textStyle={{fontSize: wp('3.5%'), marginHorizontal: 10, color: 'gray', width:  wp('45%')}}
        >
          <Text >
           {description}
          </Text>
        </ViewMoreText>
         
      </View>
  );
}

let pdfResultdate=[];
let caregoryResultdata;
let productsResultdata;

class PdfList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
     search:'',
    nodatemessage:'',
    search:'',

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
    productnamestate:'All'
    }
  };

  static getDerivedStateFromProps(props, state) {
    const { params } = props.navigation.state; 
  // pdfResultdate=[]
    state.nodatemessage=''
    state.countriesArrayResultDesc=[]
    state.productsArrayResultDesc=[]



    if(props.pdfListResult!=undefined){
     
      if(props.pdfListResult=='err'){
          state.nodatemessage='err'
      }else{
      //  alert('lll')
        pdfResultdate=props.pdfListResult
      }


  

 

    }


    if(props.selecthomeDocumentResult!=undefined){
      console.log(props.selecthomeDocumentResult.status+"llolo")
      if(props.selecthomeDocumentResult.status='success'){
        _storeAccess= async()=>{
          try {
            const accesstoken = await AsyncStorage.getItem('accesstoken')
            const categoryid = await AsyncStorage.getItem('categoryid')
           // alert(categoryid)
              if(accesstoken != null){
                    props.dispatch(getPdfList(accesstoken,categoryid,'all','all',''))
                    this.props.dispatch(getProductsHome(accesstoken))
                    this.props.dispatch(getCategories(accesstoken))
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

    console.log(props.productsArray)
    console.log("props.productsArray")
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

  if(props.catagoryResult!=undefined){
    for( var i=0, len= props.catagoryResult.documentCatedories.length; i < len; i++ ){

      state.countriesArrayObj = { 
        value:props.catagoryResult.documentCatedories[i].name,
        id:props.catagoryResult.documentCatedories[i].id,
      };
       state.countriesArrayResultDesc.push(state.countriesArrayObj)
       caregoryResultdata=state.countriesArrayResultDesc
  }//end for
   
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
            this.props.dispatch(getPdfList(accesstoken,categoryid,this.state.productstate,'all',this.state.orderbystate))
             this.props.dispatch(getCategories(accesstoken))
            this.props.dispatch(getProductsHome(accesstoken))
            }else{
              this.props.navigation.navigate('LoginOrSignup')
            }

        }else{

          const categoryid = this.state.categorystate

          if(accesstoken != null){
            this.props.dispatch(getPdfList(accesstoken,categoryid,this.state.productstate,'all',this.state.orderbystate))
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
              this.props.dispatch(getPdfList(accesstoken,categoryid,'all','all',''))
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
     // alert('ll')
  }

  blurSearch=async()=>{
    try {
      const accesstoken = await AsyncStorage.getItem('accesstoken')
      const categoryid = await AsyncStorage.getItem('categoryid')
     // alert(categoryid)
        if(accesstoken != null){
              this.props.dispatch(getPdfList(accesstoken,categoryid,'all',this.state.search,''))
        }else{
          this.props.navigation.navigate('LoginOrSignup')
        }
    } catch(e) {
      // error reading value
    }
  }

  btnPressPdf=async(url,isfavourite)=>{
   // alert(url)
    try {
      await AsyncStorage.setItem('pdfurl',url);
      await AsyncStorage.setItem('isfavourite',isfavourite);
      this.props.navigation.navigate('RcpManualListPdf')
    } catch (error) {
      console.log(error);
  }
  }



  deselectDocument=async(id)=>{
    try {
      const accesstoken = await AsyncStorage.getItem('accesstoken')
    
     // alert(categoryid)
        if(accesstoken != null){
              this.props.dispatch(selecthomeFavouriteDocuments(accesstoken,id))
              
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
      
      if(this.state.categorystate==''){
        const categoryid  = await AsyncStorage.getItem('categoryid')
        if(accesstoken != null){
          this.props.dispatch(getPdfList(accesstoken,categoryid,this.state.productstate,'all',this.state.orderbystate))
         
        }else{
          this.props.navigation.navigate('LoginOrSignup')
        }
      }else{
        const categoryid  = this.state.categorystate
        if(accesstoken != null){
          this.props.dispatch(getPdfList(accesstoken,categoryid,this.state.productstate,'all',this.state.orderbystate))
         
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
   // alert(value+""+index)
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
           <NavBarDefault name={'Product Use Manuals'}  onPress={() => this.props.navigation.navigate('RcpManuals')}  onPressStar={()=>this.setState({Alert_Visibility:true})}/>
           <View style={{paddingLeft:wp('2%'),paddingRight:wp('2%')}}>
           <SearchBar
        placeholder="Type Here..."
        onChangeText={(txt)=>this.setState({search:txt})}
        onFocus={()=>this.focussearch()}
        onBlur={()=>this.blurSearch()}
        value={this.state.search}
        inputStyle={{fontSize:wp('5%')}}
        onClear={()=>this.getData()}
        searchIcon={{ size: wp('5%'), name:'search',
        type:'font-awesome'}}
        inputContainerStyle={{ backgroundColor: 'white' , width: '90%', borderColor: 'white' }}
        containerStyle={{ backgroundColor: 'white' , borderWidth: 0, borderColor: 'black', borderTopWidth: 0}}
        noIcon={true}
        
      />
           </View>
           {this.props.loading && <Loading navigation={this.props.navigation} animating={true} />}

          
              <View style={styles.container}>
              
                {pdfResultdate.length==0?
                <Text>No data</Text>
             :
             <FlatList
             data={pdfResultdate}
             renderItem={({ item }) =>
              <Item 
              description={item.description}
              name={item.name}
              onpressrenderViewLess={this.renderViewLess}
              onpressrenderViewMore={this.renderViewMore}
              isfavourite={item.favourite}
              thumbnail={item.thumbnail} 
              onPressStar={()=>this.deselectDocument(item.id)}
              onPress={()=>this.btnPressPdf(item.url,item.favourite)} />}
             keyExtractor={item => item.id}
             numColumns={1}
         />

     
                
              }
                 
              </View>


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
  selecthomeDocumentResult:state.homeReducer.selecthomeDocumentResult,
  pdfListResult:state.homeReducer.pdfListResult,
  loading:state.homeReducer.loading,
  productsArray:state.homeReducer.productsArray


});

export default connect(mapStateToProps)(PdfList);

