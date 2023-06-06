import { StyleSheet } from 'react-native';

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

export default styles;
