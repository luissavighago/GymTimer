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
        id: '',
        name:'',
        email:'',
        phone:0,
        dtnasc: ''
    }

    componentDidMount = () => {
        this.load()
    }

    load = async () => {
        const res = await axios.get(`${server}/user/me`)

        this.setState({name:res.data.user.name.first,email:res.data.user.email,phone:res.data.user.phoneNumber,dtnasc:res.data.user.birth})
    }

    editar = () => {

        const user = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            dtnasc: this.state.dtnasc,
        }

        this.props.navigation.navigate('ProfileEdit', user )
    }

    sair = () => {
        Alert.alert('Finalizar sessão', 'Deseja finalizar a sessão?',[
            {
                text: 'Sim',
                onPress: () => this.props.navigation.navigate('SignIn')
            },
            {
                text: 'Não'
            }
        ])
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/images/user2.png')} style={styles.image} />
                    <Text style={styles.title}>{this.state.name || ''}</Text>
                </View>
                <View style={styles.containerOptions}>
                    <View style={styles.containerButtons}>
                        <ButtomProfile style={styles.container} icon={{name:"brush-outline",size:20, color:"#000"}} title="Editar" onClick={this.editar}/>
                        <ButtomProfile style={styles.container} icon={{name:"log-out-outline",size:20, color:"#000"}} title="Sair" onClick={this.sair}/>
                    </View>
                </View>
            </View>
        );
    }
}