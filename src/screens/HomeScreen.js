import React, { useMemo, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
  TouchableOpacity,
  ScrollView,
  RefreshControl
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const stories = [
  { id: 's1', username: 'ava', image: 'https://i.pravatar.cc/100?img=2' },
  { id: 's2', username: 'leo', image: 'https://i.pravatar.cc/100?img=3' },
  { id: 's3', username: 'nora', image: 'https://i.pravatar.cc/100?img=5' },
  { id: 's4', username: 'zayn', image: 'https://i.pravatar.cc/100?img=7' },
  { id: 's5', username: 'mila', image: 'https://i.pravatar.cc/100?img=9' },
  { id: 's6', username: 'ari', image: 'https://i.pravatar.cc/100?img=11' },
  { id: 's7', username: 'sofia', image: 'https://i.pravatar.cc/100?img=13' },
  { id: 's8', username: 'yuki', image: 'https://i.pravatar.cc/100?img=15' },
  { id: 's9', username: 'liam', image: 'https://i.pravatar.cc/100?img=17' },
  { id: 's10', username: 'zoe', image: 'https://i.pravatar.cc/100?img=19' },
  { id: 's11', username: 'omar', image: 'https://i.pravatar.cc/100?img=21' },
  { id: 's12', username: 'ruby', image: 'https://i.pravatar.cc/100?img=23' }
];

const posts = [
  {
    id: 'p1',
    username: 'ava',
    avatar: 'https://i.pravatar.cc/100?img=2',
    image: 'https://picsum.photos/id/1011/700/700',
    caption: 'City vibes tonight'
  },
  {
    id: 'p2',
    username: 'leo',
    avatar: 'https://i.pravatar.cc/100?img=3',
    image: 'https://picsum.photos/id/1035/700/700',
    caption: 'Coffee and code'
  },
  {
    id: 'p3',
    username: 'julia',
    avatar: 'https://i.pravatar.cc/100?img=20',
    image: 'https://picsum.photos/id/1027/700/700',
    caption: 'Weekend frame'
  },
  {
    id: 'p4',
    username: 'nora',
    avatar: 'https://i.pravatar.cc/100?img=5',
    image: 'https://picsum.photos/id/1040/700/700',
    caption: 'Minimal desk setup'
  },
  {
    id: 'p5',
    username: 'zayn',
    avatar: 'https://i.pravatar.cc/100?img=7',
    image: 'https://picsum.photos/id/1003/700/700',
    caption: 'Golden hour sprint'
  },
  {
    id: 'p6',
    username: 'sofia',
    avatar: 'https://i.pravatar.cc/100?img=13',
    image: 'https://picsum.photos/id/1005/700/700',
    caption: 'Soft tones only'
  },
  {
    id: 'p7',
    username: 'liam',
    avatar: 'https://i.pravatar.cc/100?img=17',
    image: 'https://picsum.photos/id/1016/700/700',
    caption: 'Trail run before sunrise'
  },
  {
    id: 'p8',
    username: 'zoe',
    avatar: 'https://i.pravatar.cc/100?img=19',
    image: 'https://picsum.photos/id/1020/700/700',
    caption: 'Studio light test'
  },
  {
    id: 'p9',
    username: 'omar',
    avatar: 'https://i.pravatar.cc/100?img=21',
    image: 'https://picsum.photos/id/1037/700/700',
    caption: 'Street textures and tones'
  },
  {
    id: 'p10',
    username: 'ruby',
    avatar: 'https://i.pravatar.cc/100?img=23',
    image: 'https://picsum.photos/id/1043/700/700',
    caption: 'Weekend market colors'
  },
  {
    id: 'p11',
    username: 'mika',
    avatar: 'https://i.pravatar.cc/100?img=24',
    image: 'https://picsum.photos/id/1057/700/700',
    caption: 'Rooftop breeze'
  },
  {
    id: 'p12',
    username: 'tara',
    avatar: 'https://i.pravatar.cc/100?img=26',
    image: 'https://picsum.photos/id/1060/700/700',
    caption: 'Evening city frame'
  }
];

export default function HomeScreen({ navigation, likedState, setLikedState }) {
  const [localLiked, setLocalLiked] = useState({});
  const liked = likedState || localLiked;
  const setLiked = setLikedState || setLocalLiked;
  const [feedPosts, setFeedPosts] = useState(posts);
  const [refreshing, setRefreshing] = useState(false);
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
      setLiked((prev) => ({ ...prev, [postId]: !prev[postId] }));
    }

    lastTapRef.current[postId] = now;
  };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setFeedPosts((prev) => {
        if (prev.length <= 1) return prev;
        return [...prev.slice(1), prev[0]];
      });
      setRefreshing(false);
    }, 700);
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
        <View>
          <Text style={styles.postUser}>{item.username}</Text>
          <Text style={styles.postMeta}>Following</Text>
        </View>
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
        data={feedPosts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.feed}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{ height: 24 }} />}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#f8f9fb"
            colors={['#2f8cff']}
            progressBackgroundColor="#1b1f27"
          />
        }
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
    backgroundColor: '#0f1115'
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#1b1d22'
  },
  logo: {
    color: '#f8f9fb',
    fontSize: 26,
    fontWeight: '700'
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerEmoji: {
    fontSize: 20,
    marginLeft: 14
  },
  storyList: {
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1b1d22'
  },
  storyItem: {
    width: 78,
    alignItems: 'center',
    marginRight: 12
  },
  storyRing: {
    width: 68,
    height: 68,
    borderRadius: 34,
    padding: 2,
    backgroundColor: '#ff8f3a',
    borderColor: '#ff4a7b',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#0f1115'
  },
  storyName: {
    color: '#c8cbd3',
    marginTop: 6,
    fontSize: 12
  },
  feed: {
    paddingHorizontal: 0,
    paddingTop: 6
  },
  postCard: {
    backgroundColor: '#0f1115',
    marginBottom: 10,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1b1d22'
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 12
  },
  postAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10
  },
  postUser: {
    color: '#f8f9fb',
    fontWeight: '600'
  },
  postMeta: {
    color: '#9ea3af',
    fontSize: 12,
    marginTop: 1
  },
  postImage: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#1a1d24'
  },
  postActions: {
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 10
  },
  actionEmoji: {
    fontSize: 22,
    marginRight: 14
  },
  likesText: {
    color: '#f8f9fb',
    marginTop: 8,
    fontWeight: '600',
    paddingHorizontal: 12
  },
  captionText: {
    color: '#c1c5ce',
    marginTop: 3,
    paddingHorizontal: 12
  },
  captionUser: {
    color: '#f8f9fb',
    fontWeight: '600'
  },
  likesBadge: {
    position: 'absolute',
    right: 14,
    bottom: 10,
    backgroundColor: '#1d212a',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 6
  },
  likesBadgeText: {
    color: '#f8f9fb',
    fontWeight: '600'
  }
});
