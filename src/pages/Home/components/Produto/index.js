import React, { useState, useEffect } from 'react';
import { Text, Card, TextInput } from 'react-native-paper';
import api from '../../../../config/api';

import styles from './styles';

export default function Produto({ produto, token }) {
  const [quantidade, setQuantidade] = useState(produto.quantity);

  async function updateProduto() {
    const response = await api.put(
      `/product/${produto.product_code}`,
      { quantity: quantidade }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    produto = response.data;
    setQuantidade(produto.quantity);
    console.log(quantidade, produto);
  }

  useEffect(() => {
  }, [quantidade]);

  function setColor() {
    if (quantidade === 0) return '#FC4A1A';
    if (quantidade <= 10) return '#F7B733';
    return '#FFF';
  }

  return (
    <Card>
      <Card.Title title={produto.name} />
      <Card.Cover source={{ uri: `https://controlenaja.herokuapp.com/image/${produto.product_code}` }} />
      <Card.Content style={styles.cardInfos}>
        <Text style={styles.preco}>
          Preço: R$
          {produto.price}
        </Text>
        <Text
          style={styles.textQuantidade}
        >
          Quantidade:
        </Text>
        <TextInput
          label="Quantidade"
          style={styles.quantidade}
          keyboardType="numeric"
          backgroundColor={setColor()}
          defaultValue={quantidade.toString()}
          onChangeText={(qtd) => setQuantidade(qtd)}
          onBlur={() => updateProduto()}
        />
      </Card.Content>
    </Card>
  );
}
