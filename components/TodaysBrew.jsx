import { View, Text, Image, StyleSheet } from "react-native";

const TodaysBrew = () => {
  return (
    <View style={styles.container}>
   
      <Text style={styles.sectionTitle}>Today's Brew</Text>
      
      <Image source={require('../assets/coffe.png')} style={styles.image} resizeMode="cover" />

      <View style={styles.textContainer}>
        <Text style={styles.title}>Expresso Delight</Text>
        <Text style={styles.description}> is simply dummy text 
          of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
             It has survived not only five centuries, but also the leap into electronic</Text>
      </View>
    </View>
  );
};

export default TodaysBrew;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4E342E", 
    marginBottom: 10,
  },
  image: {
    width: "90%",
    height: 150,
    borderRadius: 15,
  },
  textContainer: {
    marginTop: 15,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#3E2723",
  },
  description: {
    fontSize: 14,
    color: "#6D4C41",
    marginTop: 5,
    textAlign: "center",
    width: "100px",
  },
});