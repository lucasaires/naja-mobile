import React, { useState, useEffect } from 'react';
import { Container, Header, Body, Title, Right, Button, Icon, 
  Left, Content, Form, Item, Label, Input } from "native-base";
import {View} from 'react-native';
import {Text} from 'react-native-paper';

import styles from './styles';
import api from '../../config/api';
import { color } from 'react-native-reanimated';

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
    <Container >

    <Header style={{backgroundColor: "#4ABDAC"}}>
    <Left>
      <Button transparent onPress={() => navigation.navigate('Home', { token })}>
        <Icon name="arrow-back" />
      </Button>
    </Left>
    <Body>
      <Title >Cadastar Produto</Title>
    </Body>
  
  </Header>

  <Content>
  <Form>
            <Item floatingLabel>
              <Label>Código:</Label>
              <Input defaultValue={code} onChangeText={(text) => setCode(text)}/>
            </Item>

            <Item floatingLabel>
              <Label>Nome:</Label>
              <Input defaultValue={nome} onChangeText={(text) => setNome(text)}/>
            </Item>

            <Item floatingLabel>
              <Label>Categoria:</Label>
              <Input defaultValue={categoria} onChangeText={(text) => setCategoria(text)}/>
            </Item>

            <Item floatingLabel>
              <Label>Preço:</Label>
              <Input textContentType ={Number} defaultValue={preco} onChangeText={(text) => setPreco(text)} />
            </Item>

            <Item floatingLabel>
              <Label>Quantidade:</Label>
              <Input textContentType ={Number} defaultValue={quantidade} onChangeText={(text) => setQuantidade(text)}/>
            </Item>
            
            <Item floatingLabel last>
              <Label>Imagem</Label>
              <Input />
            </Item>
          </Form>
        </Content>

        <View >

        <Button full success >
            <Text>Cadastrar</Text>
        </Button>

      </View>   

    </Container>

  );
}
