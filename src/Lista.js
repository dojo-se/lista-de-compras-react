import React, { Component } from "react";

// components
import ListaItem from "./ListaItem";

import "./App.css";

class App extends Component {
  state = {
    nome: "",
    preco: "",
    quantidade: "",

    items: [],
    total: 0
  };

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  addItem = () => {
    const { nome, preco, quantidade, items } = this.state;
    items.push({ nome, preco, quantidade });
    this.setState({ items, nome: "", preco: "", quantidade: "" });
  };

  calcularTotal = () => {
    const { items } = this.state;
    let total = 0;

    items.forEach(item => (total += item.preco * item.quantidade));

    return total;
  };

  removeItem = position => {
    const { items } = this.state;
    const newItems = items.filter((item, index) => index !== position);

    this.setState({ items: newItems });
  };

  render() {
    const { items } = this.state;
    const total = this.calcularTotal();

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
            index={index}
            nome={nome}
            preco={preco}
            quantidade={quantidade}
            removeItem={this.removeItem}
          />
        ))}
        <div className="total">Total da compra: {total}</div>
      </div>
    );
  }
}

export default App;
