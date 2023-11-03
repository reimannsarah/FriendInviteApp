import React from "react";
import { View, Text } from "react-native"

const Friend = (props) => {
  return (
    <View key={props.key}>
      <Text>{props.name}</Text>
      <Text>{props.email}</Text>
    </View>
  )
}

export default Friend;