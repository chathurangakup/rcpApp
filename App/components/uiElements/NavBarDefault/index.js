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
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//components
//import appColor from '../../src/utils/AppColor';



class NavBarDefault extends React.Component {

    route = () => {
        const { onPress } = this.props;
        onPress();
    }

    render() {
        return (
            <View style={styles.navbar}>
                <View style={{ flexDirection: 'row',alignItems:'center' }}>
                    <TouchableOpacity onPress={() => this.route()}>
                        <Image
                            style={{ width: wp('5%'), height: wp('5%'), marginLeft: 10,marginBottom:5}}
                            source={require('../../images/arrow.png')}
                        />
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 10, fontSize: wp('4%'), marginTop: '-1%' }}>{this.props.name}</Text>
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
