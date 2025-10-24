import { View, Text, Image, StyleSheet } from "react-native";

const TodaysBrew = () => {
  return (
    <View>
    <Text style={styles.sectionTitle}>Today's Brew</Text>
    <View style={styles.container}>
      
      <Image source={require('../assets/coffe.png')} style={styles.image} resizeMode="cover" />

      <View style={styles.textContainer}>
        <Text style={styles.title}>Expresso Delight</Text>
        <Text style={styles.description}> is simply dummy text 
          of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen 
           </Text>
      </View>
    </View>
    </View>
  );
};

export default TodaysBrew;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "center",
    backgroundColor:"#472719ff",
    padding:"20",
    borderRadius: 20
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#bebebeff", 
    marginTop: 30,
  },
  image: {
    width: "320",
    height: 150,
    position:"relative",
    bottom:"31",
  },
  textContainer: {
    alignItems: "center",
  },
  title: {
    position:"relative",
    bottom :"15",
    fontSize: 20,
    fontWeight: "600",
    color: "#c4c4c4ff",
  },
  description: {
    fontSize: 14,
    color: "#b8b6b6ff",
    marginTop: 5,
    textAlign: "center",
    width: "100px",
  },
});