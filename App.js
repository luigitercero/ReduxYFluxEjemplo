import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Reducers from './src/reducers' ;
//import SuperHeroesList from './src/superHeroesList'
import TabBarList from './src/TabBarList'
export default class App extends React.Component {
  render() {
    return (

      <Provider store ={createStore(Reducers)}>
        <View style={{flex:1}}>
          <TabBarList/>
        </View>
      </Provider>
    
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
