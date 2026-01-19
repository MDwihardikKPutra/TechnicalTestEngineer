# Cara Deploy Aplikasi Penilaian Mahasiswa

## Opsi 1: Vercel (Paling Mudah & Cepat) ⭐

### Via Vercel Website (Recommended)

1. **Buat akun Vercel** (gratis)
   - Kunjungi: https://vercel.com
   - Sign up dengan GitHub/Google/Email

2. **Push code ke GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <URL_REPO_GITHUB_KAMU>
   git push -u origin main
   ```

3. **Deploy di Vercel**
   - Login ke Vercel
   - Klik "Add New Project"
   - Import repository GitHub kamu
   - Vercel otomatis detect Vite
   - Klik "Deploy"
   - Tunggu 1-2 menit, dapat URL gratis!

### Via Vercel CLI (Alternatif)

```bash
npm install -g vercel
vercel login
vercel
```

## Opsi 2: Netlify (Alternatif Mudah)

1. **Buat akun Netlify**: https://netlify.com

2. **Push ke GitHub** (sama seperti di atas)

3. **Deploy di Netlify**
   - Login Netlify
   - Klik "Add new site" → "Import an existing project"
   - Pilih GitHub repo
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Klik "Deploy site"

## Opsi 3: GitHub Pages (Gratis tapi lebih ribet)

1. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   },
   "homepage": "https://<username>.github.io/<repo-name>"
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## Opsi 4: Surge.sh (Super Simple)

```bash
npm install -g surge
npm run build
cd dist
surge
# Ikuti instruksi untuk login/register
# Domain akan seperti: random-name.surge.sh
```

---

## ⚡ Quick Start (Vercel - Recommended)

**Cara tercepat untuk recruiter:**

1. Push ke GitHub
2. Buka https://vercel.com
3. Import project dari GitHub
4. Klik Deploy
5. Copy URL yang diberikan (contoh: `aplikasi-penilaian.vercel.app`)

**Total waktu: ~5 menit!**

---

## Catatan Penting

- Semua opsi di atas **100% GRATIS**
- Vercel & Netlify memberikan URL custom (bisa ganti domain)
- Auto-deploy setiap push ke GitHub (jika connect)
- HTTPS otomatis
- Tidak perlu setup server

## Troubleshooting

Jika build error, pastikan:
- Node version di Vercel/Netlify: 18.x atau 20.x
- Semua dependencies terinstall (`npm install`)
- Build command: `npm run build`
- Output directory: `dist`
