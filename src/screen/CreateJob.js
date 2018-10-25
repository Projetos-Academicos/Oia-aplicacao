import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class CreateJob extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Screen 1',
        drawerIcon: ({ tintColor }) => {
            return (
                <MaterialIcons
                name="card-membership"
                size={24}
                style={{color: tintColor}}>
                </MaterialIcons>
            );
        }
    }
    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>screen 1</Text>
                <Button 
                    onPress={() => this.props.navigation.navigate('DrawerOpen')}
                    title='Open Drawer'
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    text: {
        fontSize: 30, 
        color: 'green'
    }
});