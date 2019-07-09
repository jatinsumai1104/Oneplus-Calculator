
import React, {Component} from 'react';
import { ListRenderItemInfo, View, FlatList, SectionList } from 'react-native';
import {
  List,
  ListItem,
  Text
} from 'react-native-ui-kitten';

export default class HistorySection extends Component {

  constructor(props){
    super(props);
  }

  toggleToCalculation = () => {
    this.props.navigation.navigate('calculation');
  }
  renderSecondLevel = (data) => {
    console.log(data);
    return (
      <ListItem
        title={data.item.input}
        description={data.item.result}
        onPress={this.toggleToCalculation}
      />
    );
  }
  renderFirstLevel = (data) => {
    // return (
    //   <List
    //     data={data}
    //     renderItem={this.renderSecondLevel}
    //   />
    // );
  }

  renderUser = ({item}) => {
    console.log("hello");
    return (
        <View>
          
          <View>
            <Text>{item}</Text>
          </View>
        </View>
    );
  }

  renderList(){
      return (
          <View>
          <Text>Hello</Text>
          <FlatList
              data={this.props.navigation.getParam('data')}
              //Here the data is wrapped within a property with key item
              renderItem={this.renderUser}
          />
          </View>
      );

  }

  render() {
    console.log(this.props.navigation.getParam('data'));
    // return (
    //   // <List
    //   //   data={this.props.navigation.getParam('data')}
    //   //   renderItem={({item})=>this.renderFirstLevel(item)}
    //   // />
    //   <View>
    //     {this.renderList()}
    //   </View>
    // );
    return (
      // <SectionList
      //   renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}
      //   renderSectionHeader={({section: {title}}) => (
      //     <Text style={{fontWeight: 'bold'}}>{title}</Text>
      //   )}
      //   sections={this.props.navigation.getParam('data')}
      //   keyExtractor={(item, index) => item + index}
      // />
      //{title:"title",price:"price",subtitle:"subtitle"}

      <FlatList
    data={this.props.navigation.getParam('data')}
    renderItem={({ item }) => { //this part will iterate over every item in the array and return a listItem
      console.log("hello");
      console.log(item);
    }}

  />
    );
  }
}

// renderItem={({item})=> <SongItem song={item}
//                                                        isActive={this.props.screenProps.isSongActive(item)}
//                                                        songClicked={(song)=>{this.props.screenProps.playSong(song)}}/>}/>
