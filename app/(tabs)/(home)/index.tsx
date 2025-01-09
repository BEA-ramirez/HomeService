import { View } from "react-native";
import Search from "@/components/Search";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View>
      <Search />
      <Link href={"/(tabs)/(home)/genCategories"}>Go to all categories</Link>
    </View>
  );
}
