import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Product, CartItem } from "../types";

// Context'in içinde neler olacağını tanımlıyoruz
interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  totalPrice: number;
}

const defaultContext: CartContextType = {
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  totalPrice: 0,
};

const CartContext = createContext<CartContextType>(defaultContext);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Sepete ekleme mantığı
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const isExist = prevCart.find((item) => item.id === product.id);
      if (isExist) {
        // Eğer ürün zaten sepette varsa adetini artır
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Yoksa yeni bir ürün olarak ekle
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

// Kendi hook'umuzu oluşturuyoruz ki her yerde rahatça kullanalım
export const useCart = () => {
  return useContext(CartContext);
};

