import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationType } from '../../typesConfig/NavigationTypes';

type Props = {
  navigation: NavigationType;
};

const UserForm: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');

  const handleFormSubmit = async () => {
    if (name) {
      const newUser = { name, height, weight, age };
      try {
        await AsyncStorage.setItem('user', JSON.stringify(newUser));
        navigation.navigate('dashboard');
      } catch (error) {
        console.log('Error saving user:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>User Form</Text>
      <TextInput style={styles.input} placeholder='Name' value={name} onChangeText={setName} />
      <TextInput
        style={styles.input}
        placeholder='Height'
        value={height}
        onChangeText={setHeight}
      />
      <TextInput
        style={styles.input}
        placeholder='Weight'
        value={weight}
        onChangeText={setWeight}
      />
      <TextInput style={styles.input} placeholder='Age' value={age} onChangeText={setAge} />
      <TouchableOpacity style={styles.button} onPress={handleFormSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '80%'
  },
  button: {
    backgroundColor: '#4286f4',
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 16,
    color: '#fff'
  }
});

export default UserForm;
