import React from "react";
import { View } from "react-native";
import sampleData from "../../sampleData"
import Friend from "../atoms/Frriend";

const FriendsModal = () => {
  return (
    sampleData.map((friend, index) => {
      return (
      <View>
        <Friend name={friend.firstName} email={friend.email} key={index}/>
      </View>
      )
    })
  )
}

export default FriendsModal;