import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useTailwind } from "tailwind-rn";

const LoginScreen = ({ navigation }) => {
  const tailwind = useTailwind();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    Alert.alert("Bienvenido", "Iniciaste sesión correctamente.");
  };

  return (
    <View
      style={tailwind("flex-1 justify-center items-center bg-gray-100 px-6")}
    >
      <Text style={tailwind("text-3xl font-bold text-gray-800 mb-4")}>
        Bienvenido
      </Text>
      <Text style={tailwind("text-base text-gray-500 mb-6")}>
        Inicia sesión para continuar
      </Text>

      <TextInput
        style={tailwind(
          "w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 mb-4"
        )}
        placeholder="Correo Electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={tailwind(
          "w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 mb-4"
        )}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#aaa"
      />

      <TouchableOpacity
        style={tailwind("bg-blue-500 w-full py-3 rounded-lg items-center")}
        onPress={handleLogin}
      >
        <Text style={tailwind("text-white font-bold text-lg")}>
          Iniciar Sesión
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={tailwind("text-blue-500 mt-6 text-sm")}>
          ¿No tienes una cuenta? Regístrate
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
