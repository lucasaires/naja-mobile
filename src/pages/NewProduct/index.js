import React, { useState, useEffect } from 'react';
import {
  Container, Header, Body, Title, Icon,
  Left, Content, Form, Item, Label, Input,
} from 'native-base';
import {
  View, StatusBar, Image, Platform,
} from 'react-native';
import { Text, Button } from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';

import styles from './styles';
import api from '../../config/api';
import imageOptions from '../../config/imagepicker';

export default function NovoProduto({ navigation }) {
  const [code, setCode] = useState(0);
  const [imagem, setImagem] = useState('');
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('');
  const [preco, setPreco] = useState(0);
  const [quantidade, setQuantidade] = useState(0);

  const { token } = navigation.state.params;

  async function createProduct() {
    const formData = new FormData();

    const photo = {
      name: imagem.fileName,
      type: imagem.type,
      uri: Platform.OS === 'android' ? imagem.uri : imagem.uri.replace('file://', ''),
    };

    formData.append('image', photo);
    formData.append('product_code', code);
    formData.append('name', nome);
    formData.append('category', categoria);
    formData.append('price', preco);
    formData.append('quantity', quantidade);

    console.log(photo, 'FORM', formData);

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        contentType: 'multipart/form-data',
      },
    };

    const response = await api.post(
      '/product', formData, config,
    );
    // const produto = response.data;
    console.log(response);
  }


  useEffect(() => {
  }, []);

  function handleImage() {
    ImagePicker.showImagePicker(imageOptions, (res) => {
      if (res.uri) setImagem(res);
    });
  }

  return (
    <Container>
      <Header style={{ backgroundColor: '#4ABDAC' }}>
        <StatusBar backgroundColor="#4ABDAC" />
        <Left>
          <Button transparent onPress={() => navigation.navigate('Home', { token })}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Cadastar Produto</Title>
        </Body>

      </Header>

      <Content>
        <Form>
          <Item>
            <Label>Código:</Label>
            <Input defaultValue={code} keyboardType="numeric" onChangeText={(text) => setCode(text)} />
          </Item>

          <Item>
            <Label>Nome:</Label>
            <Input defaultValue={nome} onChangeText={(text) => setNome(text)} />
          </Item>

          <Item>
            <Label>Categoria:</Label>
            <Input defaultValue={categoria} onChangeText={(text) => setCategoria(text)} />
          </Item>

          <Item>
            <Label>Preço:</Label>
            <Input
              textContentType={Number}
              keyboardType="number-pad"
              defaultValue={preco}
              onChangeText={(text) => setPreco(text)}
            />
          </Item>

          <Item>
            <Label>Quantidade:</Label>
            <Input
              keyboardType="number-pad"
              textContentType={Number}
              defaultValue={quantidade}
              onChangeText={(text) => setQuantidade(text)}
            />
          </Item>
          <Image source={imagem} style={styles.image} resizeMode="center" />
          <Button style={styles.btnImage} onPress={handleImage}>Escolha uma imagem</Button>
        </Form>
      </Content>

      <View>

        <Button onPress={() => createProduct()}>
          <Text>Cadastrar</Text>
        </Button>

      </View>

    </Container>

  );
}
