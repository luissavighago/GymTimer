import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage"

const server = 'http://localhost:8000/api'

const api = axios.create({
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    },
    baseURL: server,
});

api.interceptors.response.use(
    (response) => {
        return response;
    },
    async function (error) {
        const access_token = await AsyncStorage.getItem("token");
            if (error.response.status === 401 && access_token) {
                const response = await refreshToken(error);
                return response;
            }
        return Promise.reject(error);
    }
);

async function refreshToken(error) {
    return new Promise((resolve, reject) => {
        try {
            const refresh_token = AsyncStorage.getItem("record");
            const header = {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            };
            const parameters = {
                method: "POST",
                headers: header,
            };
            const body = {
                typeRecord: "typeRecord",
                refresh_token,
            };
            axios.post(
                server + "/auth",
                body,
                parameters
            )
            .then(async (res) => {
                AsyncStorage.setItem("token", res.data.token);
                AsyncStorage.setItem("record", res.data.record);
            // Fazer algo caso seja feito o refresh token
                return resolve(res);
            })
            .catch((err) => {
            // Fazer algo caso não seja feito o refresh token
                return reject(error);
            });
        } catch (err) {
            return reject(err);
        }
    });
};

export default api;


// import { Alert, Plataform } from "react-native"
// import Axios from 'axios'

// const server = 'http://localhost:8000'

// function showError(err) {
//     Alert.alert('Vish! Deu bosta ai cara!', `Mensagem: ${err}`)
// }

// function showSuccess(err) {
//     Alert.alert('Sucesso!', msg)
// }

// export { server, showError, showSuccess }