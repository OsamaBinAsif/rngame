import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Title from "../components/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";

const GameOverScreen = ({roundsNumber, userNumber, onStartNewGame}) => {
  return (
    <View style={styles.parentContainer}>
      {/*<Text>GameOverScreen</Text>*/}
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Star New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: Colors.primary800,
    margin: 50,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText:{
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign:"center",
    marginVertical: 20
  },
  highlight:{
    fontFamily:"open-sans-bold",
    color: Colors.primary500
  }
});
