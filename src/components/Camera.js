import React, { Component } from "react";
import {
    View,
    Linking,
    Dimensions,
    StyleSheet,
} from "react-native";

import QRCodeScanner from "react-native-qrcode-scanner";
import ModalWebView from './ModalWebView'
import { server, showError, showSuccess } from '../connections/api'
import axios from 'axios'
export default class QRCodeScreen extends Component {

    state = {
        modalVisible: false,
        success: null,
        url: '',
        nomeFantasiaGym: '',
        emailGym: '',
        numero: 0,
        botao: 'VAI',
        textoHora: '00:00:00',
        hora: 0,
        minuto: 0,
        segundo: 0
    };

    formatahhmmss = (s) => {
        function duas_casas(numero) {
            if (numero <= 9) {
                numero = "0" + numero;
            }
            return numero;
        }
        this.setState({ hora: duas_casas(Math.round(s / 3600)) })
        this.setState({ minuto: duas_casas(Math.round((s % 3600) / 60)) })
        this.setState({ segundo: duas_casas((s % 3600) % 60) })
        this.setState({ textoHora: this.state.hora + ":" + this.state.minuto + ":" + this.state.segundo })

    }

    iniciar() {
        let state = this.state;

        if (this.timer != null) {

            clearInterval(this.timer);
            this.timer = null;
        } else {

            this.timer = setInterval(() => {
                let state = this.state;
                state.numero += 1;
                this.setState(state);
                this.formatahhmmss(state.numero)
            }, 1000);

        }
        console.log('teste erasmo',state)
        this.setState(state);

    }

    handleButton = () => {
        this.setState({ modalVisible: !this.state.modalVisible, success: false })
        console.log('dps de iniciar',this.state.time)
        this.props.navigation.navigate('Home')
    }

    onSuccess = async (e) => {
        await this.setState({ success: true, modalVisible: true, url: e.data });
        console.log(this.state.url)
        this.load()
        this.iniciar( )
        console.log('dps de iniciar',this.state.time)
    };

    load = async () => {
        const res = await axios.get(`${server}/gym/getById`,{params:{gymId:this.state.url}})
        console.log('Pegando url: ', res.data)
        this.setState({ nomeFantasiaGym:res.data.gym.fantasyName, telefoneGym:res.data.gym.phoneNumber.toString(), emailGym:res.data.gym.email })
    }
    render() {
        return (
        
            <View style={styles.container}>
                <QRCodeScanner
                    onRead={this.onSuccess}
                    showMarker={true}
                    checkAndroid6Permissions={true}
                    cameraStyle={styles.cameraContainer}
                    ref={(elem) => { this.scanner = elem }}
                />

                <ModalWebView
                    handleButton={this.handleButton}
                    nomeFantasiaGym={this.state.nomeFantasiaGym}
                    telefoneGym={this.state.telefoneGym}
                    emailGym={this.state.emailGym}          
                    modalVisible={this.state.modalVisible}
                    timer={this.state.textoHora}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "black"
    },

    touchable: {
        padding: 16
    },

    text: {
        fontSize: 21,
        color: "rgb(0,122,255)"
    },

    cameraContainer: {
        height: Dimensions.get('window').height,
    },

    timer: {
        marginTop: -180,
        color: '#ffffff',
        fontSize: 90,
        fontWeight: 'bold',
    },

});