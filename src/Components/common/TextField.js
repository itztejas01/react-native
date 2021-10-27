import React, {Component} from 'react';
import { TextInput } from 'react-native';

class TextField extends Component {
    render(){
        const {placeHolder, style, onChange, value} = this.props;
        const {textFieldInput} = styles;
    return (
        <TextInput
        placeholder={placeHolder}
        style={[textFieldInput,style]}
        placeholderTextColor='grey'
        onChangeText={onChange}
        value={value}
        
        />
    );
}
}

const styles = {
    textFieldInput:{
        width:'100%',
        height:40,
        borderBottomWidth:3,
        marginVertical:10,
        alignSelf:'center',
        color:'black',
        borderColor:'red',
    }
}

export {TextField}
