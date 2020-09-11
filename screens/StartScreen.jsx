import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import MyCard from '../components/MyCard';
import H2 from '../components/H2';
import Row from '../components/Row';
import Container from '../components/Container';
import { SecondaryColor } from '../constants/colors';

const StartScreen = props => {
    return (
        <Container>
            <MyCard>
                <H2>Your guess:</H2>
                <TextInput />
                <Row>
                    <Button 
                        title={'Enter'}                        
                        onPress={() => {}}
                        
                    />
                    <Button 
                        title={'Cancel'}
                        onPress={() => {}}
                    />
                </Row>
            </MyCard>
        </Container>
    );
};

export default StartScreen;