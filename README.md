This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Jalankan melalui localhost/server:

```bash
npm run dev
```

buka web browser : [http://localhost:3000/books](http://localhost:3000/books)

You can start editing the page by modifying `books/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!


## Demo Apk
1. Jalankan perintah 
```bash
npm run dev
```
untuk menjalankan aplikasi lewat server/localhost
2. Tampilan halaman web berada pada link [http://localhost:3000/books](http://localhost:3000/books), Tampilannya seperti dibawah ini:
![alt_text](https://github.com/Maryulianti/Crud-Nextjs-endpointAPI/blob/main/Gambar%20Demo%20apk/1.JPG?raw=true)
Aplikasi sudah terhubung dengan database yaitu postgresql melalui Vercel
3. JIka ingin menambah data, tekan tombol create maka akan beralih ke halaman create seperti dibawah ini:
![alt_text](https://github.com/Maryulianti/Crud-Nextjs-endpointAPI/blob/main/Gambar%20Demo%20apk/2.JPG?raw=true)
setelah selesai tekan tombol Save, secara otomatis kembali ke halaman awal
![alt_text](https://github.com/Maryulianti/Crud-Nextjs-endpointAPI/blob/main/Gambar%20Demo%20apk/3.JPG?raw=true)
data yang di masukan berhasil di tambahkan
4. Kemudian jika melakukan update pada data, tekan tombol edit maka secara otomatis beralih ke halaman update
![alt_text](https://github.com/Maryulianti/Crud-Nextjs-endpointAPI/blob/main/Gambar%20Demo%20apk/4.JPG?raw=true)
pada halaman ini API untuk kembali menangkap data sesuai labelnya, Sebelumnya ada data buku bernama Bumi Manusia, disini di update bagian Genrenya yang mulanya Sejarah dan Fiksi. Lalu di Update Manjadi Sejarah. Setelah selesai tekan tombol Update, dan kembali ke halaman awal
![alt_text](https://github.com/Maryulianti/Crud-Nextjs-endpointAPI/blob/main/Gambar%20Demo%20apk/5.JPG?raw=true)
6. Selanjutnya Jika melakukan hapus/delete, tekan tombol delete, maka hasilnya seperti ini:
![alt_text](https://github.com/Maryulianti/Crud-Nextjs-endpointAPI/blob/main/Gambar%20Demo%20apk/6.JPG?raw=true)
akan ada peringatan sebelum datta dihapus. Tekan ok maka kembali muncul peringatan successfully
![alt_text](https://github.com/Maryulianti/Crud-Nextjs-endpointAPI/blob/main/Gambar%20Demo%20apk/7.JPG?raw=true)
Tekan Ok maka Data yang dihapus telah hilang di list buku yang ada
![alt_text](https://github.com/Maryulianti/Crud-Nextjs-endpointAPI/blob/main/Gambar%20Demo%20apk/8.JPG?raw=true)


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
