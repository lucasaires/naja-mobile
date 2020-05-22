import React, { AsyncStorage, useState, useEffect } from 'react';
import {
  Text, Card, TextInput, Portal,
} from 'react-native-paper';
import { Button, Icon } from 'native-base';
import api from '../../../../config/api';

import styles from './styles';

import Confirm from '../Confirm';

export default function Produto({
  produto, token, removeProduto,
}) {
  const [quantidade, setQuantidade] = useState(produto.quantity);
  const [visibleConfirm, setVisibleConfirm] = useState(false);

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

  function onPressConfirm() {
    removeProduto(produto);
    setVisibleConfirm(false);
  }

  function onPressCancel() {
    setVisibleConfirm(false);
  }

  return (
    <>
      <Portal>
        <Confirm
          visible={visibleConfirm}
          onPressConfirm={onPressConfirm}
          onPressCancel={onPressCancel}
          produto={produto}
        />
      </Portal>
      <Card>
        <Card.Title title={produto.name} />
        <Card.Cover
          resizeMode="center"
          source={{ uri: `https://controlenaja.herokuapp.com/image/${produto.product_code}` }}
        />
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

          <Button
            onPress={() => setVisibleConfirm(true)}
            style={styles.btnDelete}
          >
            <Icon name="trash" />
          </Button>
        </Card.Content>
      </Card>
    </>
  );
}
