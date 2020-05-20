import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
// const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },

  header: {
    width,
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4ABDAC',
  },

  body: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },

  titulo: {
    fontSize: 22,
    color: '#000',
  },

  bemVindo: {
    marginTop: 100,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF',
    fontSize: 32,
  },
  inputFocus: {
    marginTop: 20,
    height: 40,
    width: 300,
    borderRadius: 0,
    backgroundColor: '#F7B733',
  },
  input: {
    marginTop: 20,
    height: 40,
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 0,
  },

  info: {
    fontSize: 12,
    color: '#DFDCE3',
    marginTop: 5,
  },

  googleButton: {
    width: 300,
    height: 60,
    marginTop: 30,
    marginBottom: 0,
  },
  logo: {
    width: 150,
    height: 150,
  },

});

export default styles;
