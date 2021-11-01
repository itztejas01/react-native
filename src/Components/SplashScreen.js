import React, { Component } from 'react'
import { View,Text,ActivityIndicator,StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import {getImageListFromApi} from '../Actions/ImageListAction'


class SplashScreen extends Component {
    componentDidMount(){
        console.log("this.props params", this.props.route);
        this.props.getImageListFromApi(this.props.navigation);
        // this.props.navigation.navigate("HomeScreen");
    }
    render() {
        return (
        <View style={styles.ViewStyle}>
        <View >
            <Text style={styles.SecondStyle}>Welcome To Tejas App</Text>
            <ActivityIndicator
            size='large'
            color='green'            
            />
        </View>
        </View>
        )
    }
}

const styles =StyleSheet.create({
    ViewStyle:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    },
    SecondStyle:{
        // borderColor:'pink',
        // borderWidth:10,
        // elevation:10,
        color:'yellow',
        fontSize:20,
        marginTop:10,
        textAlign:'center',
        fontFamily:'ZenOldMincho-Black'
    }
})
const mapStateToProps = state =>{
    return {};
}
export default connect(mapStateToProps, {getImageListFromApi})(SplashScreen)
