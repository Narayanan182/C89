import React, { Component } from 'react';
import { Alert, Text, View } from 'react-native';

createUserWithEmailAndPassword()
registerUser = (email, password, confirmPassword, first_name, last_name) => {
    if (password == confirmPassword) {
        constAuth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                Alert.alert('User Regirstered!');
            })
            .catch((error) => {
                Alert.alert(error.message);
            });
    } else {
        Alert.alert("passwords don't match!");
    }
}


signInWithEmailAndPassword()
signIn = async (email, password) => {
    constAuth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            this.props.navigation.replace('Dashboard');
        })
        .catch((error) => {
            Alert.alert(error.message);
        });
}
