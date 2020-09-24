import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { PrimaryColor, SecondaryColor } from '../constants/colors';
import globalStyles from '../constants/globalStyles';

const MainButton = (props) => {
    return <TouchableOpacity 
            onPress={props.onPress}
        >
        <View style={globalStyles.buttonContainer}>
            <Text style={globalStyles.buttonText}>
                {props.children}  
            </Text>    
        </View>    
    </TouchableOpacity>
};

export default MainButton;