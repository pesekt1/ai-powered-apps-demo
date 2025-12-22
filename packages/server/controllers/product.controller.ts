import type { Request, Response } from 'express';
import { productService } from '../services/product.service';

/**
 * Product HTTP controller.
 *
 * Responsibilities:
 * - Validate/parse request inputs.
 * - Delegate persistence to repositories.
 */
export const productController = {
   async getProducts(_req: Request, res: Response) {
      const products = await productService.getProducts();
      res.json({ products });
   },
};
