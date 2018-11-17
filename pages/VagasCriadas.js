import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FlatVagaCriada from '../components/FlatVagaCriada';
import axios from 'axios';

export default class VagasCriadas extends React.Component{
    state = {
        listVagas: [],
    };

    renderListVagasCriadas() {
        axios.get('https://oia-api.herokuapp.com/admin/minhas-vagas/1')
            .then(response => {
                const results = response.data;
                this.setState({
                    listVagas: results,
                });
            });
    }

    componentDidMount() {
        this.renderListVagasCriadas();
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