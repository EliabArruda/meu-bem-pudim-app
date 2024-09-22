import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './HomeScreen';
import PagamentoScreen from './PagamentoScreen';
import PagamentoPIX from './PagamentoPIX';
import PagamentoEntrega from './PagamentoEntrega';
import PedidosRealizados from './PedidosRealizados';
import PedidosScreen from './PedidosScreen';
import CarrinhoScreen from './CarrinhoScreen';
import DadosClienteScreen from './DadosClienteScreen';

const App: React.FC = () => {
  const [screen, setScreen] = useState('Home');
  const [carrinho, setCarrinho] = useState([]);
  const [pedidos, setPedidos] = useState([]);
  const [cliente, setCliente] = useState({ nome: '', endereco: '', telefone: '' });

  useEffect(() => {
    const loadData = async () => {
      try {
        const carrinhoData = await AsyncStorage.getItem('carrinho');
        const pedidosData = await AsyncStorage.getItem('pedidos');
        const clienteData = await AsyncStorage.getItem('cliente');
        if (carrinhoData) setCarrinho(JSON.parse(carrinhoData));
        if (pedidosData) setPedidos(JSON.parse(pedidosData));
        if (clienteData) setCliente(JSON.parse(clienteData));
      } catch (error) {
        console.error('Erro ao carregar os dados:', error);
      }
    };

    loadData();
  }, []);

  const saveData = async () => {
    try {
      await AsyncStorage.setItem('carrinho', JSON.stringify(carrinho));
      await AsyncStorage.setItem('pedidos', JSON.stringify(pedidos));
      await AsyncStorage.setItem('cliente', JSON.stringify(cliente));
    } catch (error) {
      console.error('Erro ao salvar os dados:', error);
    }
  };

  useEffect(() => {
    saveData();
  }, [carrinho, pedidos, cliente]);

  const adicionarAoCarrinho = (item) => {
    setCarrinho((prev) => [...prev, item]);
  };

  const removerDoCarrinho = (item) => {
    setCarrinho((prev) => prev.filter((i) => i.nome !== item.nome));
  };

  const limparCarrinho = () => {
    setCarrinho([]);
  };

  const limparPedidos = () => {
    setPedidos([]);
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
      if (prevScreen === 'PedidosRealizados') return 'Home';
      if (prevScreen === 'PagamentoPIX' || prevScreen === 'PagamentoEntrega') return 'Pagamento';
      if (prevScreen === 'Pedidos') return 'Home';
      return 'Home';
    });
  };

  const renderScreen = () => {
    switch (screen) {
      case 'Home':
        return <HomeScreen goToScreen={setScreen} />;
      case 'DadosCliente':
        return <DadosClienteScreen goToScreen={setScreen} setCliente={setCliente} cliente={cliente} />;
      case 'PedidosRealizados':
        return <PedidosRealizados pedidos={pedidos} goToHome={goBack} limparPedidos={limparPedidos} />;
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
