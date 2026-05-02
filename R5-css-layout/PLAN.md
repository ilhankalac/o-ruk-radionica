# Radionica 5 — CSS Layout (Flexbox kartice)

**Trajanje:** 2h | **Cilj:** Sajt izgleda kao **pravi sajt**, ne kao Word dokument. Kartice u redovima — Airbnb feeling.

## Šta gradimo danas
Red sa **3 kartice** (slika + naslov + tekst) na stranici Atrakcije i Hrana. Koristimo Flexbox sa SAMO 4 propertyja.

---

## Pripremi prije časa
- [ ] **Reference sajt** spreman da pokažeš `card-grid` u akciji (`attractions.html`)
- [ ] Pripremi 1-2 Airbnb stranice da pokažeš real-world primjer kartica
- [ ] DevTools mobile view spreman (pokaži kako kartice "wrap-uju" na manjim ekranima)
- [ ] Provjeri da svi imaju funkcionalan R4 sajt (sa CSS-om i bojama)

---

## Vremenica (2h)

### 0:00–0:15 — Review + demo
- "Ko se sjeća kako se povezuje CSS sa HTML-om?" — neka neko podsjeti
- **Demo:** otvori reference sajt → `attractions.html` → pokaži red kartica
- Otvori Airbnb → pokaži isti pattern
- **"Danas učimo Flexbox — alat #1 za moderan layout."**

### 0:15–0:45 — Mini-lekcija: Flexbox (kucaš uživo)
**Velika ideja:** "Bez Flexbox-a, sve elemente browser stavlja jedno ispod drugog. Sa Flexbox-om — kažemo: stavi ih u red."

**SAMO 4 propertyja danas** (NE ulazi dalje — `align-items`, `flex-grow`, itd. su za kasnije):

```css
.card-grid {
  display: flex;       /* aktivira Flexbox na containeru */
  gap: 2rem;           /* razmak između djece */
  justify-content: center;  /* horizontalno poravnanje */
  flex-wrap: wrap;     /* prelama u novi red ako nema mjesta */
}
```

**Demonstriraj uživo svaki property** — promijeni vrijednost, save, vidi efekat:
- `display: flex` → vidi kako se elementi naredjaju u red
- `gap: 2rem` → razmak između
- `justify-content: center / flex-start / space-between` — pokaži razlike
- `flex-wrap: wrap` — smanji prozor → kartice padaju ispod (bez ovog se "stisnu")

> **Trik:** "Flexbox ima 20+ propertyja. Mi učimo 4 koja pokrivaju 80% slučajeva."

### 0:45–1:00 — Vođena vježba (svi rade isto)
Svi otvaraju **svoju** `attractions.html` i prave 3 kartice:

```html
<section class="card-grid">
  <article class="card">
    <img src="images/hajla.jpg" alt="Hajla">
    <h3>Planina Hajla</h3>
    <p>Najviši vrh okoline Rožaja...</p>
  </article>
  <article class="card">
    <img src="images/kula.jpg" alt="Kula">
    <h3>Kula Ganića</h3>
    <p>Istorijski spomenik...</p>
  </article>
  <article class="card">
    <img src="images/park.jpg" alt="Park">
    <h3>Park Hajla</h3>
    <p>Zaštićena oblast prirode...</p>
  </article>
</section>
```

I CSS u `style.css`:
```css
.card-grid {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  flex: 1 1 280px;
  max-width: 350px;
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card h3, .card p {
  padding: 0 1rem;
}

.card h3 { margin-top: 1rem; }
.card p { padding-bottom: 1rem; color: #6c757d; }
```

**Save → "OHOHOO".**

### 1:00–1:10 — PAUZA ☕

### 1:10–1:50 — Solo: kartice na 2 stranice
Svako primjenjuje **isti pattern** na dvije svoje stranice:
1. **`attractions.html`** — 3-6 kartica atrakcija
2. **`food.html`** — 3-4 kartice tradicionalnih jela ili restorana

**Pravilo:** ako neko završi rano → idi pomozi drugima u svom timu. **Tim radi zajedno.**

> **Najčešći problem:** sve kartice u jednom redu pa se "stisnu". Rješenje: `flex-wrap: wrap`.
> **Drugi:** slike različitih veličina kvare ravnotežu. Rješenje: `object-fit: cover` + fiksna `height`.

#### Beleške
`workshops/R5-css-layout/notes.md` — opiši šta radi svaki od 4 propertyja.

### 1:50–2:00 — Show & tell
Svaki tim pokazuje **stranicu sa karticama**. Tu prvi put kažu: **"OHOHO, izgleda kao pravi sajt!"** — iskoristi taj trenutak.

---

## "Wow" trenutak
**1:00 — kad save-uju Flexbox CSS i kartice se naredjaju u red.**
Reci: **"To što vidite — to je layout sa Airbnb-a, Booking-a, sa svakog sajta. Vi ste to upravo napravili."**

## Pitfalls
- `display: flex` na pogrešan element (na `.card` umjesto `.card-grid`) → ništa ne radi
- Bez `flex-wrap: wrap` → kartice se stisnu na malom ekranu
- Slike različitih dimenzija → kartice nisu iste visine. Rješenje: `object-fit: cover` + fiksna `height` na `<img>`
- Padding ide unutar `.card`, ne na grid → `.card` ima padding, `.card-grid` ima gap
- Ne učimo `align-items`, `flex-grow`, `flex-direction` — vrati ih ako pitaju ("kasnije, prvo ovo savladajte")

## Domaći
**Razmislite u timu:** šta je vaš **glavni "wow" feature** — oko čega gradite priču? (planina, kuhinja, istorija, ljudi, ekstremni sportovi...)
Ovo se zove **theme** sajta i trebaće na R7 kad krene timski projekat.

---

## Cheat sheet (za live coding)
```html
<section class="card-grid">
  <article class="card">
    <img src="images/foto.jpg" alt="Opis">
    <h3>Naslov</h3>
    <p>Opis kartice.</p>
  </article>
  <!-- još kartica -->
</section>
```

```css
.card-grid {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  flex: 1 1 280px;
  max-width: 350px;
  background: white;
  border-radius: 12px;
  overflow: hidden;
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
```

## Šta NE diramo danas
- `align-items` (vertikalno poravnanje) — kasnije
- `flex-direction` — kasnije
- `flex-grow / flex-shrink` (osim `flex: 1 1 280px` koji koristimo "kao recept")
- CSS Grid — kasnije (možda R8)

## Bonus za brze timove
- `transition: transform 0.3s` na `.card` + `transform: translateY(-4px)` na `:hover` → kartica "skoči" kad pređeš mišem (preview za R8)
