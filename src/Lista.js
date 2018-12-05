import React, { Component } from "react";

// components
import ListaItem from "./ListaItem";

import "./App.css";

class App extends Component {
  state = {
    nome: "",
    preco: "",
    quantidade: "",

    items: []
  };

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  addItem = () => {
    const { nome, preco, quantidade, items } = this.state;
    items.push({ nome, preco, quantidade });
    this.setState({ items });
  };

  render() {
    const { items } = this.state;

    return (
      <div>
        <input
          name="nome"
          placeholder="Nome"
          onChange={this.onChange}
          value={this.state.nome}
        />

        <input
          name="preco"
          placeholder="Preço"
          onChange={this.onChange}
          value={this.state.preco}
        />
        <input
          name="quantidade"
          placeholder="Quantidade"
          onChange={this.onChange}
          value={this.state.quantidade}
        />
        <button onClick={this.addItem}>Adicionar Item</button>
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
