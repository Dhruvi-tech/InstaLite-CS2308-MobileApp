import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring
} from 'react-native-reanimated';
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { CartContext } from '../context/CartContext';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  const { cart } = useContext(CartContext);
  const cartCount = Object.keys(cart).length;
  const badgeScale = useSharedValue(1);

  useEffect(() => {
    if (cartCount > 0) {
      badgeScale.value = withSpring(1.3);
      const timer = setTimeout(() => {
        badgeScale.value = withSpring(1);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [cartCount, badgeScale]);

  const badgeAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: badgeScale.value }]
  }));

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#f5c16c',
        tabBarInactiveTintColor: '#fff',
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          backgroundColor: '#5c2c06',
          borderTopWidth: 0,
          elevation: 10
        },
        tabBarLabelStyle: {
          fontSize: 11
        },
        tabBarIcon: ({ color }) => {
          let icon;

          if (route.name === 'Home') icon = 'home';
          else if (route.name === 'Menu') icon = 'fast-food';
          else if (route.name === 'Cart') icon = 'cart';
          else if (route.name === 'Profile') icon = 'person';

          return (
            <View style={styles.iconWrap}>
              <Icon name={icon} size={20} color={color} />
              {route.name === 'Cart' && cartCount > 0 ? (
                <Animated.View style={[styles.badge, badgeAnimatedStyle]}>
                  <Text style={styles.badgeText}>{cartCount}</Text>
                </Animated.View>
              ) : null}
            </View>
          );
        }
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Menu" component={MenuScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconWrap: {
    width: 28,
    alignItems: 'center',
    justifyContent: 'center'
  },
  badge: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: '#d62300',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  badgeText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '800'
  }
});
