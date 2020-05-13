import React from 'react';
import { Text, View, TextInput } from 'react-native';
import {
  GoogleSigninButton,
} from '@react-native-community/google-signin';
import styles from './styles';

export default function Login() {
  function handleLogin() {
    console.log('foi sim');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Naja Eletrônicos</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bemVindo}>
          Bem-vindo realize seu login usando sua conta Google.
        </Text>
        <TextInput style={styles.input} placeholder="Key..." />
        <Text style={styles.info}>
          Caso seja seu primeiro login informe a chave de acesso.
        </Text>
        <GoogleSigninButton onPress={() => handleLogin()} style={styles.googleButton} />
      </View>
    </View>
  );
}
