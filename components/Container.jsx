import React from 'react';
import { View, StyleSheet } from 'react-native';

const Container = props => {
    return (
        <View style={{...props.style, ...styles.container}}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'white'
    }
});

export default Container;