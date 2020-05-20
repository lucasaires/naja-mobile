import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {

  },
  cardInfos: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  preco: {
    padding: 10,
    fontSize: 16,
    height: 60,
    textAlignVertical: 'center',
    flex: 1,
  },
  quantidade: {
    height: 60,
    fontSize: 16,
    fontWeight: 'bold',
    flex: 0.5,
  },
  textQuantidade: {
    height: 60,
    flex: 0.5,
    fontWeight: 'bold',
    fontSize: 12,
    textAlignVertical: 'center',
  },
  btnDelete: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#DFDCE3',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FC4A1A',
  },
});

export default styles;
