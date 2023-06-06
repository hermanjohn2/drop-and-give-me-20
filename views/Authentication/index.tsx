import React, { useEffect } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';
import { NavigationType } from '../../typesConfig/NavigationTypes';

type Props = {
  navigation: NavigationType;
};

const Authentication: React.FC<Props> = ({ navigation }) => {
  const retrieveUser = async () => {
    try {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        navigation.navigate('dashboard');
      } else {
        console.log('no user');
      }
    } catch (error) {
      console.log('Error retrieving user:', error);
    }
  };

  useEffect(() => {
    retrieveUser();
  }, []);

  const handleGetStarted = () => {
    navigation.navigate('userForm');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.text}>Let's get to work!</Text>
      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Authentication;
