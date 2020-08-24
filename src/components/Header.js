import React, { useEffect, useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Header(props){
    const title = "Todo App"
    
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        backgroundColor: '#3e91c2',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    text: {
        fontSize: 21,
        color: '#fff',
        padding: 10,
    }
})