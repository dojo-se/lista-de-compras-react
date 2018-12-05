import React from "react";

function ListaItem({ nome, preco, quantidade, ...props }) {
  return (
    <li key={nome}>
      {nome} - R$ {preco} x {quantidade} = R$ {preco * quantidade}
    </li>
  );
}

export default ListaItem;
