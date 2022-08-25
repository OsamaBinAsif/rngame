import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../constants/colors";

const InstructionsText = ({ children, style }) => {
  return <Text style={[styles.enterANumber, style]}>{children}</Text>;
};

export default InstructionsText;

const styles = StyleSheet.create({
  enterANumber: {
    color: Colors.accent500,
    fontSize: 32,
  },
});
