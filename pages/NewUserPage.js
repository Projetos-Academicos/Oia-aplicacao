import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    KeyboardAvoidingView, 
    Alert, 
    TextInput, 
    Button, 
    ScrollView,
    TouchableOpacity, 
    ActivityIndicator } from 'react-native';
import firebase from 'firebase';
import { messageErroCodeNewUser } from "../utils";

import { FormRow } from '../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import InputForm from '../components/InputForm';
import CustomButtom from '../components/CustomButtom';

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
            <CustomButtom style={styles.button} onPress={() => this.register()} text='Cadastrar' />
        );
    }

    render() {
        return (
     <KeyboardAvoidingView behavior='padding'>       
        <ScrollView>
            <View style={styles.global}>
                <View style={styles.colorBackLogo}>
                    <Text style={styles.logo}>CADASTRE-SE</Text>
                </View>
                <View style={styles.containerPage}>
                 <View style={styles.containerRegister}>
                    
                    <View style={styles.session}>
                        <Text style={styles.labelSession}>Dados de login</Text>

                        <View style={styles.formContainer}>
                                <Icon name='email' color='#999999' size={26}/>
                            <InputForm 
                                placeholder='Email'
                                value={this.state.email}
                                onChangeText={value => { this.changeTextInput('email', value)} } />
                        </View>
                    
                        <View style={styles.formContainer}>
                                <Icon name='lock-open' color='#999999' size={26} />
                            <InputForm 
                                placeholder='Senha'
                                secureTextEntry={true}
                                value={this.state.password}
                                onChangeText={value=> { this.changeTextInput('password', value)}} />
                        </View>

                        <View style={styles.formContainer}>
                                <Icon name='lock' color='#999999' size={26} />  
                            <InputForm 
                                placeholder='Confirme sua Senha'
                                secureTextEntry={true}
                                value={this.state.passwordConfirm}
                                onChangeText={value=> { this.changeTextInput('passwordConfirm', value)}} />
                        </View>
                        </View>


                         <View style={styles.session}>
                             <Text style={styles.labelSession}>Dados Pessoais</Text>
                         
                   
                        <View style={styles.formContainer}>
                                <Icon name='account' color='#999999' size={26} />
                            <InputForm 
                                placeholder='Nome Completo'
                                value={this.state.name}
                                onChangeText={value => { this.changeTextInput('name', value)} } />
                        </View>
                   
                        <View style={styles.formContainer}>
                                <Icon name='map-marker' color='#999999' size={26} />
                            <InputForm 
                                placeholder='Cidade'
                                value={this.state.lastName}
                                onChangeText={value => { this.changeTextInput('lastName', value)} } />
                        </View>
                    
                        <View style={styles.formContainer}>
                                <Icon name='deskphone' color='#999999' size={26} />
                            <InputForm 
                                placeholder='Telefone'
                                value={this.state.birthDate}
                                onChangeText={value => { this.changeTextInput('birthDate', value)} } />
                        </View>
                        </View>

                        <View style={styles.containerFooter}>
                            <View style={styles.spaceButtom}>
                                {this.renderButton()}
                                {this.renderMessage()}
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    </KeyboardAvoidingView>
      );
    }
}

const styles = StyleSheet.create({
    global: {
        flex: 1,
        backgroundColor: '#fff',
    },
    colorBackLogo: {
        alignItems: 'center',
        backgroundColor: "#6F2B8F",
        paddingBottom: 10
    },
    logo: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 35,
        color: 'white'
    },
    containerPage: {
        flexDirection: 'row',
    },
    containerRegister: {
        marginLeft: 5,
        marginRight: 5,
        alignSelf: "center",
        marginTop: 20,
        elevation: 1,
    },
    session: {
        backgroundColor: '#fff',
        elevation: 2,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#999999',
        paddingHorizontal: 10,
        paddingTop: 25,
        marginBottom: 18,
    },
    labelSession: {
        position: 'absolute',
        fontSize: 12,
        marginLeft: 5,
        paddingBottom: 10,
        color: '#727272'
    },
    formContainer: {
        flexDirection: 'row',
        paddingBottom: 4,
        paddingTop: 4,
        marginBottom: 16, 
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#999999',
    },
    containerFooter: {
        backgroundColor: '#fff',   
        marginBottom: 50,
    },
    spaceButtom: {
        marginBottom: 50,
    },
    button: {
        backgroundColor: '#F5F5F5',
        borderColor: '#F5F5F5',
        borderWidth: 0.4,
        elevation: 3,
        width: 350
    }
});
