import AsyncStorage from '@react-native-community/async-storage';


export const login = async (token) => {
  await AsyncStorage.setItem('@TOKEN', token);
};

export const logout = async () => {
  await AsyncStorage.clear();
};

export const getToken = async () => {
  const token = await AsyncStorage.getItem('@TOKEN');
  return token;
};
