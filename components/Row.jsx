import React from 'react';
import { View, StyleSheet } from 'react-native';

const Row = props => {
    return (
        <View style={{...props.style, ...styles.row}}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    }
});

export default Row;