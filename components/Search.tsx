import {
  TextInput,
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
} from "react-native";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function Search() {
  const data = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
  ];
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (text: string) => {
    setSearchText(text);

    if (text.trim() === "") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) =>
        item.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchText}
          onChangeText={handleSearch}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <Pressable style={styles.searchButton}>
          <MaterialIcons name="search" size={30} color="#d9d9d9" />
        </Pressable>
      </View>

      {!isFocused ? (
        <View />
      ) : (
        <View style={styles.itemsContainer}>
          <FlatList
            data={filteredData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <Text>{item}</Text>}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  searchInput: {
    width: "75%",
    height: 50,
    borderColor: "#222222",
    backgroundColor: "#d9d9d9",
    borderRadius: 5,
    paddingHorizontal: 15,
    marginTop: 20,
  },
  searchButton: {
    top: 10,
    width: 45,
    height: 50,
    backgroundColor: "#222222",
    borderRadius: 5,
    padding: 9,
  },
  itemsContainer: {
    width: "75%",
    backgroundColor: "#d4944d",
  },
});
