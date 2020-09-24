import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Text, Button, Alert, ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// custom comps
import MyCard from '../components/MyCard';
import Row from '../components/Row';
import H1 from '../components/H1';
import Container from '../components/Container';
import MainButton from '../components/MainButton';

// custom styles
import globalStyles from '../constants/globalStyles';

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

const renderListItem = (listLength, itemData) => (
    <View style={globalStyles.list}>
        <Text>Round # {listLength - itemData.index}, </Text>
        <Text>opponent guessed {itemData.item}</Text>
    </View>
); 

const GameScreen = props => {
    const initalGuess = generateRandomBetween(1, 100, props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(initalGuess);
    const [guesses, setGuesses] = useState([initalGuess]);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { onGameOver, userChoice } = props;

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(guesses.length);
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
            currentLow.current = currentGuess + 1;
        }

        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setGuesses(curPastGuesses => [nextNumber, ...curPastGuesses]);
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
                <MainButton 
                    onPress={nextGuessHandler.bind(this, 'lower')}
                >
                    <Text>Guess Lower</Text>
                </MainButton>
                <MainButton onPress={nextGuessHandler.bind(this, 'higher')}>
                    <Text>Guess Higher</Text>
                </MainButton>
            </Row>
            <FlatList 
                keyExtractor={item => item.toString()}
                data={guesses}
                renderItem={renderListItem.bind(this, guesses.length)}
            />
        </Container>
    );
};

export default GameScreen;