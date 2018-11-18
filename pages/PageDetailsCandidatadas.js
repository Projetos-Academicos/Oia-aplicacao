import React from "react";
import { View, StyleSheet} from 'react-native';
import DetailsCandidatadas from "../components/DetailsCandidatadas";

export default class PageDetailsCandidatadas extends React.Component {
  render() {
    // const { job } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <DetailsCandidatadas />
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