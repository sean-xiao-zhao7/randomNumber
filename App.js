import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

// custom comps
import Header from './components/Header';

// custom screens
import StartScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);  
  const [chosenNumber, setChosenNumber] = useState();
  const [numRounds, setNumRounds] = useState(0);

  if (!dataLoaded) {    
    return <AppLoading 
        startAsync={fetchFonts}
        onFinish={
          () => setDataLoaded(true)
        }
        onError={(err) => console.log(err)}
      />;
  }

  const newGameHandler = () => {
    setNumRounds(0);
    setChosenNumber(null);
  }

  const startGameHandler = selectedNumber => {
    setChosenNumber(selectedNumber);
    setNumRounds(0);
  };

  const gameOverHandler = inputNumRounds => {
    setNumRounds(inputNumRounds);
  };

  let content = <StartScreen onStartGame={startGameHandler} />;
  if (chosenNumber && numRounds <= 0) {
    content = <GameScreen userChoice={chosenNumber} onGameOver={setNumRounds} />;
  } else if (numRounds > 0) {
    content = <GameOverScreen numRounds={numRounds} numTarget={chosenNumber} newGameHandler={newGameHandler} />;
  }

  return (
    <View style={styles.container}>
      <Header title={'Guess a number game'} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',    
    alignItems: 'center',
  },
});