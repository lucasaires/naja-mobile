import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#40D7BC',
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
    color: '#FFF',
    fontWeight: 'bold',
  },

  bemVindo: {
    textAlign: 'center',
    color: '#000',
    fontSize: 16,
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
    color: '#ccc',
    marginTop: 5,
  },

  googleButton: {
    width: 300,
    height: 60,
    marginTop: 30,
    marginBottom: 10,
  },
});

export default styles;
