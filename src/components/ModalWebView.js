import React from "react";
import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    Modal
} from "react-native";
import PropTypes from 'prop-types';
import WebView from 'react-native-webview'
import styles from '../screens/Home/styles'
import dataDB from '../dataDB';
import Lottie from 'lottie-react-native'
import dumbell from '../assets/images/dumbell.json'

const users = dataDB.users
const gym = dataDB.gym
const { width, height } = Dimensions.get("window");

const ModalWebView = props => (
    <Modal animationType="slide" transparent={false} visible={props.modalVisible} >
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <WebView
                automaticallyAdjustContentInsets={false}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={true}
            />

            <View style={styles.container}>
                <Text style={styles.title}>Olá {users[0].name}!</Text>
                <Text style={styles.txt}>Treino em andamento</Text>
                <View style={styles.containerImage}>
                    <Lottie style={styles.gif} source={dumbell} autoPlay={true} loop/>
                </View>
                <Text style={styles.timer}>{props.timer}</Text>
                <Text>{props.nomeFantasiaGym}</Text>
                <Text>{props.telefoneGym}</Text>
                <Text>{props.emailGym}</Text>
                <TouchableOpacity style={{
                    padding: 15,
                    width: Dimensions.get('window').width/2,
                    backgroundColor: '#0496FF',
                    marginBottom: 30,
                    borderColor: '#D9EEFC',
                    borderRadius:30,
                }} onPress={props.handleButton}>
                    <Text style={{color: '#fff', textAlign:'center', fontSize:20}}>Finalizar</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
);

ModalWebView.propTypes = {
    modalVisible: PropTypes.bool.isRequired,
    url: PropTypes.string,
    openLink: PropTypes.func,
    handleButton: PropTypes.func.isRequired,
    nomeFantasiaGym: PropTypes.string,
    telefoneGym: PropTypes.string,
    emailGym: PropTypes.string,
    timer: PropTypes.string
}

export default ModalWebView;
