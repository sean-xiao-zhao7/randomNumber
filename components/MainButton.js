import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import { PrimaryColor, SecondaryColor } from '../constants/colors';
import globalStyles from '../constants/globalStyles';

const MainButton = (props) => {
    let ButtonComponent = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        ButtonComponent = TouchableNativeFeedback;
    }

    return <ButtonComponent 
            onPress={props.onPress}
        >
        <View style={globalStyles.buttonContainer}>
            <Text style={globalStyles.buttonText}>
                {props.children}  
            </Text>    
        </View>    
    </ButtonComponent>
};

export default MainButton;