import { Alert, Plataform } from "react-native"
import Axios from 'axios'

const server = 'http://localhost:8000'

function showError(err) {
    Alert.alert('Vish! Deu bosta ai cara!', `Mensagem: ${err}`)
}

function showSuccess(err) {
    Alert.alert('Sucesso!', msg)
}

export { server, showError, showSuccess }