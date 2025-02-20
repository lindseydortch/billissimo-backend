-- CreateEnum
CREATE TYPE "Frequency" AS ENUM ('Monthly', 'Yearly', 'Quarterly', 'BiAnnually', 'Weekly', 'EveryPaycheck');

-- CreateEnum
CREATE TYPE "Category" AS ENUM ('BankingFee', 'SubscriptionVariable', 'SubscriptionYearly', 'SubscriptionMonthly', 'FixedExpense');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Active', 'Inactive');

-- CreateTable
CREATE TABLE "Bill" (
    "id" SERIAL NOT NULL,
    "bill_name" TEXT NOT NULL,
    "bill_amount" INTEGER NOT NULL,
    "date_of_month_due" INTEGER NOT NULL,
    "frequency" "Frequency" NOT NULL,
    "category" "Category" NOT NULL,
    "status" "Status" NOT NULL,
    "yearly_cost" INTEGER NOT NULL,
    "next_due_date" TIMESTAMP(3) NOT NULL,
    "company_logo" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "Bill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Bill" ADD CONSTRAINT "Bill_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
