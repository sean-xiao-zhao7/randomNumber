import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Text, Button, Alert } from 'react-native';
import MyCard from '../components/MyCard';
import Row from '../components/Row';
import H1 from '../components/H1';
import Container from '../components/Container';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
};

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice));
    const [rounds, setRounds] = useState(0);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { onGameOver, userChoice } = props;

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(rounds);
        }
    }, [currentGuess, userChoice, onGameOver]);

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoice) ||
            (direction === 'higher' && currentGuess > props.userChoice)) {
                Alert.alert('Wrong', 'Other direction.', [{text: "Try again", style: 'cancel'}])
                return;
        }

        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }

        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(curRounds => curRounds + 1);
    };

    return (
        <Container>
            <H1>
                Opponent's Guess
            </H1>
            <MyCard>
                <Text>{currentGuess}</Text>
            </MyCard>
            <Row>
                <Button title='Guess Lower' onPress={nextGuessHandler.bind(this, 'lower')} />
                <Button title='Guess Higher' onPress={nextGuessHandler.bind(this, 'higher')} />
            </Row>
        </Container>
    );
};

const styles = StyleSheet.create({

});

export default GameScreen;