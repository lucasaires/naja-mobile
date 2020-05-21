import React, { useState } from 'react';
import { View, Image, StatusBar } from 'react-native';
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
  const [focused, setFocused] = useState(false);

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
      navigation.navigate('Home', { token: user.data.token });
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#4ABDAC" />
      <View style={styles.header}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.bemVindo}> BEM-VINDO </Text>
      </View>
      <View style={styles.body}>
        <TextInput
          selectionColor="#F7B733"
          underlineColor="#F7B733"
          style={focused ? styles.inputFocus : styles.input}
          defaultValue={key}
          onChangeText={(texto) => setKey(texto)}
          placeholder="Key..."
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <Text style={styles.info}>
          Caso seja seu primeiro login informe a chave de acesso.
        </Text>
        <GoogleSigninButton disabled={load} onPress={() => signIn()} style={styles.googleButton} />
        <ActivityIndicator animating={load} color="#F7B733" />
      </View>
    </View>
  );
}
