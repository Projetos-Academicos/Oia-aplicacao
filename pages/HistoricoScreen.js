import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FlatHistoric from '../components/FlatHistoric';

export default class HistoricoScreen extends React.Component{
    state = {
        listVagas: [],
    };

    render (){
        return(
         <View style={styles.container}>
            <FlatHistoric
                vagas={this.state.listVagas}
                onPressContainer={pageParams => {
                this.props.navigation.navigate('HistoricoDetailPage', pageParams);
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