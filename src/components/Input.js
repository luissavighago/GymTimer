import React, {useState} from 'react';
import { StyleSheet, Dimensions, TextInput } from 'react-native';

export default props => {

    const stylesInput = [styles.input]
    const [text, onChangeText] = useState("Useless Text");

    if(props.keybord){
        return(
            <TextInput
                style={stylesInput}
                onChangeText={onChangeText}
                placeholder={props.label}
                keyboardType={props.keybord}
                value={props.value}
            />
        );
    }
    return(
        <TextInput
            style={stylesInput}
            onChangeText={onChangeText}
            placeholder={props.label}
            value={props.value}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        padding: 15,
        width: Dimensions.get('window').width/1.5,
        backgroundColor: '#fff',
        borderRadius: 50,
        textAlign: 'center',
        borderWidth: 1,
        marginBottom:10,
        borderColor: '#fff',
    },
})