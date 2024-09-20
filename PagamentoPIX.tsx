import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image } from 'react-native';

const PagamentoPIX = ({ goToScreen, carrinho, cliente, finalizarPedido }) => {
  const totalValue = carrinho.reduce((total, item) => total + item.preco, 0);

  const handleFinalizarPedido = () => {
    const detalhesPedido = carrinho.map(item => `${item.nome} - R$ ${item.preco}`).join('\n');
    const mensagem = `Pedido realizado com sucesso!\n\nDetalhes do pedido:\n${detalhesPedido}\n\nValor Total: R$ ${totalValue.toFixed(2)}\n\nDados do cliente:\nNome: ${cliente.nome}\nEndereço: ${cliente.endereco}\nData: ${new Date().toLocaleDateString()}\n\nPor favor, envie o comprovante de pagamento.`;

    const whatsappNumber = '+5581985007186';
    Linking.openURL(`whatsapp://send?text=${encodeURIComponent(mensagem)}&phone=${whatsappNumber}`);

    finalizarPedido();
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/MeuBemPudimLogoSemFundo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Pagamento via PIX</Text>
      <Text style={styles.text}>Por favor, transfira o valor de:</Text>
      <Text style={styles.total}>R$ {totalValue.toFixed(2)}</Text>
      <Text style={styles.text}>Para os dados abaixo:</Text>
      <Text style={styles.text}>Nome: Eliab Arruda da Silva</Text>
      <Text style={styles.text}>PIX: eliabad20t@gmail.com</Text>

      <TouchableOpacity style={styles.button} onPress={handleFinalizarPedido}>
        <Text style={styles.buttonText}>Finalizar Pedido</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => goToScreen('Pagamento')}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  logo: { width: '100%', height: 100, marginBottom: 20 },
  title: { color: '#333', fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  text: { color: '#333', fontSize: 18, marginBottom: 20 },
  total: { color: 'red', fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  button: { backgroundColor: '#FFD700', padding: 15, borderRadius: 30, marginTop: 10 },
  buttonText: { color: '#333', fontSize: 18, fontWeight: 'bold' },
});

export default PagamentoPIX;
