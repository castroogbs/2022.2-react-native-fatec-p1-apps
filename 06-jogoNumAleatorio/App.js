import React, { Component } from "react";
import { View, Text, Pressable, TextInput, Image } from "react-native";
import { styles } from "./src/styles/styles";
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      numeroAleatorio: 0
    };
    this.gerarNumAleatorio = this.gerarNumAleatorio.bind(this);
  }

  gerarNumAleatorio() {
    let novoNumeroAleatorio = Math.floor(Math.random() * 10);
    this.setState({ numeroAleatorio: novoNumeroAleatorio });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Jogo do Número Aleatório</Text>

        <Image
          source={{ uri: "https://uploads.metropoles.com/wp-content/uploads/2020/07/17173214/S%C3%A9rgio-Mallandro.jpg" }}
          style={{ width: 300, height: 300, marginBottom: 20 }}
        />

        <Text style={styles.texto}>Pense em um número de 0 a 10:</Text>

        <Text style={styles.resultado}>{this.state.numeroAleatorio}</Text>

        <Pressable
          style={[styles.botao, styles.botaoVermelho]}
          onPress={this.gerarNumAleatorio}
        >
          <Text style={[styles.textoBotao, styles.textoBotaoVermelho]}>Descobrir</Text>
        </Pressable>
      </View>
    );
  }
}
export default App;
