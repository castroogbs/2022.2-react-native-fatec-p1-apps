import React, { Component } from "react";
import { View, Text, Pressable } from "react-native";
import { styles } from "./src/styles/styles";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qtdPessoas: 0,
    };
    this.rmUm = this.rmUm.bind(this);
    this.addUm = this.addUm.bind(this);
  }
  rmUm() {
    if (this.state.qtdPessoas > 0)
      this.setState({ qtdPessoas: this.state.qtdPessoas - 1 });
  }
  addUm() {
    this.setState({ qtdPessoas: this.state.qtdPessoas + 1 });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Contador de Pessoas</Text>

        <Text style={styles.contador}>{this.state.qtdPessoas}</Text>

        <Pressable
          style={[styles.botao, styles.botaoVerde]}
          onPress={this.addUm}
        >
          <Text style={[styles.textoBotao, styles.textoBotaoVerde]}>+</Text>
        </Pressable>

        <Pressable
          style={[styles.botao, styles.botaoVermelho]}
          onPress={this.rmUm}
        >
          <Text style={[styles.textoBotao, styles.textoBotaoVermelho]}>-</Text>
        </Pressable>
      </View>
    );
  }
}
export default App;
