import { useCart } from "../context/CartContext";

const Cart= ()=> {
    const {cart, removeFromCart, totalPrice} = useCart();

 if(cart.length===0) return <div style={{padding:'2rem'}}>Sepetiniz boş </div>;

 return (
    <div style={{padding:'2rem'}}>
        <h1>Sepetiniz</h1>
        {cart.map((item) => (
         <div key={item.id} style={{display:'flex',justifyContent:'space-between',borderBottom:'1px solid #ddd', padding: '10px 0' }}>
            <div>
                <h4>{item.title}</h4>
                <p>{item.quantity} adet *{item.price} TL</p>
                 </div>
              <button onClick={() => removeFromCart(item.id)} style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}>
            Sil
          </button>
        </div>
      ))}
      <h2 style={{ marginTop: '20px' }}>Toplam: {totalPrice.toFixed(2)} TL</h2>
    </div>
  );
};

export default Cart;