import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const JobList = props => {
    const {listVagas, navigateToContainer} = props;
    const {title, local, published, description, price } = listVagas;
    return (
        <TouchableOpacity onPress={() => {
            navigateToContainer({ listVagas });
        }}> 
        <View style={styles.container}>
            <Text style={styles.jobTitle}>{ title } <Icon name='md-people' size={20} color='#ddd'/> </Text> 
            <View style={styles.line}>
                <Text style={[styles.cell, styles.label]}>Local:</Text>
                <Text style={[styles.cell, styles.content]}>{ local }</Text>
            </View>
            <View style={styles.line}>
                <Text style={[styles.cell, styles.content, styles.description]}>{ description }</Text>
            </View>
            <View style={styles.line}>
                <Text style={[styles.cell, styles.content, styles.price]}>{ price }</Text> 
                <Text style={styles.data}>{ published}</Text>
            </View>
        </View>
        </TouchableOpacity>
    );
};

export default JobList;

const styles = StyleSheet.create({
    container: {
        padding: 7, // 15
        paddingLeft: 5,
        backgroundColor: "#484848",
        marginBottom: 18,
        height: 130, // 130
        borderRadius: 5,
        elevation: 5
       // flexDirection: "row",
       // alignItems: "center"
    },
    jobTitle: {
        marginBottom: 3,
        fontWeight: "bold",
        color: "#fff",
        fontSize: 18
    },
     line: {
        flexDirection: 'row', // muda a direçao em que os elementos seram adicionados
        paddingTop: 2,
        paddingBottom: 2,
    },
    cell: {
        fontSize: 14,
        color: '#fff'
       // paddingLeft: 1
    },
    label: {
        fontWeight: 'bold',
        flex: 1,
        color: '#fff'
    },
    content: { // criado para fixar as celulas da tab em tamanho unico
        fontSize: 15,
        flex: 7, // dividiu o tamanho da Line por 4 
        paddingLeft: 1,
        color: '#fff'
    }, 
    longLabel: { // tratar o tamanho dos labels de caracteres grandes
        fontSize: 11
    }, 
    price: {
        fontWeight: 'bold',
        color: '#17a306',
        fontSize: 17
    },
    data: {
        fontSize: 12,
        color: '#fff'
    },
    description: {
        color: '#fff'
    }

});