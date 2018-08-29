import React from 'react';
import { connect } from "react-redux";
import { StyleSheet, Text, View, Alert, ActivityIndicator, Button, TextInput, Linking } from 'react-native';

import { messageErroCodeLogin } from "../utils";
import { login } from "../actions";
import { FormRow } from "../components";


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

    doLogin() {
        this.setState({ isLoading: true, message: "" });
        const { email, password } = this.state;

        this.props.login({ email, password })
            .then(user => {
                if (user) {
                    Alert.alert("Bem-Vindo!", "Login efetuado com sucesso!");
                    this.props.navigation.replace("HomePage");
                } else {
                    this.setState({ isLoading: false, message: "" })
                }
            })
            .catch(erro => {
                this.setState({ isLoading: false, message: messageErroCodeLogin(erro.code) })
            })
    }

    renderButton() {
        if (this.state.isLoading) {
            return <ActivityIndicator />;
        }
        return (
            <Button title="Entrar" onPress={() => this.doLogin()} />
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
            <View>

                <View style={styles.containerTitle}>
                    <Text style={styles.lbTitle}>Login</Text>
                </View>
                <View style={styles.containerPage}>
                    <View style={styles.containerLogin}>
                        <FormRow first>
                            <TextInput
                                style={styles.input}
                                underlineColorAndroid='transparent'
                                placeholder="exemplo@exemplo.com"
                                value={email}
                                onChangeText={value => this.changeTextInput("email", value)}
                            />
                        </FormRow>
                        <FormRow>
                            <TextInput
                                style={styles.input}
                                underlineColorAndroid='transparent'
                                placeholder="******"
                                value={password}
                                onChangeText={value => this.changeTextInput("password", value)}
                                secureTextEntry={true}
                            />
                        </FormRow>
                        <FormRow last>
                            <View style={styles.containerButton}>
                                {this.renderButton()}
                                {this.renderMessage()}
                            </View>
                        </FormRow>
                    </View>
                </View>
                <View style={styles.containerFooter}>
                    <Text>
                        <Text>Não tem cadastro? </Text>
                        <Text 
                            style={{ color: 'blue', textDecorationLine: 'underline', }}
                            onPress={() => this.props.navigation.navigate("NewUser")}
                            >Cadastre-se</Text>
                    </Text>
                </View>
            </View>
        );
    }
}

/*
 *  CSS
 */
const styles = StyleSheet.create({
    containerPage: {
        flexDirection: 'row',
    },
    containerTitle: {
        flex: 1,
        marginTop: 150,
        alignSelf: "center",
    },
    containerLogin: {
        flex: 1,
        marginLeft: 15,
        marginRight: 15,
        borderWidth: 1,
        borderColor: "gray",
        alignSelf: "center",
        marginTop: 50,
        elevation: 1,
    },
    containerButton: {
        marginLeft: 50,
        marginRight: 50,
    },
    containerFooter: {
        flex: 1,
        marginTop: 50,
        alignSelf: "center",
    },
    input: {
        margin: 5,
        fontSize: 20,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5,
        textAlign: "center",
        backgroundColor: "#dcdcdc",
        borderColor: "transparent",
        borderWidth: 1,
    },
    lbTitle: {
        fontSize: 35,
    },
});

export default connect(null, { login })(LoginPage);