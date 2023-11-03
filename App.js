import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Button from './components/atoms/Button';
import Home from './components/templates/Home';
import FriendsModal from './components/organisms/FriendsModal';

export default function App() {
  const [toggleModal, setToggleModal] = useState(false);

  const viewFriends = () => {
    setToggleModal(!toggleModal)
  }

  return (
    <View style={styles.container}>
      {(toggleModal) ? <FriendsModal /> : <Home showModal={viewFriends} />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
