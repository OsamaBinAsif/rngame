import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React from "react";
import Title from "../components/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  const { width, height } = useWindowDimensions();
  let imageSize = 300;
  if (width > 380) {
    imageSize = 150;
  }
  if (height > 400) {
    imageSize = 80;
  }
  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.parentContainer}>
        {/*<Text>GameOverScreen</Text>*/}
        <Title>GAME OVER!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/images/success.png")}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Star New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
};

export default GameOverScreen;
//const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  imageContainer: {
    //width: deviceWidth > 380 ? 300 : 200,
    //height: deviceWidth > 380 ? 300 : 200,
    //borderRadius: deviceWidth > 380 ? 150 : 75,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: Colors.primary800,
    margin: 50,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 20,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
