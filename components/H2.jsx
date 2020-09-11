import React from 'react';
import { StyleSheet, Text } from 'react-native';

const H2 = props => {
    return (
        <Text style={{...props.style, ...styles.h2}}>
            {props.children}
        </Text>
    );
};

const styles = StyleSheet.create({
    h2: {
        fontSize: 20
    }
});

export default H2;