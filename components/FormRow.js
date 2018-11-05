import React from 'react';
import { StyleSheet, View} from 'react-native';


const FormRow = props => {
    const {children, first, last} = props;
    return (
        <View
            style={[styles.container, 
            first ? styles.first : null,
            last ? styles.last : null]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        padding: 1,        
        margin: 10,
        elevation: 1,
    },
    first:{
        marginTop: 20,
    },
    last:{
        marginBottom: 20,
    }
});

export default FormRow;