import React from 'react';
import { View, StyleSheet } from 'react-native';

const MyCard = props => {
    return (
        <View style={{...styles.card, ...props.styles}}>
            {props.children}    
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 15, 
        padding: 15,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.36,
        shadowRadius: 3,
        elevation: 5,
        backgroundColor: 'white',
        alignItems: 'center'
    }
});

export default MyCard;