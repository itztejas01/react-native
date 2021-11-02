import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class ImageDetailsScreen extends Component {

    componentDidMount(){
        // console.log('This.props params',this.props.route)
    }
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.goBack();
          }}>
          <Text
            style={{
              fontSize: 20,
              marginTop: 10,
              color: '#2e86ab',
              fontFamily: 'ZenOldMincho-Black',
            }}>
            Go Back!
          </Text>
        </TouchableOpacity>
        <Text style={styles.TextViewStyle}>
          Image details will be displayed on this page.
        </Text>
        <Text style={styles.TextViewStyle}>
            Image Id you clicked on is: {this.props.route.params.image_id}
        </Text><Text style={styles.TextViewStyle}>
            And the Author name is: {this.props.route.params.author_name}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  TextViewStyle: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    color: '#2e86ab',
    fontFamily: 'ZenOldMincho-Black',
  },
});
export default ImageDetailsScreen;
