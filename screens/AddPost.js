import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    ScrollView,
    TextInput
} from "react-native";

async addPost() {
    const auth = getAuth();
    const userId = auth.currentUser.uid;

    if (this.state.caption) {
        let postData = {
            preview_image: this.state.previewImage,
            caption: this.state.caption,
            author: auth.currentUser.displayName,
            created_on: new Date(),
            author_uid: userId,
            profile_image: this.state.profile_image,
            likes: 0,

            const dbRef = ref(db, '/posts/' + Math.random().toString(36).slice(2));

            set(dbRef, postData);
    
    this.props.setUpdateToTrue();
            this.props.navigation.navigate('Feed');
        } else {
            Alert.alert(
                'Error',
                'All fields are required!',
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                { cancelable: false }

            );

        constructor(props) {
            super(props);
            this.state = {
                light_theme: true,
                post_id: this.props.post.key,
                post_data: this.props.post.value
            };
        }