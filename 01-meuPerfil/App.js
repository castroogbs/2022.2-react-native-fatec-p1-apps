import React, { Component } from "react";
import { View, Text, Image } from "react-native";

class App extends Component {
  render() {
    let img = "https://avatars.githubusercontent.com/u/50057372?v=4";

    return (
      <View style={{ margin: 50 }}>
        <Image
          source={{ uri: img }}
          style={{ width: 300, height: 300, marginBottom: 20 }}
        />

        <Text style={{ fontWeight: "bold" }}>Dados Pessoais:</Text>
        <Text style={{ marginBottom: 20 }}>
          Gabriel Castro - Software Developer
        </Text>

        <Text style={{ fontWeight: "bold" }}>Formação:</Text>
        <Text style={{ marginBottom: 20 }}>
          Tecnologo em Sistemas para Internet
        </Text>

        <Text style={{ fontWeight: "bold" }}>Experiência:</Text>
        <Text style={{ marginBottom: 20 }}>FullStack PHP</Text>

        <Text style={{ fontWeight: "bold" }}>Projetos:</Text>
        <Text style={{ marginBottom: 20 }}>
          Link Github: https://github.com/castroogbs
        </Text>
      </View>
    );
  }
}

export default App;
