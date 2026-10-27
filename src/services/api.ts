import type { Product } from "../types";

const BASE_URL = "https://fakestoreapi.com";

// Tüm ürünleri liste olarak getirir
export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${BASE_URL}/products`);
  if (!response.ok) throw new Error("Veriler yüklenirken hata oluştu.");
  return response.json();
};
export const getProductById = async (id: string): Promise<Product> => {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  if (!response.ok) throw new Error("Ürün detayı yüklenirken hata oluştu.");
  return response.json();
};
export const getCategories = async (): Promise<string[]> => {
  const response = await fetch(`${BASE_URL}/products/categories`);
  if (!response.ok) throw new Error("Kategoriler yüklenirken hata oluştu.");
  return response.json();
};

// Sadece belirli bir kategorideki ürünleri getirir
export const getProductsByCategory = async (category: string): Promise<Product[]> => {
  const response = await fetch(`${BASE_URL}/products/category/${category}`);
  if (!response.ok) throw new Error("Kategori ürünleri yüklenirken hata oluştu.");
  return response.json();
};