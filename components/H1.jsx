import React from 'react';
import { StyleSheet, Text } from 'react-native';

const H1 = props => {
    return (
        <Text style={{...props.style, ...styles.h1}}>
            {props.children}
        </Text>
    );
};

const styles = StyleSheet.create({
    h1: {
        fontSize: 22,
        fontFamily: 'open-sans-bold'
    }
});

export default H1;