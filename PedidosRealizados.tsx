import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const PedidosRealizados = ({ pedidos, goBack }) => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/MeuBemPudimLogoSemFundo.png')} style={styles.logo} />
      <Text style={styles.title}>Pedidos Realizados</Text>
      {pedidos.length > 0 ? (
        pedidos.map((pedido, index) => (
          <View key={index} style={styles.pedidoContainer}>
            <Text style={styles.pedido}>Pedido {index + 1}:</Text>
            {pedido.itens.map((item, itemIndex) => (
              <Text key={itemIndex} style={styles.item}>
                {item.nome} - R$ {item.preco.toFixed(2)}
              </Text>
            ))}
            <Text style={styles.total}>
              Total: R$ {pedido.total.toFixed(2)}
            </Text>
            <Text style={styles.cliente}>
              Cliente: {pedido.cliente.nome} - Endereço: {pedido.cliente.endereco}
            </Text>
          </View>
        ))
      ) : (
        <Text style={styles.text}>Nenhum pedido realizado ainda.</Text>
      )}
      <TouchableOpacity style={styles.button} onPress={goBack}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  logo: { width: 100, height: 100, alignSelf: 'center', marginBottom: 20 },
  title: { color: '#333', fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  pedidoContainer: { marginBottom: 20 },
  pedido: { color: 'green', fontSize: 18, fontWeight: 'bold' },
  item: { color: '#333', fontSize: 16, marginLeft: 10 },
  total: { color: 'blue', fontSize: 18, fontWeight: 'bold', marginTop: 5 },
  cliente: { color: '#333', fontSize: 16, marginTop: 5 },
  text: { color: '#333', fontSize: 18, marginBottom: 10, color: 'grey' },
  button: { backgroundColor: '#FFD700', padding: 15, borderRadius: 30, marginTop: 10 },
  buttonText: { color: '#333', fontSize: 18, fontWeight: 'bold' },
});

export default PedidosRealizados;
