import React, { useState } from 'react';
import { View, Text, Image, FlatList, PermissionsAndroid } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Button from '../../components/Button';
import styles from './styles'
import dataDB from '../../dataDB';
import Lottie from 'lottie-react-native'
import dumbell from '../../assets/images/dumbell.json'

const users = dataDB.users
const gym = dataDB.gym

/* const getPermission = async () => {
    const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.CAMERA,
    {
        title: "App Permissão de Câmera",
        message: "O App precisa de acesso à câmera.",
        buttonNeutral: "Pergunte-me depois",
        buttonNegative: "Cancelar",
        buttonPositive: "OK"
    }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
    } else {
        alert('Permissão de Câmera negada');
    }
}; */

export default props => {

    const [isTraining,setTraining] = useState(false)

    const start = () => {
        setTraining(!isTraining)
        props.navigation.navigate('Camera')
    }

    if(!isTraining) {
       return (
            <View style={styles.container}>
                <Text style={styles.title}>Bem vindo {users[0].name}!</Text>
                <Text style={styles.txt}>Vamos treinar?</Text>
                <View style={styles.containerImage}>
                    <Image source={require('../../assets/images/qrcode.png')} style={styles.image} />
                </View>
                <Button qrcodeScan title="Escanear QR Code" onClick={start}/>
                { gym.length > 0 ?
                    <View style={styles.historyList}>
                        <Text style={styles.historyTitle}>Histórico</Text>
                        <FlatList data={gym} keyExtractor={i => `${i._id}`} renderItem={({item}) =>{
                            return (
                                <View style={styles.rows}>
                                    <Text style={styles.rowsText}>{item.name}</Text>
                                    <Text style={styles.rowsText}>{item.hours} h</Text>
                                </View>
                            )
                        }}/>
                    </View>
                    :
                    null
                }
            </View>
        ); 
    }else{
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Olá {users[0].name}!</Text>
                <Text style={styles.txt}>Treino em andamento</Text>
                <View style={styles.containerImage}>
                    <Lottie style={styles.gif} source={dumbell} autoPlay={true} loop/>
                </View>
                <Button qrcodeScan title="Finalizar" onClick={start}/>
            </View>
        );
    }
    
}