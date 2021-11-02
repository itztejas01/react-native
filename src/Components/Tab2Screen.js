import React, { Component } from 'react';
import {View,Text} from 'react-native'

class Tab2Screen extends Component {
    componentDidMount(){
        // console.log('this.props')
    }
    render() {
        return (
            <View>
            <Text style={{color:'black'}}>
                THis is the tab 2 next screen
            </Text>
            </View>
        )
    }
}

export default Tab2Screen
