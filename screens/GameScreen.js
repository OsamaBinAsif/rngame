import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Alert,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import InstructionsText from "../components/InstructionsText";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/game/GuessLogItem";

let minBoundary = 1;
let maxBoundary = 100;
function generateRandomBetween(min, max, exclude) {
  const randNum = Math.floor(Math.random() * (max - min)) + min;
  if (randNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randNum;
  }
}

const GameScreen = ({ userNumber, gameOverHandler, totalRoundsHandler }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [rounds, setRounds] = useState([]);
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);
  useEffect(() => {
    if (currentGuess == userNumber) {
        totalRoundsHandler(rounds.length)
      gameOverHandler();
    }
  }, [currentGuess, gameOverHandler, userNumber]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie", "You Know that this is wrong", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower" && currentGuess > userNumber) {
      maxBoundary = currentGuess - 1;
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log("min and max boundary", minBoundary, maxBoundary);
    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
    let tries = 1;
    setRounds((perviousRound) => [newRandomNumber, ...perviousRound]);
  }
  const guessRoundsListLenght = rounds.length
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {/*Guess*/}
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionsText style={styles.instructionsText}>
          Higher or Lower?
        </InstructionsText>
        {/*+
        -*/}
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={25} />
            </PrimaryButton>
          </View>
          <View style={{ flex: 1 }}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={25} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      {/*<ScrollView>
        {rounds.map((el) => (
          <View key={el}>
            <Text>
              Round no {el.try} {el.round}
            </Text>
          </View>
        ))}
      </ScrollView>*/}
     <View style={styles.listContainer}>
     <FlatList
        data={rounds}
        renderItem={(item) => {
          return (
            <GuessLogItem roundNumber={guessRoundsListLenght-item.index} item={item.item}/>
          );
        }}
        keyExtractor={(item)=>item}
      />
     </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
  },
  instructionsText: {
    marginBottom: 12,
  },
  listContainer:{
    flex: 1,
    padding: 16,
  }
});
