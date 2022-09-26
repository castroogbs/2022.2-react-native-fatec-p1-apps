import React, { Component } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import AnuncioVaga from "./src/components/AnuncioVaga";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vagas: [
        { id: 1, titulo: "Desenvolvedor Backend", salario: 3000, descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", contato: "vagasti@vagasti.com" },
        { id: 2, titulo: "Engenheiro de Dados", salario: 3000, descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", contato: "vagasti@vagasti.com" },
        { id: 3, titulo: "Desenvolvedor Front-end", salario: 3000, descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", contato: "vagasti@vagasti.com" },
        { id: 4, titulo: "Desenvolvedor FullStack", salario: 3000, descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", contato: "vagasti@vagasti.com" },
        { id: 5, titulo: "Desenvolvedor Backend", salario: 3000, descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", contato: "vagasti@vagasti.com" },
        { id: 6, titulo: "Engenheiro de Dados", salario: 3000, descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", contato: "vagasti@vagasti.com" },
        { id: 7, titulo: "Desenvolvedor Front-end", salario: 3000, descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", contato: "vagasti@vagasti.com" },
        { id: 8, titulo: "Desenvolvedor FullStack", salario: 3000, descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", contato: "vagasti@vagasti.com" },
        { id: 9, titulo: "Desenvolvedor Backend", salario: 3000, descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", contato: "vagasti@vagasti.com" },
        { id: 10, titulo: "Engenheiro de Dados", salario: 3000, descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", contato: "vagasti@vagasti.com" },
        { id: 11, titulo: "Desenvolvedor Front-end", salario: 3000, descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", contato: "vagasti@vagasti.com" },
        { id: 12, titulo: "Desenvolvedor FullStack", salario: 3000, descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", contato: "vagasti@vagasti.com" },
      ],
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Vagas</Text>
        <FlatList
          data={this.state.vagas}
          keyExtractor={(item) => item.id}
          renderItem={ ({item}) => <AnuncioVaga data={item}/>} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50
  },
  titulo: {
    color: "red",
    marginBottom: 10,
    fontSize: 30
  },
});

export default App;
