import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Join Insta Lite</Text>

        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Full Name"
          placeholderTextColor="#777"
          style={styles.input}
        />
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor="#777"
          style={styles.input}
          autoCapitalize="none"
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          placeholderTextColor="#777"
          style={styles.input}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.85}
          onPress={() => navigation.replace('Tabs')}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.link}>Already have an account? Log In</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0f1115'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24
  },
  title: {
    color: '#f8f9fb',
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 0.3
  },
  subtitle: {
    color: '#a6abb6',
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 24,
    fontSize: 14
  },
  input: {
    backgroundColor: '#1b1f27',
    borderRadius: 14,
    color: '#f8f9fb',
    paddingHorizontal: 14,
    paddingVertical: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#2a303b'
  },
  button: {
    backgroundColor: '#2f8cff',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#4da0ff'
  },
  buttonText: {
    color: '#f8f9fb',
    fontWeight: '700',
    fontSize: 16
  },
  link: {
    color: '#82b8ff',
    textAlign: 'center'
  }
});
