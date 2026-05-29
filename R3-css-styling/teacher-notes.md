# R3 — CSS Notes (kratko, za tebe)

## Redoslijed (predlog)

1. **Box Model** (10–15 min) — najvaznije
2. **3 nacina dodavanja CSS-a** (10 min)
3. **Selektori + properties** (zivo kucanje)
4. **Paleta + Google Fonts** (lichno)
5. **Show & tell**

---

## 1. Box Model (start ovde)

**Otvori DevTools (F12 ili desni klik → Inspect).** Klikni na neki element. Pokazi im **box model dijagram** dolje desno — to im je dokaz da nije magija.

```
+-----------------------------+
|         MARGIN              |  ← razmak OD DRUGIH elemenata
|  +-----------------------+  |
|  |       BORDER          |  |  ← linija oko elementa
|  |  +----------------+   |  |
|  |  |    PADDING     |   |  |  ← razmak UNUTRA, oko sadrzaja
|  |  |  +----------+  |   |  |
|  |  |  | CONTENT  |  |   |  |  ← tekst/slika
|  |  |  +----------+  |   |  |
|  |  +----------------+   |  |
|  +-----------------------+  |
+-----------------------------+
```

**Analogija:** "Slika u ramu na zidu."
- Slika = **content**
- Bijeli okvir oko slike (paspartu) = **padding**
- Drveni ram = **border**
- Razmak do druge slike na zidu = **margin**

**Provjeri na njihovom:** otvori film index.html → klikni na `<header>` → pokazi kako `padding: 30px 20px` stvara prostor unutra.

---

## 2. Tri nacina dodavanja CSS-a

Demonstriraj na **istom elementu** (npr. `<h1>`) sva tri, pa pitaj **koji je najbolji**.

### A) INLINE (direktno na element)
```html
<h1 style="color: red;">Naslov</h1>
```
- ✅ Radi odmah
- ❌ Mora se ponavljati za svaki `<h1>`
- ❌ Mijesa "STA" (HTML) sa "KAKO" (CSS)
- **Kada se koristi:** skoro nikad (samo brzi test)

> **Trik:** vec imaju `<header style="text-align: center;">` u film-design/index.html → to je primjer inline.

### B) INTERNAL (`<style>` u `<head>`)
```html
<head>
  <style>
    h1 { color: red; }
  </style>
</head>
```
- ✅ Sve na jednom mjestu
- ❌ Radi samo za **JEDNU** stranicu
- **Kada se koristi:** male stranice, jedan-fajl projekti

### C) EXTERNAL (poseban fajl) — **OVO RADIMO**
```html
<link rel="stylesheet" href="style.css">
```
- ✅ Jedan fajl, **SVE** stranice
- ✅ HTML ostaje cist
- ✅ Mijenjas jednu boju → mijenja se svuda
- **Kada se koristi:** uvijek na pravim sajtovima

> **Reci im:** "Profesionalci koriste samo C. A i B su trikovi za hitne slucajeve."

---

## 3. Selektori (samo 2 danas)

```css
/* ELEMENT selector — pogadja SVE h1 na stranici */
h1 { color: blue; }

/* CLASS selector — pogadja samo class="title" */
.title { font-size: 40px; }
```

**HTML strana:**
```html
<h1 class="title">Naslov</h1>
```

> **Trik za pamcenje:** `.` znaci "klasa". Bez tacke = ime taga.

---

## 4. Properties (samo 6 danas)

| Property | Sta radi | Primjer |
|---|---|---|
| `color` | boja teksta | `color: white;` |
| `background-color` | pozadina | `background-color: #1B4965;` |
| `font-family` | font | `font-family: 'Poppins', sans-serif;` |
| `font-size` | velicina | `font-size: 32px;` |
| `padding` | razmak UNUTRA | `padding: 20px;` |
| `margin` | razmak SPOLJA | `margin: 0;` |

**Bonus (ako ostane vremena):** `text-align`, `text-decoration`, `border`

---

## 5. Google Fonts (15 min)

1. **fonts.google.com** → izaberi font (npr. Poppins)
2. Klikni "Get embed code" → kopiraj `<link>`
3. Stavi **IZNAD** `style.css` link-a u `<head>`
4. U CSS: `font-family: 'Poppins', sans-serif;`

> **VAZNO:** Google Fonts link **mora biti PRIJE** `style.css` link-a, inace ne radi.

---

## 6. Pitfalls (ovde najcesce zapinju)

- [ ] **`;` na kraju svake linije** — najcesca greska
- [ ] **`{` i `}`** — moraju se zatvoriti
- [ ] **`class="title"`** u HTML, **`.title`** u CSS (tacka samo u CSS-u)
- [ ] **`#1B4965`** — sa znakom **`#`** ispred (hex code)
- [ ] **`link rel="stylesheet"` na SVIM stranicama** — ne samo na index
- [ ] **Google Fonts iznad style.css** — inace font ne radi
- [ ] **Save → Live Server refresh** — ako ne vide promjenu, vjerovatno nisu sacuvali

---

## 7. Live coding redoslijed (predlog)

Krenes od **film-design/index.html** (vec ima `<link>` za style.css i Google Fonts).

1. Otvori `style.css` — prazan
2. Pisi **uzivo, polako:**
```css
body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  background-color: #FAFAFA;
}
```
Save → refresh → **"vidite razliku? font se promijenio"**

3. Dodaj header:
```css
header {
  background-color: #1B4965;
  color: white;
  padding: 20px;
}
```
Save → refresh → **"WOW trenutak"** ovde

4. Pa h1, .title, footer, linkove...

> **Svaki put kad nesto dodas: save → refresh → komentar "vidite razliku?"**

---

## 8. Reci na pocetku, ponovi na kraju

- **"HTML kaze STA. CSS kaze KAKO IZGLEDA."**
- **"To sto vidite — to je razlika izmedju teksta i SAJTA."**

---

## 9. Domaci

**Nema.** Sutra je radni dan.

---

## Korisni tabovi (otvori prije casa)

- coolors.co — palette
- fonts.google.com — fontovi
- realtimecolors.com — preview palete uzivo
- film-design/index.html otvoren u browseru + DevTools
