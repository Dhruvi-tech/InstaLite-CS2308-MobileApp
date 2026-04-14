import React, { useContext } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CartContext } from '../context/CartContext';

export default function Orders() {
  const { orders } = useContext(CartContext);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>My Orders</Text>

        {orders.length === 0 ? (
          <Text style={styles.empty}>No orders yet.</Text>
        ) : (
          orders.map((order, idx) => (
            <View style={styles.card} key={order.id || idx}>
              <Text style={styles.orderTitle}>Order #{idx + 1}</Text>

              <Text style={styles.meta}>Name: {order.details?.name}</Text>
              <Text style={styles.meta}>Phone: {order.details?.phone}</Text>
              <Text style={styles.meta}>Address: {order.details?.address}</Text>

              <View style={styles.divider} />

              {(order.items || []).map((item) => (
                <Text key={`${order.id}-${item.id}`} style={styles.itemLine}>
                  {item.name} x {item.qty}
                </Text>
              ))}
            </View>
          ))
        )}
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
    padding: 16,
    paddingBottom: 100
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#5c2c06',
    marginBottom: 14
  },
  empty: {
    fontSize: 15,
    color: '#5c2c06'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#eadfd8'
  },
  orderTitle: {
    fontWeight: '800',
    color: '#d62300',
    marginBottom: 6
  },
  meta: {
    color: '#3b312c',
    marginBottom: 2
  },
  divider: {
    height: 1,
    backgroundColor: '#f0e7e1',
    marginVertical: 8
  },
  itemLine: {
    color: '#2b211c',
    marginBottom: 2
  }
});
