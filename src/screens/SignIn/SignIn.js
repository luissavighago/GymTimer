import React, {useState} from 'react';
import { View, Text, Image, TextInput, Alert } from 'react-native';
import styles from './styles'
import Button from '../../components/Button';
import api from '../../connections/api'
import AsyncStorage from '@react-native-community/async-storage';

export default props =>{

    const [emailField, setEmailField] = useState('')
    const [passwordField, setPasswordField] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)

    const entrar = async () => {
        console.log('Entrei na função')
        if(emailField == '' && passwordField == ''){
            Alert.alert('Preencha todos os campos!')
        }else{
            try{
                const response = api.post('/auth/login',
                { email: emailField, password: passwordField }).then(res => {
                    console.log('Console res: ', res)
                    console.log('Console .data: ',res.data)
                    props.navigation.navigate('Tab')
                }).catch(error => {
                    console.log('Console error: ', error)
                })

                const { user, token } = response.data;

                await AsyncStorage.multiSet([
                    ['@CodeApi:token', token],
                    ['@CodeApi:user', JSON.stringify(user)]
                ])
            } catch(response){
                setErrorMessage({ errorMessage: response.data.error })
            }
        }
    }

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/agachamento.png')} style={styles.image} />
            <View style={styles.containerForms}>
                <View  style={{alignItems: 'center'}}>
                    <Text style={styles.title}>Login</Text>
                    <TextInput style={styles.input} placeholder="Email ou telefone" value={emailField} onChangeText={txt => {setEmailField(txt)}}/>
                    <TextInput secureTextEntry={true} style={styles.input} placeholder="Senha" value={passwordField} onChangeText={txt => {setPasswordField(txt)}}/>
                    { !!errorMessage && <Text>{ errorMessage }</Text> }
                    <Button signbutton title="Entrar" onClick={entrar}/>
                </View>
                <Text style={{color: '#fff',fontSize: 15, paddingTop: 10, textAlign: 'center'}}
                onPress={() => props.navigation.navigate('SignUp')}>Quero fazer o cadastro</Text>
            </View>
        </View>
    );
}