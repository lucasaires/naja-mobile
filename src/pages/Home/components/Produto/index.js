import React, { useState } from 'react';
import { Text, Card, TextInput } from 'react-native-paper';

export default function Produto({ produto }) {
  const [quantidade, setQuantidade] = useState(produto.quantity);

  return (
    <Card>
      <Card.Title title={produto.name} />
      <Card.Cover source={{ uri: `https://controlenaja.herokuapp.com/image/${produto.product_code}` }} />
      <Card.Content>
        <Text>
          Preço: R$
          {produto.price}
        </Text>
        <TextInput
          label="Quantidade"
          keyboardType="numeric"
          defaultValue={quantidade.toString()}
          onChangeText={(qtd) => setQuantidade(qtd)}
        />
      </Card.Content>
    </Card>
  );
}
