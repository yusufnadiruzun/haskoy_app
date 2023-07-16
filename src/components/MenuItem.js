import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const MenuItem = ({ name, where }) => {
  return (
    
      <TouchableOpacity
        className="border-2 border-gray-1000 rounded-lg p-0 m-2 w-1/3 h-16 justify-center items-center"
        onPress={where}
      >
        <Text className="font-bold">{name}</Text>
      </TouchableOpacity>

  );
};

export default MenuItem;
