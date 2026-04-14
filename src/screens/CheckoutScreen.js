import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CartContext } from '../context/CartContext';

export default function CheckoutScreen({ navigation }) {
  const { placeOrder, cart } = useContext(CartContext);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const submitOrder = () => {
    if (!name || !phone || !address) {
      Alert.alert('Missing details', 'Please fill Name, Phone, and Address.');
      return;
    }

    if (Object.keys(cart).length === 0) {
      Alert.alert('Cart is empty', 'Add items before placing order.');
      navigation.navigate('Menu');
      return;
    }

    placeOrder({ name, phone, address });
    Alert.alert('Order Placed', 'Your order has been placed successfully.');
    navigation.navigate('Orders');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Checkout</Text>

        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your full name"
          placeholderTextColor="#9d8a7f"
        />

        <Text style={styles.label}>Phone</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="Enter your phone number"
          placeholderTextColor="#9d8a7f"
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Address</Text>
        <TextInput
          style={[styles.input, styles.addressInput]}
          value={address}
          onChangeText={setAddress}
          placeholder="Enter delivery address"
          placeholderTextColor="#9d8a7f"
          multiline
          textAlignVertical="top"
        />

        <TouchableOpacity style={styles.btn} activeOpacity={0.7} onPress={submitOrder}>
          <Text style={styles.btnText}>Place Order</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f6f2'
  },
  container: {
    padding: 20,
    paddingBottom: 30
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 18,
    color: '#5c2c06'
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 6,
    color: '#5c2c06'
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#eadfd8',
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 14,
    color: '#2b211c'
  },
  addressInput: {
    minHeight: 92
  },
  btn: {
    marginTop: 8,
    backgroundColor: '#d62300',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center'
  },
  btnText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 16
  }
});
