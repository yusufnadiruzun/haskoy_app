import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Modal } from 'react-native';
import { useSelector } from 'react-redux';

const LoadingOverlay = () => {
  const isLoading =  useSelector((state) => state.result);
  console.log(isLoading.loading)
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={isLoading.loading}
    >
      <View style={styles.overlay}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default LoadingOverlay;