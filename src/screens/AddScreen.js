import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AddScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.glowTop} />
        <Text style={styles.title}>Create</Text>
        <Text style={styles.subtitle}>Share a photo, reel, or quick update</Text>

        <View style={styles.actionsWrap}>
          <View style={styles.actionCard}>
            <Text style={styles.actionTitle}>Post</Text>
            <Text style={styles.actionText}>Upload from gallery with caption and tags.</Text>
          </View>
          <View style={styles.actionCard}>
            <Text style={styles.actionTitle}>Story</Text>
            <Text style={styles.actionText}>Share a moment that disappears in 24 hours.</Text>
          </View>
          <View style={styles.actionCard}>
            <Text style={styles.actionTitle}>Reel</Text>
            <Text style={styles.actionText}>Create a short clip with music and effects.</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.85}
          onPress={() => navigation.navigate('Camera')}
        >
          <Text style={styles.buttonText}>Open Camera</Text>
        </TouchableOpacity>
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
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  glowTop: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: '#ff8f3a1e',
    top: -50,
    right: -40
  },
  title: {
    color: '#f8f9fb',
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center'
  },
  subtitle: {
    color: '#b8bdc8',
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 22
  },
  actionsWrap: {
    marginBottom: 24
  },
  actionCard: {
    backgroundColor: '#171b23',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#2a303b'
  },
  actionTitle: {
    color: '#f8f9fb',
    fontWeight: '700',
    fontSize: 15
  },
  actionText: {
    color: '#aeb3bf',
    marginTop: 4,
    fontSize: 13,
    lineHeight: 18
  },
  button: {
    backgroundColor: '#2f8cff',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#4da0ff'
  },
  buttonText: {
    color: '#f8f9fb',
    fontWeight: '700',
    fontSize: 16
  }
});
