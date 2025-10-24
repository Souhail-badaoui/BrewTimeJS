
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const OrderCard = ({ image, name, description, onPress }) => {
  return (
    <View style={styles.card}>
   
      <Image source={image} style={styles.image} resizeMode="cover" />


      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>


        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Order Again</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#472719ff",
    borderRadius: 15,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3, 
  },
  image: {
    width: 100,
    height: 80,
    position: "relative",
    top :"10",
    borderRadius: 10,
  },
  info: {
    flex: 1,
    marginLeft: 15,
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    color: "#b4b4b4ff",
  },
  description: {
    fontSize: 13,
    color: "#dadadaff",
    marginVertical: 5,
  },
  button: {
    backgroundColor: "#8B4513",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
