import axios from "axios";

const api = axios.create({
    headers: {
        "Access-Control-Allow-Origin": "*"
    },
    baseURL: process.env.API_URL,
});

api.interceptors.response.use(
    (response) => {
        return response;
    },
    async function (error) {
        const access_token = localStorage.getItem("access_token");
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
            const refresh_token = localStorage.getItem("refresh_token");
            const header = {
                "Content-Type": "application/json",
                Authorization: process.env.AUTHORIZATION,
            };
            const parameters = {
                method: "POST",
                headers: header,
            };
            const body = {
                grant_type: "refresh_token",
                refresh_token,
            };
            axios.post(
                process.env.API_URL + "/refreshtoken",
                body,
                parameters
            )
            .then(async (res) => {
                localStorage.setItem("access_token", res.data.access_token);
                localStorage.setItem("refresh_token", res.data.refresh_token);
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