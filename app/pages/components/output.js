
import React, {Component} from 'react';
import { StyleSheet } from "react-native";
import { Input, 
  Text, 
  Layout,
  Button
} from 'react-native-ui-kitten';

export default class OutputSection extends Component {

  constructor(props){
    super(props);
  }

  showHistory = () => {
    this.props.navigation.navigate('history', {data: this.props.state.data});
  }


  render() {
    return (
      <Layout style={styles.container}>
        <Text style={styles.textInputStyle}>{this.props.state.result!=""?this.props.state.result:" "}</Text>
        <Button style={styles.buttonStyle} textStyle={styles.buttonText} size="tiny" onPress={this.showHistory}>^</Button>
      </Layout>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#111"
  },
  textInputStyle: {
    fontSize: 60,
    color: "#fff",
    paddingTop: "45%",
    textAlign: "right",
    alignSelf: 'stretch',
    letterSpacing: 3
  },
  textOutputStyle: {
    fontSize: 30,
    color: "#aaa",
    paddingTop: "10%",
    textAlign: "right",
    alignSelf: 'stretch'
  },
  buttonStyle: {
    width: "20%",
    marginHorizontal: "40%",
    marginVertical: "15%",
    backgroundColor: "transparent",
    borderWidth: 0,
    borderRadius: 0
  },
  buttonText: {
    color: "white",
    fontSize: 22,
    textAlign: "left",
    alignSelf: 'stretch',
    paddingTop: 17,
    marginTop: 10
  }
});


