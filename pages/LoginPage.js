import React from 'react';
import { connect } from "react-redux";
import { StyleSheet, Text, View, Alert, ActivityIndicator, Button, TextInput, Linking, AsyncStorage } from 'react-native';

import { login } from "../actions";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import InputForm from '../components/InputForm';
import axios from 'axios';
import CustomButtom from '../components/CustomButtom'


export class LoginPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            isLoading: false,
            message: ""
        }
    }

    /*
     *  CONTROLLER
     */

    changeTextInput(teste, value) {
        this.setState({
            [teste]: value
        });
    }

    doLogin = async () => {
        this.setState({ isLoading: true, message: "" });
        const { email, password } = this.state;

        let details = {
            'client' : 'mobile',
            'username': email,
            'password': password,
            'grant_type' : 'password'
        };

        let formBody = [];
        for (let property in details) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }

        formBody = formBody.join("&");
        axios({      
            method: 'post',
            url: 'https://oia-api.herokuapp.com/oauth/token',
            auth: {
                'username' : 'mobile',
                'password' : 'm0b1l3'
            },
            headers:{
                'Authorization': 'Basic bW9iaWxlOm0wYjFsMw==',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: formBody
            }).then(function (response) {
                const {access_token} = response.data;
                console.log(access_token);
                AsyncStorage.multiSet([
                    ['@tokenApi', access_token]
                ]);
            })
            .catch(function (error) {
                console.log(error);
            });

            const token = await AsyncStorage.getItem('@tokenApi');
            if(token){
                 this.props.navigation.replace("HomePage");
            }

        }

    async componentDidMount(){
        //const token = await AsyncStorage.getItem('@tokenApi');

        // if(token){           
        //     this.props.navigation.replace("HomePage");
        // }
    }

    renderButton() {
        if (this.state.isLoading) {
            return <ActivityIndicator />;
        }
        return (
            <CustomButtom style={styles.button} onPress={() => this.doLogin()} text='Entrar' />
        );
    }
    renderMessage() {
        const { message } = this.state;
        if (!message) {
            return null;
        }
        return (
            <View>
                <Text>{message}</Text>
            </View>
        );
    }

    /*
     *  VIEW
     */
    render() {
        const { email, password } = this.state;
        return (
            <View style={styles.global}>
                <View style={styles.colorbackLogo}>
                    <Text style={styles.logo}>
                        <Icon name='earth' color='#fff' size={120} />
                    </Text>
                </View>
                <View style={styles.containerPage}>
                    <View style={styles.containerLogin}>
                        <View style={styles.formContainer}>
                            <Icon name='email-outline' size={27} color='#999999' />
                            <InputForm 
                                placeholder='Email'
                                keyboardType='email-address'
                                value={email}
                                onChangeText={value => this.changeTextInput('email', value)} />
                        </View>

                        <View style={styles.formContainer}>
                            <Icon name='lock-outline' size={27} color='#999999' />
                            <InputForm 
                                placeholder='Senha'                             
                                value={password}
                                onChangeText={value => this.changeTextInput('password', value)} />
                        </View>

                        <View style={styles.containerFooter}>
                            <View style={styles.spaceButton}>
                                {this.renderButton()}
                                {this.renderMessage()}
                            </View>
                            <Text>
                                <Text>Não tem cadastro? </Text>
                                <Text 
                                    style={styles.signUp}
                                    onPress={() => this.props.navigation.navigate('NewUser')}>
                                    Cadastre-se
                                </Text>
                            </Text>
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}

/*
 *  CSS
 */
const styles = StyleSheet.create({
   global: {
       flex: 1,
       backgroundColor: '#fff',
   },
   colorbackLogo: {
       alignItems: 'center',
       backgroundColor: "#6F2B8F",
       paddingBottom: 40
   },
   logo: {
       fontSize: 32,
       fontWeight: 'bold',
       marginTop: 45,
       color: 'white'
    },
    containerPage: {
       flexDirection: 'row',
    },
    containerLogin: {
        flex: 1,
        marginLeft: 15,
        marginRight: 15,
        alignSelf: "center",
        marginTop: 50,
        elevation: 1,    
    },
    formContainer: {
        flexDirection: 'row',
        paddingBottom: 2,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#999999'
    },
    containerFooter: {
        marginTop: 5,
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#F5F5F5',
        borderColor: '#F5F5F5',
        borderWidth: 0.4,
        elevation: 3,
        width: 350
    },
    spaceButton: {
        marginBottom: 20
    },
    signUp: {
        color: 'black',
        fontWeight: 'bold',
    }
});

export default connect(null, { login })(LoginPage);