import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet,SafeAreaView } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

const BarcodScanner = () => {

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState("Not yet Scanned");

    const askForCamera = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status == "granted");
      console.log(status);
    };

    const handleBarCodeScanned = ({ type, data }) => {
      setScanned(true);
      setText(data);
      console.log(`type: ${type}, data: ${data}`);
    };

    useEffect(() => {
      askForCamera();
    }, []);

    if (hasPermission === null) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Kamera izni talep ediliyor...</Text>
          <Button title={"İzne izin ver"} onPress={askForCamera} />
        </View>
      );
    }
    if (hasPermission === false) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Kamera erişimi reddedildi.</Text>
          <Button title={"İzne izin ver"} onPress={askForCamera} />
        </View>
      );
    }

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned && (
          <View style={styles.overlay}>
            <Text style={styles.scanText}>{text}</Text>
            <Button title={"Tekrar Tara"} onPress={() => setScanned(false)} />
          </View>
        )}
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 16,
    },
    text: {
      marginBottom: 20,
    },
    overlay: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    scanText: {
      fontSize: 20,
      marginBottom: 20,
    },
  });


export default BarcodScanner;
