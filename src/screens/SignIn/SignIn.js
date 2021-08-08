import React, {useState} from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import styles from './styles'
import Button from '../../components/Button';


export default props =>{

    const [emailField, setEmailField] = useState('')
    const [passwordField, setPasswordField] = useState('')

    const entrar = () => {
        props.navigation.navigate('Tab')
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