# Resume Materi KMReact – Global State Management and Data fetching

Poin-poin dari materi Global State Management and Data fetching adalah sebagai berikut:

1. Apa itu Global State, mengacu pada data atau keadaan yang dapat diakses dan dibagikan di seluruh komponen dalam aplikasi React. Ini adalah data yang bersifat global, artinya dapat diakses dan diperbarui oleh komponen-komponen yang berbeda dalam aplikasi tanpa harus melewati prop dari satu komponen ke komponen lainnya secara berurutan. Global state ini biasanya digunakan untuk menyimpan informasi yang relevan secara global, seperti data pengguna yang masuk atau tema aplikasi.

2. Ada beberapa cara untuk mengelola global state dan salah satunya adalah menggunakan Redux atau Context API. Berikut adalah beberapa contoh definisi global state dalam konteks React:
   - Menggunakan Redux adalah sebuah pustaka yang memungkinkan Anda untuk mengelola global state dengan baik dalam aplikasi React. Dengan Redux, Anda mendefinisikan "store" yang berisi seluruh global state aplikasi Anda, dan komponen-komponen dapat berinteraksi dengan store ini untuk membaca atau mengubah data global.
   - Menggunakan Context API adalah bagian dari React dan memungkinkan Anda untuk membuat "konteks" yang dapat menyimpan data global yang akan diakses oleh komponen dalam pohon komponen Anda. Ini adalah cara yang lebih sederhana untuk mengelola global state dibandingkan Redux, tetapi cocok untuk aplikasi yang lebih kecil.

3. Redux adalah sebuah perpustakaan manajemen keadaan yang populer digunakan dalam aplikasi berbasis React. Redux memiliki beberapa pustaka dan alat yang dapat membantu dalam pengembangan dan manajemen keadaan aplikasi. Berikut adalah beberapa pustaka dan alat yang umum digunakan bersama Redux:
   - Redux Toolkit adalah pustaka resmi yang dirancang untuk mempermudah pengembangan dengan Redux. Ini menyediakan utilitas dan pola yang sangat membantu dalam mendefinisikan tindakan (actions), pengurangan (reducers), dan toko (store).
   - React-Redux: Ini adalah perpustakaan yang memudahkan integrasi antara Redux dan React. Dengan React-Redux, Anda dapat menghubungkan komponen React ke toko Redux sehingga komponen dapat mengakses keadaan dan tindakan Redux dengan mudah.