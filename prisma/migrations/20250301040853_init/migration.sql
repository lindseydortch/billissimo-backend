/*
  Warnings:

  - A unique constraint covering the columns `[account_id]` on the table `Bill` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `account_id` to the `Bill` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "accountType" AS ENUM ('Checking', 'Savings');

-- CreateEnum
CREATE TYPE "PayFrequency" AS ENUM ('BiWeekly', 'Weekly', 'Monthly', 'BiMonthly');

-- AlterTable
ALTER TABLE "Bill" ADD COLUMN     "account_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "first_name" DROP NOT NULL,
ALTER COLUMN "last_name" DROP NOT NULL,
ALTER COLUMN "image" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "bank_name" TEXT NOT NULL,
    "account_type" "accountType" NOT NULL,
    "direct_deposit_allocation" INTEGER NOT NULL,
    "bill_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BillToPaycheck" (
    "id" SERIAL NOT NULL,
    "paycheck_id" INTEGER NOT NULL,
    "bill_id" INTEGER NOT NULL,

    CONSTRAINT "BillToPaycheck_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Paycheck" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "bill_total" INTEGER NOT NULL,
    "leftover_after_bills" INTEGER NOT NULL,
    "company_logo" TEXT,
    "paycheck_setting_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "paycheckSettingId" INTEGER,

    CONSTRAINT "Paycheck_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaycheckSetting" (
    "id" SERIAL NOT NULL,
    "pay_frequency" "PayFrequency" NOT NULL,
    "paycheck_amount" INTEGER NOT NULL,
    "first_paycheck" TIMESTAMP(3) NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "PaycheckSetting_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Paycheck_paycheck_setting_id_key" ON "Paycheck"("paycheck_setting_id");

-- CreateIndex
CREATE UNIQUE INDEX "PaycheckSetting_user_id_key" ON "PaycheckSetting"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Bill_account_id_key" ON "Bill"("account_id");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bill" ADD CONSTRAINT "Bill_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BillToPaycheck" ADD CONSTRAINT "BillToPaycheck_paycheck_id_fkey" FOREIGN KEY ("paycheck_id") REFERENCES "Paycheck"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BillToPaycheck" ADD CONSTRAINT "BillToPaycheck_bill_id_fkey" FOREIGN KEY ("bill_id") REFERENCES "Bill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paycheck" ADD CONSTRAINT "Paycheck_paycheck_setting_id_fkey" FOREIGN KEY ("paycheck_setting_id") REFERENCES "PaycheckSetting"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paycheck" ADD CONSTRAINT "Paycheck_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaycheckSetting" ADD CONSTRAINT "PaycheckSetting_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
