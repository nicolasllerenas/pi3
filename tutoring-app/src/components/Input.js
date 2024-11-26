import React from "react";
import { TextInput } from "react-native";
import { useTailwind } from "tailwind-rn";

const Input = ({
  placeholder,
  secureTextEntry = false,
  keyboardType = "default",
}) => {
  const tailwind = useTailwind();

  return (
    <TextInput
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      style={tailwind(
        "border border-gray-300 rounded-lg w-full p-4 mb-4 bg-white text-gray-700"
      )}
    />
  );
};

export default Input;
