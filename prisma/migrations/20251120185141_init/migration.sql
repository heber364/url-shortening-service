-- CreateTable
CREATE TABLE "Shorten" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "shortCode" TEXT NOT NULL,
    "accessCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Shorten_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Shorten_shortCode_key" ON "Shorten"("shortCode");
