import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationType } from '../typesConfig/NavigationTypes';

const handleClearUser = async (navigation: NavigationType) => {
  try {
    await AsyncStorage.removeItem('user');
    navigation.navigate('auth');
  } catch (error) {
    console.log('Error clearing user:', error);
  }
};

export default handleClearUser;
