# Radionica 3 — Feedback i rezime

**Datum:** 24. maj 2026.
**Tema:** CSS — boje, fontovi, prvi stilizovani sajt
**Trajanje:** 2h

---

## ⚠️ Prvo bitno — znam da je danas bilo komplikovano

Znam da je CSS na prvi pogled puno toga odjednom. Hoću da znate: **postoji oko 500 CSS propertija** i svaki radi na svoj način. Niko ih ne zna sve napamet — ni ja, ni profesionalci sa 10 godina iskustva. Sve se to uči **vježbom** i guglanjem kad zatreba.

Ono što smo danas radili je **osnova** — par propertija koji pokrivaju 80% onoga što ćete u životu pisati. Sljedeći čas radimo **još neke propertije za pozicioniranje** (kako da stvari stoje gdje hoćemo da stoje), ali za sad je bitno da ova **osnova legne** — kako se CSS uopšte piše i povezuje sa HTML-om.

Ako vam danas nešto nije sjelo — normalno je. Kroz vježbu sve dolazi na svoje. 💪

---

## 🎨 Velika ideja

**HTML kaže ŠTA. CSS kaže KAKO IZGLEDA.**

Do sada smo imali skelet sajta — sve crno-bijelo, default browser stil. Danas smo dodali **boje, fontove i razmake** i sajt je prvi put ličio na pravi sajt.

---

## 🛠 3 načina kako da pišeš CSS

CSS možeš ubaciti na tri načina (sa table sa časa):

### 1. Inline — `style` na samom tagu
```html
<p style="color: red;">Ovo je crveni tekst</p>
```
Brzo, ali se ne preporučuje za veće sajtove (mora se ponavljati na svakom elementu).

### 2. Internal — `<style>` tag u `<head>` istog HTML fajla
```html
<head>
  <style>
    p {
      color: red;
    }
  </style>
</head>
```
Bolje nego inline, ali stil radi samo na **toj jednoj stranici**.

### 3. External — poseban fajl `style.css` (ovo smo koristili!)
```html
<head>
  <link rel="stylesheet" href="style.css">
</head>
```
Najbolji način — jedan CSS fajl povezan sa **svim stranicama** sajta. Promijeniš boju na jednom mjestu — mijenja se svuda.

---

## 🏷 Šta smo danas naučili (kratko za šta je koji property)

### Selektori (kako biramo na koji element CSS djeluje)
- **Element selector** — `h1 { ... }` → pogađa **sve** `<h1>` na stranici
- **Class selector** — `.title { ... }` → pogađa elemente sa `class="title"`

### Properties koje smo koristili
- `color` — boja **teksta**
- `background-color` — boja **pozadine**
- `font-family` — koji **font** koristimo (npr. Poppins)
- `font-size` — veličina fonta (npr. `32px`)
- `padding` — razmak **unutra** (između sadržaja i ivice) — dio **box modela**
- `margin` — razmak **spolja** (između elementa i drugih elemenata) — dio **box modela**
- `border` — ivica oko elementa — dio **box modela**
- `text-decoration: none` — sklanja podvlačenje linkova
- `max-width` — maksimalna širina (da sajt ne bude beskonačno širok)

### 📦 CSS Box Model

Svaki element na stranici je u stvari **kutija** (box). Ta kutija ima 4 sloja, od centra ka spolja:

```
┌─────────────────────────────────┐
│           MARGIN                │  ← razmak SPOLJA (gura druge elemente)
│  ┌───────────────────────────┐  │
│  │        BORDER             │  │  ← ivica kutije
│  │  ┌─────────────────────┐  │  │
│  │  │     PADDING         │  │  │  ← razmak UNUTRA (između sadržaja i border-a)
│  │  │  ┌───────────────┐  │  │  │
│  │  │  │   CONTENT     │  │  │  │  ← sam sadržaj (tekst, slika)
│  │  │  └───────────────┘  │  │  │
│  │  └─────────────────────┘  │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

- **content** — ono što pišeš (tekst, slika)
- **padding** — vazduh **unutar** kutije (između sadržaja i ivice)
- **border** — sama ivica kutije
- **margin** — vazduh **oko** kutije (gura druge elemente dalje)

> **Trik za pamćenje:** `padding` je *unutrašnji* razmak (kao postava u jakni), `margin` je *spoljašnji* razmak (lični prostor između tebe i druge osobe).

Box model je **najvažniji koncept u CSS-u** — kad shvatite zašto element zauzima toliko prostora koliko zauzima, sve ostalo postaje lakše.

### Sintaksa
```css
selector {
  property: value;
}
```
Primjer:
```css
p {
  margin: 10px;
  color: red;
}
```
> Zapamtite: **vitičaste zagrade `{ }`**, **dvotačka `:`** između propertija i vrijednosti, **tačka-zarez `;`** na kraju svakog reda.

### Boje
- **Imenom** — `red`, `white`, `blue`
- **Hex kodom** — `#1B4965`, `#FAFAFA` (sa **coolors.co** biramo paletu od 5 boja)

### Google Fonts
1. Otvoriš **fonts.google.com** → biraš font (mi smo koristili **Poppins**)
2. Kopiraš `<link>` u `<head>` **svih** stranica
3. U CSS: `font-family: 'Poppins', sans-serif;`

---

## ✅ Šta treba da ponesete sa današnje radionice

- Razlika **inline / internal / external** — znati zašto koristimo `style.css` u posebnom fajlu
- Kako da povežete CSS sa HTML-om (`<link rel="stylesheet" href="style.css">` u `<head>`)
- Razlika između **element selektora** (`h1`) i **class selektora** (`.title`)
- Šta rade `color`, `background-color`, `font-family`, `font-size`, `padding`, `margin`
- **CSS Box Model** — svaki element je kutija sa content / padding / border / margin
- Da znate naći boju na **coolors.co** i kopirati **hex kod**
- Kako se ubacuje **Google Font**

CSS cheatsheet ako želite da vidite više propertija (ne učiti napamet — koristiti kao referencu):

🔗 https://developer.mozilla.org/en-US/docs/Web/CSS/Reference

---

## ⚠️ Najčešće greške koje smo viđali

- **Zaboravljen `<link>` u `<head>`** → ništa se ne mijenja, sajt izgleda kao prije. Provjerite da li je linkovan!
- **Zaboravljena tačka-zarez `;`** na kraju reda → CSS prekida da radi od te linije
- **Klasa u HTML-u bez tačke u CSS-u** → `class="title"` u HTML-u, ali u CSS-u mora **`.title`** (sa tačkom)
- **Google Fonts `<link>` poslije `style.css`** → font ne radi. Mora **iznad**.
- **CSS povezan samo na jednu stranicu** → ostale stranice ostaju ružne. Mora biti u **svim** HTML fajlovima.
- **Tipfeleri u imenima propertija** — `color` (ne `colour`), `background-color` (ne `backgroundColor`)

---

## 🔜 Šta radimo sljedeći put (ukratko)

**Radionica 4 — CSS pozicioniranje i layout.** Naučili smo da damo boje i fontove, ali sve stoji jedno ispod drugog. Sljedeći put radimo **kako da rasporedimo stvari** — slike pored teksta, dvije kolone, navigacija u liniji, itd.

Novi propertiji koje ćemo dirati: `display`, `flexbox`, dodatni `margin`/`padding` trikovi.

Sjetite se: **HTML = skelet, CSS = boje i namještaj, layout = gdje šta stoji u sobi.** ✅

---

## 🛠 Ako niste bili danas — kako da budete spremni

1. Ako još niste, instalirajte **VS Code** + **Live Server** ekstenziju (objasnjeno u finalnom izvještaju sa Radionice 1)

2. Napravite folder `r3/` pored ostalih:

   ```
   mzdpr_radionica/
     r1/
     r2/
     r3/
       class/
       exercises/
       notes.md
   ```

3. U `class/` napravite `index.html` (sa skeletom koji već znate) **i** novi fajl `style.css` u istom folderu.

4. U `<head>` od `index.html` dodajte:
   ```html
   <link rel="stylesheet" href="style.css">
   ```

5. U `style.css` probajte da otkucate:
   ```css
   body {
     font-family: Arial, sans-serif;
     background-color: #FAFAFA;
     color: #1A1A1A;
   }

   header {
     background-color: #1B4965;
     color: white;
     padding: 20px;
   }

   h1 {
     font-size: 32px;
   }
   ```

6. Otvorite sa **Live Server** — header treba da bude plav, tekst bijel. Ako jeste — sve radi ✅

Pitajte u grupi ako nešto zaglavi.

---

**Domaći:** nema. Ko hoće da vježba — probajte da promijenite boje, font, veličinu — eksperimentišite. Tako se najbrže uči.

Vidimo se sljedeći put! 🚀
