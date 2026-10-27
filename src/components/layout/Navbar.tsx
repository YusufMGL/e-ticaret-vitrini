import { ShoppingCart, Store } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();
  const totalItems = (cart || []).reduce((acc, item) => acc + (item.quantity ?? 0), 0);

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#222', color: '#fff' }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Store /> <strong>MyStore</strong>
      </Link>
      <Link to="/cart" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
        <ShoppingCart />
        <span style={{ marginLeft: '5px', background: 'red', borderRadius: '50%', padding: '2px 6px', fontSize: '12px' }}>
          {totalItems}
        </span>
      </Link>
    </nav>
  );
};

export default Navbar;