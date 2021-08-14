import React, {useState} from 'react';
import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import styles from './styles'
import Button from '../../components/Button';
import {TextInputMask} from 'react-native-masked-text';

export default props =>{

    const [current, setCurrent] = useState(0)
    const [nameField, setNameField] = useState('')
    const [emailField, setEmailField] = useState('')
    const [phoneField, setPhoneFieldField] = useState('')
    const [nascField, setNascField] = useState('')
    const [passwordField, setPasswordField] = useState('')
    const [passwordConfirmField, setPasswordConfirmField] = useState('')

    const avancar = () => {
        setCurrent(current + 1)
    }
    const cadastrar = () => {
        props.navigation.navigate('SignIn')
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
                        <Button signbutton title="Avancar" onClick={avancar}/>
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
                        <Button signbutton title="Avancar" onClick={avancar}/>
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
                        <Button signbutton title="Cadastrar" onClick={cadastrar}/>
                    </View>
                    <Text style={{color: '#fff',fontSize: 15, paddingTop: 10, textAlign: 'center'}}
                    onPress={() => props.navigation.goBack()}>Já possui uma conta</Text>
                </View>
            </View>
        );
    }
}