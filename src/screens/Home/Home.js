import React, { useState } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import Button from '../../components/Button';
import styles from './styles'
import dataDB from '../../dataDB';
import Lottie from 'lottie-react-native'
import dumbell from '../../assets/images/dumbell.json'

const users = dataDB.users
const gym = dataDB.gym

export default props => {

    const [isTraining,setTraining] = useState(false)

    const start = () => {
        setTraining(!isTraining)
        props.navigation.navigate('Camera')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem vindo {users[0].name}!</Text>
            <Text style={styles.txt}>Vamos treinar?</Text>
            <View style={styles.containerImage}>
                <Image source={require('../../assets/images/qrcode.png')} style={styles.image} />
            </View>
            <Button qrcodeScan title="Escanear QR Code" onClick={start}/>
        </View>
    );

}