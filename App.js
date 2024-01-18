import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import ModalScreen from './ModalScreen';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.pressable} onPress={openModal}>
        <Text style={styles.pressableText}>Show modal message</Text>
      </Pressable>
      <ModalScreen visible={modalVisible} onClose={closeModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressable: {
    padding: 16,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  pressableText: {
    color: 'white',
    fontSize: 18,
  },
});
