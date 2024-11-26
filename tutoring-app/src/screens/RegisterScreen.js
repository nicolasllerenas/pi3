import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useTailwind } from "tailwind-rn";
import Input from "../components/Input";
import Button from "../components/Button";

const RegisterScreen = ({ navigation }) => {
  const tailwind = useTailwind();

  return (
    <View
      style={tailwind("flex-1 bg-background justify-center items-center px-6")}
    >
      <Text style={tailwind("text-3xl font-bold text-primary mb-8")}>
        Crear Cuenta
      </Text>
      <Input placeholder="Nombre completo" />
      <Input placeholder="Correo electrónico" keyboardType="email-address" />
      <Input placeholder="Contraseña" secureTextEntry />
      <Button title="Registrarse" onPress={() => alert("Registro exitoso")} />
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={tailwind("mt-4")}
      >
        <Text style={tailwind("text-primary text-sm font-semibold")}>
          ¿Ya tienes cuenta? Inicia Sesión
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
