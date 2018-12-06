import React from "react";

function ListaItem({ nome, preco, quantidade, removeItem, ...props }) {
  return (
    <li key={nome}>
      {nome} - R$ {preco} x {quantidade} = R$ {preco * quantidade}
      <button onClick={() => removeItem(props.index)}> X </button>
    </li>
  );
}

export default ListaItem;
