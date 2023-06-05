import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AuthenticationView from './views/Authentication';
import UserFormView from './views/UserForm';
import DashboardView from './views/Dashboard';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='auth'>
        <Stack.Screen name='auth' component={AuthenticationView} />
        <Stack.Screen name='userForm' component={UserFormView} />
        <Stack.Screen name='dashboard' component={DashboardView} />
      </Stack.Navigator>
    </NavigationContainer>
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
  }
});

export default App;
