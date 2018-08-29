import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';

import { FormRow } from '../components';
import { tryRegister, tryInsert } from "../actions";

class NewUserPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            msgError: "",
            email: "",
            password: "",
            birthDate: "",
            name: "",
            lastName: ""
        }

    } 
    
    changeTextInput(chave, valor){
        this.setState({
            [chave]: valor
        });      
    } 
    
    register(){
        const {email, password, name, lastName, birthDate} = this.state;
        
        this.props.tryRegister({email, password});
        this.props.tryInsert({email, name, lastName, birthDate})
    }

    render() {
        return (
            <View>
                <View style={styles.containerLoginlb}>
                    <Text style={styles.lbLogin}>Faça o seu cadastro</Text>
                </View>
                <View style={styles.containerPage}>
                    <View style={styles.containerLogin}>
                        <FormRow first>
                            <Text style = {styles.label}>Email</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="exemplo@exemplo.com"
                                underlineColorAndroid='transparent'
                                value={this.state.email}
                                onChangeText={value => {this.changeTextInput('email', value)}}

                            />
                        </FormRow>
                        <FormRow>
                            <Text style = {styles.label}>Senha</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="******"
                                underlineColorAndroid='transparent'
                                secureTextEntry
                                value={this.state.password}
                                onChangeText={value => { this.changeTextInput('password', value)}}
                            />
                        </FormRow>

                        <FormRow>
                            <Text style = {styles.label}>Confirme a senha</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="******"
                                underlineColorAndroid='transparent'
                                secureTextEntry
                                value={this.state.password}
                                onChangeText={value => { this.changeTextInput('password', value)}}
                            />
                        </FormRow>

                        <FormRow>
                            <Text style = {styles.label}>Nome</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Digite seu nome"
                                underlineColorAndroid='transparent'
                                value={this.state.name}
                                onChangeText={value => { this.changeTextInput('name', value)}}
                            />
                        </FormRow>

                        <FormRow>
                            <Text style = {styles.label}>Sobrenome</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Digite seu sobrenome"
                                underlineColorAndroid='transparent'
                                value={this.state.lastName}
                                onChangeText={value => { this.changeTextInput('lastName', value)}}
                            />
                        </FormRow>

                        <FormRow>
                            <Text style = {styles.label}>Data de Nascimento</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="DD/MM/AAAA"
                                underlineColorAndroid='transparent'
                                value={this.state.birthDate}
                                onChangeText={value => { this.changeTextInput('birthDate', value)}}
                            />
                        </FormRow>

                        <FormRow last>
                            <View style={styles.containerButton}>
                                <Button title="Cadastrar" onPress={() => {
                                    this.register() 
                                }} />
                            </View>
                        </FormRow>
                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({

    containerPage: {
        flexDirection: 'row',
    },
    containerLogin: {
        flex: 1,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 50,
        elevation: 1,
    },
    input: {
        margin: 5,
        fontSize: 20,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5,
        backgroundColor: "#dcdcdc",
        textAlign: 'center',
        borderColor: "transparent",
        borderWidth: 1,
    },
    containerButton: {
        marginLeft: 50,
        marginRight: 50,
    },
    containerLoginlb: {
        flex: 1,
        //marginTop: 180,
        marginLeft: 15,
        marginRight: 15,
        alignSelf: "center",
    },
    lbLogin: {
        fontSize: 30,
        margin: 5
    },
    label: {
        marginLeft: 5,
        fontSize: 15,
    }
});

export default connect(null, {tryRegister, tryInsert})(NewUserPage);