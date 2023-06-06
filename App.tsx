import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AuthenticationView from './views/Authentication';
import UserFormView from './views/UserForm';
import DashboardView from './views/Dashboard';

const Stack = createNativeStackNavigator();

const App: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='auth'>
      <Stack.Screen name='auth' component={AuthenticationView} />
      <Stack.Screen name='userForm' component={UserFormView} />
      <Stack.Screen name='dashboard' component={DashboardView} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
