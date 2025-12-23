import { useQuery } from '@tanstack/react-query';
import ProductCard from './ProductCard';
import { productsApi, type Product } from './productsApi';

const ProductsGrid = () => {
   const productsQuery = useQuery<Product[]>({
      queryKey: ['products'],
      queryFn: () => productsApi.fetchProducts(),
   });

   if (productsQuery.isLoading) {
      return <p>Loading products...</p>;
   }

   if (productsQuery.isError) {
      return (
         <p className="text-red-500">Could not fetch products. Try again!</p>
      );
   }

   const products = productsQuery.data ?? [];

   return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
         {products.map((p) => (
            <ProductCard key={p.id} product={p} />
         ))}
      </div>
   );
};

export default ProductsGrid;
