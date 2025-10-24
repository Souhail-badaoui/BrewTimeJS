import { View, Text, FlatList, StyleSheet } from "react-native";
import OrderCard from "../components/OrderCard";

const orders = [
  {
    id: "1",
    image: require("../assets/latte.png"),
    name: "Latte",
    description: "Smooth and creamy with steamed milk.",
  },
  {
    id: "2",
    image: require("../assets/cappuccino.png"),
    name: "Cappuccino",
    description: "Bold espresso with frothy milk foam.",
  },
];

export default function OrdersSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orders</Text>

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <OrderCard
            image={item.image}
            name={item.name}
            description={item.description}
            onPress={() => console.log("Reordering:", item.name)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4E342E",
    marginLeft: 15,
    marginBottom: 10,
  },
});
