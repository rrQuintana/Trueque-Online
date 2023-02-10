import React from "react";
import imagenProducto from "../../assets/img/img-prod.png";
import ProductCart from "./ProductCart";

function ProductList() {
  const products = [
    {
      id: 1,
      LinkTo: "https://google.com",
      Imagen: { imagenProducto },
      Titulo: "Titulo",
      Item1: "Item 1",
    },
    {
      id: 2,
      LinkTo: "https://google.com",
      Imagen: { imagenProducto },
      Titulo: "Titulo2",
      Item1: "Item 1",
      Item2: "Item 2",
    },
    {
      id: 3,
      LinkTo: "https://google.com",
      Imagen: { imagenProducto },
      Titulo: "Titulo3",
      Item1: "Item 1",
      Item2: "Item 2",
      Item3: "Item 3",
    },
    {
      id: 4,
      LinkTo: "https://google.com",
      Imagen: { imagenProducto },
      Titulo: "Titulo4",
      Item1: "Item 1",
      Item2: "Item 2",
      Item3: "Item 3",
      Item4: "Item 4",
    },
    {
      id: 5,
      LinkTo: "https://google.com",
      Imagen: { imagenProducto },
      Titulo: "Titulo5",
      Item1: "Item 1",
      Item2: "Item 2",
      Item3: "Item 3",
      Item4: "Item 4",
      Item5: "6+",
    },
    {
      id: 5,
      LinkTo: "https://google.com",
      Imagen: { imagenProducto },
      Titulo: "Titulo6",
      Item1: "Item 1",
      Item2: "Item 2",
      Item3: "Item 3",
      Item4: "Item 4",
      Item5: "6+",
    },
    {
      id: 5,
      LinkTo: "https://google.com",
      Imagen: { imagenProducto },
      Titulo: "Titulo7",
      Item1: "Item 1",
      Item2: "Item 2",
      Item3: "Item 3",
      Item4: "Item 4",
      Item5: "6+",
    },
    {
      id: 5,
      LinkTo: "https://google.com",
      Imagen: { imagenProducto },
      Titulo: "Titulo8",
      Item1: "Item 1",
      Item2: "Item 2",
      Item3: "Item 3",
      Item4: "Item 4",
      Item5: "6+",
    },
  ];

  return (
    <div className="h-custom d-flex row products-list justify-content-center align-items-center">
      <h1>Productos</h1>
      <div className="container-fluid d-flex m-3 flex-wrap justify-content-center align-items-center">
        {products.map((product, index) => {
          return <ProductCart key={index} {...product} />;
        })}
      </div>
    </div>
  );
}

export default ProductList;
