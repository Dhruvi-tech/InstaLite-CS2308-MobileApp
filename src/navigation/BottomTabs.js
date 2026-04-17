import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import AddScreen from '../screens/AddScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  const tabIcons = {
    Home: '🏠',
    Search: '🔍',
    Add: '➕',
    Profile: '👤'
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          height: 68,
          paddingBottom: 10,
          backgroundColor: '#000',
          borderTopWidth: 1,
          borderTopColor: '#1a1a1a',
          elevation: 0
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600'
        },
        tabBarIcon: ({ focused }) => (
          <View style={styles.iconWrap}>
            <Text style={[styles.tabEmoji, focused && styles.tabEmojiActive]}>
              {tabIcons[route.name]}
            </Text>
          </View>
        )
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Add" component={AddScreen} />
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
  tabEmoji: {
    fontSize: 20,
    opacity: 0.75
  },
  tabEmojiActive: {
    opacity: 1
  }
});
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import AddScreen from '../screens/AddScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  const tabIcons = {
    Home: '🏠',
    Search: '🔍',
    Add: '➕',
    Profile: '👤'
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          height: 68,
          paddingBottom: 10,
          backgroundColor: '#000',
          borderTopWidth: 1,
          borderTopColor: '#1a1a1a',
          elevation: 0
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600'
        },
        tabBarIcon: ({ focused }) => (
          <View style={styles.iconWrap}>
            <Text style={[styles.tabEmoji, focused && styles.tabEmojiActive]}>
              {tabIcons[route.name]}
            </Text>
          </View>
        )
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Add" component={AddScreen} />
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
  tabEmoji: {
    fontSize: 20,
    opacity: 0.75
  },
  tabEmojiActive: {
    opacity: 1
  }
});
