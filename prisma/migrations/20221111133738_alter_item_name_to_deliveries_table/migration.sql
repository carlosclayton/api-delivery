/*
  Warnings:

  - You are about to drop the column `item_names` on the `deliveries` table. All the data in the column will be lost.
  - Added the required column `item_name` to the `deliveries` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `deliveries` DROP COLUMN `item_names`,
    ADD COLUMN `item_name` VARCHAR(191) NOT NULL;
