import React, { Component } from "react";
import { View, Text, Button } from "react-native";

class Home extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>Home</Text>
        <Button
          title="go to category"
          onPress={() => this.props.navigation.navigate("Category")}
        />
      </View>
    );
  }
}

export default Home;