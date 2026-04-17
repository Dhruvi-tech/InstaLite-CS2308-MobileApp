import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const gridImages = [
  'https://picsum.photos/id/1002/700/700',
  'https://picsum.photos/id/1004/700/700',
  'https://picsum.photos/id/1015/700/700',
  'https://picsum.photos/id/1024/700/700',
  'https://picsum.photos/id/1025/700/700',
  'https://picsum.photos/id/1031/700/700',
  'https://picsum.photos/id/1033/700/700',
  'https://picsum.photos/id/1038/700/700',
  'https://picsum.photos/id/1044/700/700',
  'https://picsum.photos/id/1047/700/700',
  'https://picsum.photos/id/1050/700/700',
  'https://picsum.photos/id/1062/700/700',
  'https://picsum.photos/id/1067/700/700',
  'https://picsum.photos/id/1070/700/700',
  'https://picsum.photos/id/1078/700/700',
  'https://picsum.photos/id/1083/700/700',
  'https://picsum.photos/id/1084/700/700',
  'https://picsum.photos/id/1085/700/700',
  'https://picsum.photos/id/1081/700/700',
  'https://picsum.photos/id/1082/700/700'
];

const highlights = [
  { id: 'h1', name: 'Travel', image: 'https://i.pravatar.cc/100?img=22' },
  { id: 'h2', name: 'Food', image: 'https://i.pravatar.cc/100?img=25' },
  { id: 'h3', name: 'Work', image: 'https://i.pravatar.cc/100?img=28' },
  { id: 'h4', name: 'Gym', image: 'https://i.pravatar.cc/100?img=31' },
  { id: 'h5', name: 'Mood', image: 'https://i.pravatar.cc/100?img=33' },
  { id: 'h6', name: 'Pets', image: 'https://i.pravatar.cc/100?img=35' },
  { id: 'h7', name: 'Daily', image: 'https://i.pravatar.cc/100?img=37' },
  { id: 'h8', name: 'Art', image: 'https://i.pravatar.cc/100?img=39' }
];

export default function ProfileScreen({ bioValue, onBioChange }) {
  const [localBio, setLocalBio] = useState('Creative shots, daily moments, and clean edits.');
  const bio = bioValue || localBio;
  const setBio = onBioChange || setLocalBio;
  const [draftBio, setDraftBio] = useState(bio);
  const [editingBio, setEditingBio] = useState(false);

  useEffect(() => {
    if (!editingBio) {
      setDraftBio(bio);
    }
  }, [bio, editingBio]);

  const startEditingBio = () => {
    setDraftBio(bio);
    setEditingBio(true);
  };

  const saveBio = () => {
    const next = draftBio.trim();
    setBio(next.length > 0 ? next : bio);
    setEditingBio(false);
  };

  const cancelBio = () => {
    setDraftBio(bio);
    setEditingBio(false);
  };

  const renderGrid = ({ item }) => (
    <Image source={{ uri: item }} style={styles.gridImage} />
  );

  const renderHighlight = ({ item }) => (
    <View style={styles.highlightItem}>
      <View style={styles.highlightRing}>
        <Image source={{ uri: item.image }} style={styles.highlightImage} />
      </View>
      <Text style={styles.highlightName}>{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={gridImages}
        keyExtractor={(item, idx) => `${item}-${idx}`}
        renderItem={renderGrid}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>your_profile</Text>
            </View>

            <View style={styles.profileTop}>
              <Image
                source={{ uri: 'https://i.pravatar.cc/150?img=1' }}
                style={styles.profileImage}
              />

              <View style={styles.statsRow}>
                <View style={styles.statItem}>
                  <Text style={styles.statValue}>126</Text>
                  <Text style={styles.statLabel}>Posts</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statValue}>4.9k</Text>
                  <Text style={styles.statLabel}>Followers</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statValue}>521</Text>
                  <Text style={styles.statLabel}>Following</Text>
                </View>
              </View>
            </View>

            <Text style={styles.bioTitle}>Insta Lite User</Text>

            {editingBio ? (
              <View style={styles.bioEditorWrap}>
                <TextInput
                  value={draftBio}
                  onChangeText={setDraftBio}
                  style={styles.bioInput}
                  multiline
                  maxLength={140}
                  placeholder="Write your bio"
                  placeholderTextColor="#7f8592"
                />
                <View style={styles.bioActionsRow}>
                  <TouchableOpacity style={styles.bioCancelBtn} onPress={cancelBio} activeOpacity={0.85}>
                    <Text style={styles.bioCancelText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.bioSaveBtn} onPress={saveBio} activeOpacity={0.85}>
                    <Text style={styles.bioSaveText}>Save</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View style={styles.bioViewRow}>
                <Text style={styles.bioText}>{bio}</Text>
                <TouchableOpacity onPress={startEditingBio} activeOpacity={0.8}>
                  <Text style={styles.bioEditText}>Edit bio</Text>
                </TouchableOpacity>
              </View>
            )}

            <View style={styles.actionRow}>
              <View style={styles.actionButton}>
                <Text style={styles.actionText}>Edit profile</Text>
              </View>
              <View style={styles.actionButtonLast}>
                <Text style={styles.actionText}>Share profile</Text>
              </View>
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.highlightsRow}
            >
              <View style={styles.newHighlightItem}>
                <View style={styles.newHighlightRing}>
                  <Text style={styles.newHighlightPlus}>＋</Text>
                </View>
                <Text style={styles.highlightName}>New</Text>
              </View>
              {highlights.map((item) => (
                <View key={item.id}>{renderHighlight({ item })}</View>
              ))}
            </ScrollView>

            <View style={styles.gridHeader}>
              <Text style={styles.gridHeaderText}>Posts</Text>
            </View>
          </>
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
  header: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 12
  },
  headerTitle: {
    color: '#f8f9fb',
    fontSize: 18,
    fontWeight: '700'
  },
  profileTop: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12
  },
  profileImage: {
    width: 92,
    height: 92,
    borderRadius: 46,
    marginRight: 16,
    borderWidth: 2,
    borderColor: '#ff8f3a'
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
    color: '#f8f9fb',
    fontSize: 18,
    fontWeight: '700'
  },
  statLabel: {
    color: '#a6abb6',
    fontSize: 12,
    marginTop: 2
  },
  bioTitle: {
    color: '#f8f9fb',
    fontWeight: '700',
    fontSize: 14,
    paddingHorizontal: 16
  },
  bioText: {
    color: '#c1c5ce',
    marginTop: 4,
    marginBottom: 8,
    fontSize: 13,
    lineHeight: 19
  },
  bioViewRow: {
    paddingHorizontal: 16,
    marginBottom: 12
  },
  bioEditText: {
    color: '#4da0ff',
    fontSize: 13,
    fontWeight: '700'
  },
  bioEditorWrap: {
    paddingHorizontal: 16,
    marginBottom: 12
  },
  bioInput: {
    backgroundColor: '#1b1f27',
    borderWidth: 1,
    borderColor: '#2a303b',
    color: '#f8f9fb',
    borderRadius: 10,
    minHeight: 72,
    textAlignVertical: 'top',
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  bioActionsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 8
  },
  bioCancelBtn: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginRight: 8
  },
  bioCancelText: {
    color: '#aeb3bf',
    fontWeight: '600'
  },
  bioSaveBtn: {
    backgroundColor: '#2f8cff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#4da0ff',
    paddingHorizontal: 12,
    paddingVertical: 6
  },
  bioSaveText: {
    color: '#f8f9fb',
    fontWeight: '700'
  },
  actionRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 14
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#1b1f27',
    borderWidth: 1,
    borderColor: '#2a303b',
    paddingVertical: 9,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 8
  },
  actionButtonLast: {
    flex: 1,
    backgroundColor: '#1b1f27',
    borderWidth: 1,
    borderColor: '#2a303b',
    paddingVertical: 9,
    borderRadius: 8,
    alignItems: 'center'
  },
  actionText: {
    color: '#f8f9fb',
    fontWeight: '600',
    fontSize: 13
  },
  highlightsRow: {
    paddingHorizontal: 12,
    paddingBottom: 14
  },
  newHighlightItem: {
    width: 76,
    alignItems: 'center',
    marginRight: 10
  },
  newHighlightRing: {
    width: 68,
    height: 68,
    borderRadius: 34,
    borderWidth: 1,
    borderColor: '#3d4454',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#171b23'
  },
  newHighlightPlus: {
    color: '#f8f9fb',
    fontSize: 26,
    marginTop: -2
  },
  highlightItem: {
    width: 76,
    alignItems: 'center',
    marginRight: 10
  },
  highlightRing: {
    width: 68,
    height: 68,
    borderRadius: 34,
    borderWidth: 1,
    borderColor: '#303746',
    alignItems: 'center',
    justifyContent: 'center'
  },
  highlightImage: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  highlightName: {
    color: '#aeb3bf',
    marginTop: 6,
    fontSize: 12
  },
  gridHeader: {
    borderTopWidth: 1,
    borderTopColor: '#1b1d22',
    borderBottomWidth: 1,
    borderBottomColor: '#1b1d22',
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 6
  },
  gridHeaderText: {
    color: '#f8f9fb',
    fontWeight: '600'
  },
  grid: {
    paddingHorizontal: 6,
    paddingBottom: 30
  },
  gridImage: {
    width: '31.7%',
    aspectRatio: 1,
    borderRadius: 8,
    margin: '0.8%',
    backgroundColor: '#1a1d24'
  }
});
