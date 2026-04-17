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
  const [homeOpening, setHomeOpening] = useState(false);
  const [likedPosts, setLikedPosts] = useState({});
  const [profileBio, setProfileBio] = useState('Creative shots, daily moments, and clean edits.');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (route === 'Tabs' && tab === 'Home') {
      setHomeOpening(true);
      const timer = setTimeout(() => setHomeOpening(false), 600);
      return () => clearTimeout(timer);
    }

    return undefined;
  }, [route, tab]);

  if (loading) {
    return (
      <View style={styles.splashWrap}>
        <View style={styles.splashGlowTop} />
        <View style={styles.splashGlowBottom} />
        <Text style={styles.splashTitle}>Insta Lite</Text>
        <Text style={styles.splashSub}>Share your world</Text>
        <ActivityIndicator
          size="small"
          color="#f8f9fb"
          style={styles.splashLoader}
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
    if (tab === 'Home' && homeOpening) {
      return (
        <View style={styles.homeLoadingWrap}>
          <ActivityIndicator size="small" color="#f8f9fb" />
          <Text style={styles.homeLoadingText}>Loading feed...</Text>
        </View>
      );
    }

    if (tab === 'Home') {
      return (
        <HomeScreen
          navigation={navigation}
          likedState={likedPosts}
          setLikedState={setLikedPosts}
        />
      );
    }
    if (tab === 'Search') return <SearchScreen navigation={navigation} />;
    if (tab === 'Add') return <AddScreen navigation={navigation} />;
    return (
      <ProfileScreen
        navigation={navigation}
        bioValue={profileBio}
        onBioChange={setProfileBio}
      />
    );
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
        <StatusBar backgroundColor="#0f1115" barStyle="light-content" />
        {renderRoute()}
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  tabsContainer: {
    flex: 1,
    backgroundColor: '#0f1115'
  },
  screenWrap: {
    flex: 1
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#11141b',
    borderTopWidth: 1,
    borderTopColor: '#222834',
    paddingBottom: 12,
    paddingTop: 9
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabEmoji: {
    fontSize: 19,
    opacity: 0.75,
    marginBottom: 2
  },
  tabEmojiActive: {
    opacity: 1,
    transform: [{ scale: 1.05 }]
  },
  tabLabel: {
    color: '#9aa0ab',
    fontSize: 11,
    marginTop: 1,
    fontWeight: '600'
  },
  tabLabelActive: {
    color: '#f8f9fb'
  },
  splashWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f1115'
  },
  splashGlowTop: {
    position: 'absolute',
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: '#ff8f3a22',
    top: -40,
    right: -40
  },
  splashGlowBottom: {
    position: 'absolute',
    width: 230,
    height: 230,
    borderRadius: 115,
    backgroundColor: '#4da0ff22',
    bottom: -30,
    left: -20
  },
  splashTitle: {
    color: '#f8f9fb',
    fontSize: 34,
    fontWeight: '700',
    letterSpacing: 0.4
  },
  splashSub: {
    color: '#b8bdc8',
    marginTop: 8,
    fontSize: 14
  },
  splashLoader: {
    marginTop: 16
  },
  homeLoadingWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f1115'
  },
  homeLoadingText: {
    color: '#b8bdc8',
    marginTop: 10,
    fontSize: 13
  }
});
