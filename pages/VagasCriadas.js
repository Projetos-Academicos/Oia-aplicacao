import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, AsyncStorage} from 'react-native';
import FlatVagaCriada from '../components/FlatVagaCriada';
import axios from 'axios';

export default class VagasCriadas extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            listVagas: []
        }
    }

    renderListVagasCriadas(token, id) {
        axios({
            method: 'get',
            url: 'https://oia-api.herokuapp.com/admin/minhas-vagas/' + id,
            headers:{
                'Authorization': 'Bearer ' + token
            },
        }).then(response => {
                const results = response.data;
                this.setState({
                    listVagas: results,
                });
            }).catch(error => {
                console.log(error.code);
            });
    }

    async componentDidMount() {
        const token = await AsyncStorage.getItem('@tokenApi');
        const id = JSON.parse(await AsyncStorage.getItem('@userId'));
        
         if(token){           
             this.renderListVagasCriadas(token, id);
         }
     }

    render (){
        return(
         <View style={styles.container}>
            <FlatVagaCriada
                vagas={this.state.listVagas}
                onPressContainer={pageParams => {
                this.props.navigation.navigate('PageDetailsCriada', pageParams);
                }}/>
         </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
       // alignItems: 'center',
        backgroundColor: '#ddd',
        padding: 9 // altera o tamanhho do container das vagas
    }
});