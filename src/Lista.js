import React, { Component } from "react";

// components
import ListaItem from "./ListaItem";

import "./App.css";

class App extends Component {
  state = {
    nome: "",
    valor: "",
    quantidade: "",

    items: [
      {
        nome: "item 1",
        preco: 10,
        quantidade: 1
      },
      {
        nome: "item 2",
        preco: 40,
        quantidade: 3
      }
    ]
  };

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { items } = this.state;

    return (
      <div>
        <input name="nome" onChange={this.onChange} value={this.state.nome} />
        <input name="preco" onChange={this.onChange} value={this.state.preco} />
        <input
          name="quantidade"
          onChange={this.onChange}
          value={this.state.quantidade}
        />
        <button>Adicionar Item</button>
        {items.map(({ nome, preco, quantidade }, index) => (
          <ListaItem
            key={index}
            nome={nome}
            preco={preco}
            quantidade={quantidade}
          />
        ))}
      </div>
    );
  }
}

export default App;
