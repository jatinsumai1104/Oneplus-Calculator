
import React, {Component} from 'react';
import { 
  Button
} from 'react-native-ui-kitten';

export default class HistorySection extends Component {

  constructor(props){
    super(props);
  }

  toggleToCalculation = () => {
    this.props.navigation.navigate('calculation');
  }

  render() {
    return (
      <Button onPress={this.toggleToCalculation}>Calculation</Button>
    );
  }
}
