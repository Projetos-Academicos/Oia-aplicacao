import { createStackNavigator } from 'react-navigation';
import { LoginPage, HomePage, NewUserPage } from "./pages";


export default createStackNavigator({
    'LoginPage': {
        screen: LoginPage,
        navigationOptions: {
            headerStyle: {
                display: 'none',
            },
        }
    },
    'NewUser': {
        screen: NewUserPage,
        navigationOptions: {
    
        },
    },
    'HomePage': {
        screen: HomePage
    },
}, {
        navigationOptions: {

        },
        headerTitleStyle: {

        }
    });