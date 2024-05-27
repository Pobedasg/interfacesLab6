// ProductList.tsx

import React from "react";
import ProductItem from "./ProductItem";

interface Product {
  id: number;
  name: string;
  unit: string;
  quantity: number;
  price: number;
  manufacturer: string;
}

interface ProductListProps {
  products: Product[];
  manufacturers: string[];
  onAddManufacturer: (manufacturer: string) => void;
  onRemoveManufacturer: (index: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  onAddManufacturer,
  onRemoveManufacturer,
}) => {
  return (
    <div className="product-list">
      <h2>Список товарів:</h2>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          name={product.name}
          unit={product.unit}
          quantity={product.quantity}
          price={product.price}
          
        />
      ))}
    </div>
  );
};

export default ProductList;
