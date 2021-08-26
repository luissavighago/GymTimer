import { Alert, Plataform } from "react-native"
import axios from 'axios'

const server = 'http://192.168.0.110:8000/api'

function showError(err) {
    Alert.alert('Erro', `${err}`)
}

function showSuccess(msg) {
    Alert.alert('Sucesso!', msg)
}

export { server, showError, showSuccess }
