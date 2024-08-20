import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Modal, Image } from 'react-native';
import { useSelector } from 'react-redux';

const LoadingOverlay = () => {
  const isLoading = useSelector((state) => state.result);
  console.log(isLoading.loading);

  return (
    <Modal transparent={true} animationType="fade" visible={isLoading.loading}>
      <View style={styles.overlay}>
        <ActivityIndicator size="large" color="#0000ff" />
        
        <View style={styles.container}>
          <Image source={require('../assets/haskoy.png')} style={styles.image} />
          <Text></Text>
        </View>
        
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
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150, // Tailwind'deki w-1/2 yerine sabit genişlik
    height: 112, // Tailwind'deki h-28 yerine sabit yükseklik
  },
});

export default LoadingOverlay;
