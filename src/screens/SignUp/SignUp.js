import React, {useState} from 'react';
import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import styles from './styles'
import Button from '../../components/Button';
import { CheckBox } from 'react-native-elements/dist/checkbox/CheckBox';

export default props =>{

    const [current, setCurrent] = useState(0)
    const [showTerms, setShowTerms] = useState(false)
    const [nameField, setNameField] = useState('')
    const [emailField, setEmailField] = useState('')
    const [phoneField, setPhoneFieldField] = useState('')
    const [nascField, setNascField] = useState('')
    const [passwordField, setPasswordField] = useState('')
    const [passwordConfirmField, setPasswordConfirmField] = useState('')
    const [setSelection] = useState(false);

    const avancar = () => {
        setCurrent(current + 1)
    }
    const cadastrar = () => {
        props.navigation.navigate('SignIn')
    }

    const changeShowTerms = () => {
        setShowTerms(!showTerms)
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
                        <TextInput style={styles.input} value={phoneField} onChangeText={txt => {setPhoneFieldField(txt)}}/>
                        <Text style={styles.label}>Data de nascimento?</Text>
                        <TextInput style={styles.input} value={nascField} onChangeText={txt => {setNascField(txt)}}/>
                        <Button signbutton title="Avancar" onClick={avancar}/>
                    </View>
                    <Text style={{color: '#fff',fontSize: 15, paddingTop: 10, textAlign: 'center'}}
                    onPress={() => props.navigation.goBack()}>Já possui uma conta</Text>
                </View>
            </View>
        );
    }else if (current == 2){
        return (
            <>
            { !showTerms ?
               
                <View style={styles.container}>
                    <Image source={require('../../assets/images/agachamento.png')} style={styles.image} />
                    <View style={styles.containerForms}>
                        <View  style={{alignItems: 'center'}}>
                            <Text style={styles.label}>Digite sua senha</Text>
                            <TextInput secureTextEntry={true} style={styles.input} value={passwordField} onChangeText={txt => {setPasswordField(txt)}}/>
                            <Text style={styles.label}>Confirme sua senha</Text>
                            <TextInput secureTextEntry={true} style={styles.input} value={passwordConfirmField} onChangeText={txt => {setPasswordConfirmField(txt)}}/>
                            <View style={styles.checkboxContainer}>
                                <CheckBox style={styles.checkbox} onValueChange={setSelection} />
                                <Text style={styles.txtcheck}
                                onPress={changeShowTerms}>Eu li & aceito com os termos e condições</Text>
                            </View>
                            <Button signbutton title="Cadastrar" onClick={cadastrar}/>
                        </View>
                        <Text style={{color: '#fff',fontSize: 15, paddingTop: 10, textAlign: 'center'}}
                        onPress={() => props.navigation.goBack()}>Já possui uma conta</Text>
                    </View>
                </View>
                :
                <View style={styles.containerTermos}>
                    <Text style={{color: '#0496FF',fontSize: 22,padding:20,alignContent:'center'}}
                        onPress={changeShowTerms}>Voltar</Text>
                    <ScrollView style={{margin:10}}>
                        <View>
                            <Text style={styles.label2titulo}>Termos e condições</Text>
                            <Text style={styles.label2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Text>
                            <Text style={styles.label2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Text>
                            <Text style={styles.label2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Text>
                            <Text style={styles.label2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Text>
                        </View>
                    </ScrollView>
                </View>
            }
            </>
        );
    }
}