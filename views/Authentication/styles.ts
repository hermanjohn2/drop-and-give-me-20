import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222'
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFF'
  },
  button: {
    backgroundColor: '#4286f4',
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF'
  }
});

export default styles;
