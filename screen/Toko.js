import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import Searchbar from "./widget/Searchbar";

class Toko extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <View style={styles.container}>
          <Searchbar navigation={navigation} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Toko;
