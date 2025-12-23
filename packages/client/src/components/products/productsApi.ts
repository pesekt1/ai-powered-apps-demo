import axios from 'axios';

const api = axios.create({
   // If empty, axios uses current origin (works with Vite proxy on /api)
   baseURL: import.meta.env.VITE_API_BASE_URL ?? '',
});

export type Product = {
   id: number;
   name: string;
   description: string | null;
   price: number;
   // Present on the backend model; may or may not be included by this endpoint.
   reviews?: unknown;
   summary?: unknown | null;
};

export const productsApi = {
   async fetchProducts() {
      const res = await api.get<unknown>('/api/products');
      const data = res.data as any;
      return (Array.isArray(data) ? data : data?.products) as Product[];
   },
};
