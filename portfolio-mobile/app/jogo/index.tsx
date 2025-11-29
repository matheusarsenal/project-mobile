import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Input } from "../../components/input";
import styles from "./styles";

const WORDS = [ "schumacher" , "ayrton", "mansell",
"proust" , "hamilton", "verstappem" ,
"piquet" , "emerson" ,
"vettel" , "brabham","hill",
"rosberg", "raikonnem" ,
"hakkinem" , "villanueve" , "lauda",
"hunt", "fangio", "stewart","ascari"
,"watson",
"andretti",
"jedy",
"hawton",
"farina",
"surtees",
"clark","phill","hulme"
,"rindt","jones","kekerosberg"
  
];

function getRandomWord() {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

export default function HangmanGame() {
  const [secretWord, setSecretWord] = useState(getRandomWord());
  const [input, setInput] = useState("");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [attempts, setAttempts] = useState(5);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);

  const maskedWord = secretWord
    .split("")
    .map((letter) => (guessedLetters.includes(letter) ? letter : " _ "))
    .join("");

  const guessedList = guessedLetters.join(", ");

  useEffect(() => {
    if (!gameOver && maskedWord.replace(/\s/g, "") === secretWord) {
      setWin(true);
      setGameOver(true);
    }
  }, [guessedLetters]);

  function handleSubmitGuess() {
    const guess = input.trim().toUpperCase();
    setInput("");

    if (!guess) return;

    if (guess.length > 1) {
      setWin(guess === secretWord);
      setGameOver(true);
      return;
    }

    if (!/^[A-Z]$/.test(guess)) return;

    if (guessedLetters.includes(guess)) return;

    setGuessedLetters((prev) => [...prev, guess]);

    if (!secretWord.includes(guess)) {
      setAttempts((prev) => {
        const newAtt = prev - 1;
        if (newAtt <= 0) {
          setWin(false);
          setGameOver(true);
        }
        return newAtt;
      });
    }
  }

  function resetGame() {
    setSecretWord(getRandomWord());
    setInput("");
    setGuessedLetters([]);
    setAttempts(5);
    setGameOver(false);
    setWin(false);
  }

  return (
    <View style={styles.container}>
      {gameOver ? (
        <>
          <Text style={styles.title}>
            {win ? "🎉 Você Acertou!" : "❌ Você Perdeu!"}
          </Text>

          <Text style={styles.finalWord}>A palavra era:</Text>
          <Text style={styles.revealWord}>{secretWord}</Text>

          <TouchableOpacity style={styles.button} onPress={resetGame}>
            <Text style={styles.buttonText}>Jogar Novamente</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.backButton]}
            onPress={() => router.push("../")}
          >
            <Text style={styles.buttonText}>Voltar ao Menu</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.title}>Jogo da Forca</Text>

          <Text style={styles.simpleHangman}>
            {attempts === 5 && "🙂"}
            {attempts === 4 && "😕"}
            {attempts === 3 && "☹️"}
            {attempts === 2 && "😣"}
            {attempts === 1 && "😫"}
            {attempts === 0 && "💀"}
          </Text>

          <Text style={styles.word}>{maskedWord}</Text>

          <Text style={styles.attempts}>
            Tentativas restantes:{" "}
            <Text style={attempts <= 2 ? styles.attemptsDanger : styles.attemptsOk}>
              {attempts}
            </Text>
          </Text>

          <Text style={styles.guesses}>
            Letras chutadas: {guessedList || "—"}
          </Text>

          <Input
            placeholder="Digite uma letra ou palavra"
            placeholderTextColor="#ccc"
            value={input}
            onChangeText={setInput}
            onSubmitEditing={handleSubmitGuess}
            autoCapitalize="characters"
          />

          <TouchableOpacity style={styles.button} onPress={handleSubmitGuess}>
            <Text style={styles.buttonText}>ENTER</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
