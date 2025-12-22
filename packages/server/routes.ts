import type { Request, Response } from 'express';
import express from 'express';
import { chatController } from './controllers/chat.controller';
import { productController } from './controllers/product.controller';
import { reviewController } from './controllers/review.controller';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
   res.send('Hello World!');
});

router.post('/api/chat', chatController.sendMessage);

router.get('/api/products', productController.getProducts);

router.get('/api/products/:id/reviews', reviewController.getReviews);

// Summarization can create/persist a new summary, so it's intentionally POST-only.
router.post(
   '/api/products/:id/reviews/summarize',
   reviewController.summarizeReviews
);

export default router;
