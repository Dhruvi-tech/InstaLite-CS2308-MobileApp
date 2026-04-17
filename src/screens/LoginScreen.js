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

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Text style={styles.title}>Insta Lite</Text>
        <Text style={styles.subtitle}>Sign in to continue</Text>

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
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.link}>Don't have an account? Register</Text>
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
    fontSize: 36,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 0.4
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
