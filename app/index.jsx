import { View , StyleSheet } from "react-native"
import Header from "../components/Header"
import TodaysBrew from "../components/TodaysBrew"
import Order from "../components/Order"
import BottomNav from "../components/BottomNav"
import { ScrollView } from "react-native"

export default function index() {
  return (
    <View style={styles.container}>
    <ScrollView style={styles.content} contentContainerStyle={{ paddingBottom: 100 }}>
      <Header/>
      <TodaysBrew/>
      <Order/>
    </ScrollView>
       <BottomNav/>
       </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#1c100b",
  },
  content: {
    padding: 20,
    paddingBottom: 100, 
  },
});