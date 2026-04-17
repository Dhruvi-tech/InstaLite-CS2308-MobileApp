import React, { useMemo, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const stories = [
  { id: 's1', username: 'ava', image: 'https://i.pravatar.cc/100?img=2' },
  { id: 's2', username: 'leo', image: 'https://i.pravatar.cc/100?img=3' }
];

const posts = [
  {
    id: 'p1',
    username: 'ava',
    avatar: 'https://i.pravatar.cc/100?img=2',
    image: 'https://picsum.photos/400/400?random=1',
    caption: 'City vibes tonight'
  },
  {
    id: 'p2',
    username: 'leo',
    avatar: 'https://i.pravatar.cc/100?img=3',
    image: 'https://picsum.photos/400/400?random=2',
    caption: 'Coffee and code'
  },
  {
    id: 'p3',
    username: 'julia',
    avatar: 'https://i.pravatar.cc/100?img=2',
    image: 'https://picsum.photos/400/400?random=3',
    caption: 'Weekend frame'
  }
];

export default function HomeScreen({ navigation }) {
  const [liked, setLiked] = useState({});
  const lastTapRef = useRef({});

  const likedCount = useMemo(() => {
    return Object.values(liked).filter(Boolean).length;
  }, [liked]);

  const toggleLike = (postId) => {
    setLiked((prev) => ({ ...prev, [postId]: !prev[postId] }));
  };

  const onImagePress = (postId) => {
    const now = Date.now();
    const lastTap = lastTapRef.current[postId] || 0;

    if (now - lastTap < 280) {
      setLiked((prev) => ({ ...prev, [postId]: true }));
    }

    lastTapRef.current[postId] = now;
  };

  const renderStory = ({ item }) => (
    <View style={styles.storyItem}>
      <View style={styles.storyRing}>
        <Image source={{ uri: item.image }} style={styles.storyImage} />
      </View>
      <Text style={styles.storyName}>{item.username}</Text>
    </View>
  );

  const renderPost = ({ item }) => (
    <View style={styles.postCard}>
      <View style={styles.postHeader}>
        <Image source={{ uri: item.avatar }} style={styles.postAvatar} />
        <Text style={styles.postUser}>{item.username}</Text>
      </View>

      <Pressable onPress={() => onImagePress(item.id)}>
        <Image source={{ uri: item.image }} style={styles.postImage} />
      </Pressable>

      <View style={styles.postActions}>
        <TouchableOpacity onPress={() => toggleLike(item.id)} activeOpacity={0.8}>
          <Text style={styles.actionEmoji}>{liked[item.id] ? '❤️' : '🤍'}</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.actionEmoji}>💬</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.actionEmoji}>✈️</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.likesText}>{liked[item.id] ? 'Liked by you' : 'Tap to like'}</Text>
      <Text style={styles.captionText}>
        <Text style={styles.captionUser}>{item.username}</Text> {item.caption}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.logo}>Insta Lite</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
            <Text style={styles.headerEmoji}>➕</Text>
          </TouchableOpacity>
          <Text style={styles.headerEmoji}>💬</Text>
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.storyList}
      >
        {stories.map((story) => (
          <View key={story.id}>{renderStory({ item: story })}</View>
        ))}
      </ScrollView>

      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.feed}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{ height: 24 }} />}
      />

      {likedCount > 0 ? (
        <View style={styles.likesBadge}>
          <Text style={styles.likesBadgeText}>{likedCount} liked</Text>
        </View>
      ) : null}
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
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700'
  },
  headerRight: {
    flexDirection: 'row',
    gap: 14,
    alignItems: 'center'
  },
  headerEmoji: {
    fontSize: 20
  },
  storyList: {
    paddingHorizontal: 12,
    paddingBottom: 10
  },
  storyItem: {
    width: 74,
    alignItems: 'center',
    marginRight: 12
  },
  storyRing: {
    width: 68,
    height: 68,
    borderRadius: 34,
    padding: 2,
    backgroundColor: '#ff7a18',
    borderColor: '#ff4f81',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#000'
  },
  storyName: {
    color: '#aaa',
    marginTop: 6,
    fontSize: 12
  },
  feed: {
    paddingHorizontal: 12,
    gap: 14
  },
  postCard: {
    backgroundColor: '#111',
    borderRadius: 16,
    padding: 10,
    marginBottom: 14
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  postAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8
  },
  postUser: {
    color: '#fff',
    fontWeight: '600'
  },
  postImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 14,
    backgroundColor: '#222'
  },
  postActions: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 14
  },
  actionEmoji: {
    fontSize: 22
  },
  likesText: {
    color: '#fff',
    marginTop: 8,
    fontWeight: '600'
  },
  captionText: {
    color: '#bbb',
    marginTop: 3
  },
  captionUser: {
    color: '#fff',
    fontWeight: '600'
  },
  likesBadge: {
    position: 'absolute',
    right: 14,
    bottom: 10,
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 6
  },
  likesBadgeText: {
    color: '#fff',
    fontWeight: '600'
  }
});
