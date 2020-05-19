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
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import NavBarDefault from '../../uiElements/NavBarDefault';
import favouriteAction from '../../redux/Favourite/actions';
import Loading from '../../uiElements/Loading';

const {getFavouriteDocumentList,selectFavouriteDocuments,clearProps} = favouriteAction;

import styles from './styles';


const resources = {
  file: Platform.OS === 'ios' ? 'test-pdf.pdf' : '/sdcard/Download/test-pdf.pdf',
  url: 'https://www.ets.org/Media/Tests/TOEFL/pdf/SampleQuestions.pdf',
  base64: 'JVBERi0xLjMKJcfs...',
};

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      padurlstate:'',
      isselectstar:'star'
    }
  };


  static getDerivedStateFromProps(props, state) {

      console.log(props.selectDocumentResult)

  }

  componentDidMount() {
    console.log("fullurl")
    this.getData()
  }

  getData = async () => {
    try {
      const pdfurl = await AsyncStorage.getItem('pdfurl')
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
        this.props.dispatch(selectFavouriteDocuments(accesstoken,pdfid))
       
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


  render() {
    const resourceType = 'url';

    return (
      <SafeAreaView style={{flex:1}}>
          <NavBarDefault name={'Product Use Manuals'}  onPress={() => this.props.navigation.navigate('FavouriteDocumentList')}/>
          {this.props.loading && <Loading navigation={this.props.navigation} animating={true} />}
          <View style={{position:'absolute',right:0,marginTop:60,marginRight:10,zIndex:1,height:wp('10%')}}>
          <Icon name={this.state.isselectstar}
                             size={wp('8%')}
                            color='black'
                            onPress={()=>this.onPressStar()}
                            style={{
                            position: 'absolute',
                           
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
  selectDocumentResult:state.favouriteReducer.selectDocumentResult,
 
  loading:state.favouriteReducer.loading,


});

export default connect(mapStateToProps)(App);