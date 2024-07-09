import React from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";

const data = [
  {
    id: "1",
    name: "John Doe",
    email: "johndoe@example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "janesmith@example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "3",
    name: "Alice Johnson",
    email: "alicejohnson@example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "4",
    name: "Bob Brown",
    email: "bobbrown@example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "5",
    name: "Charlie White",
    email: "charliewhite@example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "6",
    name: "Daniel Green",
    email: "danielgreen@example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "7",
    name: "Emily Clark",
    email: "emilyclark@example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "8",
    name: "Frank Miller",
    email: "frankmiller@example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "9",
    name: "Grace Lee",
    email: "gracelee@example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "10",
    name: "Hank Turner",
    email: "hankturner@example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "11",
    name: "Ivy King",
    email: "ivyking@example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "12",
    name: "Jack Hall",
    email: "jackhall@example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "13",
    name: "Kathy Young",
    email: "kathyyoung@example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "14",
    name: "Larry Scott",
    email: "larryscott@example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "15",
    name: "Megan Brown",
    email: "meganbrown@example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "16",
    name: "Nancy Adams",
    email: "nancyadams@example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "17",
    name: "Oscar Phillips",
    email: "oscarphillips@example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "18",
    name: "Pamela Mitchell",
    email: "pamelamitchell@example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "19",
    name: "Quincy Ross",
    email: "quincyross@example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "20",
    name: "Rachel Walker",
    email: "rachelwalker@example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "21",
    name: "Sam Harris",
    email: "samharris@example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "22",
    name: "Tina Lewis",
    email: "tinalewis@example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "23",
    name: "Uma Patel",
    email: "umapatel@example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "24",
    name: "Victor Morgan",
    email: "victormorgan@example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "25",
    name: "Wendy Bell",
    email: "wendybell@example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "26",
    name: "Xander Cook",
    email: "xandercook@example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "27",
    name: "Yvonne Rivera",
    email: "yvonnerivera@example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "28",
    name: "Zachary Butler",
    email: "zacharybutler@example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "29",
    name: "Amelia Fox",
    email: "ameliafox@example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "30",
    name: "Brian Wood",
    email: "brianwood@example.com",
    image: "https://via.placeholder.com/150",
  },
];

const FlatListComponent = () => {
  return (
    <View>
      <Text>List of items using flatList component</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.itemsList}>
            <Text style={{ textAlign: "center", color: "white" }}>
              {item.name}
            </Text>
            <Text style={{ textAlign: "center", color: "white" }}>
              {item.email}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      {/* list using map method 
      <ScrollView>
        <Text>List using map method</Text>
        {data.map((item) => (
          <View style={styles.itemsList}>
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>
          </View>
        ))}
      </ScrollView>
      */}
    </View>
  );
};

export default FlatListComponent;

const styles = StyleSheet.create({
  itemsList: {
    paddingVertical: 20,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "blue",
    marginVertical: 10,
  },
});
