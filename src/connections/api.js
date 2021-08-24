import { Alert, Plataform } from "react-native"
import axios from 'axios'

const server = 'http://10.10.10.105:8000/api'

function showError(err) {
    Alert.alert('Erro', `Mensagem: ${err}`)
}

function showSuccess(msg) {
     Alert.alert('Sucesso!', msg)
}

export { server, showError, showSuccess }


