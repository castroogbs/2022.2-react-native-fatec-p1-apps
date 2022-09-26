import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "orange",
    marginBottom: 40,
    fontSize: 30
  },
  contador: {
    borderWidth: 1,
    borderColor: "#222",
    fontSize: 80,
    textAlign: "center",
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 45,
    paddingRight: 45,
    marginBottom: 20,
  },
  botao: {
    borderWidth: 1,
    width: 250,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textoBotao: {
    fontSize: 35,
  },
  botaoVerde: {
    borderColor: "green",
    color: "green",
  },
  botaoVermelho: {
    borderColor: "red",
    color: "red",
  },
  textoBotaoVerde: {
    color: "green",
  },
  textoBotaoVermelho: {
    color: "red",
  },
});
export { styles };
