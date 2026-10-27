import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type{ Product } from "../types";
import { getProductById } from "../services/api";
import { useCart } from "../context/CartContext";
import { ArrowLeft, ShoppingCart } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>(); // URL'deki id'yi alır
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getProductById(id)
        .then((data) => setProduct(data))
          .finally(() => {
            if (typeof setLoading === "function") setLoading(false);
          });
    }
  }, [id]);

  if (loading) return <p style={{ padding: '2rem' }}>Ürün yükleniyor...</p>;
  if (!product) return <p style={{ padding: '2rem' }}>Ürün bulunamadı.</p>;

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <button 
        onClick={() => navigate(-1)} 
        style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '20px', cursor: 'pointer', border: 'none', background: 'none' }}
      >
        <ArrowLeft size={20} /> Geri Dön
      </button>

      <div style={{ display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap' }}>
        <img src={product.image} alt={product.title} style={{ width: '300px', height: '300px', objectFit: 'contain' }} />
        
        <div style={{ flex: 1, minWidth: '300px' }}>
          <p style={{ color: '#888', textTransform: 'uppercase', fontSize: '12px' }}>{product.category}</p>
          <h1 style={{ fontSize: '1.5rem', margin: '10px 0' }}>{product.title}</h1>
          <p style={{ lineHeight: '1.6', color: '#444' }}>{product.description}</p>
          <h2 style={{ color: '#28a745', margin: '20px 0' }}>{product.price} TL</h2>
          
          <button 
            onClick={() => addToCart(product)}
            style={{ 
              display: 'flex', alignItems: 'center', gap: '10px', background: '#007bff', 
              color: 'white', border: 'none', padding: '12px 24px', borderRadius: '8px', cursor: 'pointer', fontSize: '16px' 
            }}
          >
            <ShoppingCart size={20} /> Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;