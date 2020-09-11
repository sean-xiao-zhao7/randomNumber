import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const MyTextInput = props => {
    return (
        <TextInput
            {...props}
            style={{...props.styles, ...styles.input}}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10,
        fontSize: 18,
        textAlign: 'center'
    },
});

export default MyTextInput;