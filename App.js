import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Button from './components/atoms/Button';
import FriendsModal from './components/organisms/FriendsModal';

export default function App() {
  const [toggleModal, setToggleModal] = useState(false);

  const viewFriends = () => {
    setToggleModal(!toggleModal)
  }

// toggle button, set modal to true when touched, pass props to modal so that modal knows
  return (
    <View style={styles.container}>
      {(toggleModal) ? <FriendsModal /> : <Text>Invite Your Friends!</Text>}
      <Button text="Invite Friends" press={viewFriends}/>
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
