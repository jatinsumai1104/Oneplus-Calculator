
import React, {Component} from 'react';
import {InputSection, OutputSection } from './components/';
import MyLayout from '../base/layout';
import { Grid, Row } from "react-native-easy-grid";
export default class CalculationPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: [],
      result: "",
      outputDone: false
    }
    this.state['setStateInput'] = this.setStateInput;
    this.state['setStateResult'] = this.setStateResult;
  }

  setStateInput = (value) => {
    if(this.state.outputDone){
      this.state.result = "";
      this.state.outputDone = false;
    }else{
      value = this.state.result + value;
    }
    this.setState({result: value});
  }

  setStateResult = (value) => {
    value += "";
    var date = new Date().toDateString() + "";
    if(date in this.state.data){
      this.state.data[date].push({input: this.state.result, result: value});
    }else{
      this.state.data[date] = [{input: this.state.result, result: value}];
    }
    this.setState({result: value, outputDone: true}); 
  }

  render() {
    return (
      <MyLayout>
        <Grid>
          <Row size={38} style={{backgroundColor: "#111"}}>
            <OutputSection  navigation={this.props.navigation} state={this.state}/>
          </Row>
          <Row size={62} style={{backgroundColor: "black"}}>
            <InputSection  navigation={this.props.navigation} state={this.state}/>
          </Row>
        </Grid>
      </MyLayout>
    );
  }
}
