import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { SelectedComponent } from '../../typesConfig/stateTypes';
import { componentSelectionOptions } from '../../config/componentSelectionOptions';

type Props = {
  setSelectedComponent: (component: SelectedComponent) => void;
};

const Footer: React.FC<Props> = ({ setSelectedComponent }) => {
  const footerOptions = componentSelectionOptions.filter(
    ({ selection }) => selection !== 'settings'
  );

  return (
    <View style={styles.container}>
      {footerOptions.map(({ selection, iconName }) => (
        <TouchableOpacity
          key={`footer-option-${selection}`}
          style={styles.footerIcon}
          onPress={() => setSelectedComponent(selection)}
        >
          <Ionicons name={iconName} size={24} color='#fff' />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 100,
    backgroundColor: '#333'
  },
  footerIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Footer;
