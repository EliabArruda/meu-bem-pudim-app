import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

interface DadosClienteScreenProps {
  cliente: { nome: string; telefone: string; endereco: string };
  setCliente: (cliente: { nome: string; telefone: string; endereco: string }) => void;
  goToScreen: (screen: string) => void;
}

const DadosClienteScreen: React.FC<DadosClienteScreenProps> = ({ cliente, setCliente, goToScreen }) => {
  const [nome, setNome] = useState(cliente.nome);
  const [telefone, setTelefone] = useState(cliente.telefone);
  const [endereco, setEndereco] = useState(cliente.endereco);

  const handleContinuar = () => {
    if (nome && telefone && endereco) {
      setCliente({ nome, telefone, endereco });
      goToScreen('Pedidos'); // Vai para a tela de pedidos após preencher os dados
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Campo Nome */}
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome"
        placeholderTextColor="#888"
      />

      {/* Campo Telefone */}
      <Text style={styles.label}>Telefone</Text>
      <TextInput
        style={styles.input}
        value={telefone}
        onChangeText={setTelefone}
        placeholder="Digite seu telefone"
        placeholderTextColor="#888"
        keyboardType="phone-pad"
      />

      {/* Campo Endereço */}
      <Text style={styles.label}>Endereço</Text>
      <TextInput
        style={styles.input}
        value={endereco}
        onChangeText={setEndereco}
        placeholder="Digite seu endereço"
        placeholderTextColor="#888"
      />

      {/* Botão Continuar */}
      <TouchableOpacity style={styles.button} onPress={handleContinuar}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>

      {/* Botão Voltar */}
      <TouchableOpacity style={styles.button} onPress={() => goToScreen('Home')}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 18,
    color: '#000',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
    fontSize: 16,
    color: '#000',
  },
});

export default DadosClienteScreen;
