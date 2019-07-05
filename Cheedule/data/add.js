import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import Tabstack from "./tabstack";
class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      desc: "",
      date: ""
    };
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} enabled behavior="padding">
        <View style={{ margin: 10 }}>
          <Text>Name:</Text>
          <TextInput
            style={styles.input}
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
            keyboardType="default"
            returnKeyType="next"
            blurOnSubmit={false}
          />
        </View>

        <View style={{ margin: 10 }}>
          <Text>Description:</Text>
          <TextInput
            value={this.state.desc}
            style={styles.desc}
            onChangeText={desc => this.setState({ desc })}
            keyboardType="default"
            returnKeyType="next"
            blurOnSubmit={false}
          />
        </View>

        <View style={{ margin: 10 }}>
          <Text>Date:</Text>
          <TextInput
            style={styles.input}
            value={this.state.date}
            onChangeText={date => this.setState({ date })}
            keyboardType="default"
            returnKeyType="next"
            blurOnSubmit={true}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          // onPress={() => navigate("Scheduled")}
        >
          <Text style={{ color: "#fff" }}>Add Schedule</Text>
        </TouchableOpacity>
      
      </KeyboardAvoidingView>
    );
  }
}

export default Add;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D6F8E3",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    width: 300,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#00C81A",
    backgroundColor: "#fff",
    paddingHorizontal: 10
  },
  desc: {
    width: 300,
    height: 100,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#00C81A",
    paddingHorizontal: 10,
    backgroundColor: "#fff"
  },
  button: {
    width: 300,
    height: 30,
    borderRadius: 30,
    alignItems: "center",
    backgroundColor: "#00C81A",
    margin: 10
  }
});
