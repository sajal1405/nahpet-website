# NAH Pet Salon – Premium Grooming Website

This is the official frontend for NAH Pet Salon — a premium pet grooming experience in Dubai.

---

## 🚀 Live Deployment Instructions

### 🌐 1. Host on GitHub Pages

- Push this repo to your **public GitHub repository**
- Go to **Settings → Pages**
- Source: `Deploy from branch` → `main` → `/ (root)`
- Save, wait for deployment at `https://<username>.github.io/<repo>/`

---

### 🔗 2. Setup Custom Domain (Free via Cloudflare)

1. Buy a domain (or use an existing one)
2. Add it to [Cloudflare](https://dash.cloudflare.com)
3. In GitHub Pages settings, set your custom domain (e.g., `www.nahpetsalon.ae`)
4. In Cloudflare DNS:
   - Add CNAME record: `www → <yourusername>.github.io`
   - Add A record (optional fallback)
5. Enable `Always Use HTTPS` in GitHub Pages

---

## 🧩 Project Structure

├── index.html
├── booking.html
├── services.html
├── about.html
├── contact.html
├── blog.html
├── admin.html
├── css/
│ └── style.css
├── assets/
│ ├── images/ (e.g., pets, logos)
│ ├── icons/ (SVGs)
│ └── blog/ (thumbnails)
├── partials/
│ ├── header.html
│ └── footer.html
├── tailwind.config.js
└── postcss.config.js

yaml
Copy
Edit

---

## 🗃 LocalStorage Logic

- `bookedSlots`: prevents double-booking time slots
- `fullBookings`: stores full customer/pet details
- Used by `booking.html` & viewed in `admin.html`

---

## 🔐 Admin Panel

Access `admin.html` directly with:
- **Username:** `nahpet.ae`
- **Password:** `NAHPet@2025`

---

## 📞 Contact

Email: [hello@nahpetsalon.ae](mailto:hello@nahpetsalon.ae)  
Phone: [+971 50 123 4567](tel:+971501234567)  
Instagram: [@nahpet.ae](https://instagram.com/nahpet.ae)