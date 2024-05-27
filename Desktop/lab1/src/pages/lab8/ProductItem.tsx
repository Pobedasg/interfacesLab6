interface Product {
  name: string;
  unit: string;
  quantity: number;
  price: number;
}

const ProductItem: React.FC<Product> = ({ name, unit, quantity, price }) => {
  return (
    <div className="product-item">
      <h3>{name}</h3>
      <p>Одиниця виміру: {unit}</p>
      <p>Кількість на складі: {quantity}</p>
      <p>Ціна за одиницю: {price}</p>
    </div>
  );
};

export default ProductItem;
