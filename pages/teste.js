import React from 'react';
import { 
    ScrollView, 
    Picker,
    KeyboardAvoidingView,
    TouchableOpacity, 
    View, 
    Text, 
    StyleSheet } from 'react-native';

import InputForm from '../components/InputForm';
import CustomButtom from '../components/CustomButtom';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class CreateJob extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            titulo: "",
            descricao: "",
            valor: "",
            prazo: "",
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
            <CustomButtom style={styles.button} onPress={() => this.register()} text='Criar Vaga' />
        );
    }


    render () {
        return (
      <ScrollView>
        <View styles={styles.global}>
        <View styles={styles.page}>


          <View style={styles.containerSquare}>
              <View style={styles.session}>
                <Text style={styles.labelSession}>Dados da vaga</Text>
                  <View style={styles.formContainer}>
                    <View style={styles.backIcon}><Icon name='account-box' size={26} color="#fff"/></View>
                    <InputForm
                        placeholder='Titulo'
                        value={this.state.titulo}
                        onChangeText={value => { this.changeTextInput('titulo', value)}} />
                  </View>

                  <View style={styles.formContainer}>
                    <View style={styles.backIcon}><Icon name='account-card-details' size={24} color="#fff"/></View>
                    <InputForm
                        placeholder='Descrição'
                        multiline={true}
                        value={this.state.descricao}
                        onChangeText={value => { this.changeTextInput('descricao', value)}} />
                  </View>   
              </View>

              <View style={styles.session}>
                <Text style={styles.labelSession}>Valores e Prazos</Text>
                  <View style={styles.formContainer}>
                    <View style={styles.backIcon}><Icon name='cash-usd' size={26} color="#fff"/></View>
                        <InputForm 
                            placeholder='Valor'
                            keyboardType='numeric'
                            value={this.state.valor}
                            onChangeText={value => { this.changeTextInput('valor', value)}} />

                    <View style={styles.backIcon}><Icon name='calendar-clock' size={26} color="#fff"/></View>
                        <InputForm
                            placeholder='Prazo'
                            keyboardType='numeric'
                            value={this.state.prazo}
                            onChangeText={value => { this.changeTextInput('prazo', value)}} />
                  </View>
              </View>
              
              <View style={styles.session}>
                <Text style={styles.labelSession}>Infomações adicionais</Text>
                    <View style={styles.formContainer}>
                    <View style={styles.backIcon}><Icon name='map-marker' size={26} color="#fff"/></View>
                    <Picker
                            selectedValue={this.state.local}
                            style={{ height: 20, width: 130 }}
                            onValueChange={(itemValue, itemIndex) => this.setState({local: itemValue})}>
                           
                            <Picker.Item label="Recife" value="recife" />
                            <Picker.Item label="Olinda" value="olinda" />
                            <Picker.Item label="Jaboatão dos Guararapes" value="jaboatao" />
                    </Picker>
                   
                    <View style={styles.backIcon}><Icon name='account-multiple' size={26} color="#fff"/></View>
                    <Picker
                            selectedValue={this.state.categoria}
                            style={{ height: 20, width: 130 }}
                            onValueChange={(itemValue, itemIndex) => this.setState({categoria: itemValue})}>
                            <Picker.Item label="Construção" value="contrucao" />
                            <Picker.Item label="Dona de casa" value="dona_de_casa" />
                            <Picker.Item label="Jardinagem" value="jardinagem" />
                    </Picker>
                </View>
              </View>
             
          </View>
         
          </View>
         
        </View>

         <View styles={styles.containerFooter}>
                    <View styles={styles.spaceButtom}>
                            {this.renderButton()}
                            {this.renderMessage()}
                    </View>
         </View>
     </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    global: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 100,
    },
    page: {
        flexDirection: 'row',
    },
    containerSquare: {
        backgroundColor: '#fff',
        marginLeft: 15,
        marginRight: 15,
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
        fontSize: 11,
        marginLeft: 5,
        paddingBottom: 10,
        color: '#727272'
    },
    formContainer: {
        flexDirection: 'row',
        marginBottom: 16, // distancia entre os inputs
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#999999',
    },
    backIcon: {
        backgroundColor: '#e1e1e1'
    },
    containerFooter: {
        backgroundColor: '#fff',
    },
    spaceButtom: {
        marginBottom: 150,
    },
    button: {
        backgroundColor: '#F5F5F5',
        borderColor: '#F5F5F5',
        borderWidth: 0.4,
        elevation: 3,
        width: 350
    }

});