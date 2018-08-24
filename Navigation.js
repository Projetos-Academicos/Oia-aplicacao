import {createStackNavigator} from 'react-navigation';
import {NewUserPage} from './pages';

export default createStackNavigator({
    'Cadastro' : {
        screen: NewUserPage,
        navigationOptions: {            
            headerStyle: {
                 display: 'none', 
            },
        }
     }
});