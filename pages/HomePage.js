import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, AsyncStorage} from 'react-native';
import ContainerJob from '../components/ContainerJob';
import axios from 'axios';

export default class HomePage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            listVagas: []
        }
    }
    renderListVagas(token) {
        console.log('-----------------------------------------');
        console.log(token);
        console.log('-----------------------------------------');
        axios({
            method: 'get',
            url: 'https://oia-api.herokuapp.com/admin/listar-vagas/8',
            headers:{
                'Authorization': 'Bearer ' + token,
            },
        })
            .then(response => {
                const results = response.data;
                this.setState({
                    listVagas: results,
                });
            });
    }

    async componentDidMount() {
       const token = await AsyncStorage.getItem('@tokenApi');

        if(token){           
            this.renderListVagas(token);
        }
    }

    render (){
        return(
         <View style={styles.container}>
            <ContainerJob
                vagas={this.state.listVagas}
                onPressContainer={pageParams => {
                this.props.navigation.navigate('JobDetail', pageParams);
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