import React, { Component } from 'react'
import { View,Text,ActivityIndicator,StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import {getImageListFromApi} from '../Actions/ImageListAction'
import AsyncStore from '../extras/AsyncStore'



class SplashScreen extends Component {
    componentDidMount(){
        const asyncStore = new AsyncStore();
        asyncStore.getData('AppOpened').then(value => {
            console.log("value: ",value)
            if (value){
                console.log("Opening 2 or greater so value is store in async")
                this.props.getImageListFromApi(this.props.navigation)

            }else{
                console.log("Opening first time so no value is store in async")
                asyncStore.storeData('AppOpened','1')
                this.props.navigation.navigate('OnBoarding')
            }
        })
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
