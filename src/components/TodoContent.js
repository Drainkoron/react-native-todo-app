import React, { useEffect, useReducer, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, CheckBox, TouchableOpacity } from 'react-native';
import { Context } from '../Context'
export function TodoContent(props){
    const { Reducer } = useContext(Context)
    const [listState, listDispatch] = useReducer(Reducer.TotoListReducer, [])
    const [inpState, inpDispatch] = useReducer(Reducer.InputReducer, '')

    const inputChange = (value) => {
        inpDispatch({
            type:'change',
            payload:value
        })
    }

    const addTodo = () => {
        if(inpState.length === 0)
            return
    
        listDispatch({
            type:'add',
            payload:inpState
        })
            
        inpDispatch({
            type:'change',
            payload:''
        })
    }

    const checkboxToggle = (id) => {
        listDispatch({
            type:'toggle',
            payload:id
        })
    }

    const textStyle = (isComplited) => {
        if(isComplited)
            return {
                ...styles.itemText, 
                textDecorationLine:'line-through',
                color: '#727272'
            }
        return {...styles.itemText}
    }

    return(
        <View style={styles.mainContainer}>
            <View style={styles.addItemsContainer}>
                <TextInput placeholder='Todo title' style={styles.input} value={inpState.toString()} onChangeText={value => inputChange(value)}></TextInput>
                <Button style={styles.button} onPress={() => addTodo()} title='Add' />  
            </View>
            <ScrollView style={styles.listContainer}>
                <View style={styles.listInnerContainer}>
                    {listState.map(todo => {
                        if(todo !== null){
                            return(
                                <TouchableOpacity 
                                    onPress={()=> {
                                        checkboxToggle(todo.id)
                                    }}
                                    key={todo.id}
                                >
                                    <View style={styles.item}>
                                        <CheckBox 
                                            value={todo.isComplited}
                                            disabled='true'
                                            tintColors={{ true: '#3e91c2', false: '#3e91c2' }}
                                        />
                                        <Text key={todo.id} style={textStyle(todo.isComplited)}>{todo.label}</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                        }
                    )}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    addItemsContainer: {
        paddingHorizontal: 30,
        marginVertical: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    mainContainer: {
        flex: 1,
    },
    input: {
        width: '80%',
        borderBottomColor: '#3e91c2',
        borderBottomWidth: 2,
        borderStyle: 'solid',
        paddingVertical: 0,
    },
    button: {
    },
    item: {
        borderRadius: 5,
        backgroundColor: '#fff',
        shadowColor: '#333',
        shadowRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 10,
        marginHorizontal: 30,
        flexDirection: 'row'
    },
    itemText: {
        fontSize: 18,
        color: '#000',
        flex: 1,
        width: 'auto',
        flexWrap: 'wrap',
    },
    listInnerContainer: {
        paddingVertical: 10
    },
    checkbox: {
    }
})