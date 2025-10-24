import { View } from "react-native"
import Header from "../components/Header"
import TodaysBrew from "../components/TodaysBrew"
import Order from "../components/Order"
import BottomNav from "../components/BottomNav"



export default function index() {
  return (
    <View>
      <Header/>
      <TodaysBrew/>
      <Order/>
      <BottomNav/>
    </View>
  )
}
