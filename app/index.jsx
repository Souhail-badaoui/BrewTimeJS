import { View } from "react-native"
import Header from "../components/Header"
import TodaysBrew from "../components/TodaysBrew"
import OrderCard from "../components/OrderCard"


export default function index() {
  return (
    <View>
      <Header/>
      <TodaysBrew/>
      <OrderCard/>
    </View>
  )
}
