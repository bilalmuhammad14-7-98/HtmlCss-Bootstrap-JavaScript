import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Dashboard({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Dashboard Screen</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Pickup"
          onPress={() => {
            navigation.navigate("Pickup");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonContainer: {},
});
