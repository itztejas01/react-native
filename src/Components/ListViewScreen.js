import React, {Component} from 'react'
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import {ListCard,TextField} from './common';
import { connect } from 'react-redux';
import { imageSearchBoxValueChanged } from '../Actions/ImageListAction'
import axios from 'axios';

class ListViewScreen extends Component {

    state = {
        imageList: [],
        showLoader: false,

    };

    renderLoader(){
        if (this.state.showLoader){
            return <ActivityIndicator
            size='large'
            color="#00ff00"
            style={styles.loaderStyle}

            
            />;
        }
    }

    getImagesAPICall(){
        this.setState({
            showLoader:true,
        })
        axios.get("https://picsum.photos/v2/list")
        .then(response => {
            
            this.setState({
                imageList: response.data,
                showLoader:false
            })
        })
        .catch(error => {
            this.setState({
                showLoader:false
            });
            console.log('error: ',error);
        });
    }

    componentDidMount() {
        this.getImagesAPICall();
    }
    render(){
    const {ViewStyle, HeaderViewStyle, TextViewStyle} = styles;
    return (
        <View style={ViewStyle}>
            <View style={HeaderViewStyle}>
            <Text style={TextViewStyle}>Image Gallery</Text>
        </View>
        <TextField placeHolder="Search" style={{borderColor:'pink',fontSize:17}} onChange={value =>{
            // console.log('value entered: ',value);
            this.props.imageSearchBoxValueChanged(value);
        }}
        value={this.props.image_search_value}
        />
        <FlatList
        data={this.state.imageList}
        renderItem={(item) => {
            return (
                <ListCard image={item.item.download_url} ownerName={item.item.author} />
            )
        }}
        
        />
        {this.renderLoader()}
        </View>

    );
}
}

const styles = StyleSheet.create({
    ViewStyle: {
        backgroundColor:'white',
        flex:1,
    },
    HeaderViewStyle: {
        backgroundColor: '#f5f749',
        height:72,
        elevation:10,
    },
    TextViewStyle: {
        fontSize:35,
        textAlign:'center',
        marginTop:10,
        color:'#2e86ab',
        fontFamily: 'ZenOldMincho-Black',
    },
    loaderStyle:{
        position:'absolute',
        left:0,
        right:0,
        top:0,
        bottom:0,
        padding:10
    },
});
const mapStateToProps = state => {
    return {
        image_search_value: state.imageList.image_search,
    };
};
export default connect(mapStateToProps,{imageSearchBoxValueChanged})(ListViewScreen);
