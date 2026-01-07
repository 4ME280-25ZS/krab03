# Osobní Vizitka - GitHub Pages

Moderní a responzivní webová stránka sloužící jako osobní vizitka. Vytvořeno s HTML5, CSS3 a JavaScript.

## 🚀 Vlastnosti

- ✨ Moderní, responzivní design
- 🎨 Gradient pozadí a animations
- 📱 Mobilně přátelské
- ⚡ Lehké a rychlé načítání
- 🎯 SEO optimalizované
- 🌐 GitHub Pages kompatibilní

## 📋 Obsah

- **Profil**: Foto, jméno a pozice
- **Bio**: Krátký popis o vás
- **Dovednosti**: Vaše technologické schopnosti
- **Kontakt**: Odkazy na email, telefon, GitHub, LinkedIn
- **Projekty**: Vaše nejvýznamnější projekty s tagy
- **Footer**: Copyright a poděkování

## 🛠️ Použité technologie

- HTML5
- CSS3
- JavaScript (vanilla)
- Font Awesome (ikony)
- Responsive Grid/Flexbox

## 🚀 Nasazení na GitHub Pages

### 1. Vytvoření repozitáře na GitHubu
```bash
# Inicializujte git repozitář (pokud ještě není)
git init

# Přidejte soubory
git add .

# Vytvořte commit
git commit -m "Initial commit: Personal business card"

# Přidejte remote (nahraďte <username> a <repo-name>)
git remote add origin https://github.com/<username>/<repo-name>.git

# Pushněte na GitHub
git branch -M main
git push -u origin main
```

### 2. Aktivace GitHub Pages
1. Jděte do nastavení repozitáře: **Settings → Pages**
2. V sekci "Source" vyberte:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
3. Klikněte na **Save**

### 3. Přístup ke stránce
Vaše stránka bude dostupná na adrese:
```
https://<username>.github.io/<repo-name>/
```

Pokud je repozitář pojmenován `<username>.github.io`, bude dostupný na:
```
https://<username>.github.io/
```

## 📝 Přizpůsobení

Upravte tyto sekce v `index.html`:

1. **Jméno a titul**: Změňte `Jan Dvořák` a `Webový Vývojář & Designer`
2. **Bio**: Upravte popis v sekci `.bio`
3. **Dovednosti**: Přidejte/odstraňte skillů v sekci `.skills`
4. **Kontakt**: Změňte email, telefon a sociální sítě
5. **Projekty**: Přidejte vaše skutečné projekty

## 🎨 Přizpůsobení barev

V `styles.css` upravte CSS proměnné:

```css
:root {
    --primary-color: #0066cc;      /* Modrá */
    --secondary-color: #00a8e8;    /* Světlá modrá */
    --accent-color: #ff6b6b;       /* Červená */
}
```

## 📱 Responsive Design

- ✅ Desktop (>600px)
- ✅ Tablet (400-600px)
- ✅ Mobile (<400px)

## 🔍 SEO Optimalizace

- Meta tagy pro popis
- Strukturované HTML
- Alt text u obrázků
- Sémantický HTML markup

## 💡 Tipy

- Nahraďte avatar URL vlastním obrázkem
- Přidejte reálné kontaktní informace
- Propojte sociální sítě s vašimi profily
- Pravidelně aktualizujte projekty

## 📄 License

Tento projekt je veřejný a můžete ho libovolně upravovat a používat.

---

Vytvořeno s ❤️ pro GitHub Pages

Poslední aktualizace: 2026
