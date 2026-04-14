import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export default function Loader() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <ActivityIndicator size="large" color="#d62300" />
    </View>
  );
}
