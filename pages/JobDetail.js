import React from "react";
import { View, StyleSheet} from 'react-native';
import ContainerDetails from '../components/ContainerDetails';

export default class JobDetail extends React.Component {
  render() {
    const { vaga } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <ContainerDetails vaga={vaga}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
     // alignItems: 'center',
      backgroundColor: '#fff',
  }
});
