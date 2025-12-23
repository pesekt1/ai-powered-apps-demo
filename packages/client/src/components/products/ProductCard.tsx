import { useMemo, useState } from 'react';
import ReviewList from '../reviews/ReviewList';
import type { Product } from './productsApi';

type Props = {
   product: Product;
};

const ProductCard = ({ product }: Props) => {
   const [open, setOpen] = useState(false);

   const priceLabel = useMemo(() => {
      // Keep it simple; adjust currency as needed.
      return new Intl.NumberFormat(undefined, {
         style: 'currency',
         currency: 'USD',
      }).format(product.price);
   }, [product.price]);

   return (
      <div className="rounded-lg border bg-white p-4">
         <button
            type="button"
            className="w-full text-left"
            onClick={() => setOpen((v) => !v)}
         >
            <div className="flex items-start justify-between gap-3">
               <div>
                  <div className="font-semibold">{product.name}</div>
                  {product.description ? (
                     <p className="mt-1 text-sm text-slate-600">
                        {product.description}
                     </p>
                  ) : null}
               </div>
               <div className="shrink-0 font-semibold">{priceLabel}</div>
            </div>
            <div className="mt-3 text-sm text-slate-600">
               {open ? 'Hide reviews' : 'Show reviews'}
            </div>
         </button>

         {open ? (
            <div className="mt-4">
               <ReviewList productId={product.id} />
            </div>
         ) : null}
      </div>
   );
};

export default ProductCard;
