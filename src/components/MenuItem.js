
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const MenuItem = ({ name,where }) => {
  return (
    <TouchableOpacity
      style={{
        width: "45%",
        height: "20%",
        backgroundColor: "white",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={where}
     
    >
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

export default MenuItem;
