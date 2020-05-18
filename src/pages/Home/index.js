import React, { useState, useEffect } from 'react';
import {
  FlatList, StatusBar, View, SafeAreaView,
} from 'react-native';
import {
  DefaultTheme, List, Provider as PaperProvider, Appbar, Text, FAB,
} from 'react-native-paper';
import styles from './styles';
import api from '../../config/api';

import Produto from './components/Produto';

export default function Home({ navigation }) {
  const [products, setProducts] = useState([]);
  const [categoria, setCategoria] = useState('all');
  const [expandedList, setExpandedList] = useState(false);
  const [categoriaNome, setCategoriaNome] = useState('Todos');

  const { token } = navigation.state.params;

  const loadProducts = async () => {
    const response = await api({
      method: 'GET',
      url: `/product/${categoria}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const productsLoaded = response.data;

    setProducts(productsLoaded);
  };

  useEffect(() => {
    loadProducts();
  }, [categoria]);

  useEffect(() => {

  }, []);

  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#40D7BC',
      accent: '#40D7BC',
    },
  };

  return (
    <PaperProvider theme={theme}>
      <StatusBar
        backgroundColor="#40D7BC"
      />
      <Appbar style={styles.toolbar}>
        <Text style={styles.cabecalho}>Catálogo</Text>
      </Appbar>
      <View style={styles.listContainer}>
        <List.Section style={styles.inputCategoria}>
          <List.Accordion
            title="Categoria"
            description={categoriaNome}
            expanded={expandedList}
            onPress={() => setExpandedList(!expandedList)}
            left={(props) => <List.Icon {...props} icon="dots-vertical" />}
          >
            <List.Item
              title="Todos"
              onPress={() => {
                setCategoria('all');
                setCategoriaNome('Todos');
                setExpandedList(false);
              }}
            />
            <List.Item
              title="Celulares"
              onPress={() => {
                setCategoria('celular');
                setCategoriaNome('Celulares');
                setExpandedList(false);
              }}
            />
            <List.Item
              title="Eletrodomesticos"
              onPress={() => {
                setCategoria('eletrodomestico');
                setCategoriaNome('Eletrodomesticos');
                setExpandedList(false);
              }}
            />
            <List.Item
              title="Tv's"
              onPress={() => {
                setCategoria('tv');
                setCategoriaNome('Tvs');
                setExpandedList(false);
              }}
            />
            <List.Item
              title="Videogames"
              onPress={() => {
                setCategoria('videogame');
                setCategoriaNome('Videogames');
                setExpandedList(false);
              }}
            />
          </List.Accordion>
        </List.Section>
        <SafeAreaView>
          <FlatList
            data={products}
            keyExtractor={(item) => item.product_code.toString()}
            renderItem={({ item }) => (
              <Produto
                id={item.product_code}
                produto={item}
                token={token}
              />
            )}
          />
        </SafeAreaView>
        <FAB icon="plus" style={styles.fab} onPress={() => console.log('pressed')} />
      </View>
    </PaperProvider>
  );
}
