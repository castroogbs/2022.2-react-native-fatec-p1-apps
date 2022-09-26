import React, { Component } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import Anuncio from "./src/components/Anuncio";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anuncios: [
        { id: 1, titulo: "Notebook", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZYR_pG4-qFnghXSroNEyX84TIFWkVeKfP1g&usqp=CAU", descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
        { id: 2, titulo: "Televisão", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTINRxomLDXYVVzKT1FquHcrQVwj9eDUWg_TQ&usqp=CAU", descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
        { id: 3, titulo: "História em Quadrinhos", imagem: "https://static.escolakids.uol.com.br/conteudo_legenda/3121e945cf01118609c99b6e9e96192f.jpg", descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
        { id: 4, titulo: "Teclado e Mouse", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn7GUt9AWo58SWMI5tZozfWyXS64r5LRaWzQ&usqp=CAU", descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
      ],
    }
  }

  render() {
    let anuncioItens = this.state.anuncios.map(
      (valor, chave) => {
        return <Anuncio data={valor} key={chave} />;
      }
    );

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Anúncios</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {anuncioItens}
        </ScrollView>
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
