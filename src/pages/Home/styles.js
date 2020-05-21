import { StyleSheet } from 'react-native';
import { Left } from 'native-base';

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  toolbar: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cabecalho: {
    color: '#DFDCE3',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
  inputCategoria: {
    marginTop: 10,
  },
  listContainer: {
    paddingBottom: 100,
    backgroundColor: '#FFF',
    flex: 1,
  },

  buttonOut: {
    backgroundColor:'#4ABDAC',
    textAlign: 'ritgh',
  }
});

export default styles;
