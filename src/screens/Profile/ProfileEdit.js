import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';
import TextInputMask from 'react-native-masked-text';
import Button from '../../components/Button';

export default props => {

    const user = props.route.params

    const [nameField, setNameField] = useState(user.name || '')
    const [emailField, setEmailField] = useState(user.email || '')
    const [phoneField, setPhoneFieldField] = useState(user.phone || '')
    const [nascField, setNascFieldField] = useState(user.dtnasc || '')

    const save = () => {
        props.navigation.goBack()
    }
    const cancel = () => {
        setNameField(user.name || '')
        setEmailField(user.email || '')
        setPhoneFieldField(user.phone || '')
        setNascFieldField(user.dtnasc || '')
        props.navigation.goBack()
    }
  
    return (
      <View style={styles.containerForm}>
        <View>
            <Text style={styles.label}>Meu nome</Text>
            <TextInput style={styles.input} onChangeText={name => setNameField(name)} value={nameField}/>
            <Text style={styles.label}>Meu E-mail</Text>
            <TextInput style={styles.input} onChangeText={email => setEmailField(email)} value={emailField}/>
            <Text style={styles.label}>Meu telefone</Text>
            <TextInputMask type={'cel-phone'} options={{maskType: 'BRL', withDDD: true, dddMask: '(99) '}} style={styles.input} value={phoneField} onChangeText={phone => setPhoneFieldField(phone)}/>
            <Text style={styles.label}>Data de nascimento</Text>
            <TextInputMask type={'datetime'} options={{format: 'DD/MM/YYYY'}} style={styles.input} value={nascField} onChangeText={txt => {setNascField(txt)}}/>
        </View>
        <View style={styles.containerButtons}>
            <Button buttonSave title='Salvar' onClick={save}/>
            <Button buttonCancel title='Cancelar' onClick={cancel}/>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    containerForm:{
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    label:{
        fontSize: 15,
        color:'#000',
        fontWeight: 'bold'
    },
    input:{
        height: 40,
        borderColor: '#E0E0E0',
        borderWidth: 2,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    containerButtons:{
        marginTop: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
    }
})
