import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    KeyboardAvoidingView, 
    Alert, 
    TextInput, 
    Button,
    Picker,
    ScrollView,
    TouchableOpacity, 
    ActivityIndicator,
    AsyncStorage} from 'react-native';
//import { connect } from 'react-redux';
import firebase from 'firebase';
import { messageErroCodeNewUser } from "../utils";

import { FormRow } from '../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import axios from 'axios';
import InputForm from '../components/InputForm';
import CustomButtom from '../components/CustomButtom';

//import { tryRegister, tryInsert } from "../actions";

export default class NewUserPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            msgError: "",
            titulo: "",
            descricao: "",
            valor: 0,
            prazo: 0,
            categoriaEscolhida: 0,
            cidadeEscolhida: 0,
            categorias: [],
            cidades: [],
            token: ''
        }

       // this.renderLists();
    }

    changeTextInput(chave, valor) {
        this.setState({
            [chave]: valor
        });
    }

    async componentDidMount() {
        const token = await AsyncStorage.getItem('@tokenApi');
        this.setState({
            token: token
        });
 
         if(token){           
             this.renderLists(token);
         }
     }

    createJob(token) {
        const { titulo, descricao, valor, prazo, cidadeEscolhida, categoriaEscolhida} = this.state;
        console.log("----");
        console.log(cidadeEscolhida);
        console.log("");
        console.log(categoriaEscolhida);
        console.log("----");
        console.log("");
        console.log(titulo);
        console.log("----");
        console.log("");
        console.log(descricao);
        console.log("----");
        console.log("");
        console.log(valor);
        console.log("----");
        console.log("");
        console.log(prazo);
        console.log("----")
        axios({
            method: 'post',
            url: 'https://oia-api.herokuapp.com/admin/cadastro-vaga/',
            headers:{
                'Authorization': 'Bearer ' + token,
            },
            data: {
                titulo: titulo,
                descricao: descricao,
                orcamento: valor,
                prazo: prazo,
                cidade: {
                    id: cidadeEscolhida
                },
                categoria:{
                    id: categoriaEscolhida
                }
            }
        })
            .then(function (response) {
                console.log('funfou');
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
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

    renderLists(token) {
        axios({
            method: 'get',
            url:'https://oia-api.herokuapp.com/admin/listar-categorias',
            headers:{
                'Authorization': 'Bearer ' + token,
            },
        }).then(response => {
            const results = response.data;
            this.setState({
                categorias: results,
            });
        });
        
        axios({
            method: 'get',
            url: 'http://oia-api.herokuapp.com/admin/listar-cidades',
            headers:{
                'Authorization': 'Bearer ' + token,
            },
        }).then(response => {
            const results = response.data;
            this.setState({
               cidades: results
            });
        });
    }

    renderButton() {
        const {token} = this.state;
        if (this.state.isLoading) {
            return <ActivityIndicator />;
        }
        return (
            <CustomButtom style={styles.button} onPress={() => this.createJob(token)} text='Cadastrar' />
        );
    }

    render() {
        return (
     <KeyboardAvoidingView behavior='padding'>       
        <ScrollView>
            <View style={styles.global}>
                <View style={styles.containerPage}>
                 <View style={styles.containerRegister}>
                    
                    <View style={styles.session}>
                        <Text style={styles.labelSession}>Dados da vaga</Text>

                        <View style={styles.formContainer}>
                           
                                <Icon name='account-box' color='#999999' size={26}/>
   
                            <InputForm 
                                placeholder='Titulo'
                                value={this.state.titulo}
                                onChangeText={value => { this.changeTextInput('titulo', value)} } />
                        </View>
                    
                        <View style={styles.formContainer}>
                  
                                <Icon name='account-card-details' color='#999999' size={25} />
                    
                            <InputForm
                                placeholder='Descrição'
                                multiline={true}
                                maxLength={300}
                                numberOfLines={3}
                                value={this.state.descricao}
                                onChangeText={value=> { this.changeTextInput('descricao', value)}} />
                        </View>
                        </View>


                    <View style={styles.session}>
                        <Text style={styles.labelSession}>Valores e Prazo</Text>

                            <View style={styles.formContainer}>
                                <Icon name='cash-usd' color='#999999' size={26} />
                                
                                <InputForm 
                                    placeholder='Valor'
                                    keyboardType='numeric'
                                    value={this.state.valor}
                                    onChangeText={value => { this.changeTextInput('valor', value)}} />
                            </View>

                      
                            <View style={styles.formContainer}>
                                <Icon name='calendar-clock' size={28} color="#999999"/>
                        
                                <InputForm
                                    placeholder='Prazo'
                                    keyboardType='numeric'
                                    value={this.state.prazo}
                                    onChangeText={value => { this.changeTextInput('prazo', value)}} />
                            </View>
                    </View>

                    <View style={styles.session}>
                        <Text style={styles.labelSession}>Informações Adicionais</Text>
                        <View style={styles.formContainer}>
                            <Icon name='map-marker' size={26} color="#999999"/>
                            
                        <Picker
                            selectedValue={this.state.cidadeEscolhida}
                            style={{ height: 18, width: 280 }}
                            onValueChange={(itemValue, itemIndex) => this.setState({cidadeEscolhida: itemValue})}>
                            {this.state.cidades.map( cidade => 
                                <Picker.Item key={cidade.id} label={cidade.nome} value={cidade.id} />)}
                        </Picker>
                        </View>

                        <View style={styles.formContainer}>
                        <Icon name='account-multiple' size={26} color="#999999"/>
                        
                        <Picker
                            selectedValue={this.state.categoria}
                            style={{ height: 18, width: 280 }}
                            onValueChange={(itemValue, itemIndex) => this.setState({categoriaEscolhida: itemValue})}>
                            {this.state.categorias.map(categoria => 
                                <Picker.Item key={categoria.id} label={categoria.nome} value={categoria.id} />)}
                        </Picker>
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
        fontSize: 13,
        marginLeft: 5,
        paddingBottom: 10,
        color: '#727272'
    },
    formContainer: {
        flexDirection: 'row',
        paddingTop: 4,
        paddingBottom: 4,
        marginBottom: 16, // distancia entre os inputs
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#999999',
    },
    formRadius: {
        borderLeftWidth: 3,
        borderColor: '#fff'
    },
    containerFooter: {
        backgroundColor: '#fff'     
    },
    spaceButtom: {
        marginBottom: 50,
        marginTop: 10,
    },
    button: {
        backgroundColor: '#F5F5F5',
        borderColor: '#F5F5F5',
        borderWidth: 0.4,
        elevation: 3,
        width: 350
    }
});
