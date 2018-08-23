import React from 'react';
import { connect } from "react-redux";
import { StyleSheet, Text, View, Alert, ActivityIndicator, Button,TextInput } from 'react-native';

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
        
        this.props.login({email, password})
        .then(user =>{
                if(user){
                    Alert.alert("Bem-Vindo!", "Login efetuado com sucesso!");
                    this.props.navigation.replace("HomePage");
                }else{
                    this.setState({ isLoading: false, message: "" })
                }
            })
        .catch(erro => {
            this.setState({ isLoading: false, message: messageErroCodeLogin(erro) })
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
                <FormRow first>
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid = 'transparent'
                        placeholder="exemplo@exemplo.com"
                        value={email}
                        onChangeText={value => this.changeTextInput("email", value)}
                    />
                </FormRow>
                <FormRow last>
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid = 'transparent'
                        placeholder="******"
                        value={password}
                        onChangeText={value => this.changeTextInput("password", value)}
                        secureTextEntry={true}
                    />
                </FormRow>
                <View style={styles.button}>
                    {this.renderButton()}
                    {this.renderMessage()}
                </View>
            </View>
        );
    }
}

/*
 *  CSS
 */
const styles = StyleSheet.create({
    container:{          
        paddingLeft: 10,
        paddingRight: 10,
    },
    input:{
        fontSize: 20,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5, 
    },
    button:{
       marginTop: 5,
    }
});

export default connect(null, { login })(LoginPage);