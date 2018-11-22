import React from "react";
import { View, StyleSheet} from 'react-native';
import DetailsHistoricoVagasCriada from "../components/DetailsHistoricoVagasCriada";

export default class PageHistoricoVagasCriada extends React.Component {
  render() {
    const { vaga } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
         <DetailsHistoricoVagasCriada vaga={vaga}/>
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