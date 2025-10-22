import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      {/* Logo + Title */}
      <View style={styles.leftSection}>
        {/* <Image
          source={require("../assets/logo.png")} 
          style={styles.logo}
        /> */}
        <Text style={styles.title}>BrewTime</Text>
      </View>

      {/* Menu Icon */}
      <TouchableOpacity style={styles.menuButton}>
        <Ionicons name="menu" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    // paddingVertical: 10,
    backgroundColor: "#2a1c14", 
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 32,
    height: 32,
    marginRight: 10,
    borderRadius: 8,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    letterSpacing: 1,
  },
  menuButton: {
    padding: 5,
  },
});
