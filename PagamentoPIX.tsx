import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image, Clipboard } from 'react-native';

const PagamentoPIX = ({ goToScreen, carrinho, cliente, finalizarPedido }) => {
  const totalValue = carrinho.reduce((total, item) => total + item.preco, 0);
  const chavePIX = "tayenem@gmail.com"; // Substitua pela sua chave PIX

  const handleFinalizarPedido = () => {
    const detalhesPedido = carrinho.map(item => `${item.nome} - R$ ${item.preco}`).join('\n');
    const mensagem = `Pedido realizado com sucesso!\n\nDetalhes do pedido:\n${detalhesPedido}\n\nValor Total: R$ ${totalValue.toFixed(2)}\n\nDados do cliente:\nNome: ${cliente.nome}\nEndereço: ${cliente.endereco}\nData: ${new Date().toLocaleDateString()}\n\nPor favor, envie o comprovante de pagamento.`;

    const whatsappNumber = '+558173043499';
    Linking.openURL(`whatsapp://send?text=${encodeURIComponent(mensagem)}&phone=${whatsappNumber}`);

    finalizarPedido();
  };

  const copyToClipboard = async () => {
    await Clipboard.setString(chavePIX);
    alert('Chave PIX copiada para a área de transferência!');
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
      <Text style={styles.text}>Nome: Tayene Trajano de Moura</Text>

      <TouchableOpacity onPress={copyToClipboard}>
        <Text style={styles.copyableText}>Chave PIX: {chavePIX}</Text>
      </TouchableOpacity>

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
  copyableText: { color: '#007BFF', fontSize: 18, marginBottom: 20, textDecorationLine: 'underline' },
});

export default PagamentoPIX;
