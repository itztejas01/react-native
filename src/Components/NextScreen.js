import React, { Component } from 'react';
import {View,Text} from 'react-native'

class NextScreen extends Component {
    componentDidMount(){
        console.log('this.props')
    }
    render() {
        return (
            <View>
            <Text style={{color:'black'}}>
                THis is the next screen
            </Text>
            </View>
        )
    }
}

export default NextScreen
