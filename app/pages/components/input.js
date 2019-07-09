
import React, {Component} from 'react';
import { StyleSheet } from "react-native";
import { 
  Layout,
  Button
} from 'react-native-ui-kitten';
import { Grid, Row, Col } from "react-native-easy-grid";


export default class InputSection extends Component {

  constructor(props){
    super(props);
  }

  getValue = (value, type) => {
    if(type == "operand" || type == "operator"){
      this.props.state.setStateInput(value);
      return;
    }else if(type == "clear"){
      console.log(this.props.state.result.length-1);
      var input = this.props.state.result.length-1 != 0 ? this.props.state.result.substring(0, this.props.state.result.length-1) : " ";
      this.props.state.setStateInput(input);
      return;
    }else if(type == "calculate"){
      var temp = eval(this.props.state.result);
      this.props.state.setStateResult(temp);
      return;
    }
  }

  clearState = () => {
    this.props.state.setStateResult("");
  }

  render() {
    return (
      <Grid>
        <Col style={{width:"70%"}}>
          <Row>
            <Col>
              <Button style={styles.numberButton} textStyle={styles.textStyle} onPress={() => this.getValue(7, "operand")}>7</Button>
            </Col>
            <Col>
              <Button style={styles.numberButton} textStyle={styles.textStyle} onPress={() => this.getValue(8, "operand")}>8</Button>
            </Col>
            <Col>
              <Button style={styles.numberButton} textStyle={styles.textStyle} onPress={() => this.getValue(9, "operand")}>9</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button style={styles.numberButton} textStyle={styles.textStyle} onPress={() => this.getValue(4, "operand")}>4</Button>
            </Col>
            <Col>
              <Button style={styles.numberButton} textStyle={styles.textStyle} onPress={() => this.getValue(5, "operand")}>5</Button>
            </Col>
            <Col>
              <Button style={styles.numberButton} textStyle={styles.textStyle} onPress={() => this.getValue(6, "operand")}>6</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button style={styles.numberButton} textStyle={styles.textStyle} onPress={() => this.getValue(1, "operand")}>1</Button>
            </Col>
            <Col>
              <Button style={styles.numberButton} textStyle={styles.textStyle} onPress={() => this.getValue(2, "operand")}>2</Button>
            </Col>
            <Col>
              <Button style={styles.numberButton} textStyle={styles.textStyle} onPress={() => this.getValue(3, "operand")}>3</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button style={styles.numberButton} textStyle={styles.textStyle} onPress={() => this.getValue('.', "operand")}>.</Button>
            </Col>
            <Col>
              <Button style={styles.numberButton} textStyle={styles.textStyle} onPress={() => this.getValue(0, "operand")}>0</Button>
            </Col>
            <Col>
              <Button style={styles.numberButton} textStyle={styles.clrTextStyle} onPress={() => this.getValue("CLR", "clear")} onLongPress={this.clearState}>CLR</Button>
            </Col>
          </Row>
        </Col>
        <Col style={{width:"23%"}}>
          <Row>
            <Col>
              <Button style={styles.symbolButton} textStyle={styles.textStyle} onPress={() => this.getValue('/', "operator")}>÷</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button style={styles.symbolButton} textStyle={styles.textStyle} onPress={() => this.getValue('*', "operator")}>x</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button style={styles.symbolButton} textStyle={styles.textStyle} onPress={() => this.getValue('-', "operator")}>-</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button style={styles.symbolButton} textStyle={styles.textStyle} onPress={() => this.getValue('+', "operator")}>+</Button>
            </Col>
          </Row>
          <Row style={{height: "22%"}}>
            <Col>
              <Button style={styles.resultButton} textStyle={styles.textStyle} onPress={() => this.getValue('=', "calculate")}>=</Button>
            </Col>
          </Row>
        </Col>
        {/* <Col style={{width:"17%"}}>
          <Row>
            <Button style={styles.moreOptions} textStyle={styles.optionsStyle} onPress={() => this.getValue('=', "calculate")}>{'<'}</Button>
          </Row>
        </Col> */}
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  numberButton: {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    borderWidth: 0,
    borderRadius: 0
  },
  resultButton: {
    height: "100%",
    backgroundColor: "red",
    borderWidth: 0,
    borderRadius: 0
  },
  symbolButton: {
    height: "100%",
    backgroundColor: "#222",
    borderWidth: 0,
    borderRadius: 0
  },
  moreOptions: {
    width: "100%",
    height: "100%",
    textAlign: "left",
    backgroundColor: "#555",
    borderWidth: 0,
    borderRadius: 0,
  },
  textStyle: {
    fontSize: 30,
    color: "#fff", 
    padding: "20%", 
    marginTop: "25%"
  },
  optionsStyle: {
    // backgroundColor: "blue",
    width: "100%",
    fontSize: 20,
    color: "#fff", 
    paddingLeft: 0, 
    marginTop: "100%",
    textAlign: "left",
    alignSelf: 'stretch',
  },
  clrTextStyle:{
    fontSize: 22,
    color: "#fff", 
    padding: 5, 
    marginTop: 7
  }
  
});
