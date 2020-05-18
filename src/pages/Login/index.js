import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { ActivityIndicator, Text, TextInput } from 'react-native-paper';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-community/google-signin';

import api from '../../config/api';

import Logo from '../../assets/naja.png';
import styles from './styles';

export default function Login({ navigation }) {
  const [key, setKey] = useState('');
  const [load, setLoad] = useState(false);

  GoogleSignin.configure({
    webClientId: '930287943905-pfin76osh7e8jt4oomji5bcnpvro0sfk.apps.googleusercontent.com',
  });

  const signIn = async () => {
    try {
      setLoad(true);
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signIn();

      const { accessToken } = await GoogleSignin.getTokens();

      const user = await api({
        method: 'POST',
        url: '/login',
        headers: {
          authorization: accessToken,
          access_key: key,
        },
      });

      setKey('');
      setLoad(false);
      console.log(accessToken);
      navigation.navigate('Home', { token: user.data.token });
      console.log(user.data, key);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.titulo}>Naja Eletrônicos</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bemVindo}>
          Bem-vindo realize seu login usando sua conta Google.
        </Text>
        <TextInput
          underlineColor="#40D7BC"
          style={styles.input}
          defaultValue={key}
          onChangeText={(texto) => setKey(texto)}
          placeholder="Key..."
        />
        <Text style={styles.info}>
          Caso seja seu primeiro login informe a chave de acesso.
        </Text>
        <GoogleSigninButton disabled={load} onPress={() => signIn()} style={styles.googleButton} />
        <ActivityIndicator animating={load} color="#fff" />
      </View>
    </View>
  );
}
