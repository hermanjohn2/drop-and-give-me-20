import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { componentSelectionOptions as dropdownOptions } from '../../config/componentSelectionOptions';
import { SelectedComponent, ShowDropdown } from '../../typesConfig/stateTypes';
import styles from './styles';

type Props = {
  setSelectedComponent: (component: SelectedComponent) => void;
};

const Header: React.FC<Props> = ({ setSelectedComponent }) => {
  const [showDropdown, setShowDropdown] = useState<ShowDropdown>(false);

  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDropdownSelection = (component: SelectedComponent) => {
    setSelectedComponent(component);
    handleToggleDropdown();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.settingsIcon} onPress={handleToggleDropdown}>
        <Ionicons name='settings-outline' size={24} color='#fff' />
      </TouchableOpacity>
      {showDropdown && (
        <View style={styles.dropdown}>
          {dropdownOptions.map(({ iconName, selection, text }) => (
            <TouchableOpacity
              key={`header-dropdown-option-${selection}`}
              style={styles.dropdownItem}
              onPress={() => handleDropdownSelection(selection)}
            >
              <Ionicons name={iconName} size={20} color='#fff' style={styles.dropdownIcon} />
              <Text style={styles.dropdownItemText}>{text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default Header;
