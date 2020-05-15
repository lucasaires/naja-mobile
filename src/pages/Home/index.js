import React, { Component } from 'react';
import {StatusBar} from 'react-native';
import {DefaultTheme, Provider as PaperProvider, Appbar, Text, FAB} from 'react-native-paper'
import styles from './styles';
import api from '../../config/api'

export default class Home extends Component {
    static AppbarOption = {
        title : "NajaStore"
    };
  
    state = {
        products : [],
};

    componentDidMount(){
        this.loadProducts();
      
}

    loadProducts = async () => {

        const {navigation} = this.props
        const {token} = navigation.state.params

        const response = await api({
        method: 'GET',
        url: '/product/all',
        headers: {
        Authorization: `Bearer ${token}`
        }
    })
        console.log(response.data)
        const { products } = response.data; 

        this.setState([products]);
    };

    renderItem = ({item}) => (
        <View>
            <Text>{item.image}</Text>
            <Text>{item.name}</Text>
            <Text>{item.category}</Text>
            <Text>{item.price}</Text>
            <Text>{item.quantity}</Text>

            <TouchableOpacity onPress = {() =>{}}>
                <Text> Abrir</Text>
            </TouchableOpacity>

        </View>
    )

    render() {
    const theme = {
        ...DefaultTheme,
        roundness: 2,
        colors: {
            ...DefaultTheme.colors,
          primary: '#5e5e6e',
          accent: '#66ff33',
        },
        };

          return (
          <PaperProvider theme={theme}>
            <StatusBar
              backgroundColor="#363640"
            />
                <Appbar>
                   <Text>Catálogo</Text>
                </Appbar>
                  <Text> Pagina Home 2</Text>
            <FAB icon="plus"/>
            
          </PaperProvider>

    );
    }
} 
