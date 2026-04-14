import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Addresses() {
  const addresses = [
    'Gopalan Arcade, Bangalore',
    'Indiranagar, Bangalore',
    'Whitefield, Bangalore'
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f8f6f2' }}>
      <View style={{ padding: 20 }}>
        {addresses.map((addr, index) => (
          <Text key={index} style={{ marginBottom: 8 }}>{addr}</Text>
        ))}
      </View>
    </SafeAreaView>
  );
}
