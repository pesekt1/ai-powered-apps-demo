/*
  Warnings:

  - Added the required column `model` to the `summaries` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `summaries` ADD COLUMN `model` VARCHAR(100) NOT NULL;
