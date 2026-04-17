import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const suggestedProfiles = [
  { id: 'u1', username: 'mika', name: 'Mika Stone', avatar: 'https://i.pravatar.cc/100?img=40' },
  { id: 'u2', username: 'omar', name: 'Omar Reed', avatar: 'https://i.pravatar.cc/100?img=41' },
  { id: 'u3', username: 'tara', name: 'Tara West', avatar: 'https://i.pravatar.cc/100?img=42' },
  { id: 'u4', username: 'ivan', name: 'Ivan Park', avatar: 'https://i.pravatar.cc/100?img=43' },
  { id: 'u5', username: 'nina', name: 'Nina Cole', avatar: 'https://i.pravatar.cc/100?img=44' },
  { id: 'u6', username: 'kian', name: 'Kian Hart', avatar: 'https://i.pravatar.cc/100?img=45' },
  { id: 'u7', username: 'luca', name: 'Luca Mills', avatar: 'https://i.pravatar.cc/100?img=46' },
  { id: 'u8', username: 'sara', name: 'Sara Bloom', avatar: 'https://i.pravatar.cc/100?img=47' }
];

const exploreImages = [
  'https://picsum.photos/id/1069/700/700',
  'https://picsum.photos/id/1074/700/700',
  'https://picsum.photos/id/1080/700/700',
  'https://picsum.photos/id/1081/700/700',
  'https://picsum.photos/id/1082/700/700',
  'https://picsum.photos/id/1084/700/700',
  'https://picsum.photos/id/1085/700/700',
  'https://picsum.photos/id/1089/700/700',
  'https://picsum.photos/id/109/700/700',
  'https://picsum.photos/id/110/700/700',
  'https://picsum.photos/id/111/700/700',
  'https://picsum.photos/id/112/700/700',
  'https://picsum.photos/id/113/700/700',
  'https://picsum.photos/id/114/700/700',
  'https://picsum.photos/id/115/700/700',
  'https://picsum.photos/id/116/700/700',
  'https://picsum.photos/id/117/700/700',
  'https://picsum.photos/id/118/700/700',
  'https://picsum.photos/id/119/700/700',
  'https://picsum.photos/id/120/700/700'
];

export default function SearchScreen() {
  const renderProfile = ({ item }) => (
    <View style={styles.profileRow}>
      <View style={styles.profileLeft}>
        <Image source={{ uri: item.avatar }} style={styles.profileAvatar} />
        <View>
          <Text style={styles.profileUser}>{item.username}</Text>
          <Text style={styles.profileName}>{item.name}</Text>
        </View>
      </View>
      <Text style={styles.followText}>Follow</Text>
    </View>
  );

  const renderExplore = ({ item }) => <Image source={{ uri: item }} style={styles.gridImage} />;

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={exploreImages}
        keyExtractor={(item, idx) => `${item}-${idx}`}
        renderItem={renderExplore}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.container}>
            <Text style={styles.title}>Search</Text>
            <TextInput
              placeholder="Search creators, tags, places"
              placeholderTextColor="#7f8592"
              style={styles.input}
            />

            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Suggested Profiles</Text>
            </View>

            <FlatList
              data={suggestedProfiles}
              keyExtractor={(item) => item.id}
              renderItem={renderProfile}
              scrollEnabled={false}
            />

            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Explore</Text>
            </View>
          </View>
        }
        contentContainerStyle={styles.grid}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0f1115'
  },
  container: {
    paddingHorizontal: 16,
    paddingTop: 10
  },
  title: {
    color: '#f8f9fb',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12
  },
  input: {
    backgroundColor: '#1b1f27',
    color: '#f8f9fb',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#2a303b'
  },
  sectionHeader: {
    marginTop: 18,
    marginBottom: 10
  },
  sectionTitle: {
    color: '#f8f9fb',
    fontWeight: '700',
    fontSize: 15
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8
  },
  profileLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  profileAvatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 10
  },
  profileUser: {
    color: '#f8f9fb',
    fontWeight: '600',
    fontSize: 14
  },
  profileName: {
    color: '#9da3af',
    fontSize: 12,
    marginTop: 1
  },
  followText: {
    color: '#4da0ff',
    fontWeight: '700',
    fontSize: 13
  },
  grid: {
    paddingHorizontal: 6,
    paddingBottom: 26
  },
  gridImage: {
    width: '31.7%',
    aspectRatio: 1,
    borderRadius: 7,
    margin: '0.8%',
    backgroundColor: '#1a1d24'
  }
});
