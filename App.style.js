import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
  itemTextCompleted: {
    color: "white",
    textDecorationLine: "line-through",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  icon: {
    backgroundColor: "white",
    borderRadius: 100,
    padding: 10,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf:'center'
  },
});
