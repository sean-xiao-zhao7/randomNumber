import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import H1 from '../components/H1';
import { PrimaryColor } from '../constants/colors';

const Header = props => {
    return (
        <View style={styles.header}>
            <H1 style={styles.headerTitle}>{props.title}</H1>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: PrimaryColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'white',
    }
});

export default Header;