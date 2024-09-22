import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';

const CarrinhoScreen = ({ carrinho, goToScreen, limparCarrinho, removerDoCarrinho, goBack }) => {
  const handleRemove = (item) => {
    Alert.alert(
      'Remover Item',
      `Você deseja remover ${item.nome} do carrinho?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Remover',
          onPress: () => {
            removerDoCarrinho(item);
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/MeuBemPudimLogoSemFundo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Carrinho</Text>
      {carrinho.length > 0 ? (
        carrinho.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Text style={styles.item}>{item.nome} - R$ {item.preco}</Text>
            <TouchableOpacity style={styles.removeButton} onPress={() => handleRemove(item)}>
              <Text style={styles.buttonText}>Remover</Text>
            </TouchableOpacity>
          </View>
        ))
      ) : (
        <Text style={styles.text}>Seu carrinho está vazio.</Text>
      )}
      <TouchableOpacity style={styles.button} onPress={limparCarrinho}>
        <Text style={styles.buttonText}>Limpar Carrinho</Text>
      </TouchableOpacity>
      {carrinho.length > 0 && (
        <TouchableOpacity style={styles.button} onPress={() => goToScreen('Pagamento')}>
          <Text style={styles.buttonText}>Realizar Pagamento</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity style={styles.button} onPress={goBack}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  logo: { width: 200, height: 200,  alignSelf: 'center', marginBottom: 20 },
  title: { color: '#333', fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  itemContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  item: { color: '#333', fontSize: 18 },
  text: { color: '#333', fontSize: 18, marginBottom: 10, color: 'grey' },
  button: { backgroundColor: '#FFD700', padding: 15, borderRadius: 30, marginTop: 20, alignItems: 'center' },
  removeButton: { backgroundColor: '#FF6347', padding: 5, borderRadius: 15 },
  buttonText: { fontSize: 16, color: '#333' },
});

export default CarrinhoScreen;
