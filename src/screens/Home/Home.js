import React from 'react';
import { View, Text, Image, FlatList, PermissionsAndroid } from 'react-native';
import Button from '../../components/Button';
import styles from './styles'
import dataDB from '../../dataDB';

const users = dataDB.users
const gym = dataDB.gym

const escanear = async () => {
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
};

export default props => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem vindo {users[0].name}!</Text>
            <Text style={styles.txt}>Vamos treinar?</Text>
            <View style={styles.containerImage}>
                <Image source={require('../../assets/images/qrcode.png')} style={styles.image} />
            </View>
            <Button qrcodeScan title="Escanear QR Code" onClick={escanear}/>
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
}