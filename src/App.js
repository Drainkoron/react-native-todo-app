import React, { useEffect, useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components/Header'
import { TodoContent } from './components/TodoContent'
import Reducer from './RootReducer'
import { Context } from './Context'

export default function App() {
  return (
    <Context.Provider value={{
      Reducer
    }}>
      <View style={styles.container}>
        <Header />
        <TodoContent />
      </View>
    </Context.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});
