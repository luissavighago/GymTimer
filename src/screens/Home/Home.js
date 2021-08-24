import React, { useState, Component } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import Button from '../../components/Button';
import styles from './styles'
import dataDB from '../../dataDB';
import Lottie from 'lottie-react-native'
import dumbell from '../../assets/images/dumbell.json'

const users = dataDB.users
const gym = dataDB.gym

import { server, showError, showSuccess } from '../../connections/api'
import axios from 'axios'

export default class Home extends Component {

    state = {
        name:'',
        isTraining: false,
    }

    componentDidMount = () => {
        this.load()
    }

    load = async () => {
        const res = await axios.get(`${server}/user/me`)

        this.setState({name:res.data.user.name.first})
    }

    start = () => {
        // this.state.isTraining(!this.state.isTraining)
        this.props.navigation.navigate('Camera')
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Bem vindo {this.state.name}!</Text>
                <Text style={styles.txt}>Vamos treinar?</Text>
                <View style={styles.containerImage}>
                    <Image source={require('../../assets/images/qrcode.png')} style={styles.image} />
                </View>
                <Button qrcodeScan title="Escanear QR Code" onClick={this.start}/>
            </View>
        );
    }

}