import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Swipeable } from 'react-native-gesture-handler';
import Animated, { LinearTransition } from 'react-native-reanimated';
import { CartContext } from '../context/CartContext';
import { colors } from '../theme/colors';

export default function CartScreen({ navigation }) {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useContext(CartContext);
  const cartItems = Object.values(cart);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalMrp = cartItems.reduce((sum, item) => sum + (item.oldPrice || item.price) * item.qty, 0);
  const grandTotal = total;
  const savings = totalMrp - grandTotal;

  if (cartItems.length === 0) {
    return (
      <SafeAreaView style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Your cart is empty 🛒</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.placeOrderBtn}
          onPress={() => navigation.navigate('Menu')}
        >
          <Text style={styles.placeOrderText}>Browse Menu</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.secondaryBtn}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.secondaryBtnText}>Continue Shopping</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Cart</Text>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 80 }}
        ListFooterComponent={
          cartItems.length > 0 ? (
            <View style={styles.summaryCard}>
              <Text style={styles.summaryTitle}>Price Summary</Text>

              <View style={styles.summaryRow}>
                <Text>Total MRP</Text>
                <Text>Rs {totalMrp}</Text>
              </View>

              <View style={styles.summaryRow}>
                <Text>Savings</Text>
                <Text style={styles.savings}>- Rs {savings}</Text>
              </View>

              <View style={styles.summaryDivider} />

              <View style={styles.summaryRow}>
                <Text style={styles.grandLabel}>Grand Total</Text>
                <Text style={styles.grandValue}>Rs {grandTotal}</Text>
              </View>

              <View style={styles.footer}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.placeOrderBtn}
                  onPress={() => navigation.navigate('Checkout')}
                >
                  <Text style={styles.placeOrderText}>Proceed to Checkout</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : null
        }
        renderItem={({ item }) => (
          <Swipeable
            overshootRight={false}
            renderRightActions={() => (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => removeFromCart(item.id)}
                style={styles.deleteAction}
              >
                <Text style={styles.deleteActionText}>Delete</Text>
              </TouchableOpacity>
            )}
          >
            <Animated.View style={styles.row} layout={LinearTransition.springify()}>
              <View style={{ flex: 1 }}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text>Qty: {item.qty}</Text>
              </View>

              <View style={styles.actions}>
                <TouchableOpacity activeOpacity={0.7} style={styles.smallBtn} onPress={() => decreaseQty(item.id)}>
                  <Text>-</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={styles.smallBtn} onPress={() => increaseQty(item)}>
                  <Text>+</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={styles.removeBtn} onPress={() => removeFromCart(item.id)}>
                  <Text style={{ color: '#fff' }}>Remove</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </Swipeable>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: 20
  },
  emptyText: {
    fontSize: 18,
    marginBottom: 12
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12
  },
  row: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 15,
    marginBottom: 10,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6
  },
  itemName: {
    fontWeight: 'bold',
    marginBottom: 4
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  smallBtn: {
    backgroundColor: '#ddd',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 5,
    marginRight: 8
  },
  removeBtn: {
    backgroundColor: '#d62300',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    alignItems: 'center'
  },
  summaryCard: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 15,
    marginTop: 8,
    marginBottom: 8,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  summaryDivider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 8
  },
  savings: {
    color: 'green',
    fontWeight: 'bold'
  },
  grandLabel: {
    fontWeight: 'bold'
  },
  grandValue: {
    fontWeight: 'bold',
    color: colors.accent
  },
  footer: {
    borderTopWidth: 1,
    borderColor: '#eee',
    paddingTop: 10,
    marginTop: 10,
    paddingBottom: 20
  },
  placeOrderBtn: {
    backgroundColor: '#d62300',
    padding: 14,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10
  },
  placeOrderText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  secondaryBtn: {
    marginTop: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d62300',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 18
  },
  secondaryBtnText: {
    color: '#d62300',
    fontWeight: 'bold'
  },
  deleteAction: {
    backgroundColor: '#d62300',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 14
  },
  deleteActionText: {
    color: '#fff',
    fontWeight: '700'
  }
});
