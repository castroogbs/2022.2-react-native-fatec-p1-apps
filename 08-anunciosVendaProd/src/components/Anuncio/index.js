import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";

class Anuncio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.containerAnuncio}>
         <Image
          source={{ uri: this.props.data.imagem }}
          style={ styles.imagem }
        />
        <Text style={styles.titulo}>{this.props.data.titulo}</Text>
        <Text style={styles.descricao}>{this.props.data.descricao}</Text>
      </View>
    );
  }
}

export default Anuncio;