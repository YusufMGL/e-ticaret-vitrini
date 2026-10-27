import { Link } from "react-router-dom";
import type { Product } from "../../types";
import { useCart } from "../../context/CartContext";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { addToCart } = useCart();

  return (
    <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
      {/* Görsel ve Başlığı Link içine alıyoruz */}
      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img src={product.image} alt={product.title} style={{ height: '150px', objectFit: 'contain' }} />
        <h3 style={{ fontSize: '0.9rem', margin: '10px 0', height: '40px', overflow: 'hidden' }}>
          {product.title}
        </h3>
      </Link>
      
      <p style={{ fontWeight: 'bold' }}>{product.price} TL</p>
      
      <button 
        onClick={() => addToCart(product)}
        style={{ marginTop: 'auto', background: '#28a745', color: 'white', border: 'none', padding: '8px', borderRadius: '4px', cursor: 'pointer' }}
      >
        Sepete Ekle
      </button>
    </div>
  );
};

export default ProductCard;



