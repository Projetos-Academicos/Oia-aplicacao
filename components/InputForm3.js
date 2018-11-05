import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const InputForm3 = ({ onChangeText, value, placeholder, secureTextEntry }) => (
    <TextInput
    keyboardType = 'numeric'
    style={styles.Input}
    autoCorrect={false}
    secureTextEntry={secureTextEntry}
    placeholder={placeholder}
    underlineColorAndroid='transparent'
    onChangeText={onChangeText}
    value={value}/>
    
);

const styles = StyleSheet.create({
    Input: {
        flex: 10,
        fontSize: 22,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: "#FFF",
        textAlignVertical: 'top',
    },
    
});

export default InputForm3;