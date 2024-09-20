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

      {/*}<Text style={styles.title}>Meu Bem Pudim</Text>
      <Text style={styles.subtitle}>Delícias feitas com amor!</Text>*/}

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => goToScreen('Pedidos')}>
          <Text style={styles.buttonText}>Fazer Pedido</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => goToScreen('Pagamentos')}>
          <Text style={styles.buttonText}>Ver Pagamentos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Fundo branco
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  // Estilo da logo no topo da tela
  logo: {
    width: '120%', // Largura da logo em 60% da tela
    height: 500, // Altura da logo
    marginBottom: 1, // Espaço abaixo da logo
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    fontFamily: 'cursive',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '400',
    color: '#666',
    marginBottom: 40,
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
