import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useTailwind } from "tailwind-rn";
import Input from "../components/Input";
import Button from "../components/Button";

const LoginScreen = ({ navigation }) => {
  const tailwind = useTailwind();

  return (
    <View
      style={tailwind("flex-1 bg-background justify-center items-center px-6")}
    >
      <Text style={tailwind("text-3xl font-bold text-primary mb-8")}>
        Bienvenido
      </Text>
      <Input placeholder="Correo electrónico" keyboardType="email-address" />
      <Input placeholder="Contraseña" secureTextEntry />
      <Button
        title="Iniciar Sesión"
        onPress={() => alert("Inicio de sesión exitoso")}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("Register")}
        style={tailwind("mt-4")}
      >
        <Text style={tailwind("text-primary text-sm font-semibold")}>
          ¿No tienes cuenta? Regístrate
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
