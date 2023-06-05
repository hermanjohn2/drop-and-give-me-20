import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationType } from '../../config/NavigationTypes';

type Props = {
  navigation: NavigationType;
};

type User = {
  age: Number;
  height: String;
  name: String;
  weight: Number;
};

const DashboardScreen: React.FC<Props> = ({ navigation }) => {
  const [user, setUser] = useState<User | null>(null);
  const handleClearUser = async () => {
    try {
      await AsyncStorage.removeItem('user');
      navigation.navigate('auth');
    } catch (error) {
      console.log('Error clearing user:', error);
    }
  };

  useEffect(() => {
    AsyncStorage.getItem('user').then(res => {
      if (res) {
        setUser(JSON.parse(res));
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.dashboardContainer}>
        {user ? (
          <>
            <Text style={styles.dashboardTitle}>{`Welcome, ${user.name}`}</Text>
            <TouchableOpacity style={styles.button} onPress={handleClearUser}>
              <Text style={styles.buttonText}>Clear User</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.dashboardTitle}>
              Something went wrong with your account... Let's try again!
            </Text>
            <TouchableOpacity style={styles.button} onPress={handleClearUser}>
              <Text style={styles.buttonText}>Clear User</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dashboardContainer: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 20,
    alignItems: 'center'
  },
  dashboardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#4286f4',
    padding: 10,
    borderRadius: 5,
    marginTop: 20
  },
  buttonText: {
    fontSize: 16,
    color: '#fff'
  }
});

export default DashboardScreen;
