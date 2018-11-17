import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ContainerJob from '../components/ContainerJob';

export default class HomePage extends React.Component{
    state = {
        listVagas: [],
    };

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