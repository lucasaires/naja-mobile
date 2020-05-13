import React, { Component } from 'react';
import { Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import api from '../../config/api'

export default class Home extends Component {
    static navigationOption = {
        title : "NajaStore"
    };


    state = {
        products : [],
    };

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/product/:category')
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

    return (
        <View> 
            <Text> Pagina Home </Text>
            <FlatList 
                data={this.state.products}
                keyExtractor = {item => item.product_code}
                renderItem={this.renderItem}
            /> 
        </View>


    );
    }
} 
