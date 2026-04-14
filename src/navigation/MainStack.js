import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabs from './BottomTabs';
import CustomerCare from '../screens/CustomerCare';
import Orders from '../screens/Orders';
import Addresses from '../screens/Addresses';
import CheckoutScreen from '../screens/CheckoutScreen';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right'
      }}
    >
      <Stack.Screen name="Tabs" component={BottomTabs} />
      <Stack.Screen name="CustomerCare" component={CustomerCare} />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="Addresses" component={Addresses} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
    </Stack.Navigator>
  );
}
