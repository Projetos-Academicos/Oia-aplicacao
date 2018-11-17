import React from 'react';
import { FlatList, Text, StyleSheet} from 'react-native';
import JobList from './JobList';

const ContainerJob = props => {
   const { vagas, onPressContainer } = props;
   return ( // NAO SEI SE O CODIGO VOLTA
        <FlatList 
            style={styles.container}
            data={vagas}
            renderItem={({ item }) => (
                <JobList 
                 vaga={item}
                 navigateToContainer={onPressContainer} />
            )}
            keyExtractor={item => item.id.toString()} />
    );
}

export default ContainerJob;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff"
      }
});