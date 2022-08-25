import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const NumberContainer = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems:"center",
    justifyContent:"center"

  },
  text: {
    color: Colors.accent500,
    fontSize: 34,
    //fontWeight: "bold"
    fontFamily:"open-sans-bold"
  },
});
