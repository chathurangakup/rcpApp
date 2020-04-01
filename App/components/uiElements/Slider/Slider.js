import React, { Component } from 'react';
import Slideshow from 'react-native-image-slider-show';
import { StyleSheet,Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../uiElements/colors/colors';

const deviceWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: deviceWidth / 380});


class Slider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      position: 1,
      interval: null,
      dataSource: [
        {
          title: 'Title 1',
          caption: 'Caption 1',
          url: require('./images/1.jpg'),
        }, {
          title: 'Title 2',
          caption: 'Caption 2',
          url: require('./images/2.jpg'),
        },
        {
          title: 'Title 2',
          caption: 'Caption 2',
          url: require('./images/3.jpg'),
        }
      ],
    };
  }

  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
      }, 2000)
    })
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    return (
     
      <Slideshow
        dataSource={this.state.dataSource}
        position={this.state.position}
        onPositionChanged={position => this.setState({ position })}
        height={ Dimensions.get('window').height/1.15}
        width={deviceWidth/2}
        arrowSize={0}
        scrollEnabled={true}
        overlay={true}
        indicatorSize={10}
        style={ styles.slideround }
        indicatorSelectedColor={colors.white}
        captionStyle={{ display: 'none' }}
        titleStyle={{ display: 'none' }} />
    );
  }
}

const styles=StyleSheet.create({
    
        container: {
          flex: 2,
          // flexDirection: 'row',
          // justifyContent: 'center',
          // position: 'absolute',
          // left: 0,
          // bottom: 10,
          // right: 0,
          // textAlign: 'center',
          // alignItems: 'flex-end',
      
          flexDirection: 'column',
          justifyContent: 'flex-start',
          // position: 'absolute',
      
          alignItems: 'center',
        },
        button: {
          marginBottom : 10,
          width: deviceWidth / 2
        },
        title: {
          paddingBottom : 15,
          textAlign: 'center',
          fontSize: 20,
          fontWeight: '600'
        },
        buttonWrapper: {
          
        },
       
     
});

export default (Slider);