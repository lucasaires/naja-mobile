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
    fontWeight: 'bold',
    alignItems: 'center'

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
    color: '#DFDCE3',
    backgroundColor: '#4ABDAC'
  }
});

export default styles;
