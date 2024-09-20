import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

interface HomeScreenProps {
  goToScreen: (screen: string) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ goToScreen }) => {
  return (
    <View style={styles.container}>
      {/* Adicionando a logo na parte superior */}
      <Image
        source={require('./assets/MeuBemPudimLogoSemFundo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => goToScreen('Pedidos')}>
          <Text style={styles.buttonText}>Fazer Pedido</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => goToScreen('PedidosRealizados')}>
          <Text style={styles.buttonText}>Ver Pedidos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '120%',
    height: 500,
    marginBottom: 1,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    padding: 15,
    backgroundColor: '#FFD700',
    borderRadius: 30,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default HomeScreen;
