import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationType } from '../../typesConfig/NavigationTypes';
import styles from './styles';

type Props = {
  navigation: NavigationType;
};

const UserForm: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [displayWarning, setDisplayWarning] = useState<Boolean>(false);

  const handleFormSubmit = async () => {
    if (name) {
      const newUser = { name, height, weight, age };
      try {
        await AsyncStorage.setItem('user', JSON.stringify(newUser));
        navigation.navigate('dashboard');
      } catch (error) {
        console.log('Error saving user:', error);
      }
    } else {
      setName('');
      setDisplayWarning(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>New Account</Text>
      <TextInput
        style={displayWarning ? [styles.input, styles.warnedInput] : styles.input}
        placeholder='Name*'
        placeholderTextColor={displayWarning ? '#fff' : '#999'}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder='Height'
        placeholderTextColor={'#999'}
        value={height}
        onChangeText={setHeight}
      />
      <TextInput
        style={styles.input}
        placeholder='Weight'
        placeholderTextColor={'#999'}
        value={weight}
        onChangeText={setWeight}
      />
      <TextInput
        style={styles.input}
        placeholder='Age'
        placeholderTextColor={'#999'}
        value={age}
        onChangeText={setAge}
      />

      <Text style={styles.requiredText}>
        {displayWarning ? '* Denotes fields that must be filled out' : ''}
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.submitButton]} onPress={handleFormSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleFormSubmit}>
          <Text style={styles.buttonText} onPress={() => navigation.navigate('auth')}>
            Back
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserForm;
