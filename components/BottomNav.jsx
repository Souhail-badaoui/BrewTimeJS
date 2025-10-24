import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const BottomNav = () => {
  return (
    <View style={styles.nav}>
      <TouchableOpacity><Text style={styles.icon}>🏠</Text></TouchableOpacity>
        <Text style={styles.text}>Home</Text>
        
      <TouchableOpacity><Text style={styles.icon}>☕</Text></TouchableOpacity>
        <Text style={styles.text}> Menu</Text>
      
      <TouchableOpacity><Text style={styles.icon}>🛒</Text> </TouchableOpacity>
        <Text style={styles.text}>Orders</Text>
      <TouchableOpacity><Text style={styles.icon}>❤️</Text></TouchableOpacity>
        <Text style={styles.text}> Favorites</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems:"center",
    backgroundColor: "#1c100b",
    paddingVertical: 20,
    position: "absolute",
    bottom: 20,
    right: 20,
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  text: {
    fontSize: 16,
    color:"white",
  },
  icon :{
    bottom:"20",
    left:"44",
  }
});

export default BottomNav;
