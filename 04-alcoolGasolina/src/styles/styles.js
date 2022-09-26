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
  input: {
    borderWidth: 1,
    borderColor: "#222",
    textAlign: "center",
    marginBottom: 20,
    paddingVertical: 10,
    width: 250,
  },
  botao: {
    borderWidth: 1,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "lightblue",
    marginBottom: 20
  },
  textoBotao: {
    fontSize: 25,
    padding: 5,
    color: "lightblue"
  },
  resultado: {
    marginTop: 20,
    color: "green",
    fontSize: 20,
  }
});
export { styles };
