import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ContainerJob from '../components/ContainerJob';
import axios from 'axios';

export default class HomePage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            listVagas: []
        }

        this.renderListVagas();
    }

    renderListVagas() {
        axios.get('https://oia-api.herokuapp.com/admin/listar-vagas/2')
            .then(response => {
                const results = response.data;
                this.setState({
                    listVagas: results,
                });
            });
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