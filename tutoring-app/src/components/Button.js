import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useTailwind } from "tailwind-rn";

const Button = ({ title, onPress }) => {
  const tailwind = useTailwind();

  return (
    <TouchableOpacity
      style={tailwind("bg-primary py-4 px-6 rounded-lg w-full")}
      onPress={onPress}
    >
      <Text style={tailwind("text-white text-center font-bold text-lg")}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
