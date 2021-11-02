import React, { Component } from 'react';
import {View,Text, TouchableOpacity} from 'react-native'

class Tab1Screen extends Component {
    componentDidMount(){
        // console.log('this.props')
    }
    render() {
        return (
            <View>
            <Text style={{color:'black'}}>
            THis is the tab 2 next screen 1
            </Text>
            <View>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Tab2 Screen2')}><Text style={{color:'black'}}>press here</Text></TouchableOpacity>
            </View>
            </View>
        )
    }
}

export default Tab1Screen
