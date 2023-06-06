import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222'
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFF'
  },
  input: {
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '80%',
    color: '#FFF',
    backgroundColor: '#333',
    placeholderTextColor: '#999'
  },
  warnedInput: {
    borderWidth: 2,
    borderColor: '#fff'
  },
  requiredText: {
    fontSize: 12,
    marginBottom: 10,
    color: '#FFF'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '80%'
    // paddingRight: 10
  },
  button: {
    backgroundColor: '#4286f4',
    padding: 10,
    borderRadius: 5,
    width: 100
    // marginHorizontal: 5
  },
  submitButton: {
    marginRight: 10
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center'
  }
});

export default styles;
