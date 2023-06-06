import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationType } from '../../typesConfig/NavigationTypes';
import handleClearUser from '../../utils/handleClearUser';

interface Props {
  navigation: NavigationType;
}

const Error: React.FC<Props> = ({ navigation }) => (
  <>
    <Text>Something went wrong with your account... Let's try again!</Text>
    <TouchableOpacity onPress={() => handleClearUser(navigation)}>
      <Text>Reset Account</Text>
    </TouchableOpacity>
  </>
);

export default Error;
