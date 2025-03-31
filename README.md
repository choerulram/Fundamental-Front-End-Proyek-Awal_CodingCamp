# Notes App

## Deskripsi
Notes App adalah aplikasi sederhana untuk membuat, mengelola, dan menyimpan catatan. Aplikasi ini dibangun menggunakan HTML, CSS, dan JavaScript, dan dirancang untuk memberikan pengalaman pengguna yang intuitif dan responsif

## Struktur Proyek
/NotesApp │ ├── /src │ ├── /public │ │ ├── /file_img │ │ └── (file statis lainnya, jika diperlukan) │ │ │ ├── /script │ │ ├── /data │ │ │ └── /local │ │ │ └── notes.js // Berisi data dummy pada kriteria wajib 1 │ │ │ │ │ ├── /view │ │ │ └── home.js // Logika untuk menampilkan catatan │ │ │ │ │ ├── /components // Folder baru untuk komponen │ │ │ ├── note-card.js // Custom element untuk catatan │ │ │ ├── note-modal.js // Custom element untuk modal │ │ │ └── templates.html // Template HTML untuk catatan dan modal │ │ │ │ │ └── app.js // Logika utama aplikasi │ │ │ ├── /styles │ │ └── style.css // Gaya CSS untuk aplikasi │ │ │ └── index.html // Halaman HTML utama │ └── README.md

## Fitur
- **Membuat Catatan**: Pengguna dapat membuat catatan baru dengan mudah.
- **Mengedit Catatan**: Pengguna dapat mengedit catatan yang sudah ada.
- **Menghapus Catatan**: Pengguna dapat menghapus catatan yang tidak diperlukan.
- **Tampilan Responsif**: Aplikasi dirancang agar dapat diakses dengan baik di berbagai perangkat.

## Teknologi yang Digunakan
- **HTML**: Untuk struktur halaman.
- **CSS**: Untuk styling dan tata letak.
- **JavaScript**: Untuk logika aplikasi dan interaksi pengguna.

## Cara Menjalankan Aplikasi
1. Clone repositori ini ke mesin lokal Anda.
   git clone https://github.com/username/NotesApp.git
2. Buka file index.html di browser Anda.
3. Nikmati aplikasi catatan Anda!