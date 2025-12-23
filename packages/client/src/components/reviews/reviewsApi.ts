import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

const api = axios.create({
   baseURL: BASE_URL,
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
