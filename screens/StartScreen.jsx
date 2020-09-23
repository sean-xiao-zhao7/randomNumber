import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import MyCard from '../components/MyCard';
import H2 from '../components/H2';
import Row from '../components/Row';
import Container from '../components/Container';
import MyTextInput from '../components/MyTextInput';
import { SecondaryColor } from '../constants/colors';

const StartScreen = props => {

    const [number, setNumber] = useState('');
    const validateNumberHandler = textInput => {       
        const validInput = textInput.replace(/[^0-9]/g, '');
        setNumber(validInput);
    };

    const [confirm, setConfirm] = useState(false);
    const [finalNumber, setFinalNumber] = useState(0);

    // confirmed output
    let confirmedOutput;
    if (confirm) {
        confirmedOutput = <MyCard>
                <Text style={{fontSize: 18}}>{finalNumber} is chosen</Text>
                <Button
                    title='Start Game'
                    onPress={() => props.onStartGame(finalNumber) }
                />
            </MyCard>
    }

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <Container>
                <MyCard>
                    <H2>Your guess:</H2>
                    <MyTextInput
                        styles={{width: 150}}
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType="number-pad"
                        maxLength={2}

                        onChangeText={validateNumberHandler}
                        value={number}
                    />
                    <Row>
                        <Button 
                            title={'Enter'}                        
                            onPress={() => {                                                   
                                if (isNaN(parseInt(number))) {                                    
                                    Alert.alert('Invalid number enterd.', '', [{
                                        text: 'Okay',
                                        styles: 'desctructive',
                                        onPress: () => {
                                            setNumber(''); 
                                            setConfirm(false)
                                        }
                                    }])    
                                } else {
                                    setConfirm(true);
                                    setNumber('');
                                    setFinalNumber(parseInt(number))
                                }
                             }}
                            color={SecondaryColor}
                        />
                        <Button 
                            title={'Reset'}
                            onPress={() => { setNumber(''); setConfirm(false) }}
                            color={SecondaryColor}
                        />
                    </Row>
                </MyCard>
                {confirmedOutput}
            </Container>
        </TouchableWithoutFeedback>
    );
};

export default StartScreen;