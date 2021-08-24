import React, {useState, Component} from 'react';
import { View, Text, Image, Alert} from 'react-native';
import styles from './styles'
import Button from '../../components/Button';
import dataDB from '../../dataDB';
import ButtomProfile from '../../components/ButtonProfile';
import { server, showError, showSuccess } from '../../connections/api'
import axios from 'axios'

export default class Profile extends Component {

    state = {
        user: null
    }  

    load = async () => {
        const res = await axios.get(`${server}/user/me`)

        console.warn(res.data.user.name.first)

        setUser(res.data.user)
    }

    editar = () => {
        props.navigation.navigate('ProfileEdit', user)
    }

    sair = () => {
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

    atividades = () => {
        //props.navigation.navigate('Activities')
        load()
    }

    render(){
       return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/images/user2.png')} style={styles.image} />
                    <Text style={styles.title}>{/* {user.name.first} */}</Text>
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
    
}