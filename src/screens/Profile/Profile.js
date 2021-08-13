import React, {useState} from 'react';
import { View, Text, Image, TextInput, TouchableOpacity,ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles'
import Button from '../../components/Button';
import dataDB from '../../dataDB';
import ButtomProfile from '../../components/ButtonProfile';

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
        setNameField(user.name || '')
        setEmailField(user.email || '')
        setPhoneFieldField(user.phone || '')
        setEditing(!editing)
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/images/user2.png')} style={styles.image} />
                <Text style={styles.title}>{user.name}</Text>
            </View>
            {
                !editing ?
                <View style={styles.containerOptions}>
                    <View style={styles.containerButtons}>
                        <ButtomProfile style={styles.container} icon={{name:"brush-outline",size:20, color:"#000"}} title="Editar" onClick={editar}/>
                        <ButtomProfile style={styles.container} icon={{name:"log-out-outline",size:20, color:"#000"}} title="Sair" onClick={sair}/>
                    </View>
                </View>
                :
                <View style={styles.containerOptions}>
                    <ScrollView contentContainerStyle={styles.containerForm}>
                        <Text style={styles.label}>Nome</Text>
                        <TextInput style={styles.input} value={nameField} onChangeText={txt => {setNameField(txt)}}/>
                        <Text style={styles.label}>E-mail</Text>
                        <TextInput style={styles.input} value={emailField} onChangeText={txt => {setEmailField(txt)}}/>
                        <Text style={styles.label}>Telefone</Text>
                        <TextInput style={styles.input} value={phoneField} onChangeText={txt => {setPhoneFieldField(txt)}}/>
                        <View style={styles.containerButtons2}>
                            <Button buttonCancel title="Cancelar" onClick={cancel} />
                            <Button buttonSave title="Salvar" onClick={save}/>
                        </View>
                    </ScrollView>
                </View>
            }
        </View>
    );
}