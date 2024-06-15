import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const choices = ["✊🏻", "🤚🏻", "✌🏻"];

  const handleUserChoice = (choice: string) => {
    setUserChoice(choice);
    const computerChoiceIndex = Math.floor(Math.random() * choices.length);
    const compChoice = choices[computerChoiceIndex];
    setComputerChoice(compChoice);
    determineWinner(choice, compChoice);
  };

  const determineWinner = (userChoice: string, computerChoice: string) => {
    if (userChoice === computerChoice) {
      setResult("Tie!");
    } else if (
      (userChoice === "✊🏻" && computerChoice === "✌🏻") ||
      (userChoice === "✌🏻" && computerChoice === "🤚🏻") ||
      (userChoice === "🤚🏻" && computerChoice === "✊🏻")
    ) {
      setResult("You win!");
    } else {
      setResult("Computer wins!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🤖</Text>
      <Text style={styles.subheader}>Your Choice</Text>
      <View style={styles.choices}>
        {choices.map((choice, index) => (
          <Text
            key={index}
            style={{
              fontSize: 50,
              padding: 10,
              borderRadius: 10,
            }}
            onPress={() => handleUserChoice(choice)}
          >
            {choice}
          </Text>
        ))}
      </View>
      <Text style={styles.userChoice}>You chose: {userChoice}</Text>
      <Text style={styles.result}>{result}</Text>
      <Text style={styles.computerChoice}>Computer chose: {computerChoice}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0250C6",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 50,
    marginBottom: 20,
  },
  subheader: {
    fontSize: 20,
    marginBottom: 10,
    color: "white",
    fontWeight: "bold",
  },
  choices: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  userChoice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  result: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  computerChoice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
