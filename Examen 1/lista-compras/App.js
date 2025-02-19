import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { CheckBox, Button } from '@rneui/themed';
import React, { useState } from 'react';

export default function App() {
  const [items, setItems] = useState([
    {id: 'checked1', title: 'Leche'},
  ]);

  const [checkedItems, setCheckedItems] = useState({
   checked1: false
  });

  const [newItem, setNewItem] = useState('');

  const handleCheck = (item) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      const newItemId = `checked${items.length + 1}`;
      setItems([{ id: newItemId, title: newItem }, ...items]);
      setCheckedItems((prevState) => ({
        ...prevState,
        [newItemId]: false,
      }));
      setNewItem('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.textTitle}>Lista de compras</Text>
      </View>
      <ScrollView style={styles.list}>
        {items.map((item) => (
          <CheckBox
            key={item.id}
            title={item.title}
            containerStyle={styles.CheckBox}
            checked={checkedItems[item.id]}
            onPress={() => handleCheck(item.id)}
          />
        ))}
      </ScrollView>
      <View style={styles.addelement}>
        <TextInput
          style={styles.input}
          placeholder="Escribe un producto para agregar"
          value={newItem}
          onChangeText={setNewItem}
        />
        <Button 
          color="#2ecc71" 
          title="Agregar" 
          onPress={handleAddItem}
          buttonStyle={styles.button} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    width: '100%',
    height: '10%',
    backgroundColor: '#2980b9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    marginTop: 30,
    fontWeight: 'bold',
    fontSize: 25,
  },
  list: {
    width: '100%',
    height: '83%',
  },
  addelement: {
    backgroundColor: '#ecf0f1',
    width: '100%',
    height: '7%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '70%',
    height: '100%',
    fontSize: 16,
    paddingLeft: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 20,
    marginBottom: 10,
  },
  CheckBox: {
    width: '95%',
    fontSize: 15,
    marginLeft: 10,
  },
  button: {
    borderRadius: 10,
    marginBottom: 10,
    marginRight: 4,
  },
});