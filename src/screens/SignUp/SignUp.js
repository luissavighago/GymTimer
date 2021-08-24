import React, {useState} from 'react';
import { View, Text, Image, TextInput, Alert } from 'react-native';
import styles from './styles'
import Button from '../../components/Button';
import { TextInputMask } from 'react-native-masked-text';
import { server, showError, showSuccess } from '../../connections/api'
import axios from 'axios'

export default props =>{

    const [current, setCurrent] = useState(0)
    const [nameField, setNameField] = useState('')
    const [emailField, setEmailField] = useState('')
    const [phoneField, setPhoneFieldField] = useState('')
    const [nascField, setNascField] = useState('')
    const [passwordField, setPasswordField] = useState('')
    const [passwordConfirmField, setPasswordConfirmField] = useState('')

    const next = () => {

        var msg = ''

        if(current == 0){
            if(nameField.trim() === '' || emailField.trim() === '') {
                msg = 'Preencha todos os campos!'
            }else if(!isEmail()){
                msg = 'Email inválido'
            }
        }else if(current == 1){

            if(phoneField.trim() === '' || nascField.trim() === '') {
                msg = 'Preencha todos os campos!'
            }

        }else{
            if(passwordField.trim() === '' || passwordConfirmField.trim() === '') {
                msg = 'Preencha todos os campos!'
            }else if(passwordField !== passwordConfirmField){
                msg = 'As senhas são divergentes'
            }
        }

        if(msg != ""){
            Alert.alert('Cadastro', msg,[{text: 'Ok'}])
        }else{
            if(current < 2){
                setCurrent(current + 1)
            }else{signUp()}
        }
            
    }

    signUp = async () => {

        try{
            await axios.post(`${server}/auth/registerUser`, {
                birth: "2001-02-10",
                name: {  
                    first: nameField,
                    last: ""
                },
                phoneNumber : '46984024204',
                email: emailField,
                password: passwordField,
                isAdmin: false
            })

            showSuccess('Usuario cadastrado!')
            
        }catch(e){
            showError(e)
        }

        props.navigation.navigate('SignIn')
    }
    
    function isEmail(){
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailField)){return true}else{return false}
    }

    if(current == 0){
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/images/agachamento.png')} style={styles.image} />
                <View style={styles.containerForms}>
                    <View  style={{alignItems: 'center'}}>
                        <Text style={styles.label}>Qual o seu nome?</Text>
                        <TextInput style={styles.input} value={nameField} onChangeText={txt => {setNameField(txt)}}/>
                        <Text style={styles.label}>Qual o seu email?</Text>
                        <TextInput style={styles.input} value={emailField} onChangeText={txt => {setEmailField(txt)}}/>
                        <Button signbutton title="Avancar" onClick={next}/>
                    </View>
                    <Text style={{color: '#fff',fontSize: 15, paddingTop: 10, textAlign: 'center'}}
                    onPress={() => props.navigation.goBack()}>Já possui uma conta</Text>
                </View>
            </View>
        );
    }else if(current == 1){
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/images/agachamento.png')} style={styles.image} />
                <View style={styles.containerForms}>
                    <View  style={{alignItems: 'center'}}>
                        <Text style={styles.label}>Qual o seu telefone?</Text>
                        <TextInputMask type={'cel-phone'} options={{maskType: 'BRL', withDDD: true, dddMask: '(99) '}} style={styles.input} value={phoneField} onChangeText={txt => setPhoneFieldField(txt)}/>
                        <Text style={styles.label}>Data de nascimento?</Text>
                        <TextInputMask type={'datetime'} options={{format: 'DD/MM/YYYY'}} style={styles.input} value={nascField} onChangeText={txt => {setNascField(txt)}}/>
                        <Button signbutton title="Avancar" onClick={next}/>
                    </View>
                    <Text style={{color: '#fff',fontSize: 15, paddingTop: 10, textAlign: 'center'}}
                    onPress={() => props.navigation.goBack()}>Já possui uma conta</Text>
                </View>
            </View>
        );
    }else if (current == 2){
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/images/agachamento.png')} style={styles.image} />
                <View style={styles.containerForms}>
                    <View  style={{alignItems: 'center'}}>
                        <Text style={styles.label}>Digite sua senha</Text>
                        <TextInput secureTextEntry={true} style={styles.input} value={passwordField} onChangeText={txt => {setPasswordField(txt)}}/>
                        <Text style={styles.label}>Confirme sua senha</Text>
                        <TextInput secureTextEntry={true} style={styles.input} value={passwordConfirmField} onChangeText={txt => {setPasswordConfirmField(txt)}}/>
                        <Button signbutton title="Cadastrar" onClick={next}/>
                    </View>
                    <Text style={{color: '#fff',fontSize: 15, paddingTop: 10, textAlign: 'center'}}
                    onPress={() => props.navigation.goBack()}>Já possui uma conta</Text>
                </View>
            </View>
        );
    }
}