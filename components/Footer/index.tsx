import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { SelectedComponent } from '../../typesConfig/stateTypes';
import { componentSelectionOptions } from '../../config/componentSelectionOptions';
import styles from './styles';

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

export default Footer;
