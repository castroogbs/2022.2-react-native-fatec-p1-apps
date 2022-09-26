import React, { Component } from "react";
import { View, TextInput, Text, Pressable } from "react-native";
import { styles } from "./styles";
import { Picker } from "@react-native-picker/picker";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
     valor: 0,
     de: "",
     para: "",
     resultado: 0,
     moedas: [
      { id: "en-US",  sigla: "USD", nome: "Dólar", cotacao: 5.26, data_cotacao: "2022-09-25" },
      { id: "pt-BR",  sigla: "BRL", nome: "Real", cotacao: 1, data_cotacao: "2022-09-25" },
      { id: "de-DE",  sigla: "EUR", nome: "Euro", cotacao: 5.10, data_cotacao: "2022-09-25" },
     ]
    };
    this.conversorDeMoedas = this.conversorDeMoedas.bind(this);
    this.pegaValor = this.pegaValor.bind(this);
  }

  pegaValor(valorAtual) {
    if(valorAtual.toString().indexOf(',') !== -1) {
      valorAtual = parseFloat(valorAtual.toString().replace(',', '.'));
    }
      this.setState({ valor: valorAtual });
  }

  conversorDeMoedas() {
    let { valor, de, para } = this.state;
    de = this.state.moedas[de];
    para = this.state.moedas[para];
    
    let resultado = (de.cotacao * valor) / para.cotacao;

    this.setState({ resultado: resultado.toLocaleString(para.id, {
      style: 'currency',
      currency: para.sigla
    }) });
  }

  render() {
    let moedasItens = this.state.moedas.map(
      (valor, chave) => {
        return <Picker.Item key={chave} value={chave} label={valor.nome} />;
      }
    );

    return (
      <View>
        <Text>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Valor:"
          onChangeText={this.pegaValor}
          value={this.state.nome}
        />

        <Text>De:</Text>
        <Picker
          selectedValue={this.state.de}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ de: itemValue })
          }
        >
          <Picker.Item key={""} value={""} label={"Selecione"} />
          {moedasItens}
        </Picker>

        <Text>Para:</Text>
        <Picker
          selectedValue={this.state.para}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ para: itemValue })
          }
        >
          <Picker.Item key={""} value={""} label={"Selecione"} />
          {moedasItens}
        </Picker>

        <Pressable
          style={styles.botao}
          onPress={this.conversorDeMoedas}
        >
          <Text style={styles.textoBotao}>
            Converter
          </Text>
        </Pressable>

        <Text style={styles.tituloResultado}>Resultado:</Text>
        <Text style={styles.resultado}>{this.state.resultado}</Text>
      </View>
    );
  }
}

export default Form;
