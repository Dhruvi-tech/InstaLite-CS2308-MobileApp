import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const gridImages = [
  'https://picsum.photos/400/400?random=1',
  'https://picsum.photos/400/400?random=2',
  'https://picsum.photos/400/400?random=3',
  'https://picsum.photos/400/400?random=1',
  'https://picsum.photos/400/400?random=2',
  'https://picsum.photos/400/400?random=3'
];

export default function ProfileScreen() {
  const renderGrid = ({ item }) => (
    <Image source={{ uri: item }} style={styles.gridImage} />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>👤 your_profile</Text>
      </View>

      <View style={styles.profileTop}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=1' }}
          style={styles.profileImage}
        />

        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>42</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>2.1k</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>318</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </View>

      <Text style={styles.bioTitle}>Insta Lite User</Text>
      <Text style={styles.bioText}>Building clean feeds and dark aesthetics.</Text>

      <View style={styles.gridHeader}>
        <Text style={styles.gridHeaderText}>Posts</Text>
      </View>

      <FlatList
        data={gridImages}
        keyExtractor={(item, idx) => `${item}-${idx}`}
        renderItem={renderGrid}
        numColumns={3}
        contentContainerStyle={styles.grid}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000'
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 10
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700'
  },
  profileTop: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 12
  },
  profileImage: {
    width: 88,
    height: 88,
    borderRadius: 44,
    marginRight: 16,
    borderWidth: 2,
    borderColor: '#ff7a18'
  },
  statsRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  statItem: {
    alignItems: 'center'
  },
  statValue: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700'
  },
  statLabel: {
    color: '#9a9a9a',
    fontSize: 12,
    marginTop: 2
  },
  bioTitle: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
    paddingHorizontal: 16
  },
  bioText: {
    color: '#9a9a9a',
    marginTop: 4,
    marginBottom: 10,
    paddingHorizontal: 16
  },
  gridHeader: {
    borderTopWidth: 1,
    borderTopColor: '#1a1a1a',
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a1a',
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 6
  },
  gridHeaderText: {
    color: '#fff',
    fontWeight: '600'
  },
  grid: {
    paddingHorizontal: 6,
    paddingBottom: 30
  },
  gridImage: {
    width: '31.6%',
    aspectRatio: 1,
    borderRadius: 10,
    margin: '0.85%',
    backgroundColor: '#1a1a1a'
  }
});
