import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const DATA = [
  {
    id: 1,
    title: "Meditation",
    completed: false,
  },
  {
    id: 2,
    title: "Coding",
    completed: false,
  },
  {
    id: 3,
    title: "Workout",
    completed: false,
  },
];

const TodoItem = (props) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{props.item.title}</Text>
    </View>
  );
};

export default function App() {
  const [items, setItems] = useState(DATA);
  const [text, setText] = useState("");

  const addNewTodo = () => {
    let newTodo = {
      id: items.length +1,
      title: text,
      completed: false,
    };
    if (!text) Alert.alert('Add Todo')
    else{
      setItems([...items, newTodo]);
      setText('')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello Maya</Text>
      <StatusBar style="auto" />
      <TextInput style={styles.input} onChangeText={setText} value={text} />
      <Button title="Add Todo" onPress={addNewTodo} />
      <FlatList
        style={styles.list}
        data={items}
        renderItem={({ item }) => <TodoItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    width: 200,
    height: 40,
    borderRadius: 10,
    padding: 10,
  },
  list: {
    alignSelf: "stretch",
  },
  item: {
    backgroundColor: "#6DB6DD",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  itemText: {
    color: "white",
  },
});
