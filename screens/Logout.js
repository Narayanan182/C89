import React, { Component } from 'react';
import { Text, View } from 'react-native';

toggleSwitch() 
    const previous_state = this.state.isEnabled;
    const theme = !this.state.isEnabled ? 'dark' : 'light';

    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
        var updates = {};
        updates['user/' + user.id + '/current_theme'] = theme;

        const dbRef = ref(db, '/');
        update(dbRef, updates);
        this.setState({ isEnabled: !previous_state, light_theme: previous_state });
    }
