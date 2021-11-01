import React, {Component} from 'react'
import { View, 
    Text, 
    StyleSheet, 
    FlatList, 
    Alert, 
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native'
import {ListCard,TextField} from './common';
import { connect } from 'react-redux';
import { imageSearchBoxValueChanged, 
    getImageListFromApi,
toggleImageListLoader,
} from '../Actions/ImageListAction'


class ListViewScreen extends Component {

    

    renderLoader(){
        // if (this.state.showLoader)
        if(this.props.showLoader){
            return <ActivityIndicator
            size='large'
            color="#00ff00"
            style={styles.loaderStyle}

            
            />;
        }
    }

    

    componentDidMount() {
        // this.getImagesAPICall();
        // this.props.toggleImageListLoader(true);
        // console.log(this.props);
        // this.props.getImageListFromApi();
        // this.props.toggleImageListLoader(false);
    }
    render(){
    const {ViewStyle, HeaderViewStyle, TextViewStyle} = styles;
    const EmptyListMessage = () => {
        return (
          // Flat List Item
          <View
          style={styles.EmptyView}
          >
          <Text
          style={styles.emptyListStyle}
            onPress={() => Alert.alert('Items Search','No item found')}>
            No Data Found
          </Text>
          </View>
        );
      };
    return (
        <View style={ViewStyle}>
            
        <TextField placeHolder="Search" style={{borderColor:'pink',fontSize:16}} onChange={value =>{
        
            this.props.imageSearchBoxValueChanged(this.props.image_list,value);
            
        }}
        value={this.props.image_search_value}
        />
        
        <FlatList
        // data={this.state.imageList}
        // data={this.props.image_list}
        data={this.props.filtered_image_list}
        renderItem={(item) => {
            
            return (
                <ListCard 
                image={item.item.download_url} 
                ownerName={item.item.author}
                detailsOnPress={() => {
                    this.props.navigation.navigate('Image Details',{
                        image_id: item.item.id,
                        author_name: item.item.author
                    })
                }}
                />
                
            )
            
        }}
        ListEmptyComponent = {EmptyListMessage}
        contentContainerStyle={{flexGrow:1,justifyContent:'center'}}
        
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
        fontSize:25,
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
    emptyListStyle: {
        fontSize: 20,
        margin: 10,
        color:'black',
        fontFamily: 'ZenOldMincho-Black',
      },
});
const mapStateToProps = state => {
    return {
        image_search_value: state.imageList.image_search,
        image_list: state.imageList.image_list,
        showLoader: state.imageList.showLoader, 
        filtered_image_list: state.imageList.filtered_image_list
    };
};
export default connect(mapStateToProps,{imageSearchBoxValueChanged,
    getImageListFromApi,
    toggleImageListLoader,
})(ListViewScreen);
