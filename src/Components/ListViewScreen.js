import React, {Component} from 'react'
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import {ListCard, TextField} from './common';
import { connect } from 'react-redux';
import { 
    imageSearchBoxValueChanges,
    toggleImageListLoader,
    getImageFromApi

 } from '../Actions/ImageListAction'

class ListViewScreen extends Component {

    

    renderLoader(){
        if (this.props.showLoader){
            return <ActivityIndicator
            size='large'
            color="#00ff00"
            style={styles.loaderStyle}

            
            />;
        }
    }

   

    componentDidMount() {
        // this.getImagesAPICall();
        this.props.getImageFromApi();
    }
    render(){
    const {ViewStyle, HeaderViewStyle, TextViewStyle} = styles;

    const EmptyListMessage = () =>{
        return (
            <View style={styles.EmptyView}>
                <Text style={styles.emptyListText}>
                    No Data Found Of Search Imaged
                </Text>
            </View>
        )
    }
    return (
        <View style={ViewStyle}>
            <View style={HeaderViewStyle}>
            <Text style={TextViewStyle}>Image Gallery</Text>
        </View>


        <TextField placeHolder='search' 
        style={{borderColor:'pink',fontSize:16}}
        onChange ={value =>{
            this.props.imageSearchBoxValueChanges(this.props.image_list,value)
        }}
        />
        
        <FlatList
        data={this.props.filtered_image_list}
        renderItem={(item) => {
            return (
                <ListCard image={item.item.download_url} ownerName={item.item.author} />
            )
        }}
        ListEmptyComponent = {EmptyListMessage}
        contentContainerStyle = {{flexGrow:1,justifyContent:'center'}}
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
    EmptyView:{
        justifyContent: 'center',
        alignItems: 'center',
        height:'100%'
    },
    emptyListText:{
        fontSize: 20,
        margin: 10,
        color:'black',
        fontFamily: 'ZenOldMincho-Black',
    }
});

const mapStateToProps = state => {
    return{
        image_search_value: state.imageList.image_search,
        image_list: state.imageList.image_list,
        filtered_image_list: state.imageList.filtered_image_list,
        showLoader: state.imageList.showLoader
    }
}

export default connect(mapStateToProps,{
    imageSearchBoxValueChanges,
    getImageFromApi,
    toggleImageListLoader

}) (ListViewScreen);
