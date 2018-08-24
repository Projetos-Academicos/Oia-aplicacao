import firebase from 'firebase';

export const tryRegister = ({email, password}) => dispatch => {
    return firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
}