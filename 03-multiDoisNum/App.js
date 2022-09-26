import React, { Component } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import { styles } from "./src/styles/styles";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      multiRes: 0,
    };
    this.pegaNumUm = this.pegaNumUm.bind(this);
    this.pegaNumDois = this.pegaNumDois.bind(this);
    this.multiNums = this.multiNums.bind(this);
  }
  
  pegaNumUm(numUm) {
    if(numUm.toString().indexOf(',') !== -1) {
      numUm = parseFloat(numUm.toString().replace(',', '.'));
    }
      this.setState({ numUm });
  }
  
  pegaNumDois(numDois) {
      if(numDois.toString().indexOf(',') !== -1) {
        numDois = parseFloat(numDois.toString().replace(',', '.'));
      }
      
      this.setState({ numDois });
  }

  multiNums() {
    let multiRes = this.state.numUm * this.state.numDois;
    this.setState({ multiRes });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Multiplicador de Números</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite o primeiro número..."
          onChangeText={this.pegaNumUm}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Digite o segundo número..."
          onChangeText={this.pegaNumDois}
        />

        <Pressable
          style={[styles.botao, styles.botaoVermelho]}
          onPress={this.multiNums}
        >
          <Text style={[styles.textoBotao, styles.textoBotaoVermelho]}>Calcular</Text>
        </Pressable>

        <Text style={styles.resultado}>Resultado: {this.state.multiRes}</Text>
      </View>
    );
  }
}
export default App;
