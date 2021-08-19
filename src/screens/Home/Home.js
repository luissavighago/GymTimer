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

    // const [isTraining,setTraining] = useState(false)

    // const start = () => {
    //     setTraining(!isTraining)
    //     props.navigation.navigate('Camera')
    // }

    // if(!isTraining) {
    //     return (
    //         <View style={styles.container}>
    //             <Text style={styles.title}>Bem vindo {users[0].name}!</Text>
    //             <Text style={styles.txt}>Vamos treinar?</Text>
    //             <View style={styles.containerImage}>
    //                 <Image source={require('../../assets/images/qrcode.png')} style={styles.image} />
    //             </View>
    //             <Button qrcodeScan title="Escanear QR Code" onClick={start}/>
    //             { gym.length > 0 ?
    //                 <View style={styles.historyList}>
    //                     <Text style={styles.historyTitle}>Histórico</Text>
    //                     <FlatList data={gym} keyExtractor={i => `${i._id}`} renderItem={({item}) =>{
    //                         return (
    //                             <View style={styles.rows}>
    //                                 <Text style={styles.rowsText}>{item.name}</Text>
    //                                 <Text style={styles.rowsText}>{item.hours} h</Text>
    //                             </View>
    //                         )
    //                     }}/>
    //                 </View>
    //                 :
    //                 null
    //             }
    //         </View>
    //     );
    // }else{
    //     return(
    //         <View style={styles.container}>
    //             <Text style={styles.title}>Olá {users[0].name}!</Text>
    //             <Text style={styles.txt}>Treino em andamento</Text>
    //             <View style={styles.containerImage}>
    //                 <Lottie style={styles.gif} source={dumbell} autoPlay={true} loop/>
    //             </View>
    //             <Button qrcodeScan title="Finalizar" onClick={start}/>
    //         </View>
    //     );
    // }
}