# Aplikasi Penilaian Mahasiswa

Aplikasi web React untuk menilai 10 mahasiswa berdasarkan 4 aspek penilaian dengan skala 1-10.

## Fitur

- Tabel penilaian dengan 10 mahasiswa dan 4 aspek penilaian
- Input dropdown untuk memilih nilai 1-10
- Optimasi render minimal menggunakan uncontrolled components dan React.memo
- Output JSON sesuai format yang diminta

## Instalasi

```bash
npm install
```

## Menjalankan Aplikasi

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173`

## Optimasi Render

Aplikasi ini menggunakan strategi berikut untuk meminimalkan re-render:

1. **Uncontrolled Components**: Menggunakan `defaultValue` pada select elements, bukan `value` yang terkontrol oleh state
2. **React.memo**: Komponen `ScoreInput` dan `StudentRow` dibungkus dengan `React.memo` untuk mencegah re-render yang tidak perlu
3. **useRef untuk Form**: Menggunakan `useRef` untuk mengakses form data hanya saat tombol "Simpan" ditekan, bukan saat setiap input berubah

Dengan pendekatan ini, perubahan nilai pada input tidak akan memicu re-render pada komponen React sama sekali.

## Format Output

Saat tombol "Simpan" ditekan, aplikasi akan menghasilkan JSON dengan format:

```json
{
  "aspek_penilaian_1": {
    "mahasiswa_1": 1,
    "mahasiswa_2": 5,
    ...
    "mahasiswa_10": 1
  },
  "aspek_penilaian_2": { ... },
  "aspek_penilaian_3": { ... },
  "aspek_penilaian_4": { ... }
}
```

Output akan ditampilkan di console browser dan juga di bagian bawah halaman.
