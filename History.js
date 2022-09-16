import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';


export default function History({ route, navigation }) {
  
  const { history } = route.params;

  return (
    <View style={styles.maincontainer}>
      <Text style={styles.boldText}>History</Text>
      <FlatList style={styles.list}
        data={history}
        renderItem={({ item }) =>
          <Text>{item.key}</Text>}
      />
    </View>

  );

};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  }, 
  list: {    
    flex: 0.5,
    marginTop: 20,
    fontSize:16

  },
  boldText: {
    fontWeight: 'bold',
    marginTop:20, 
    fontSize: 20

  }
});