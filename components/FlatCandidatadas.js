import React from 'react';
import { FlatList, Text, StyleSheet} from 'react-native';
import ContainerVagasCandidatas from './ContainerVagasCandidatas';

const FlatCandidatadas = props => {
   const { vagas, onPressContainer } = props;
   return ( // NAO SEI SE O CODIGO VOLTA
        <FlatList 
            style={styles.container}
            data={vagas}
            renderItem={({ item }) => (
                <ContainerVagasCandidatas 
                 listVagas={item}
                 navigateToContainer={onPressContainer} />
            )}
            keyExtractor={item => item.title} />
    );
}

export default FlatCandidatadas;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff"
      }
});