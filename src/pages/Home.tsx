import { useEffect, useState } from "react";
import type{ Product } from "../types";
import { getProducts, getCategories, getProductsByCategory } from "../services/api";
import ProductCard from "../components/common/ProductCard";
import CategoryFilter from "../components/common/CategoryFilter";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);

  // Kategorileri bir kez çekiyoruz
  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  // Kategori her değiştiğinde ürünleri yeniden çekiyoruz
  useEffect(() => {
    setLoading(true);
    const fetchAction = selectedCategory === "" 
      ? getProducts() 
      : getProductsByCategory(selectedCategory);

    fetchAction
      .then(setProducts)
      .finally(() => {
        if (typeof setLoading === "function") setLoading(false);
      });
  }, [selectedCategory]);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Mağaza Vitrini</h1>
      
      <CategoryFilter 
        categories={categories} 
        selectedCategory={selectedCategory} 
        onCategoryChange={setSelectedCategory} 
      />

      {loading ? (
        <p>Ürünler yükleniyor...</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;