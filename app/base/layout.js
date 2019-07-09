
import React, {Component} from 'react';
import { mapping, light as lightTheme, dark as darkTheme } from '@eva-design/eva';
import { 
  ApplicationProvider, 
  Layout
} from 'react-native-ui-kitten';

export default class MyLayout extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
        <ApplicationProvider
          mapping={mapping}
          theme={lightTheme}>
          <Layout style={{flex: 1, backgroundColor: "#fff"}}>
            {this.props.children}
          </Layout>
        </ApplicationProvider>
    );
  }
}

