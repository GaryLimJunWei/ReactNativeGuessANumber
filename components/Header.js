import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import Colors from '../constants/colors';

/**
 * This props is taken from the Header title
 */
const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    header: {
        width : '100%',
        height : 90,
        padding: 36,
        backgroundColor : Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle : {
        color: 'black',
        fontSize: 18

    }
});

export default Header;