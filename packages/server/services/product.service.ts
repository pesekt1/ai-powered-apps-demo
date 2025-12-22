import { productRepository } from '../repositories/product.repository';

/**
 * Product domain service.
 *
 * Responsibilities:
 * - Orchestrate product reads/writes (business logic goes here as it grows).
 * - Keep controller thin (HTTP concerns only) and repository storage-focused.
 */
export const productService = {
   async getProducts() {
      return productRepository.getProducts();
   },
};
