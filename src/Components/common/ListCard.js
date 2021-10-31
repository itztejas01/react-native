import React, {Component} from 'react';
import { View, Text, Image, 
    StyleSheet, 
    TouchableOpacity,
TouchableNativeFeedback
} from 'react-native';
class ListCard extends Component {

    render(){
    const {imageStyle, 
        cardStyle, 
        textViewStyle,
        downloadTouchButton,
        downloadText} = styles;
    const {image, ownerName} = this.props;
    return (
        <View style={cardStyle}>

            <Image
	style={imageStyle}
	source={{uri : image}}
 />

	<View>
	<Text style={textViewStyle}>{ownerName}</Text>
	</View>
    
    <TouchableNativeFeedback style={downloadTouchButton}
    onPress={()=>{
        alert('hello I am tejas chaplot')
    }}
    >
        <Text style={downloadText}>Download!</Text>
    </TouchableNativeFeedback>
        </View>
    )
    }
};
const styles = StyleSheet.create({
	imageStyle: {
height:300,
width:'100%',

},
cardStyle: {
backgroundColor: 'white',
widht:'90%',
// alignItems:'center',
alignSelf:'auto',
marginVertical:20,
shadowColor: '#000',
shadowOffset: {width: 0, 
    height: 1},
shadowOpacity: 1,
elevation: 10,

},

textViewStyle:{
height:50,
marginVertical:10,
color:'#593959',
fontFamily:'ZenOldMincho-Black',
textAlign:'center',
fontSize: 30,
},
downloadTouchButton: {
    backgroundColor: 'yellow',
    width: '40%',
    height: 50,
    alignContent:'flex-start',
    borderRadius: 5,
    marginBottom:15,
    elevation:10,
},
downloadText:{
    fontSize:20,
    color:'#55d6be',
    textAlign: 'center',
    marginVertical:0,
    fontFamily:'Anton-Regular',
}
});
export {ListCard}