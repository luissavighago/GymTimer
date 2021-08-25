import React, { useState, Component } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import TextInputMask from 'react-native-masked-text';
import Button from '../../components/Button';
import { server, showError, showSuccess } from '../../connections/api'
import axios from 'axios'

export default class ProfileEdit extends Component {

    state = {
        id: '',
        name:'',
        email:'',
        phone:'',
        dtnasc: ''
    }

    componentDidMount = () => {
        this.load()
    }

    load = async () => {
        const res = await axios.get(`${server}/user/me`)

        this.setState({id:res.data.user._id,name:res.data.user.name.first,email:res.data.user.email,phone:res.data.user.phoneNumber.toString(),dtnasc:res.data.user.birth})
    }

    update = async () => {

        try{
            await axios.put(`${server}/user/update`,
            {
                _id:this.state.id,
                name: {
                    first: this.state.name,
                    last: ""
                },
                phoneNumber : this.state.phone,
                email: this.state.email,
            })

            showSuccess('Dados Atualizados!')
            load()
        }catch(E){
            
            //showError('Falha ao editar os dados!')
        }
    }

    save = () => {

        if(this.state.name === '' || !this.isEmail() || this.state.phone === ''){
            Alert.alert('Cadastro', 'Dados inválidos. Verifique!',[{text: 'Ok'}])
        }else{
            this.update()
        }
    }

    cancel = () => {
        this.load()
        this.props.navigation.goBack()
    }

    isEmail = () => {
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)){return true}else{return false}
    }


    render(){
        return (
            <View style={styles.containerForm}>
                <View>
                    <Text style={styles.label}>Meu nome</Text>
                    <TextInput style={styles.input} onChangeText={txt => this.setState({name: txt})} value={this.state.name}/>
                    <Text style={styles.label}>Meu E-mail</Text>
                    <TextInput style={styles.input} onChangeText={txt => this.setState({email: txt})} value={this.state.email}/>
                    <Text style={styles.label}>Meu telefone</Text>
                    <TextInput style={styles.input} value={this.state.phone} onChangeText={txt => this.setState({phone: txt})}/>
                    {/* <Text style={styles.label}>Data de nascimento</Text> */}
                    {/* <TextInputMask type={'datetime'} options={{format: 'DD/MM/YYYY'}} style={styles.input} value={this.state.dtnasc} onChangeText={txt => {this.setState({dtnasc:txt})}}/> */}
                </View>
                <View style={styles.containerButtons}>
                    <Button buttonSave title='Salvar' onClick={this.save}/>
                    <Button buttonCancel title='Cancelar' onClick={this.cancel}/>
                </View>
            </View>
        );
    }
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
