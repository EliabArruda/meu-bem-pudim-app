import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';

const produtos = [
  { nome: 'Pudim de 500ml', preco: 40 },
  { nome: 'Pudim de 1,1Kg', preco: 60 },
  { nome: 'Kit de 10 mini pudins', preco: 70 },
  { nome: 'Kit de 5 mini pudins', preco: 40 },
  { nome: 'Kit de 20 mini pudins', preco: 130 },
];

const PedidosScreen = ({ goToScreen, adicionarAoCarrinho, goBack }) => {
  const handleAddToCart = (item) => {
    Alert.alert(
      'Adicionar ao Carrinho',
      `Você deseja adicionar ${item.nome} ao carrinho?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () => {
            adicionarAoCarrinho(item);
            Alert.alert('Sucesso', `${item.nome} foi adicionado ao carrinho!`);
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/MeuBemPudimLogoSemFundo.png')} style={styles.logo} />
      <Text style={styles.title}>Escolha seu Pudim</Text>
      {produtos.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <Text style={styles.itemText}>
            {item.nome} - R$ {item.preco}
          </Text>
          <TouchableOpacity style={styles.button} onPress={() => handleAddToCart(item)}>
            <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity style={styles.button} onPress={() => goToScreen('Carrinho')}>
        <Text style={styles.buttonText}>Ver Carrinho</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goBack}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  logo: { width: 100, height: 100, alignSelf: 'center', marginBottom: 0 },
  title: { color: '#333', fontSize: 28, alignSelf: 'center', fontWeight: 'bold', marginBottom: 10, marginTop: -10 },
  itemContainer: { marginBottom: 10 },
  itemText: { alignSelf: 'left',color: '#333', fontSize: 18 },
  button: { alignSelf: 'left',backgroundColor: '#FFD700', padding: 10, borderRadius: 30, marginTop: 10 },
  buttonText: { fontSize: 16, color: '#333' },
});

export default PedidosScreen;
