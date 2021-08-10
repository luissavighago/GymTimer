import React, {useState} from 'react';
import { View, Text, Image, TextInput} from 'react-native';
import styles from './styles'
import Button from '../../components/Button';
import dataDB from '../../dataDB';

const user = dataDB.users[0]

export default props => {

    const [editing, setEditing ] = useState(false)
    const [nameField, setNameField] = useState(user.name || '')
    const [emailField, setEmailField] = useState(user.email || '')
    const [phoneField, setPhoneFieldField] = useState(user.phone || '')

    const editar = () => {
        setEditing(!editing)
    }
    const sair = () => {
        props.navigation.navigate('SignIn')
    }

    const save = () => {
        setEditing(!editing)
    }
    const cancel = () => {
        setEditing(!editing)
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/images/user.png')} style={styles.image} />
                <Text style={styles.title}>{user.name}</Text>
            </View>
            {
                !editing ?
                <View style={styles.containerOptions}>
                    <View style={styles.containerButtons}>
                        <Button buttonEdit title="Editar" onClick={editar} editar/>
                        <Button buttonLogout title="Sair" onClick={sair} sair/>
                    </View>
                </View>
                :
                <View style={styles.containerOptions}>
                    <View style={styles.containerForm}>
                        <Text style={styles.label}>Nome</Text>
                        <TextInput style={styles.input} value={nameField} onChangeText={txt => {setNameField(txt)}}/>
                        <Text style={styles.label}>E-mail</Text>
                        <TextInput style={styles.input} value={emailField} onChangeText={txt => {setEmailField(txt)}}/>
                        <Text style={styles.label}>Telefone</Text>
                        <TextInput style={styles.input} value={phoneField} onChangeText={txt => {setPhoneFieldField(txt)}}/>
                    </View>
                    <View style={styles.containerButtons}>
                        <Button buttonLogout title="Cancelar" onClick={cancel} sair/>
                        <Button buttonEdit title="Salvar" onClick={save} editar/>
                    </View>
                </View>
            }
        </View>
    );
}