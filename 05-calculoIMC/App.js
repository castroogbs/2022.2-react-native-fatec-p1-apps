import React, { Component } from "react";
import { View, Text, Pressable, TextInput, Image } from "react-native";
import { styles } from "./src/styles/styles";
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      resultadoClassificacaoIMC: "",
      pesoKg: 0,
      alturaEmMetros: 0
    };
    this.pegaPeso = this.pegaPeso.bind(this);
    this.pegaAltura = this.pegaAltura.bind(this);
    this.calculaIMC = this.calculaIMC.bind(this);
  }

  classificacaoIMC(resultadoCalculoIMC) {
      if(resultadoCalculoIMC < 18.5)
        return "Abaixo do Peso";
      else if(resultadoCalculoIMC >= 18.5 && resultadoCalculoIMC <= 24.9)
        return "Peso Normal";
      else if(resultadoCalculoIMC >= 25 && resultadoCalculoIMC <= 29.9)
        return "Sobrepeso";
      else if(resultadoCalculoIMC >= 30 && resultadoCalculoIMC <= 34.9)
        return "Obesidade Grau I";
      else if(resultadoCalculoIMC >= 35 && resultadoCalculoIMC <= 39.9)
        return "Obesidade Grau II";
      else if(resultadoCalculoIMC >= 40)
        return "Obesidade Grau III ou Mórbida";
      else
        return "Indefinido";
  }
  
  pegaPeso(pesoKg) {
    if(pesoKg.toString().indexOf(',') !== -1) {
      pesoKg = parseFloat(pesoKg.toString().replace(',', '.'));
    }
      this.setState({ pesoKg });
  }
  
  pegaAltura(alturaCm) {
      if(alturaCm.toString().indexOf(',') !== -1) {
        alturaCm = parseFloat(alturaCm.toString().replace(',', '.'));
      }

      let alturaEmMetros =  alturaCm / 100;
      
      this.setState({ alturaEmMetros });
  }

  calculaIMC() {
    let resultadoCalculoIMC = this.state.pesoKg / (this.state.alturaEmMetros * this.state.alturaEmMetros);
    let resultadoClassificacaoIMC = this.classificacaoIMC(resultadoCalculoIMC);
    this.setState({ resultadoClassificacaoIMC });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Cálculo do IMC</Text>

        <Image
          source={{ uri: "https://www.plasticadosonho.com.br/wp-content/uploads/2017/12/blog-06-como-calcular-o-imc.jpg" }}
          style={{ width: 300, height: 300, marginBottom: 20 }}
        />

        <TextInput
          style={styles.input}
          placeholder="Peso (KG):"
          onChangeText={this.pegaPeso}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Altura (CM):"
          onChangeText={this.pegaAltura}
        />

        <Pressable
          style={[styles.botao, styles.botaoVermelho]}
          onPress={this.calculaIMC}
        >
          <Text style={[styles.textoBotao, styles.textoBotaoVermelho]}>Verificar</Text>
        </Pressable>

        <Text style={styles.resultado}>Classificação: {this.state.resultadoClassificacaoIMC}</Text>
      </View>
    );
  }
}
export default App;
