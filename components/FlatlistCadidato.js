import React from "react";
import { Text, FlatList, StyleSheet } from "react-native";
import ListCandidato from './ListCandidato';

const FlatlistCandidato = props => {// componente funcional
  const { candidatos, onPressContainer } = props;

  return (
      <FlatList 
        style={styles.container}
        data={candidatos}
        renderItem={({ item }) => (
          <ListCandidato
              listCandidatos={item}
              navigateToContainer={onPressContainer} />
        )}
        keyExtractor={item => item.name} />
  );
};

export default FlatlistCandidato;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  }
});
