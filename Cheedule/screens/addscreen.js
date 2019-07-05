import React, { Component } from "react";
import Add from "./add";
import { View } from "react-native";

class AddScreen extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    //Setting the header of the screen
    title: "Create A New Task",
    headerTransparent: true,
    headerTintColor: "#000"
  };
  render() {
    //const {navigate}=this.props.navigation
    return (
      <View>
        <Add />
      </View>
    );
  }
}

export default AddScreen;
