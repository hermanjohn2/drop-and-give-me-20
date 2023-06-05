import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationType } from '../../config/NavigationTypes';

type Props = {
  navigation: NavigationType;
};

const Authentication: React.FC<Props> = ({ navigation }) => {
  const [user, setUser] = useState(null);

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
      <Text style={styles.text}>Hello World</Text>
      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Get Started</Text>
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
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
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

export default Authentication;
