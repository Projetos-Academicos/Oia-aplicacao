import React from 'react';
import { FlatList, Text, StyleSheet} from 'react-native';
import VagaCriadaContainer from './VagaCriadaContainer';

const FlatVagaCriada = props => {
   const { vagas, onPressContainer } = props;
   return ( // NAO SEI SE O CODIGO VOLTA
        <FlatList 
            style={styles.container}
            data={vagas}
            renderItem={({ item }) => (
                <VagaCriadaContainer 
                 vaga={item}
                 navigateToContainer={onPressContainer} />
            )}
            keyExtractor={item => item.title} />
    );
}

export default FlatVagaCriada;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff"
      }
});