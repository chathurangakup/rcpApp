//import PDFView from 'react-native-view-pdf';
import React, { Component } from 'react';
import {
  View, Text,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  ScrollView,
  FlatList
 
} from 'react-native';
import Pdf from 'react-native-pdf';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/AntDesign';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { connect } from 'react-redux';

import Buttons from '../../uiElements/Buttons/RoundButtons'
import NavBarDefault from '../../uiElements/NavBarDefault';
const imageWidth = Dimensions.get('window').width;

import homeAction from '../../redux/Home/actions';
import Loading from '../../uiElements/Loading';
import styles from './styles';
const {getPdfList,selecthomeFavouriteDocuments,clearProps} = homeAction;


class PdfManualList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      padurlstate:''
    }
  };


  componentDidMount() {
    console.log("fullurl")
    this.getData()
  }

  getData = async () => {
    try {
      const pdfurl = await AsyncStorage.getItem('pdfurl')
      const isfavourite = await AsyncStorage.getItem('isfavourite')
      if(isfavourite=='yes'){
      
          this.setState({isselectstar:'star'})
       
      }else{
        this.setState({isselectstar:'staro'})
      }
      console.log(fullurl)
      const fullurl='https://smartapprcp.s3-ap-southeast-1.amazonaws.com/'+pdfurl
      console.log(fullurl)
       this.setState({padurlstate:fullurl})
    } catch(e) {
     console.log(e)
    }
  }
  
  componentWillUnmount() {

  }


  onPressStar=async()=>{
    try {
      const accesstoken = await AsyncStorage.getItem('accesstoken')
      const pdfid = await AsyncStorage.getItem('pdfid')
  
    
      if(accesstoken != null){
        this.props.dispatch(selecthomeFavouriteDocuments(accesstoken,pdfid))
       if(this.state.isselectstar=='star'){
             this.setState({isselectstar:'staro'})
       }else{
        this.setState({isselectstar:'star'})
       }
       
      
        }else{
          this.props.navigation.navigate('LoginOrSignup')
        }
  
  } catch(e) {
  // error reading value
  }
  }

 



  render() {
    const resourceType = 'url';

    return (
      <SafeAreaView style={{flex:1}}>
          <NavBarDefault name={'Product Use Manuals'}  onPress={() => this.props.navigation.navigate('RcpManualList')}/>
    
          {this.props.loading && <Loading navigation={this.props.navigation} animating={true} />}
          <View style={{position:'absolute',right:0,marginTop:50,marginRight:wp('0%'),zIndex:2}}>
          <Icon name={this.state.isselectstar}
                            size={wp('8%')}
                            color='black'
                            onPress={()=>this.onPressStar()}
                            style={{
                            position: 'relative',
                           
                            right: 10,
                            top: 10,
                            bottom: 0
                        }} />
        </View>
   
   
          <Pdf
             ref={(pdf)=>{this.pdf = pdf;}}
              source={{uri:this.state.padurlstate}}
              onLoadComplete={(numberOfPages,filePath)=>{
                  console.log(`number of pages: ${numberOfPages}`);
              }}
              onPageChanged={(page,numberOfPages)=>{
                  console.log(`current page: ${page}`);
              }}
              onError={(error)=>{
                  console.log(error);
              }}
              onPressLink={(uri)=>{
                  console.log(`Link presse: ${uri}`)
              }}
              style={styles.pdf}/>
        </SafeAreaView>
 
              
    );
  }
}
const mapStateToProps = state =>({ 
  selecthomeDocumentResult:state.homeReducer.selecthomeDocumentResult,
  pdfListResult:state.homeReducer.pdfListResult,
  loading:state.homeReducer.loading,


});

export default connect(mapStateToProps)(PdfManualList);

