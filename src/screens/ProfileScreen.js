import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';
import profile from '../assets/images/profile.png';

export default function ProfileScreen({ navigation }) {
  const options = [
    { label: '🕒 Recent Orders', route: 'Orders' },
    { label: '📍 Saved Addresses', route: 'Addresses' },
    { label: '📞 Customer Care', route: 'CustomerCare' },
    { label: '🚪 Logout', route: 'Tabs' }
  ];

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.topHeader}>
        <Text style={styles.topIcon}>←</Text>
        <Text style={styles.topIcon}>🔔</Text>
      </View>

      <Image source={profile} style={styles.profileImage} />
      <Text style={styles.name}>User Name</Text>
      <Text>9876543210</Text>

      <View style={styles.rewardCard}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Orders')}>
          <Text style={styles.rewardText}>Show Crowns</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.btn}
          onPress={() => navigation.navigate('Menu')}
        >
          <Text style={{ color: '#fff' }}>Redeem</Text>
        </TouchableOpacity>
      </View>

      {options.map((item, i) => (
        <TouchableOpacity
          key={i}
          activeOpacity={0.7}
          onPress={() => navigation.navigate(item.route)}
        >
          <Text style={styles.option}>{item.label}</Text>
        </TouchableOpacity>
      ))}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 80,
    backgroundColor: '#f8f6f2',
    flex: 1
  },

  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10
  },

  topIcon: {
    fontSize: 18
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10
  },

  rewardCard: {
    backgroundColor: '#5c2c06',
    padding: 15,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20
  },

  rewardText: {
    color: '#fff'
  },

  btn: {
    backgroundColor: '#d62300',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center'
  },

  option: {
    marginVertical: 10,
    fontSize: 16
  }
});
