import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { componentSelectionOptions as dropdownOptions } from '../../config/componentSelectionOptions';
import { SelectedComponent, ShowDropdown } from '../../typesConfig/stateTypes';

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

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 999
  },
  settingsIcon: {
    padding: 10
  },
  dropdown: {
    position: 'absolute',
    top: 40,
    right: 0,
    backgroundColor: '#333',
    borderRadius: 5,
    padding: 10,
    width: 150
  },
  dropdownItem: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  dropdownItemText: {
    color: '#fff',
    fontSize: 16
  },
  dropdownIcon: {
    marginRight: 10
  }
});

export default Header;
