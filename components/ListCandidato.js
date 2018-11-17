import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const ListCandidato = props => {
    const {listCandidatos, navigateToContainer} = props;
    const { name } = listCandidatos;
    return (
        <TouchableOpacity onPress={() => {
            navigateToContainer({ listCandidatos });
        }}> 
            <View style={styles.container}>
                <Text style={styles.name}>- { name }</Text> 
            </View>
        </TouchableOpacity>
    );
};

export default ListCandidato;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#6F2B8F",
        marginTop: 5,
        marginHorizontal: 5,
        padding: 5,
    },
    name: {
        fontWeight: "bold",
        color: "black",
        fontSize: 18
    }
});