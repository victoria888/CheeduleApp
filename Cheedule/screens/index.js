import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
class Home extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    //Setting the header of the screen
    headerTransparent: true
  };
  render() {
    //console.log(this.props.navigation.navigate);
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View
          style={{
            width: 400,
            height: 370,
            padding: 20,
            flex: 1,
            flexDirection: "column"
          }}
        >
          <Image
            source={require("./Group.png")}
            style={{ alignItems: "center" }}
          />
        </View>
        <View
          style={{
            //alignItems:'center',
            //justifyContent: "center",
            width: 340,
            height: 200,
            backgroundColor: "#fff",
            borderRadius: 39,
            marginBottom: 20,
            flex: 1,
            flexDirection: "column"
          }}
        >
          <View style={{ alignItems: "center" }}>
            <View>
              <Text
                style={{
                  fontSize: 30
                }}
              >
                CheeDule
              </Text>
            </View>
            <View style={{ alignItems: "flex-start", paddingLeft: 20 }}>
              <Text style={{ fontSize: 10 }}> Create Reminders!</Text>
              <Text style={{ fontSize: 10 }}>Schedule Appointments</Text>
              <Text style={{ fontSize: 10 }}> No Account Needed</Text>
              <Text style={{ fontSize: 10 }}> Get Started Free!</Text>
            </View>
            <Image
              source={require("./verify.png")}
              style={{ height: 70, width: 70, margin: 10 }}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigate("AddScreen")}
            >
              <Text style={{ color: "#fff" }}>get started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D6F8E3",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    width: 200,
    height: 30,
    borderRadius: 30,
    alignItems: "center",
    backgroundColor: "#00C81A"
  }
});
