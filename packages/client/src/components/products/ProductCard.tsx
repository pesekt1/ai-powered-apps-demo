import { useMemo, useState } from 'react';
import ReviewList from '../reviews/ReviewList';
import type { Product } from './productsApi';

type Props = {
   product: Product;
};

const ProductCard = ({ product }: Props) => {
   const [openOpenAI, setOpenOpenAI] = useState(false);
   const [openOpenModel, setOpenOpenModel] = useState(false);

   const priceLabel = useMemo(() => {
      // Keep it simple; adjust currency as needed.
      return new Intl.NumberFormat(undefined, {
         style: 'currency',
         currency: 'USD',
      }).format(product.price);
   }, [product.price]);

   return (
      <div className="rounded-lg border bg-white p-4">
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

         <div className="mt-3 flex flex-wrap items-center gap-2">
            <button
               type="button"
               className="px-3 py-2 rounded border text-sm"
               onClick={() => {
                  setOpenOpenAI((prev) => {
                     const next = !prev;
                     if (next) setOpenOpenModel(false);
                     return next;
                  });
               }}
            >
               {openOpenAI ? 'Hide OpenAI reviews' : 'Show OpenAI reviews'}
            </button>

            <button
               type="button"
               className="px-3 py-2 rounded border text-sm"
               onClick={() => {
                  setOpenOpenModel((prev) => {
                     const next = !prev;
                     if (next) setOpenOpenAI(false);
                     return next;
                  });
               }}
            >
               {openOpenModel
                  ? 'Hide open-model reviews'
                  : 'Show open-model reviews'}
            </button>
         </div>

         {openOpenAI ? (
            <div className="mt-4">
               <div className="mb-2 text-xs font-semibold text-slate-600">
                  OpenAI
               </div>
               <ReviewList
                  {...({ productId: product.id, model: 'openai' } as any)}
               />
            </div>
         ) : null}

         {openOpenModel ? (
            <div className="mt-4">
               <div className="mb-2 text-xs font-semibold text-slate-600">
                  Open-model
               </div>
               <ReviewList
                  {...({ productId: product.id, model: 'opensource' } as any)}
               />
            </div>
         ) : null}
      </div>
   );
};

export default ProductCard;
