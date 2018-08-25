import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { connect } from "react-redux";

export class HomePage extends React.Component {
    render() {
        const { uid, email } = this.props.user;
        return (
            <View>                
                <Text>UID:</Text>
                <Text>{uid}</Text>
                <Text>Email: </Text>
                <Text>{email}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    
});

const mapStateToProps = state => ({
    user: state.login.user
});

export default connect(mapStateToProps)(HomePage);