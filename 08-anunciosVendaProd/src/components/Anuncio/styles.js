import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  containerAnuncio: {
    display: "flex",
    alignItems: "center",
    width: 160,
    margin: 10
  },
  imagem: {
    width: 160,
    height: 160,
    marginBottom: 30
  },
  titulo: {
    fontWeight: "bold",
    margingBottom: 10
  },
  descricao: {
    marginTop: 20,
    textAlign: "justify"
  }
});
export { styles };