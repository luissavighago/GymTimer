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
        telefoneGym: ''
    };

    handleButton = () => {
        this.setState({ modalVisible: !this.state.modalVisible, success: false })
        this.props.navigation.navigate('Home')
    }

    onSuccess = async (e) => {
        await this.setState({ success: true, modalVisible: true, url: e.data });
        console.log(this.state.url)
        this.load()
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
}

});