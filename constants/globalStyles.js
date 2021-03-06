import { StyleSheet } from 'react-native';
import { PrimaryColor, SecondaryColor } from './colors';
import { Dimensions } from 'react-native';

export default globalStyles = StyleSheet.create({
    image: {
        height: '100%',
        width: '100%',        
    },
    imageContainer: {
        width: Dimensions.get('window').width / 2,
        height: Dimensions.get('window').width / 2,
        borderRadius: Dimensions.get('window').width / 4,
        borderWidth: 3,
        borderColor: '#bada55',    
        backgroundColor: '#bada55',
        overflow: 'hidden',
        margin: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'open-sans-bold',
    },
    buttonContainer: {
        margin: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: PrimaryColor,
        borderRadius: 10,       
    },
    list: {
        flexDirection: 'row'
    }
});