import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationType } from '../../typesConfig/NavigationTypes';

interface Props {
  navigation: NavigationType;
}

const Error: React.FC<Props> = ({ navigation }) => {
  const handleClearUser = async () => {
    try {
      await AsyncStorage.removeItem('user');
      navigation.navigate('auth');
    } catch (error) {
      console.log('Error clearing user:', error);
    }
  };

  return (
    <>
      <Text>Something went wrong with your account... Let's try again!</Text>
      <TouchableOpacity onPress={handleClearUser}>
        <Text>Logout & Reset</Text>
      </TouchableOpacity>
    </>
  );
};

export default Error;
