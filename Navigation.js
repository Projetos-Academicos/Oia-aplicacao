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
import { LoginPage, HomePage, NewUserPage, JobDetail, ExitScreen, CreateJob } from "./pages";


const AppStackNavigator = createStackNavigator({
    'LoginPage': { 
        screen: HomePage, //LoginPage
        navigationOptions: {
            headerStyle: {
                display: 'none',
            },
        }
    },
    'HomePage': {
        screen: LoginPage, // HomePage
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
                backgroundColor: '#E75A4D',
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

class CreateJobScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Criar Vagas', 
        drawerIcon: ({ tintColor }) => (
          <Icon color={tintColor} name='pencil' size={24} />
        ),
      };

    render() {
        return (
            <CreateJob />
        );
    }
}

class HistoricoScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Historico de Vagas', 
      drawerIcon: ({ tintColor }) => (
        <Icon color={tintColor} name='history' size={24} />
      ),
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
    CriarVaga: {
        screen: CreateJobScreen,
    },
    Historico: {
        screen: HistoricoScreen,
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
            activeBackgroundColor: "#E75A4D",
            activeTintColor: '#fff',
            labelStyle: {
                fontSize: 16,
            },
            activeTintColor: '#fff',
        }
    }
);
