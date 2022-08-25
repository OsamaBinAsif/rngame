import {
  StyleSheet,
  Text,
  View,
  Platform,
  SafeAreaView,
  useWindowDimensions,
} from "react-native";
import React from "react";
import Colors from "../constants/colors";

const Title = ({ children }) => {
  const { height, width } = useWindowDimensions();
  const marginStyle = {
    marginTop: height < 1000 ? "10%" : null
  }
  return (
    <View>
      <Text style={[marginStyle, styles.title]}>{children}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    //borderWidth: Platform.OS === "android" ? 2 : 0,
    //borderWidth: Platform.select({
    //    ios: 0, android:2
    //}),
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
  },
});
