# Resume Materi KMReact – Restfull API

Poin-poin dari materi Restfull API adalah sebagai berikut:

1. Apa itu Restfull API, adalah antarmuka yang digunakan oleh dua sistem komputer untuk bertukar informasi secara aman melalui internet. Sebagian besar aplikasi bisnis harus berkomunikasi dengan aplikasi internal dan pihak ketiga lainnya untuk melakukan berbagai tugas. Antarmuka Program Aplikasi (API) menentukan aturan yang harus Anda ikuti untuk berkomunikasi dengan sistem perangkat lunak lain. Developer mengekspos dan membuat API sehingga aplikasi lain dapat berkomunikasi dengan aplikasinya secara terprogram.

2. Cara kerja RESTfull API yaitu anda harus menentukan jenis operasi yang dapat dilakukan pada sumber daya ini. RESTful API menggunakan metode HTTP standar seperti GET (untuk membaca data), POST (untuk membuat data baru), PUT (untuk memperbarui data), dan DELETE (untuk menghapus data). Setiap permintaan klien ke server harus berisi semua informasi yang diperlukan, dan server tidak harus menyimpan status klien antara permintaan. Ini memastikan bahwa setiap permintaan adalah independen, dan server dapat mengatasi banyak permintaan dari berbagai klien tanpa bingung. Setiap sumber daya memiliki URI endpoint yang unik. Untuk mengakses sumber daya, klien membuat permintaan HTTP ke URI tersebut menggunakan metode yang sesuai.

3. Mock API adalah replika atau tiruan dari sebuah API (Application Programming Interface) yang berfungsi untuk mensimulasikan perilaku API yang sebenarnya tanpa melakukan akses ke sumber data yang sebenarnya. Mock API digunakan dalam pengembangan perangkat lunak untuk berbagai tujuan, termasuk pengujian, pengembangan, dan dokumentasi. Berikut adalah langkah-langkah umum tentang cara kerja mock API:
   - Pembuatan Endpoint Mock API akan memiliki endpoint yang mewakili sumber daya atau operasi yang akan di-simulasikan.
   - Untuk setiap endpoint, pengembang akan menentukan cara API palsu tersebut akan merespons permintaan. Ini dapat mencakup data statis yang didefinisikan sebelumnya, seperti objek JSON atau XML, atau logika yang menghasilkan respons berdasarkan parameter permintaan.
   - Mock API akan memahami metode HTTP yang dikirim oleh klien, seperti GET, POST, PUT, DELETE, dll., dan akan merespons sesuai dengan metode tersebut. Misalnya, GET mungkin digunakan untuk mengambil data, sedangkan POST digunakan untuk membuat data baru.

