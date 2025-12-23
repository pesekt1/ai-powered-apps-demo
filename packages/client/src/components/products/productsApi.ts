import axios from 'axios';

const api = axios.create({
   baseURL: 'http://localhost:3000',
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
