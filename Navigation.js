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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { LoginPage, HomePage, NewUserPage, JobDetail, ExitScreen, CreateJob, PageDetailsCandidatadas, PageHistoricoVagasCriada } from "./pages";
import CriadasHistoricoScreen from './pages/CriadasHistoricoScreen';
import OiaCandidatadas from './pages/OiaCandidatadas';


const AppStackNavigator = createStackNavigator({
    'LoginPage': { 
        screen: LoginPage, //LoginPage
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
                        <Icon color='#fff' name="menu" size={28} />
                    </View>
                </TouchableOpacity>
            )
        })
    },
    'NewUser': {
        screen: NewUserPage, //NewUserPage
        navigationOptions: {
           headerStyle: {
               display: 'none',
           }
        },
    },
    'JobDetail': {
        screen: JobDetail, // JobDetail
        navigationOptions: ({ navigation }) => {
            // const nameWork = navigation.state.params.listVagas.title;
            return ({
                title: 'Detalhes da Oia', //namework
                headerTitleStyle: {
                    color: '#fff',
                    fontSize: 24,
                    textAlign: 'center', // manda o elemente ir para o meio da barra 
                    flexGrow: 1,
                },
                headerLeft: undefined // poe a seta de voltar 
            });
        }
    },
    'PageHistoricoVagasCriada': {
        screen: PageHistoricoVagasCriada, // JobDetail
        navigationOptions: ({ navigation }) => {
            // const nameWork = navigation.state.params.listVagas.title;
            return ({
                title: 'Detalhes da sua OIA', //namework
                headerTitleStyle: {
                    color: '#fff',
                    fontSize: 24,
                    textAlign: 'center', // manda o elemente ir para o meio da barra 
                    flexGrow: 1,
                },
                headerLeft: undefined // poe a seta de voltar 
            });
        }
    },
    'PageDetailsCandidatadas': {
        screen: PageDetailsCandidatadas, // DetailsCriada
        navigationOptions: ({ navigation }) => {
            // const nameWork = navigation.state.params.listVagas.title;
            return ({
                title: 'Oia Candidatada', //namework
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
                        <Icon color='#fff' name="home" size={28} />
                    </View>
                </TouchableOpacity>
            ),
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#6F2B8F',
                borderWidth: 1,
                borderBottomColor: '#85868B',
            },
            headerTitleStyle: {
                color: '#fff',
                fontSize: 28,
                textAlign: 'center',
                flexGrow: 1,
            }
        })
    });


const createJob = createStackNavigator({
    'CreateJob': {
        screen: CreateJob, // CreateJob
        navigationOptions: ({ navigation }) => ({
            title: 'Criar Vaga',
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <View style={{ paddingHorizontal: 12 }}>
                        <Icon color='#fff' name="home" size={28} />
                    </View>
                </TouchableOpacity>
            ),
            headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: '#6F2B8F',
                    borderWidth: 1,
                    borderBottomColor: '#85868B',
                },
                headerTitleStyle: {
                    color: '#fff',
                    fontSize: 28,
                    textAlign: 'center',
                    flexGrow: 1,
                }
        })
    }  
})

const criadasHistoricoScreen = createStackNavigator({
    'CriadasHistoricoScreen': {
        screen: CriadasHistoricoScreen, // HistoricoScreen 
        navigationOptions: ({ navigation }) => ({
            title: 'Suas Oia Criada',
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <View style={{ paddingHorizontal: 12 }}>
                        <Icon color='#fff' name="home" size={28} />
                    </View>
                </TouchableOpacity>
            ),
            headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: '#6F2B8F',
                    borderWidth: 1,
                    borderBottomColor: '#85868B',
                },
                headerTitleStyle: {
                    color: '#fff',
                    fontSize: 28,
                    textAlign: 'center',
                    
                }
        })
    }  
})

const oiaCandidatadas = createStackNavigator({
    'OiaCandidatadas': {
        screen: OiaCandidatadas, // OiaCandidatadas
        navigationOptions: ({ navigation }) => ({
            title: 'Oias Candidatas',
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <View style={{ paddingHorizontal: 12 }}>
                        <Icon color='#fff' name="home" size={28} />
                    </View>
                </TouchableOpacity>
            ),
            headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: '#6F2B8F',
                    borderWidth: 1,
                    borderBottomColor: '#85868B',
                },
                headerTitleStyle: {
                    color: '#fff',
                    fontSize: 28,
                    textAlign: 'center',
                    flexGrow: 1,
                }
        })
    }  
})

class Exit extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Sair',
        drawerIcon: ({ tintColor }) => (
          <Icon color={tintColor} name='exit-to-app' size={24} />
        )
      };

    render() {
        return (
            <LoginPage /> // *** NECESSITA RESOLVER O COMO DESLOGAR CORRETAMENTE ***
        );
    }
}

const styles = StyleSheet.create({
    meio: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const CustomDrawerComponent = (props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: 150, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
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
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
              <Icon color={tintColor} name='home' size={24} />
            )
          }
    },
    'Criar Vaga': {
        screen: createJob,
        navigationOptions: {
            drawerIcon: ({ tintColor}) => (
                <Icon color={tintColor} name='pencil' size={24} />
            )
        }
    },
    'Oia Criada': {
        screen: criadasHistoricoScreen,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Icon color={tintColor} name='folder-multiple-outline' size={24} />
            )
        }
    },
    'Oia Candidatada': {
        screen: oiaCandidatadas,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Icon color={tintColor} name='folder-move' size={24} />
            )
        }
    },
    Exit: {
        screen: Exit,
    }
},
    {
        contentComponent: CustomDrawerComponent,
        drawerWidth: 220,
        drawerBackgroundColor: "#fff",
        contentOptions: {
            activeBackgroundColor: "#6F2B8F",
            activeTintColor: '#fff',
            labelStyle: {
                fontSize: 16,
            },
            activeTintColor: '#fff',
        }
    }
);
