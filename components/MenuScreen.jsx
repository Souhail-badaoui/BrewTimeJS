import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";

export default function MenuScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>☕ BrewTime</Text>

      {/* Category Tabs */}
      <View style={styles.tabs}>
        <Text style={[styles.tab, styles.activeTab]}>Coffee</Text>
        <Text style={styles.tab}>Beans</Text>
        <Text style={styles.tab}>Tools</Text>
        <Text style={styles.tab}>Accessories</Text>
      </View>

      {/* Product 1 */}
      <View style={styles.card}>
        <Image source={require("../assets/coffe1.jpg")} style={styles.image} />
        <Text style={styles.name}>Espresso Blend</Text>
        <Text style={styles.desc}>Dark roast with notes of chocolate and caramel.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Shop Now</Text>
        </TouchableOpacity>
      </View>

      {/* Product 2 */}
      <View style={styles.card}>
        <Image source={require("../assets/coffe2.jpeg")} style={styles.image} />
        <Text style={styles.name}>Ethiopia Beans</Text>
        <Text style={styles.desc}>Light roast with floral and citrus notes.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Shop Now</Text>
        </TouchableOpacity>
      </View>

      {/* Product 3 */}
      <View style={styles.card}>
        <Image source={require("../assets/coffe3.jpeg")} style={styles.image} />
        <Text style={styles.name}>French Press</Text>
        <Text style={styles.desc}>Classic brewing method for a full-bodied cup.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Shop Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c100b",
    padding: 15,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  tab: {
    color: "#ccc",
    fontSize: 16,
  },
  activeTab: {
    color: "#e67e22",
    borderBottomWidth: 2,
    borderBottomColor: "#e67e22",
  },
  card: {
    backgroundColor: "#2b1a12",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 10,
  },
  name: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  desc: {
    color: "#ddd",
    fontSize: 14,
    marginVertical: 5,
  },
  button: {
    backgroundColor: "#e67e22",
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
