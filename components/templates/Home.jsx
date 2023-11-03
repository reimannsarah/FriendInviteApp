import Button from "../atoms/Button"
import { View, Text } from "react-native"


const Home = (props) => {
  return (
    <View>
      <Text>Invite Your Friends!</Text>
      <Button text="Invite Friends" press={props.showModal} />
    </View>
  )
}

export default Home;