import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { PrimaryColor } from '../constants/colors';

const MainButton = (props) => {
    return <TouchableOpacity 
            onPress={

            }
        >
        <View>
            <Text>
                {props.children}    
            </Text>    
        </View>    
    </TouchableOpacity>
};

export default MainButton;