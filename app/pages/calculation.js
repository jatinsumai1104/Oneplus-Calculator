
import React, {Component} from 'react';
import {InputSection, OutputSection } from './components/';
import MyLayout from '../base/layout';
import { Grid, Row } from "react-native-easy-grid";
import { Button } from "react-native-ui-kitten";
export default class CalculationPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      prevInput: "",
      result: "",
    }
    this.state['setStateInput'] = this.setStateInput;
    this.state['setStateResult'] = this.setStateResult;
  }

  setStateInput = (value) => {
    this.setState({result: value});
  }

  setStateResult = (value) => {
    this.state.prevInput = this.state.result;
    this.setState({result: value}); 
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
