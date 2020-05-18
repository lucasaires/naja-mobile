import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },

  header: {
    marginTop: 70,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  body: {
    marginTop: 120,
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
  },

  titulo: {
    fontSize: 32,
    color: '#40D7BC',
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
  logo: {
    width: 150,
    height: 150,
  },
});

export default styles;
