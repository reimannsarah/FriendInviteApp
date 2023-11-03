import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.press}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Button;