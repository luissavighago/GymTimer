import React from 'react';
import { View, Text, Image, FlatList, PermissionsAndroid } from 'react-native';
import Button from '../../components/Button';
import styles from './styles'
import dataDB from '../../dataDB';

const users = dataDB.users
const gym = dataDB.gym

export default props => {

    const escanear = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: "Cool Photo App Camera Permission",
                    message:
                        "Cool Photo App needs access to your camera " +
                        "so you can take awesome pictures.",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("Você pode usar a Câmera");
            } else {
                console.log("Permissão de Câmera negada");
            }
        } catch (err) {
            console.warn(err);
        }
    }

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