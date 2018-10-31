import React from 'react';
import { createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import {
    TouchableOpacity,
    View,
    ScrollView,
    StyleSheet,
    Button,
    Image,
    SafeAreaView,
    Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { LoginPage, HomePage, NewUserPage, JobDetail, ExitScreen, CreateJob } from "./pages";


const AppStackNavigator = createStackNavigator({
    'LoginPage': {
        screen: LoginPage,
        navigationOptions: {
            headerStyle: {
                display: 'none',
            },
        }
    },
    'HomePage': {
        screen: HomePage, // HomePage
        navigationOptions: ({ navigation }) => ({
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <View style={{ paddingHorizontal: 12 }}>
                        <Icon color='#fff' name="md-menu" size={28} />
                    </View>
                </TouchableOpacity>
            )
        })
    },
    'NewUser': {
        screen: NewUserPage,
        navigationOptions: {

        },
    },
    'JobDetail': {
        screen: JobDetail, // JobDetail
        navigationOptions: ({ navigation }) => {
            const nameWork = navigation.state.params.listVagas.title;
            return ({
                title: nameWork, //namework
                headerTitleStyle: {
                    color: '#fff',
                    fontSize: 24,
                    textAlign: 'center', // manda o elemente ir para o meio da barra 
                    flexGrow: 1,
                },
                headerLeft: undefined // poe a seta de voltar 
            });
        }
    }
}, {
        navigationOptions: ({ navigation }) => ({
            title: 'OIA.COM',
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <View style={{ paddingHorizontal: 12 }}>
                        <Icon color='#fff' name="md-menu" size={28} />
                    </View>
                </TouchableOpacity>
            ),
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#484848',
                borderWidth: 1,
                borderBottomColor: '#85868B',
            },
            headerTitleStyle: {
                color: '#fff',
                fontSize: 30,
                textAlign: 'center',
                flexGrow: 1,
            }
        })
    });

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Historico de Vagas',
    };

    render() {
        return (
            <View style={styles.meio}>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Go back home"
                    style={styles.meio}
                />
            </View>
        );
    }
}

class Exit extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Sair',
    };

    render() {
        return (
            <View style={styles.meio}>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Go back home"
                    style={styles.meio}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
    meio: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const CustomDrawerComponent = (props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: 150, backgroundColor: '#5C5C5C', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('./images/user.png')} style={{ height: 120, width: 120, borderRadius: 60 }} />
            </View>
            <ScrollView>
                <DrawerItems {...props} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default createDrawerNavigator({
    Home: {
        screen: AppStackNavigator,
    },
    Historico: {
        screen: MyNotificationsScreen,
    },
    Exit: {
        screen: Exit,
    }
},
    {
        contentComponent: CustomDrawerComponent,
        drawerWidth: 220,
        drawerBackgroundColor: "#5C5C5C",
        contentOptions: {
            activeBackgroundColor: "#484848",
            labelStyle: {
                fontSize: 20,
            },
            activeTintColor: '#fff',
        }
    }
);
