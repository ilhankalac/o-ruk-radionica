# Radionica 3 — Multi-page (više stranica + navigacija)

**Trajanje:** 2h | **Cilj:** Lični sajt ima 5 stranica + navigaciju. Sajt prestaje biti "jedna stranica".

## Šta gradimo danas
5 HTML fajlova povezanih navigacijom: `index.html`, `attractions.html`, `accommodation.html`, `food.html`, `contact.html`. Folder `images/`. Klika se kroz cijeli sajt.

---

## Pripremi prije časa
- [ ] **Reference sajt** spreman da pokažeš nav uživo
- [ ] Dogovor: ovo i dalje **lični** sajt (od R7 postaje timski)
- [ ] Provjeri da svaki tim ima USB ili Google Drive folder za backup

---

## Vremenica (2h)

### 0:00–0:15 — Review + demo
- Otvori **reference sajt** → klikni nav → **"Vidite kako se mijenja URL ali ostaje isti dizajn? To gradimo danas."**
- Pitaj: "Kako mislite da ovo radi iznutra?" — neka pokušaju pogoditi (5 sekundi suspense pa otkrij)
- "Svaka stranica = svoj fajl. URL = ime fajla."

### 0:15–0:35 — Folder struktura
Otvori VS Code sidebar i pokaži cilj:
```
my-rozaje-site/
├── index.html
├── attractions.html
├── accommodation.html
├── food.html
├── contact.html
├── style.css           (dolazi na R4)
└── images/
    ├── hajla.jpg
    └── grad.jpg
```

Uživo:
1. `Right click → New File` → `attractions.html`
2. Ukucaj `!` + **Tab** → boilerplate
3. Promijeni `<title>` i dodaj `<h1>Atrakcije</h1>`
4. Ponovi za sve 5 fajlova (brzo, neka prate ritam)
5. Folder `images/` → ubaci par slika unutra

> **Engleska imena fajlova** — objasni: "U industriji se file names pišu na engleskom. Sadržaj sajta može biti na bilo kom jeziku, ali file names = English."

### 0:35–0:55 — Navigation
**Velika ideja:** "Nav je isti na svakoj stranici. Copy-paste, ali pažljivo."

```html
<nav>
  <a href="index.html">Početna</a>
  <a href="attractions.html">Atrakcije</a>
  <a href="accommodation.html">Smještaj</a>
  <a href="food.html">Hrana</a>
  <a href="contact.html">Kontakt</a>
</nav>
```

> **Pitfall za demonstraciju:** relativne putanje.
> `images/foto.jpg` ✅ (radi lokalno)
> `/images/foto.jpg` ❌ (NE radi lokalno!)
> **Demonstriraj grešku namjerno** — vide razliku.

### 0:55–1:05 — PAUZA ☕

### 1:05–1:50 — Solo: svako pravi svojih 5 stranica
Svako u svom `my-rozaje-site/` pravi sve stranice:
- Naslov stranice (`<h1>`)
- 2-3 pasusa o temi (`<p>`)
- Lista (`<ul>`) ako ima smisla
- 1-2 slike
- **Isti `<nav>`** copy-paste na svakoj stranici (gore u `<body>`)

> **Ti trčiš.** Najčešća pitanja:
> - "Slika ne radi" → putanja
> - "Nav me ne vodi nigdje" → typo u `href`
> - "Sve 5 stranica izgleda isto" → to je OK danas, sutra mijenjamo CSS

#### Backup (5 min na kraju)
Lider tima: zip-uj cijeli `Marko-rozaje/` folder, kopiraj na **USB ili Google Drive**. Ovo je **obavezno** do R6 dok ne uvedemo Git.

#### Beleške
`workshops/R3-multi-page/notes.md`

### 1:50–2:00 — Show & tell
Svaki tim klika **kroz svih 5 stranica** na projektoru. Pljesak.

---

## "Wow" trenutak
**0:55 — prvi put kliknu nav link i URL se promijeni.**
"Hej, to je više sajtova!" → "Ne, isti sajt, druga stranica."

## Pitfalls
- Relativne putanje (`images/` vs `/images/`)
- Tipfeleri u `href` → link vodi nigdje
- Slika ne radi jer je `Images` sa velikim I (case-sensitive)
- Neko zaboravi nav na svojoj stranici → izgleda kao slijepa ulica
- Promijene `<h1>` ali zaborave `<title>` → tab pokazuje pogrešno ime

## Domaći
**Razmislite:** "Šta je glavna atrakcija mog sajta — oko čega gradim priču?" (planina, kuhinja, istorija, ljudi...)

---

## Cheat sheet (za live coding)
```html
<!-- nav (isti na svim stranicama) -->
<nav>
  <a href="index.html">Početna</a>
  <a href="attractions.html">Atrakcije</a>
  <a href="accommodation.html">Smještaj</a>
  <a href="food.html">Hrana</a>
  <a href="contact.html">Kontakt</a>
</nav>

<!-- slika iz foldera -->
<img src="images/hajla.jpg" alt="Planina Hajla">
```
