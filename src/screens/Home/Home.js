import React from 'react';
import { View, Text, Image,FlatList } from 'react-native';
import Button from '../../components/Button';
import styles from './styles'
import dataDB from '../../dataDB';

const users = dataDB.users
const gym = dataDB.gym 

export default props => {

    const escanear = () => {}

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem vindo {users[0].name}!</Text>
            <Text style={styles.txt}>Vamos treinar?</Text>
            <View style={styles.containerImage}>
                <Image source={require('../../assets/images/qrcode.png')} style={styles.image} />
            </View>
            <Button qrcodeScan title="Escanear QR Code" onClick={escanear}/>
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
        </View>
    );
}