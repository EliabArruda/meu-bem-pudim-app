import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

const PedidosRealizados = ({ pedidos, goToHome }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/MeuBemPudimLogoSemFundo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Pedidos Realizados</Text>
      <ScrollView>
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
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={goToHome}>
        <Text style={styles.buttonText}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  logo: { width: 200, height: 200, resizeMode: 'contain', alignSelf: 'center', marginBottom: 20 },
  title: { alignSelf: 'center', color: '#333', fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  pedidoContainer: { marginBottom: 20 },
  pedido: { color: 'green', fontSize: 18, fontWeight: 'bold' },
  item: { color: '#333', fontSize: 16, marginLeft: 10 },
  total: { color: 'blue', fontSize: 18, fontWeight: 'bold', marginTop: 5 },
  cliente: { color: '#333', fontSize: 16, marginTop: 5 },
  text: { alignSelf: 'center', color: 'grey', fontSize: 18, marginBottom: 10 },
  button: { alignSelf: 'center', backgroundColor: '#FFD700', padding: 15, borderRadius: 30, marginTop: 20 },
  buttonText: { fontSize: 16, fontWeight: 'bold', color: '#333' },
});

export default PedidosRealizados;
