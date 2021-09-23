import * as React from 'react';
import { StyleSheet, Button, View, TextInput, ScrollView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text } from '../components/Themed';


export default class TabTwoScreen extends React.Component {
  render() {

    return (
        <ScrollView style={styles.container}>
      <View style={{ marginTop: 50 }}>
        
        <Text style={styles.title} >Registrate ahora!! </Text>

        <View style={styles.inputs}>
            <TextInput placeholder="Email"/>
        </View> 
        <View style={styles.inputs}>
            <TextInput placeholder="Nombre"/>
        </View> 
        <View style={styles.inputs}>
            <TextInput placeholder="Contraseña"/>
        </View> 
        <View>
            <Button title="Registrarse"/>
        </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
 inputs: {
     flex: 1,
    padding:0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
 },
  container: {
    flex: 1,
    padding: 35,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
