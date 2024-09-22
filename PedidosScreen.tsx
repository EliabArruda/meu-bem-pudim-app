import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert, Image } from 'react-native';

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
      {/* Logo da empresa */}
      <Image
        source={require('./assets/MeuBemPudimLogoSemFundo.png')}
        style={styles.logo}
      />

      <Text style={styles.title}>Escolha seu Pudim</Text>

      <ScrollView>
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
      </ScrollView>

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
  logo: { width: 200, height: 200, resizeMode: 'contain', alignSelf: 'center', marginBottom: 20 },
  title: { color: '#333', fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  itemContainer: { marginBottom: 20 },
  itemText: { color: '#333', fontSize: 18 },
  button: { backgroundColor: '#FFD700', padding: 10, borderRadius: 30, marginTop: 10 },
  buttonText: { fontSize: 16, color: '#333' },
});

export default PedidosScreen;
