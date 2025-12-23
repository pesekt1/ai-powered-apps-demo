/*
  Warnings:

  - A unique constraint covering the columns `[productId,model]` on the table `summaries` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `summaries` DROP FOREIGN KEY `summaries_productId_fkey`;

-- DropIndex
DROP INDEX `summaries_productId_key` ON `summaries`;

-- CreateIndex
CREATE UNIQUE INDEX `summaries_productId_model_key` ON `summaries`(`productId`, `model`);

-- AddForeignKey
ALTER TABLE `summaries` ADD CONSTRAINT `summaries_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
