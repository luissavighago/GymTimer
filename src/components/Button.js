import React from 'react';
import { Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';



export default props => {

    const stylesButton = [styles.button]
    const stylesLabel = [styles.label]

    if(props.signbutton) stylesButton.push(styles.buttonSign)
    if(props.qrcodeScan) {
        stylesButton.push(styles.qrcodeScan)
        stylesLabel.push(styles.labelQrcodeScan)
    }

    return(
        <TouchableOpacity style={stylesButton} onPress={() => props.onClick()}>
            <Text style={stylesLabel}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 50,
        textAlign: 'center',
        borderWidth: 1,
    },
    label:{
        textAlign: 'center',
        fontSize: 20,
    },
    buttonSign: {
        padding: 15,
        width: Dimensions.get('window').width/2.5,
        backgroundColor: '#D9EEFC',
        marginBottom: 30,
        borderColor: '#D9EEFC'
    },
    qrcodeScan:{
        padding: 15,
        width: Dimensions.get('window').width/2,
        backgroundColor: '#0496FF',
        marginBottom: 30,
        borderColor: '#D9EEFC'
    },
    labelQrcodeScan:{
        color: '#fff'
    },
    
})