# Radionica 4 — Live coding

> Tačno koji kod TI kucaš uživo, kojim redom • tema: Flexbox kartice

Radiš u **`R4-css-layout/starter/`** (ili u svom rožaje sajtu). Otvori `attractions.html` i `style.css`, pokreni Live Server.

**Zlatno pravilo:** poslije *svake* izmjene → **Save → refresh → "vidite razliku?"** Greške praviš namjerno, pa ih popraviš pred njima.

---

## 1. Jedna kartica u HTML — `attractions.html`

🗣 *"Prvo napravimo JEDNU karticu — slika, naslov, opis. Pa ćemo je umnožiti."*

Unutar `<main>` (gdje je komentar), kucaj:

```html
<section class="card-grid">

  <article class="card">
    <img src="https://placehold.co/400x250?text=Hajla" alt="Planina Hajla">
    <h3>Planina Hajla</h3>
    <p>Najviši vrh u okolini Rožaja, omiljen kod planinara.</p>
  </article>

</section>
```

💾 Save → refresh: vidi se slika + naslov + tekst, jedno ispod drugog. Još bez magije.

---

## 2. Umnoži na 3 kartice — `attractions.html`

🗣 *"Sad copy-paste cijeli `article` još dva puta i samo promijenim tekst."*

Iskopiraj `<article>...</article>` blok 2× i izmijeni sadržaj:

```html
<article class="card">
  <img src="https://placehold.co/400x250?text=Kula" alt="Kula Ganića">
  <h3>Kula Ganića</h3>
  <p>Istorijski spomenik u centru grada.</p>
</article>

<article class="card">
  <img src="https://placehold.co/400x250?text=Park" alt="Park">
  <h3>Gradski park</h3>
  <p>Zelena oaza za šetnju i odmor.</p>
</article>
```

💾 Save → refresh: 3 kartice, sve naslagane jedna ISPOD druge. *"Browser sve stavlja u kolonu. Mi hoćemo u red — to je posao CSS-a."*

---

## 3. ⭐ Magija: `display: flex` — `style.css`

🗣 *"Sad jedna linija pretvara kolonu u red. Gledajte."*

U sekciji `/* R4: dodajemo Flexbox */` kucaj:

```css
.card-grid {
  display: flex;
}
```

💾 Save → refresh: **kartice skaču u red!** Ovo je "WOW" trenutak — pusti reakciju. *"Jedna riječ — `flex`."*

---

## 4. Dotjeraj grid — 3 propertyja, jedan po jedan — `style.css`

Dodaj **liniju po liniju**, Save poslije svake, komentariši efekat:

```css
.card-grid {
  display: flex;
  gap: 2rem;                /* razmak između kartica */
  flex-wrap: wrap;          /* prelama u novi red kad nema mjesta */
  justify-content: center;  /* gura grupu na sredinu */
}
```

💾 Save → refresh: poslije `gap` = vazduh između; `flex-wrap` = suzi prozor pa pokaži kako kartice padaju ispod; `justify-content` = isprobaj `center` / `space-between`.

---

## 5. Stilizuj samu karticu — `style.css`

🗣 *"Sad neka kartica liči na karticu — bijela, zaobljena, ista širina."*

```css
.card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  flex: 1 1 280px;   /* recept: ista širina, lijepo se lomi */
  max-width: 350px;
}
```

💾 Save → refresh: kartice dobijaju bijelu pozadinu i zaobljene ivice, iste su širine.

---

## 6. Slike iste visine — `style.css`

🗣 *"Slike su raznih veličina i kvare red. Ovim ih izjednačimo."*

```css
.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;   /* iseče, ne razvuče */
}
```

💾 Save → refresh: sve slike iste visine, kartice poravnate.

---

## 7. Vazduh oko teksta — `style.css`

```css
.card h3 { margin: 1rem 1rem 0; }
.card p  { padding: 0 1rem 1rem; color: #6c757d; }
```

💾 Save → refresh: **gotova kartica.** *"To što vidite — to je layout sa Airbnb-a i Booking-a. Vi ste to upravo napravili."*

---

> **Namjerne greške za demo (ako stigneš):** stavi `display: flex` na `.card` umjesto na `.card-grid` → ništa se ne desi → "vidite, container mora dobiti flex, ne dijete." Pa obriši `flex-wrap` i suzi prozor → kartice se stisnu → vrati ga.

Poslije ovoga oni rade isto sami na `attractions.html` i `food.html`. Cijeli gotov CSS je i u `R4-css-layout/PLAN.md` (cheat sheet).
