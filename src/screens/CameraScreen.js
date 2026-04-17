import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CameraScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.topRow}>
          <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.8}>
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.messageWrap}>
          <Text style={styles.permissionText}>Camera Permission Denied</Text>
          <Text style={styles.secondaryText}>Enable camera in settings</Text>
        </View>

        <View style={styles.bottomWrap}>
          <View style={styles.captureOuter}>
            <View style={styles.captureInner} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000'
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 16,
    justifyContent: 'space-between'
  },
  topRow: {
    paddingTop: 6
  },
  closeText: {
    color: '#fff',
    fontSize: 24
  },
  messageWrap: {
    alignItems: 'center'
  },
  permissionText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700'
  },
  secondaryText: {
    color: '#8f8f8f',
    marginTop: 8,
    fontSize: 15
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
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  captureInner: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#fff'
  }
});
