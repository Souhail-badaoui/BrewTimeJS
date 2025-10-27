import {  ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Welcome({ navigation }) {
  return (
    <SafeAreaProvider>
      <ScrollView>
          <View style={styles.container}>
      <Image
        source={require("../assets/coffe0.jpg")}
        style={styles.image}
      />
     
      <Text style={styles.title}>Welcome to BrewTime ☕</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Enter</Text>
      </TouchableOpacity>
      </View>
      </ScrollView>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c100b",
    alignItems: "center",
    justifyContent: "center",
   },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    color: "white",
    fontSize: 22,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#d2a679",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
