import React, { useState, useEffect } from 'react';
import {
  StatusBar, View, SafeAreaView, TextInput, Button,
} from 'react-native';
import {
  DefaultTheme, List, Provider as PaperProvider, Appbar, Text, FAB,
} from 'react-native-paper';

import styles from './styles';
import api from '../../config/api';

export default function NovoProduto({ navigation }) {
  const [code, setCode] = useState('');
  const [imagem, setImagem] = useState('');
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('');
  const [preco, setPreco] = useState(0);
  const [quantidade, setQuantidade] = useState(0);

  const { token } = navigation.state.params;

  async function createProduct() {
    const response = await api.post(
      '/product/',
      {
        product_code: code,
        image: imagem,
        name: nome,
        category: categoria,
        price: preco,
        quantity: quantidade,
      }, {

        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const produto = response.data;
    console.log(produto);
  }

  useEffect(() => {
  }, []);


  return (

    <View>
      <TextInput
        style={styles.containtInput}
        placeholder="Codigo do Produto"
        defaultValue={code}
        onChangeText={(text) => setCode(text)}
      />

      <TextInput
        style={styles.containtInput}
        placeholder="Nome do Produto"
        defaultValue={nome}
        onChangeText={(text) => setNome(text)}
      />

      <TextInput
        style={styles.containtInput}
        placeholder="Categoria"
        defaultValue={categoria}
        onChangeText={(text) => setCategoria(text)}
      />

      <TextInput
        style={styles.containtInput}
        placeholder="Preço"
        defaultValue={preco}
        onChangeText={(text) => setPreco(text)}
      />

      <TextInput
        style={styles.containtInput}
        placeholder="Quantidade"
        defaultValue={quantidade}
        onChangeText={(text) => setQuantidade(text)}
      />

      <View>
        <Button onPress={() => {}} title="Cadastrar Produto" />
      </View>
    </View>
  );
}
