import { View, StyleSheet, StatusBar } from 'react-native';
import React from 'react';

const Layout = ({ children }) => {
    return <View style={styles.container}>
        <StatusBar backgroundColor="#822f3a"/>
        {children}</View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#822f3a",
        padding: 20,
        flex: 1,
        alignItems: 'center',

    },
});
export default Layout