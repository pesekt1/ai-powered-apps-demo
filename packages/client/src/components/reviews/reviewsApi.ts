import axios from 'axios';

const api = axios.create({
   baseURL: 'http://localhost:3000',
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
   async fetchReviews(productId: number) {
      const res = await api.get<GetReviewsResponse>(
         `/api/products/${productId}/reviews`
      );
      return res.data;
   },

   async summarizeReviews(productId: number) {
      const res = await api.post<SummarizeResponse>(
         `/api/products/${productId}/reviews/summarize`
      );
      return res.data;
   },
};
