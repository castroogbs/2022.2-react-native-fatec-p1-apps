import React, { Component } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

class AnuncioVaga extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.containerAnuncio}>
        <Text style={styles.titulo}>{this.props.data.titulo}</Text>
        <Text>Salário: R$ {this.props.data.salario.toFixed(2)}</Text>
        <Text>Descrição: {this.props.data.descricao}</Text>
        <Text style={styles.descricao}>Contato: {this.props.data.contato}</Text>
      </View>
    );
  }
}

export default AnuncioVaga;