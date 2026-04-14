import React, { useEffect, useContext, useState } from 'react';
import {
  View, Text, FlatList, Image,
  TouchableOpacity, StyleSheet
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring
} from 'react-native-reanimated';

import { CartContext } from '../context/CartContext';
import { menuData } from '../data/menuData';

const categories = [
  { key: 'burgers', label: 'Burgers' },
  { key: 'combos', label: 'Combos' },
  { key: 'korean', label: 'Korean' },
  { key: 'drinks', label: 'Drinks' },
  { key: 'cafe', label: 'Cafe' },
  { key: 'deals', label: 'Deals' },
  { key: 'offers', label: 'Offers' },
  { key: 'dessert', label: 'Dessert' }
];

function MenuItemCard({ item, cartItem, addToCart, increaseQty, decreaseQty }) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }]
  }));

  const onAddPress = () => {
    scale.value = withSpring(1.2);
    setTimeout(() => {
      scale.value = withSpring(1);
    }, 150);
    addToCart(item);
  };

  return (
    <View style={styles.card}>
      <View style={styles.imageWrap}>
        <Image source={item.image} style={styles.image} />
        {cartItem && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>+{cartItem.qty}</Text>
          </View>
        )}
      </View>

      <View style={styles.info}>
        <Text numberOfLines={2} style={styles.title}>
          {item.name}
        </Text>

        {item.oldPrice && (
          <Text style={styles.oldPrice}>₹{item.oldPrice}</Text>
        )}

        <Text style={styles.price}>₹{item.price}</Text>
      </View>

      {!cartItem ? (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onAddPress}
        >
          <Animated.View style={[styles.btn, animatedStyle]}>
            <Text style={{ color: '#fff' }}>Add +</Text>
          </Animated.View>
        </TouchableOpacity>
      ) : (
        <View style={styles.qtyWrap}>
          <TouchableOpacity
            style={styles.qtyBtn}
            activeOpacity={0.7}
            onPress={() => decreaseQty(item.id)}
          >
            <Text style={styles.qtyTxt}>-</Text>
          </TouchableOpacity>

          <Text style={styles.qtyCount}>{cartItem.qty}</Text>

          <TouchableOpacity
            style={styles.qtyBtn}
            activeOpacity={0.7}
            onPress={() => increaseQty(item)}
          >
            <Text style={styles.qtyTxt}>+</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

export default function MenuScreen({ navigation }) {
  const route = useRoute();
  const initialCategory = route.params?.category || 'burgers';
  const [selected, setSelected] = useState(initialCategory);

  const { cart, addToCart, increaseQty, decreaseQty } = useContext(CartContext);

  useEffect(() => {
    if (route.params?.category) {
      setSelected(route.params.category);
    }
  }, [route.params?.category]);

  const filteredData = menuData.filter(item => item.category === selected);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Our Menu</Text>
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Cart')}>
          <Text style={styles.headerText}>Cart: {Object.keys(cart).length}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contentWrap}>
        <View style={styles.leftMenu}>
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat.key}
              activeOpacity={0.7}
              style={[styles.catItem, selected === cat.key && styles.activeCat]}
              onPress={() => setSelected(cat.key)}
            >
              <Text>{cat.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ flex: 1 }}>
          {filteredData.length === 0 ? (
            <View style={styles.emptyWrap}>
              <Text>No items available</Text>
            </View>
          ) : (
            <FlatList
              data={filteredData}
              keyExtractor={(item) => item.id.toString()}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 120 }}
              renderItem={({ item }) => (
                <MenuItemCard
                  item={item}
                  cartItem={cart[item.id]}
                  addToCart={addToCart}
                  increaseQty={increaseQty}
                  decreaseQty={decreaseQty}
                />
              )}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f6f2'
  },
  header: {
    backgroundColor: '#5c2c06',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  contentWrap: {
    flexDirection: 'row',
    flex: 1
  },
  leftMenu: {
    width: 120,
    backgroundColor: '#fff'
  },
  catItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  activeCat: {
    backgroundColor: '#ffe5d9',
    borderLeftWidth: 4,
    borderLeftColor: '#d62300'
  },
  emptyWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 12,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  imageWrap: {
    position: 'relative'
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: 'contain'
  },
  badge: {
    position: 'absolute',
    top: -6,
    right: -6,
    backgroundColor: '#d62300',
    borderRadius: 10,
    minWidth: 24,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5
  },
  badgeText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '700'
  },
  info: {
    flex: 1,
    marginLeft: 10
  },
  title: {
    fontWeight: '600'
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: 'gray'
  },
  price: {
    color: 'green',
    fontWeight: 'bold'
  },
  btn: {
    backgroundColor: '#d62300',
    padding: 10,
    borderRadius: 8
  },
  qtyWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff0ec',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#f2b6a9'
  },
  qtyBtn: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#d62300',
    alignItems: 'center',
    justifyContent: 'center'
  },
  qtyTxt: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 18
  },
  qtyCount: {
    marginHorizontal: 10,
    fontWeight: '700',
    color: '#5c2c06'
  }
});
