import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const JobList = props => {
    const {listVagas, navigateToContainer} = props;
    const {title, local, published, description, price } = listVagas;
    return (
        <TouchableOpacity onPress={() => {
            navigateToContainer({ listVagas });
        }}>
            
            <View style={styles.container}>
                <View>
                     <Icon style={styles.iconContainer} name='email' size={35} color='#fff' />
                </View>
                        <View styles={styles.line}>
                            <Text style={[styles.content, styles.cell, styles.jobTitle]}>{ title }</Text>
                            <Text style={[styles.cell, styles.content, styles.description]}>{ description }</Text>
                            <Text style={[styles.cell, styles.content]}>{ local }</Text>

                            <Text style={[styles.cell, styles.content, styles.price]}>{ price } 
                            <Text style={styles.data}>{ published}</Text>
                            </Text>
                        </View>
            </View>
        </TouchableOpacity>
    );
};

export default JobList;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        height: 130, // 130
        borderBottomWidth: 1,
        borderBottomColor: '#DFDFDF',
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconContainer: {
        backgroundColor: '#999',
        padding: 5,
        borderRadius: 50,
        marginRight: 10,
    },
    jobTitle: {
        fontWeight: "bold",
        color: "black",
        fontSize: 18
    },
    line: {
        flex: 7,
        flexDirection: 'row',
        paddingTop: 1,
        paddingBottom: 2,
    },
    cell: {
        fontSize: 14,
        color: '#808080'
    },
    content: {
        fontSize: 15,
        paddingLeft: 1,
        color: '#6A6A6A'
    },
    description: {
        fontSize: 12,
        color: '#999',
    },
    price: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 17
    },
    data: {
        fontSize: 12,
        color: '#808080'
    },
});