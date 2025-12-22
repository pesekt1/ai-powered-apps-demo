import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Product data access layer.
 *
 * Encapsulates all persistence operations related to products.
 * Keep business rules out of this module; return raw storage results.
 */
export const productRepository = {
   /**
    * Fetch a single product by its unique numeric identifier.
    *
    * @param productId - Product primary key.
    * @returns The product if found; otherwise `null`.
    */
   getProduct(productId: number) {
      // Repository layer: single responsibility is fetching data from storage.
      // `findUnique` is used because `id` is a unique identifier in the schema.
      return prisma.product.findUnique({
         where: { id: productId },
      });
   },
};
