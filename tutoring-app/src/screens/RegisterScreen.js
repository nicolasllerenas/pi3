import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useTailwind } from "tailwind-rn";

const RegisterScreen = ({ navigation }) => {
  const tailwind = useTailwind();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleRegister = () => {
    Alert.alert("Registro Exitoso", "Tu cuenta ha sido creada.");
  };

  return (
    <View
      style={tailwind("flex-1 justify-center items-center bg-gray-100 px-6")}
    >
      <Text style={tailwind("text-3xl font-bold text-gray-800 mb-4")}>
        Crear Cuenta
      </Text>
      <Text style={tailwind("text-base text-gray-500 mb-6")}>
        Regístrate para empezar
      </Text>

      <TextInput
        style={tailwind(
          "w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 mb-4"
        )}
        placeholder="Nombre Completo"
        value={name}
        onChangeText={setName}
        placeholderTextColor="#aaa"
      />
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
      <TextInput
        style={tailwind(
          "w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 mb-4"
        )}
        placeholder="Rol (Estudiante o Profesor)"
        value={role}
        onChangeText={setRole}
        placeholderTextColor="#aaa"
      />

      <TouchableOpacity
        style={tailwind("bg-green-500 w-full py-3 rounded-lg items-center")}
        onPress={handleRegister}
      >
        <Text style={tailwind("text-white font-bold text-lg")}>
          Registrarse
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={tailwind("text-green-500 mt-6 text-sm")}>
          ¿Ya tienes una cuenta? Inicia sesión
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
