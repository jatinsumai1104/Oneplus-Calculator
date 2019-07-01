import React, {Component} from 'react';
import CalculationPage from './calculation';
import HistoryPage from './history';
import { createDrawerNavigator, createAppContainer } from "react-navigation";

const Drawer = createDrawerNavigator(
  {
    calculation: { screen: CalculationPage },
    history: { screen: HistoryPage}
  },
  {
    initialRouteName: "calculation",
  }
);
const AppContainer = createAppContainer(Drawer);

export default class Home extends Component {

  static navigationOptions = {
    header: null
  };

  constructor(props){
    super(props);
  }

  render() {
    return (
      <AppContainer/>
    );
  }
}
