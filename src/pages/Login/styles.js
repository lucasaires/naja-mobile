import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#5e5e6e',
  },

  header: {
    flex: 1.5,
    justifyContent: 'center',
  },

  body: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
  },

  titulo: {
    marginTop: 100,
    fontSize: 32,
    color: '#66ff33',
    fontWeight: 'bold',
  },

  bemVindo: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 16,
  },

  input: {
    padding: 10,
    marginTop: 20,
    height: 40,
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
  },

  info: {
    fontSize: 12,
    color: '#cecece',
    marginTop: 5,
  },

  googleButton: {
    width: 300,
    marginTop: 30,
  },
});

export default styles;
