import React, { useState, useEffect } from 'react';
import {
  Container, Header, Body, Title, Icon,
  Left, Content, Form, Item, Label, Input,
} from 'native-base';
import {
  View, StatusBar, Image, Platform,
} from 'react-native';
import { Text, Button, List } from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';

import styles from './styles';
import api from '../../config/api';
import imageOptions from '../../config/imagepicker';

export default function NovoProduto({ navigation }) {
  const [code, setCode] = useState(0);
  const [imagem, setImagem] = useState('');
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('');
  const [expandedList, setExpandedList] = useState(false);
  const [categoriaNome, setCategoriaNome] = useState('Todos');
  const [preco, setPreco] = useState(0);
  const [quantidade, setQuantidade] = useState(0);


  
  async function createProduct() {
    const formData = new FormData();

    const photo = {
      name: imagem.fileName,
      type: imagem.type,
      uri: Platform.OS === 'android' ? imagem.uri : imagem.uri.replace('file://', ''),
    };

    formData.append('image', photo);

    console.log(photo, 'FORM', formData);

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      }
    };


    await api.post('/product', {body: {'product_code' : code, 
    'name' : nome ,
    'category' : categoria,
    'price': preco,
    'quantity': quantidade,
    formData
    } 
    }, config).then((res) =>{
      console.log(res);
      alert('Produto Cadastrado!');
    }).catch(err =>{
      console.log(err);
    });


    
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
          <Button color="#DFDCE3" transparent onPress={() => navigation.navigate('Home')}>
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
            <Input 
            keyboardType="numeric" 
            onChangeText={(text) => setCode(Number(text))} 
            />
          </Item>

          <Item>
            <Label>Nome:</Label>
            <Input 
            defaultValue={nome} 
            onChangeText={(text) => setNome(text)} 
            />
          </Item>

          <Item>
            <Label>Preço:</Label>
            <Input
              keyboardType="number-pad"
              onChangeText={(text) => setPreco(Number(text))}
            />
          </Item>

          <Item>
            <Label>Quantidade:</Label>
            <Input
              keyboardType="number-pad"
              onChangeText={(text) => setQuantidade(Number(text))}
            />
          </Item>

          <View>

            <List.Section style={styles.inputCategoria}>
              <List.Accordion
                title="Categoria:"
                description={categoriaNome}
                expanded={expandedList}
                onPress={() => setExpandedList(!expandedList)}
              >
              
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
          </View>


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
