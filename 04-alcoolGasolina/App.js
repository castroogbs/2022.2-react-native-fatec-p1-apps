import React, { Component } from "react";
import { View, Text, Pressable, TextInput, Image } from "react-native";
import { styles } from "./src/styles/styles";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      combustivelMaisEmConta: "",
    };
    this.pegaAlcoolVal = this.pegaAlcoolVal.bind(this);
    this.pegaGasolinaVal = this.pegaGasolinaVal.bind(this);
    this.verificaCombustivelMaisEmConta = this.verificaCombustivelMaisEmConta.bind(this);
  }
  
  pegaAlcoolVal(alcoolVal) {
    if(alcoolVal.toString().indexOf(',') !== -1) {
      alcoolVal = parseFloat(alcoolVal.toString().replace(',', '.'));
    }
      this.setState({ alcoolVal });
  }
  
  pegaGasolinaVal(gasolinaVal) {
      if(gasolinaVal.toString().indexOf(',') !== -1) {
        gasolinaVal = parseFloat(gasolinaVal.toString().replace(',', '.'));
      }
      
      this.setState({ gasolinaVal });
  }

  verificaCombustivelMaisEmConta() {
    let combustivelMaisEmConta = this.state.alcoolVal / this.state.gasolinaVal;
    let eMenorQueZeroSete = combustivelMaisEmConta < 0.7;
    this.setState({ combustivelMaisEmConta: eMenorQueZeroSete ? "Álcool" : "Gasolina" });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Alcool ou Gasolina</Text>

        <Image
          source={{ uri: "https://complemento.veja.abril.com.br/economia/calculadora-combustivel/img/abre.jpg" }}
          style={{ width: 300, height: 300, marginBottom: 20 }}
        />

        <TextInput
          style={styles.input}
          placeholder="Preço do Álcool:"
          onChangeText={this.pegaAlcoolVal}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Preço da Gasolina:"
          onChangeText={this.pegaGasolinaVal}
        />

        <Pressable
          style={[styles.botao, styles.botaoVermelho]}
          onPress={this.verificaCombustivelMaisEmConta}
        >
          <Text style={[styles.textoBotao, styles.textoBotaoVermelho]}>Verificar</Text>
        </Pressable>

        <Text style={styles.resultado}>Resultado: {this.state.combustivelMaisEmConta}</Text>
      </View>
    );
  }
}
export default App;
