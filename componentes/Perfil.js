import React from 'react';
import { View, Text, Image, Button, StyleSheet, Alert } from 'react-native';

export default function Perfil() {
  function mostrarMensagem() {
    Alert.alert('Aviso', 'Perfil atualizado com sucesso!');
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
        style={styles.foto}
      />

      <Text style={styles.nome}>João da Silva</Text>

      <Text style={styles.status}>🟢 Online</Text>

      <Button
        title="Atualizar status"
        onPress={mostrarMensagem}
        color="#4A90E2"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  foto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    borderWidth: 3,
    borderColor: '#4A90E2',
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  status: {
    fontSize: 16,
    color: '#4CAF50',
    marginBottom: 20,
  },
});