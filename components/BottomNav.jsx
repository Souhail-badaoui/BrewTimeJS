import { View,  TouchableOpacity ,StyleSheet } from "react-native";

const BottomNav = ()=>{
  
    <View style={styles.nav}>
       
        <TouchableOpacity>
            <Text style={styles.text}>🏠 Home</Text>
        </TouchableOpacity>
   
        <TouchableOpacity>
            <Text style={styles.text}>☕ Menu</Text>
        </TouchableOpacity>
         
        <TouchableOpacity>
            <Text style={styles.text}>🛒 Orders</Text>
        </TouchableOpacity>
    
        <TouchableOpacity>
            <Text style={styles.text}>❤️ Favorites</Text>
        </TouchableOpacity>
     
    </View>
    
}
const styles = StyleSheet.create({
 nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  text: {
    fontSize: 16,
  },
})
export default BottomNav();