import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CameraScreen({ navigation }) {
  const [captureNotice, setCaptureNotice] = useState('Hold for video • tap for photo');

  const onCapturePress = () => {
    setCaptureNotice('Demo capture triggered (camera disabled)');
  };

  const onOpenSettings = () => {
    Linking.openSettings();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.glowTop} />
        <View style={styles.topRow}>
          <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.8}>
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>
          <Text style={styles.topTitle}>Camera</Text>
          <View style={styles.topSpacer} />
        </View>

        <View style={styles.messageWrap}>
          <Text style={styles.permissionText}>Camera access needed</Text>
          <Text style={styles.secondaryText}>Enable camera permission in settings to capture posts.</Text>
          <TouchableOpacity style={styles.settingsButton} activeOpacity={0.85} onPress={onOpenSettings}>
            <Text style={styles.settingsButtonText}>Open Settings</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomWrap}>
          <TouchableOpacity style={styles.captureOuter} onPress={onCapturePress} activeOpacity={0.85}>
            <View style={styles.captureInner} />
          </TouchableOpacity>
          <Text style={styles.captureLabel}>{captureNotice}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0f1115'
  },
  container: {
    flex: 1,
    backgroundColor: '#0f1115',
    paddingHorizontal: 16,
    justifyContent: 'space-between'
  },
  glowTop: {
    position: 'absolute',
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: '#4da0ff1a',
    top: -70,
    left: -50
  },
  topRow: {
    paddingTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  closeText: {
    color: '#f8f9fb',
    fontSize: 24,
    width: 28
  },
  topTitle: {
    color: '#f8f9fb',
    fontSize: 18,
    fontWeight: '700'
  },
  topSpacer: {
    width: 28
  },
  messageWrap: {
    alignItems: 'center',
    backgroundColor: '#171b23',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 18,
    borderWidth: 1,
    borderColor: '#2a303b'
  },
  permissionText: {
    color: '#f8f9fb',
    fontSize: 21,
    fontWeight: '700'
  },
  secondaryText: {
    color: '#aeb3bf',
    marginTop: 8,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20
  },
  settingsButton: {
    marginTop: 14,
    backgroundColor: '#2f8cff',
    borderWidth: 1,
    borderColor: '#4da0ff',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 9
  },
  settingsButtonText: {
    color: '#f8f9fb',
    fontWeight: '700'
  },
  bottomWrap: {
    alignItems: 'center',
    paddingBottom: 30
  },
  captureOuter: {
    width: 82,
    height: 82,
    borderRadius: 41,
    borderWidth: 3,
    borderColor: '#f8f9fb',
    justifyContent: 'center',
    alignItems: 'center'
  },
  captureInner: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#f8f9fb'
  },
  captureLabel: {
    color: '#9ea3af',
    marginTop: 10,
    fontSize: 12
  }
});
