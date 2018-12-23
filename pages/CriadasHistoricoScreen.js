import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, AsyncStorage} from 'react-native';
import ContainerJob from '../components/ContainerJob';
import axios from 'axios';
import FlatHistoric from '../components/FlatHistoric';

export default class CriadasHistoricoScreen extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            listVagas: []
        }
    }
    renderListVagas(token, id) {
        axios({
            method: 'get',
            url: 'https://oia-api.herokuapp.com/admin/minhas-vagas/' + id,
            headers:{
                'Authorization': 'Bearer ' + token,
            },
        }).then(response => {
                const results = response.data;
                this.setState({
                    listVagas: results,
                });
            });
    }

    async componentDidMount() {
       const token = await AsyncStorage.getItem('@tokenApi');
       const id = JSON.parse(await AsyncStorage.getItem('@userId'));
       
        if(token){           
            this.renderListVagas(token, id);
        }
    }

    render (){
        return(
         <View style={styles.container}>
            <FlatHistoric
                vagas={this.state.listVagas}
                onPressContainer={pageParams => {
                this.props.navigation.navigate('PageHistoricoVagasCriada', pageParams);
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
        backgroundColor: '#fff',
        padding: 9 // altera o tamanhho do container das vagas
    }
});