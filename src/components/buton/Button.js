import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ title, onPress,style }) => {
  
  
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`bg-midnight py-3 px-6 rounded-lg ${style}`}
    >
      <Text className={'text-white text-lg font-bold text-center'}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;