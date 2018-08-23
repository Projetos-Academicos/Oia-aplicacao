import {createStackNavigator} from 'react-navigation';
import { LoginPage, HomePage } from "./pages";


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
    }
}, {
    navigationOptions: {

    },
    headerTitleStyle: {
        
    }
});