# Radionica 3 — CSS Styling (boje + tipografija)

**Trajanje:** 2h | **Cilj:** Sajt prestaje izgledati kao Word dokument iz 1995. **Prvi pravi "wow" trenutak kursa.**

## Šta gradimo danas
`style.css` fajl povezan sa svim 5 stranica. Boje, fontovi, lijepi naslov. Sajt prvi put liči na sajt.

---

## Pripremi prije časa
- [ ] **4–5 paleta otvoreno na coolors.co** u tabovima (BITNO — inače 30 min nestane na biranju)
- [ ] Lista preporučenih Google Fonts kombinacija (Poppins + Inter, Playfair + Lato, Montserrat + Open Sans)
- [ ] **Reference sajt** spreman za demo "prije/poslije"
- [ ] Imaj otvorenu nečiju stranicu sa R3 (bez CSS) za poređenje

---

## Vremenica (2h)

### 0:00–0:10 — Demo "wow"
Pokaži **prije/poslije**:
- Bez CSS-a: nečija R3 stranica (ružna, default browser stil)
- Sa CSS-om: **reference sajt**

**"Šta je razlika u HTML-u? NIŠTA. Sve je u CSS-u. Danas učimo CSS."**

### 0:10–0:30 — Mini-lekcija (kucaš uživo)
**Velika ideja:** "HTML kaže ŠTA. CSS kaže KAKO IZGLEDA."

1. Napravi novi fajl `style.css` u `my-rozaje-site/`
2. Poveži ga u `<head>` **svih 5 stranica**:
```html
<link rel="stylesheet" href="style.css">
```

3. **Selectors** (samo dva danas):
   - **Element selector**: `h1 { ... }` — pogađa SVE `<h1>` na stranici
   - **Class selector**: `.title { ... }` — pogađa elemente sa `class="title"`

4. **Properties** (samo 4 danas):
```css
color: white;
background-color: #1B4965;
font-family: 'Poppins', sans-serif;
font-size: 24px;
```

> **Trik:** "Boja teksta je `color`, pozadina je `background-color`, font je `font-family`. Programski jezici su engleske rečenice — ako znaš engleski, znaš pola."

### 0:30–0:55 — Vođena vježba (svi rade isto)
Svi prave **istu** stilizaciju, da možeš debug-ovati jednu stvar:

```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  background-color: #FAFAFA;
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

**Save → Live Server refresh → "WOW".** Tu treba da bude reakcija.

### 0:55–1:05 — PAUZA ☕

### 1:05–1:30 — Lična paleta
Svako odlazi na **coolors.co** (već otvoreni tabovi) i bira svoju paletu:
- **5 boja** (paletu)
- Kopira **hex kodove** (`#1B4965`, itd.)
- Lista: 1 background, 1 header, 1 text, 1 accent, 1 secondary

> **Pravilo:** maks **5 minuta** na biranje. Inače cijela radionica nestane na "ne sviđa mi se ova nijansa".

> **Tim discussion (5 min):** tim se može dogovoriti za zajedničku paletu (priprema za R7), ili svako može imati svoju za sad.

### 1:30–1:55 — Primjena + Google Fonts
Svako primjenjuje paletu na svoj sajt. Plus:
1. Otvore **fonts.google.com**
2. Biraju **JEDAN font** za naslove (max 2 ukupno!)
3. Kopiraju `<link>` u `<head>` **svih 5 stranica**
4. `font-family: 'IzabraniFont', sans-serif;` u CSS

> **Bonus za brže:** drugi font za body (sans-serif), display font za naslove. **Maksimalno 2 fonta** — pravilo dobrog dizajna.

#### Beleške
`workshops/R3-css-styling/notes.md` — uključi i hex kodove svoje palete.

### 1:55–2:00 — Show & tell
Svaki tim pokazuje **prije/poslije**: jedna stranica bez CSS, ista sa CSS. Reakcija će biti glasna.

---

## "Wow" trenutak
**0:55 — kad sačuvaju prvi CSS i Live Server refresh-uje sa plavim header-om.**
Tu se sajt prvi put "rodi". Reci: **"To što vidite — to je razlika između teksta i SAJTA."**

## Pitfalls
- Zaborave da povežu `style.css` u `<head>` → "ništa se ne mijenja, šta sam pogriješio?"
- Tačke i zarezi (`;`) — najčešća greška u CSS-u
- Class u HTML-u: `class="title"` (ne `id`) — selector je `.title`
- Google Fonts `<link>` poslije `style.css` → font ne radi
- Biraju 6 različitih fontova → reci NE, max 2
- Povežu `style.css` samo na `index.html` → ostalih 4 stranica još uvijek izgledaju ružno

## Domaći
**Nema.** Sutra je radni dan, neka se odmore.

---

## Cheat sheet (za live coding)
```html
<!-- u <head> SVIH 5 stranica -->
<link rel="stylesheet" href="style.css">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
```

```css
body {
  font-family: 'Poppins', sans-serif;
  background-color: #FAFAFA;
  color: #1A1A1A;
  margin: 0;
}

header {
  background-color: #1B4965;
  color: white;
  padding: 20px;
}

.title {
  font-size: 32px;
}

a {
  color: #1B4965;
  text-decoration: none;
}
```

## Korisni linkovi (otvori u tabovima)
- **coolors.co** — palette generator
- **fonts.google.com** — fontovi
- **realtimecolors.com** — preview palete uživo na pravom layoutu
- **fontpair.co** — provjereni font parovi
