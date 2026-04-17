import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StatusBar, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import AddScreen from './src/screens/AddScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import CameraScreen from './src/screens/CameraScreen';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [route, setRoute] = useState('Login');
  const [tab, setTab] = useState('Home');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
      }}>
        <Text style={{ color: '#fff', fontSize: 24, fontWeight: '700' }}>
          Insta Lite
        </Text>
        <ActivityIndicator
          size="small"
          color="#fff"
          style={{ marginTop: 14 }}
        />
      </View>
    );
  }

  const navigation = {
    navigate: (name) => {
      if (name === 'Register') setRoute('Register');
      else if (name === 'Login') setRoute('Login');
      else if (name === 'Camera') setRoute('Camera');
      else if (name === 'Tabs') setRoute('Tabs');
      else if (['Home', 'Search', 'Add', 'Profile'].includes(name)) {
        setRoute('Tabs');
        setTab(name);
      }
    },
    replace: (name) => {
      if (name === 'Tabs') {
        setRoute('Tabs');
      } else {
        setRoute(name);
      }
    },
    goBack: () => {
      if (route === 'Register') setRoute('Login');
      else if (route === 'Camera') setRoute('Tabs');
      else if (route !== 'Tabs') setRoute('Tabs');
    }
  };

  const renderActiveTab = () => {
    if (tab === 'Home') return <HomeScreen navigation={navigation} />;
    if (tab === 'Search') return <SearchScreen navigation={navigation} />;
    if (tab === 'Add') return <AddScreen navigation={navigation} />;
    return <ProfileScreen navigation={navigation} />;
  };

  const renderRoute = () => {
    if (route === 'Login') return <LoginScreen navigation={navigation} />;
    if (route === 'Register') return <RegisterScreen navigation={navigation} />;
    if (route === 'Camera') return <CameraScreen navigation={navigation} />;

    return (
      <View style={styles.tabsContainer}>
        <View style={styles.screenWrap}>{renderActiveTab()}</View>
        <View style={styles.tabBar}>
          {[
            { name: 'Home', emoji: '🏠' },
            { name: 'Search', emoji: '🔍' },
            { name: 'Add', emoji: '➕' },
            { name: 'Profile', emoji: '👤' }
          ].map((item) => (
            <TouchableOpacity
              key={item.name}
              style={styles.tabButton}
              onPress={() => setTab(item.name)}
              activeOpacity={0.85}
            >
              <Text style={[styles.tabEmoji, tab === item.name && styles.tabEmojiActive]}>
                {item.emoji}
              </Text>
              <Text style={[styles.tabLabel, tab === item.name && styles.tabLabelActive]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StatusBar backgroundColor="#000" barStyle="light-content" />
        {renderRoute()}
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  tabsContainer: {
    flex: 1,
    backgroundColor: '#000'
  },
  screenWrap: {
    flex: 1
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#000',
    borderTopWidth: 1,
    borderTopColor: '#1a1a1a',
    paddingBottom: 10,
    paddingTop: 8
  },
  tabButton: {
    flex: 1,
    alignItems: 'center'
  },
  tabEmoji: {
    fontSize: 20,
    opacity: 0.75
  },
  tabEmojiActive: {
    opacity: 1
  },
  tabLabel: {
    color: '#888',
    fontSize: 11,
    marginTop: 2,
    fontWeight: '600'
  },
  tabLabelActive: {
    color: '#fff'
  }
});
