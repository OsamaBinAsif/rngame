import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Alert,
  Dimensions,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/Title";
import Card from "../components/Card";
import InstructionsText from "../components/InstructionsText";

const StartGameScreen = (props) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const numberInputHandler = (text) => {
    //parseInt(text)
    setEnteredNumber(text);
  };
  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const { width, height } = useWindowDimensions();
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      //  alert("(Wrong Input");
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    } else {
      console.log("Number correct!");
      props.pickedNumberHandler(enteredNumber);
    }
  };

  const marginTopDistance = height < 400 ? 100 : 20;
  return (
    <ScrollView style={{flex: 1}}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
        <View style={[{ marginTop: marginTopDistance }, styles.rootContainer]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionsText>Enter a number</InstructionsText>
            {/*<View style={styles.inputWrapper}>*/}
            <TextInput
              style={styles.textInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              value={enteredNumber}
              onChangeText={numberInputHandler}
            />
            {/*</View>*/}
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;
const deviceHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    //marginTop: deviceHeight < 400 ? 100 : 20,
    alignItems: "center",
  },

  inputContainer: {
    //flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  inputWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
