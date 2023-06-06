import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from '../../components/Header';
import ComponentSelector from './ComponentSelector';
import Footer from '../../components/Footer';

import { NavigationType } from '../../typesConfig/NavigationTypes';
import { User, SelectedComponent } from '../../typesConfig/stateTypes';
import styles from './styles';

type Props = {
  navigation: NavigationType;
};

const DashboardScreen: React.FC<Props> = ({ navigation }) => {
  const [user, setUser] = useState<User>(null);
  const [selectedComponent, setSelectedComponent] = useState<SelectedComponent>('overview');

  useEffect(() => {
    AsyncStorage.getItem('user').then(res => {
      if (res) {
        setUser(JSON.parse(res));
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <Header setSelectedComponent={setSelectedComponent} />

      <View style={styles.dashboardContainer}>
        <ComponentSelector user={user} component={selectedComponent} navigation={navigation} />
      </View>

      <Footer setSelectedComponent={setSelectedComponent} />
    </View>
  );
};

export default DashboardScreen;
