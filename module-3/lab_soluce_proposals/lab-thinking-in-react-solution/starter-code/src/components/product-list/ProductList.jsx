import React from "react";
import ProductRow from "../product-row/ProductRow";

const ProductList = (props) => {
  const filteredProducts = props.data.filter((product) => {
    if (props.stocked) {
      return (
        product.name.toLowerCase().includes(props.searchValue.toLowerCase()) &&
        product.stocked === true
      );
    }
    return product.name.toLowerCase().includes(props.searchValue.toLowerCase());
  });

  const productList = filteredProducts.map((prod, idx) => {
    return (
      <ProductRow
        key={idx}
        stocked={prod.stocked}
        productKey={idx}
        name={prod.name}
        price={prod.price}
      />
    );
  });

  return (
    <table>
      <col width="200" />
      <col width="200" />
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
      {productList}
    </table>
  );
};

export default ProductList;
