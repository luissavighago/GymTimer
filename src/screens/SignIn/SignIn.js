import React, {useState} from 'react';
import { View, Text, Image, TextInput, Alert} from 'react-native';
import styles from './styles'
import Button from '../../components/Button';
import { server, showError } from '../../connections/api'
import axios from 'axios'


export default props =>{

    const [emailField, setEmailField] = useState('')
    const [passwordField, setPasswordField] = useState('')

    const entrar = () => {

        if(emailField.trim() === '' || passwordField.trim() === ''){
            Alert.alert('Cadastro', 'Preencha todos os campos!',[{text: 'Ok'}])
        }else{
            signIn()
        }
    }

    signIn = async () => {
        try{
            const res = await axios.post(`${server}/auth/login`, {
                email: emailField,
                password: passwordField
            })

            axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`
            props.navigation.navigate('Tab')
        }catch(e){
            showError('Dados inválidos')
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
                    <Button signbutton title="Entrar" onClick={entrar}/>
                </View>
                <Text style={{color: '#fff',fontSize: 15, paddingTop: 10, textAlign: 'center'}} 
                onPress={() => props.navigation.navigate('SignUp')}>Quero fazer o cadastro</Text>
            </View>
        </View>
    );
}