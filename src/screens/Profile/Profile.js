import React, {useState} from 'react';
import { View, Text, Image, Alert} from 'react-native';
import styles from './styles'
import Button from '../../components/Button';
import dataDB from '../../dataDB';
import ButtomProfile from '../../components/ButtonProfile';

const user = dataDB.users[0]

export default props => {

    const editar = () => {
        props.navigation.navigate('ProfileEdit', user)
    }
    const sair = () => {
        Alert.alert('Finalizar sessão', 'Deseja finalizar a sessão?',[
            {
                text: 'Sim',
                onPress: () => props.navigation.navigate('SignIn')
            },
            {
               text: 'Não' 
            }
        ])
        
    }
    const atividades = () => {
        props.navigation.navigate('Activities')
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/images/user2.png')} style={styles.image} />
                <Text style={styles.title}>{user.name}</Text>
            </View>
            <View style={styles.containerOptions}>
                <View style={styles.containerButtons}>
                    <ButtomProfile style={styles.container} icon={{name:"barbell",size:20, color:"#000"}} title="Atividades" onClick={atividades}/>
                    <ButtomProfile style={styles.container} icon={{name:"brush-outline",size:20, color:"#000"}} title="Editar" onClick={editar}/>
                    <ButtomProfile style={styles.container} icon={{name:"log-out-outline",size:20, color:"#000"}} title="Sair" onClick={sair}/>
                </View>
            </View>
        </View>
    );
}