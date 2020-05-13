import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-community/google-signin';

import api from '../../config/api';

import styles from './styles';

export default function Login() {
  const [key, setKey] = useState('');

  GoogleSignin.configure({
    webClientId: '930287943905-pfin76osh7e8jt4oomji5bcnpvro0sfk.apps.googleusercontent.com',
  });

  const signIn = async () => {
    try {
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

      console.log(user.data, key);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Naja Eletrônicos</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bemVindo}>
          Bem-vindo realize seu login usando sua conta Google.
        </Text>
        <TextInput
          defaultValue={key}
          onChangeText={(texto) => setKey(texto)}
          style={styles.input}
          placeholder="Key..."
        />
        <Text style={styles.info}>
          Caso seja seu primeiro login informe a chave de acesso.
        </Text>
        <GoogleSigninButton onPress={() => signIn()} style={styles.googleButton} />
      </View>
    </View>
  );
}
