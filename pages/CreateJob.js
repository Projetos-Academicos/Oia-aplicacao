import React from 'react';
import { 
    ScrollView, 
    Picker,
    KeyboardAvoidingView,
    TouchableOpacity, 
    icon, 
    View, 
    Text, 
    Button, 
    StyleSheet } from 'react-native';

import InputForm from '../components/InputForm';
import InputForm2 from '../components/InputForm2';
import InputForm3 from '../components/InputForm3';

export default class CreateJob extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            titulo: "",
            descricao: "",
            valor: "",
            local: "",
            categoria: "",
        }

    }

    changeTextInput(chave, valor) {
        this.setState({
            [chave]: valor
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

    renderButton() {
        if (this.state.isLoading) {
            return <ActivityIndicator />;
        }
        return (
            <View style={styles.containerButton}>
                <TouchableOpacity 
                 style={styles.button}
                 onPress={() => { this.register() }} > 
                    <Text style={{color: '#fff', fontSize: 19, fontWeight: 'bold'}}>CRIAR VAGA</Text>
                 </TouchableOpacity>
            </View>
        );
    }


    render () {
        return (
            <KeyboardAvoidingView behavior = "padding">
            <ScrollView>
                <View style={styles.global}>
                    <View style={styles.colorBackLogo}>
                        <Text style={styles.logo}>Criar Vaga
                        </Text>
                    </View>
                    <View style={styles.containerPage}>
                        <View style={styles.containerRegister}>
                        <View style={styles.session}>
                        <Text style={styles.labelSession}>Informações da vaga:</Text>                        
                        <View style={styles.formContainer}>
                            <InputForm
                                placeholder='Titulo'
                                value={this.state.titulo}
                                onChangeText={value => { this.changeTextInput('titulo', value)} } />
                        </View>

                        <View style={styles.formContainer}>
                            <InputForm2
                                placeholder='Descricao'
                                value={this.state.descricao}
                                onChangeText={value => { this.changeTextInput('descricao', value)} } />
                        </View>

                        </View>
                        </View>
                    </View>
                        <View style={styles.containerPage}>
                        <View style={styles.containerRegister}>
                        <View style={styles.session}>
                        <Text style={styles.labelSession}>Valor:</Text>
                        
                        <View style={styles.formContainer}>
                            <InputForm3
                                placeholder='Valor em R$'
                                value={this.state.valor}
                                onChangeText={value => { this.changeTextInput('valor', value)} } />
                        </View>
                        </View>
                        </View>
                        </View>  

                        <View style={styles.containerPage}>
                        <View style={styles.containerRegister}>
                        <View style={styles.session}>
                        <Text style={styles.labelSession}>Localização:</Text>
                        <Picker
                        selectedValue={this.state.local}
                        style={styles.formContainer}
                        onValueChange={(itemValue, itemIndex) => this.setState({local: itemValue})}>
                        <Picker.Item label="Recife" value="recife" />
                        <Picker.Item label="Olinda" value="olinda" />
                        <Picker.Item label="Jaboatão" value="jaboatao" />
                        </Picker>
                        </View>
                        </View>
                        </View>

                        <View style={styles.containerPage}>
                        <View style={styles.containerRegister}>
                        <View style={styles.session}>
                        <Text style={styles.labelSession}>Categoria:</Text>
                        <Picker
                        selectedValue={this.state.categoria}
                        style={styles.formContainer}
                        onValueChange={(itemValue, itemIndex) => this.setState({categoria: itemValue})}>
                        <Picker.Item label="Construção" value="contrucao" />
                        <Picker.Item label="Dona de casa" value="dona_de_casa" />
                        <Picker.Item label="Jardinagem" value="jardinagem" />
                        </Picker>
                        </View>
                        </View>
                        </View>
                        <View style={styles.containerFooter}>
                                {this.renderButton()}
                                {this.renderMessage()}
                        </View>                        
                </View>
        </ScrollView>
        </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({global: {
    flex: 1,
    backgroundColor: '#F2F2F2',
},
colorBackLogo: {
    alignItems: 'center',
    backgroundColor: "#E85A4E",
    paddingBottom: 20
},
logo: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 30,
    color: 'white'
},
containerPage: {
    flexDirection: 'row',
},
containerRegister: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    alignSelf: "center",
    marginTop: 5,
    elevation: 1,
},
session: {
    backgroundColor: '#fff',
    elevation: 2,
    borderWidth: 1,
    borderColor: '#999999',
    paddingHorizontal: 10,
    paddingTop: 25,
    marginBottom: 18,
},
labelSession: {
    position: 'absolute',
    fontSize: 11,
    marginLeft: 5,
    paddingBottom: 5,
    color: '#727272'
},
formContainer: {
    flexDirection: 'row',
    paddingBottom: 2, // tamanho do form
    marginBottom: 5, // distancia entre os inputs
    borderBottomWidth: 1,
    borderColor: '#999999',
},
inputStyle: {
    flex: 1,
    fontSize: 17,
    paddingLeft: 5
},
containerFooter: {
    marginTop: 5        
},
button: {
    alignItems: 'center',
    backgroundColor: '#22B34E',
    borderColor: 'black',
    borderWidth: 0.2,
    elevation: 5,
    padding: 15,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
}
});