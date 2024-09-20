import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HomeScreen from './HomeScreen';
import PagamentosScreen from './PagamentosScreen';
import PedidosScreen from './PedidosScreen';

const App: React.FC = () => {
  const [screen, setScreen] = useState('Home');


  const renderScreen = () => {
    switch (screen) {
      case 'Home':
        return <HomeScreen goToScreen={setScreen} />;
      case 'Pagamentos':
        return <PagamentosScreen goToScreen={setScreen} />;
      case 'Pedidos':
        return <PedidosScreen goToScreen={setScreen} />;
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
