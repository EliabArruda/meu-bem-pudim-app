import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HomeScreen from './HomeScreen';
import PagamentoScreen from './PagamentoScreen';
import PagamentoPIX from './PagamentoPIX';
import PagamentoEntrega from './PagamentoEntrega';
import PedidosRealizados from './PedidosRealizados';
import PedidosScreen from './PedidosScreen';
import CarrinhoScreen from './CarrinhoScreen';

const App: React.FC = () => {
  const [screen, setScreen] = useState('Home');
  const [carrinho, setCarrinho] = useState([]);
  const [pedidos, setPedidos] = useState([]);
  const [cliente, setCliente] = useState({ nome: '', endereco: '' });

  const adicionarAoCarrinho = (item) => {
    setCarrinho((prev) => [...prev, item]);
  };

  const removerDoCarrinho = (item) => {
    setCarrinho((prev) => prev.filter((i) => i.nome !== item.nome));
  };

  const limparCarrinho = () => {
    setCarrinho([]);
  };

  const finalizarPedido = () => {
    const novoPedido = {
      itens: carrinho,
      cliente: cliente,
      total: carrinho.reduce((total, item) => total + item.preco, 0),
    };
    setPedidos((prev) => [...prev, novoPedido]);
    limparCarrinho();
    setScreen('PedidosRealizados');
  };

  const goBack = () => {
    setScreen((prevScreen) => {
      if (prevScreen === 'Carrinho') return 'Pedidos';
      if (prevScreen === 'PedidosRealizados') return 'Pedidos';
      if (prevScreen === 'PagamentoPIX' || prevScreen === 'PagamentoEntrega') return 'Pagamento';
      if (prevScreen === 'Pedidos') return 'Home'; // Voltar de Pedidos para Home
      return 'Home';
    });
  };

  const renderScreen = () => {
    switch (screen) {
      case 'Home':
        return <HomeScreen goToScreen={setScreen} />;
      case 'PedidosRealizados':
        return <PedidosRealizados pedidos={pedidos} goBack={goBack} />;
      case 'Pedidos':
        return <PedidosScreen goToScreen={setScreen} adicionarAoCarrinho={adicionarAoCarrinho} goBack={goBack} />;
      case 'Carrinho':
        return (
          <CarrinhoScreen
            carrinho={carrinho}
            goToScreen={setScreen}
            limparCarrinho={limparCarrinho}
            removerDoCarrinho={removerDoCarrinho}
            goBack={goBack}
          />
        );
      case 'Pagamento':
        return <PagamentoScreen goToScreen={setScreen} />;
      case 'PagamentoPIX':
        return (
          <PagamentoPIX
            goToScreen={setScreen}
            carrinho={carrinho}
            cliente={cliente}
            finalizarPedido={finalizarPedido}
          />
        );
      case 'PagamentoEntrega':
        return (
          <PagamentoEntrega
            goToScreen={setScreen}
            carrinho={carrinho}
            cliente={cliente}
            finalizarPedido={finalizarPedido}
          />
        );
      default:
        return <HomeScreen goToScreen={setScreen} />;
    }
  };

  return <View style={styles.container}>{renderScreen()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
