import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const PagamentoScreen = ({ goToScreen }) => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/MeuBemPudimLogoSemFundo.png')} style={styles.logo} />
      <Text style={styles.title}>Pagamento</Text>
      <Text style={styles.text}>Escolha a forma de pagamento:</Text>
      <TouchableOpacity style={styles.button} onPress={() => goToScreen('PagamentoPIX')}>
        <Text style={styles.buttonText}>Pagar via PIX</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => goToScreen('PagamentoEntrega')}>
        <Text style={styles.buttonText}>Pagar na Entrega</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => goToScreen('Carrinho')}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  logo: { width: 100, height: 100, alignSelf: 'center', marginBottom: 20 },
  title: { color: '#333', fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  text: { color: '#333', fontSize: 18, marginBottom: 20 },
  button: { backgroundColor: '#FFD700', padding: 15, borderRadius: 30, marginTop: 10 },
  buttonText: { color: '#333', fontSize: 18, fontWeight: 'bold' },
});

export default PagamentoScreen;
