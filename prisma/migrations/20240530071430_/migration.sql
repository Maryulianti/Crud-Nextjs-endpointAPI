-- CreateTable
CREATE TABLE "Book" (
    "id" TEXT NOT NULL,
    "nama_buku" TEXT NOT NULL,
    "penulis" TEXT NOT NULL,
    "penerbit" TEXT NOT NULL,
    "genre" TEXT NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);