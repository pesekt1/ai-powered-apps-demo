import axios from 'axios';

const api = axios.create({
   baseURL: import.meta.env.VITE_API_BASE_URL ?? '',
});

export type Review = {
   id: number;
   author: string;
   content: string;
   rating: number;
   createdAt: string;
};

export type GetReviewsResponse = {
   summary: string | null;
   reviews: Review[];
};

export type SummarizeResponse = {
   summary: string;
};

export const reviewsApi = {
   async fetchReviews(productId: number, model: 'openai' | 'opensource') {
      const res = await api.get<GetReviewsResponse>(
         `/api/products/${productId}/reviews?model=${model}`
      );
      return res.data;
   },

   async summarizeReviews(productId: number, model: 'openai' | 'opensource') {
      const res = await api.post<SummarizeResponse>(
         `/api/products/${productId}/reviews/summarize?model=${model}`
      );
      return res.data;
   },
};
