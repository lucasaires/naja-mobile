import React, { useState, useEffect } from 'react';
import {
  FlatList, StatusBar, View, SafeAreaView,
} from 'react-native';
import {
  DefaultTheme, List, Provider as PaperProvider, Appbar, FAB,
} from 'react-native-paper';

import styles from './styles';
import api, { setToken } from '../../config/api';
import { logout } from '../../config/auth';

import Produto from './components/Produto';

export default function Home({ navigation }) {
  const [products, setProducts] = useState([]);
  const [categoria, setCategoria] = useState('all');
  const [expandedList, setExpandedList] = useState(false);
  const [categoriaNome, setCategoriaNome] = useState('Todos');

  const loadProducts = async () => {
    await setToken();
    const response = await api.get(`/product/${categoria}`);

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
      primary: '#4ABDAC',
      accent: '#4ABDAC',
    },
  };

  async function removeProduto(produto) {
    await api.delete(
      `product/${produto.product_code}`,
    );
    const newProducts = products.filter((item) => item !== produto);
    setProducts(newProducts);
  }

  return (
    <PaperProvider theme={theme}>

      <Appbar.Header>
        <StatusBar
          backgroundColor="#4ABDAC"
        />

        <Appbar.Content title="Catálogo" subtitle="NajaStore" color="#DFDCE3" style={styles.cabecalho} />
        <Appbar.Action
          icon="logout-variant"
          color="#FC4A1A"
          onPress={() => {
            navigation.navigate('Login');
            logout();
          }}
        />

      </Appbar.Header>

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
                removeProduto={removeProduto}
              />
            )}
          />
        </SafeAreaView>
        <FAB icon="plus" style={styles.fab} onPress={() => navigation.navigate('NewProduct')} />
      </View>
    </PaperProvider>
  );
}
