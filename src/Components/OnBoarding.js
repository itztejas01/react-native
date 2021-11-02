import React, { Component } from 'react'
import { View,Text, TouchableOpacity } from 'react-native'

class OnBoarding extends Component {
    componentDidMount(){

    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("HomeScreen")}>
                <Text sty>Next</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default OnBoarding
