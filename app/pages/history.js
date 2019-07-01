
import React, {Component} from 'react';
import {HistorySection} from './components/';
import MyLayout from '../base/layout';
import { Grid, Row } from "react-native-easy-grid";
export default class HistoryPage extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <MyLayout>
        <Grid>
          <Row>
            <HistorySection  navigation={this.props.navigation}/>
          </Row>
        </Grid>
      </MyLayout>
    );
  }
}
