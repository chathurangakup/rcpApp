/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//components
//import appColor from '../../src/utils/AppColor';



class NavBarDefault extends React.Component {

    route = () => {
        const { onPress } = this.props;
        onPress();
    }

    onPressStar = () => {
        const { onPressStar } = this.props;
        onPressStar();
    }

    render() {
        return (
            <View style={styles.navbar}>
                <View style={{ flexDirection: 'row',alignItems:'center',position: 'relative' ,
                justifyContent: "space-between"}}>
                    <View style={{flexDirection: 'row',alignItems:'center',}}>
                    <TouchableOpacity onPress={() => this.route()}>
                        <Image
                            style={{ width: wp('5%'), height: wp('5%'), marginLeft: 10,marginBottom:5}}
                            source={require('../../images/arrow.png')}
                        />
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 10,   fontSize: wp('4.5%'), marginTop: '-1%' }}>{this.props.name}</Text>
                    </View>

                    <Icon 
                                name='filter'
                                size={wp('5%')}
                                color='black'
                                onPress={()=>this.onPressStar()}
                                style={{
                                   marginRight: wp('5%'),
                                }} 
                          />
                

                    {/* <TouchableOpacity onPress={() => this.route()}>
                        <Image
                            style={{ width: 20, height: 20, marginRight: 10,marginBottom:5,}}
                            source={require('../../images/arrow.png')}
                        />
                    </TouchableOpacity> */}
                </View>
            </View>
        );
    }
}

const styles = {
    navbar: {
        height: 55,
        backgroundColor: '#ffffff',
        elevation: 0,
        justifyContent: 'center',
    }
}

export default NavBarDefault;
