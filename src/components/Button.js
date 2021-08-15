import React from 'react';
import { Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';



export default props => {

    const stylesButton = [styles.button]
    const stylesLabel = [styles.label]

    if(props.signbutton) stylesButton.push(styles.buttonSign)
    if(props.qrcodeScan) {
        stylesButton.push(styles.qrcodeScan)
        stylesLabel.push(styles.labelQrcodeScan)
    }
    if(props.buttonProfile){
        stylesButton.push(styles.buttonProfile)
        stylesLabel.push(styles.labelButtonProfile)
    }
    if(props.buttonAgendar){
        stylesButton.push(styles.buttonAgendar)
        stylesLabel.push(styles.labelAgendar)
    }
    if(props.buttonSave){
        stylesButton.push(styles.buttonSave)
        stylesLabel.push(styles.labelSave)
    }
    if(props.buttonCancel){
        stylesButton.push(styles.buttonCancel)
        stylesLabel.push(styles.labelCancel)
    }

    return(
        <TouchableOpacity style={stylesButton} onPress={() => props.onClick()}>
            <Text style={stylesLabel}>
                {
                    props.icon != null ?
                    <Ionicons name={props.icon.name} size={props.icon.size} color={props.icon.color} />
                    :
                    null
                }
                {props.title}
            </Text>
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
    buttonProfile:{
        backgroundColor: '#E0E0E0',
        borderColor: '#666666',
        marginHorizontal: 5,
        height: 60,
        justifyContent: 'center',
        marginBottom: 5
    },
    labelButtonProfile:{
        color: '#000',
        fontSize:20
    },
    buttonSave:{
        backgroundColor: '#0496FF',
        height: 40,
        width: '100%',
        borderColor: '#0496FF',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
    },
    labelSave:{
        color: '#fff',
        fontSize:20
    },
    buttonCancel:{
        backgroundColor: '#fff',
        height: 40,
        width: '100%',
        borderColor: '#0496FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    labelCancel:{
        color: '#0496FF',
        fontSize:20
    },
    buttonAgendar:{
        backgroundColor: '#fff',
        paddingHorizontal: 5,
        paddingVertical:5,
        borderColor: '#fff',
        marginTop: 10
    },
    labelAgendar:{
        color: '#0496FF',
        fontSize:12
    },
})