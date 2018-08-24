import {createStackNavigator} from 'react-navigation';
import { LoginPage, HomePage, NewUser } from "./pages";


export default createStackNavigator({
    'LoginPage' : {
        screen: LoginPage,
        navigationOptions: {
            headerStyle: {
                 display: 'none', 
            },
        }
    },
    'HomePage' :{
        screen: HomePage
    },
    'NewUser':{
        screen: NewUser
    },

}, {
    navigationOptions: {

    },
    headerTitleStyle: {
        
    }
});