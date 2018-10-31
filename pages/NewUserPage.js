import React from 'react';
import { StyleSheet, Text, View, Alert, TextInput, Button, ScrollView, ActivityIndicator } from 'react-native';
//import { connect } from 'react-redux';
import firebase from 'firebase';
import { messageErroCodeNewUser } from "../utils";

import { FormRow } from '../components';
//import { tryRegister, tryInsert } from "../actions";

export default class NewUserPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            msgError: "",
            email: "",
            password: "",
            passwordConfirm: "",
            birthDate: "",
            name: "",
            lastName: ""
        }

    }

    tryRegister({ email, password }) {
        return firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((error) => {
                this.setState({ message: messageErroCodeNewUser(error.code) })
            });
    }

    tryInsert({ email, name, lastName, birthDate }) {

        firebase.auth().signOut();

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                firebase.database().ref('user').child(user.uid).set({
                    name: name,
                    last_name: lastName,
                    birth_date: birthDate,
                    email: email
                })
                .catch((error) => {
                    this.setState({ message: messageErroCodeNewUser(error.code) })
                });
                Alert.alert("Bem-Vindo " + user.name + "!", "Registro efetuado com sucesso!");
                this.props.navigation.replace("HomePage");
            }
        })
    }

    changeTextInput(chave, valor) {
        this.setState({
            [chave]: valor
        });
    }

    register() {
        const { email, password, name, lastName, birthDate } = this.state;

        if (this.passwordConfirmed()) {
            this.tryRegister({ email, password })
                .then(
                    this.tryInsert({ email, name, lastName, birthDate })
                );
        } else {
            this.setState({ message: "Senhas não conferem" });
        }
    }

    passwordConfirmed() {
        const { password, passwordConfirm } = this.state;

        if (password === passwordConfirm) {
            return true;
        } else {
            return false;
        }
    }

    renderMessage() {
        const { message } = this.state;
        if (!message) {
            return null;
        }
        return (
            <View style={styles.errorMessage}>
                <Text>{message}</Text>
            </View>
        );
    }

    renderButton() {
        if (this.state.isLoading) {
            return <ActivityIndicator />;
        }
        return (
            <View style={styles.containerButton}>
                <Button title="Cadastrar" onPress={() => {
                    this.register()
                }} />
            </View>
        );
    }

    render() {
        return (
            <View>
                <View style={styles.containerLoginlb}>
                    <Text style={styles.lbLogin}>Faça o seu cadastro</Text>
                </View>
                <View style={styles.containerPage}>
                    <View style={styles.containerLogin}>
                        <ScrollView>
                            <FormRow first>
                                <Text style={styles.label}>Email</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="exemplo@exemplo.com"
                                    underlineColorAndroid='transparent'
                                    value={this.state.email}
                                    onChangeText={value => { this.changeTextInput('email', value) }}

                                />
                            </FormRow>
                            <FormRow>
                                <Text style={styles.label}>Senha</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="******"
                                    underlineColorAndroid='transparent'
                                    secureTextEntry
                                    value={this.state.password}
                                    onChangeText={value => { this.changeTextInput('password', value) }}
                                />
                            </FormRow>

                            <FormRow>
                                <Text style={styles.label}>Confirme a senha</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="******"
                                    underlineColorAndroid='transparent'
                                    secureTextEntry
                                    value={this.state.passwordConfirm}
                                    onChangeText={value => { this.changeTextInput('passwordConfirm', value) }}
                                />
                            </FormRow>

                            <FormRow>
                                <Text style={styles.label}>Nome</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Digite seu nome"
                                    underlineColorAndroid='transparent'
                                    value={this.state.name}
                                    onChangeText={value => { this.changeTextInput('name', value) }}
                                />
                            </FormRow>

                            <FormRow>
                                <Text style={styles.label}>Sobrenome</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Digite seu sobrenome"
                                    underlineColorAndroid='transparent'
                                    value={this.state.lastName}
                                    onChangeText={value => { this.changeTextInput('lastName', value) }}
                                />
                            </FormRow>

                            <FormRow>
                                <Text style={styles.label}>Data de Nascimento</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="DD/MM/AAAA"
                                    underlineColorAndroid='transparent'
                                    value={this.state.birthDate}
                                    onChangeText={value => { this.changeTextInput('birthDate', value) }}
                                />
                            </FormRow>

                            <FormRow last>
                                {this.renderButton()}
                                {this.renderMessage()}
                            </FormRow>
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({

    containerPage: {
        flexDirection: 'row',
        backgroundColor: '#C6C6C6'
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
        backgroundColor: "#FFF",
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
        margin: 5,
        color: '#fff'
    },
    label: {
        marginLeft: 5,
        fontSize: 15,
        color: '#fff'
    },
    errorMessage: {
        fontSize: 15,
        alignSelf: 'center',
        color: 'red'
    }
});
