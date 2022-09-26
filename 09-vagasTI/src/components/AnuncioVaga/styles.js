import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  containerAnuncio: {
    display: "flex",
    margin: 10,
    backgroundColor: "lightgray",
    padding: 5,
    borderRadius: 5
  },
  titulo: {
    fontWeight: "bold",
    color: "blue"
  },
  descricao: {
    textAlign: "justify"
  }
});
export { styles };