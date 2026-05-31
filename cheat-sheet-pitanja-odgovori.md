# Cheat Sheet — Pitanja i odgovori (R1–R4)

**Najosnovnije što SVAKO mora da zna.** Pokriva radionice 1–4. Nije za učenje napamet — koristi kao podsjetnik.

---

## 🌐 Radionica 1 — Kako web radi

**P: Šta je klijent, a šta server?**
O: **Klijent** je tvoj browser (Chrome) koji **traži** stranicu. **Server** je kompjuter koji tu stranicu **vraća**. Klijent pošalje *request*, server vrati *response*.

**P: Šta je request, a šta response?**
O: **Request** = pitanje klijenta ("daj mi ovu stranicu"). **Response** = odgovor servera (sama stranica — HTML, slike, itd.).

**P: Šta je Live Server?**
O: Ekstenzija u VS Code-u koja na tvom kompjuteru podigne **lokalni server** da vidiš svoj sajt u browseru. Desni klik na `index.html` → **"Open with Live Server"**.

**P: Kako se zove glavni fajl sajta?**
O: **`index.html`** — to je početna stranica koju browser otvara prvu.

**P: Kako brzo napravim HTML skelet u VS Code-u?**
O: Otkucaš **`!`** pa pritisneš **Tab**.

---

## 🧱 Radionica 2 — HTML struktura

**P: Šta je HTML?**
O: Jezik koji daje **skelet** sajta — kaže **ŠTA** je na stranici (naslov, tekst, slika, lista). *(HTML = skelet kuće.)*

**P: Šta je tag?**
O: Komanda u uglastim zagradama koja se najčešće **otvara i zatvara**: `<p>tekst</p>`. Skoro svaki tag mora imati i zatvarajući par `</tag>`.

**P: Koji su glavni tagovi za strukturu?**
O:
- `<header>` — vrh sajta (naslov, logo)
- `<main>` — glavni sadržaj
- `<section>` — jedna cjelina unutar main-a
- `<footer>` — podnožje (copyright, kontakt)
- `<nav>` — navigacija (linkovi ka stranicama)

**P: Razlika između `<h1>` i `<p>`?**
O: `<h1>` je **najveći naslov** (samo jedan po stranici). `<p>` je **paragraf** (pasus teksta). Manji naslovi: `<h2>`, `<h3>`, `<h4>`.

**P: Razlika između `<ul>` i `<ol>`?**
O: `<ul>` = lista sa **tačkicama** (redoslijed nevažan). `<ol>` = lista sa **brojevima** (redoslijed važan). Svaka stavka ide u `<li>`.

**P: Kako napravim link?**
O: `<a href="...">Tekst</a>`
- Na drugi sajt: `<a href="https://mubi.com">Mubi</a>`
- Na svoju stranicu: `<a href="best-film.html">Najbolji film</a>`

**P: Kako se piše komentar u HTML-u?**
O: `<!-- ovo browser ne prikazuje -->`

---

## 🎨 Radionica 3 — CSS (boje, fontovi, razmaci)

**P: Šta je CSS?**
O: Jezik koji kaže **KAKO IZGLEDA** sajt — boje, fontovi, razmaci. *(CSS = boje i namještaj.)*

**P: Koja su 3 načina da se piše CSS?**
O:
1. **Inline** — `<p style="color: red;">` (na samom tagu)
2. **Internal** — `<style>` u `<head>`
3. **External** — poseban `styles.css` fajl **(ovaj koristimo!)**

**P: Kako povežem CSS sa HTML-om?**
O: U `<head>`: `<link rel="stylesheet" href="styles.css">`. Ako se ništa ne mijenja — najvjerovatnije fali ovaj link.

**P: Kako izgleda CSS sintaksa?**
O:
```css
selektor {
  property: value;
}
```
Primjer: `p { color: red; }` — vitičaste zagrade `{ }`, dvotačka `:`, tačka-zarez `;` na kraju svakog reda.

**P: Razlika između element i class selektora?**
O: **Element**: `h1 { }` pogađa **sve** `<h1>`. **Class**: `.naslov { }` (sa **tačkom**) pogađa elemente sa `class="naslov"`.

**P: Šta rade najčešći propertyji?**
O:
- `color` — boja teksta
- `background-color` — boja pozadine
- `font-family` — font
- `font-size` — veličina fonta
- `padding` — razmak **unutra**
- `margin` — razmak **spolja**
- `border` — ivica

**P: Šta je Box Model?**
O: Svaki element je **kutija** sa 4 sloja: **content** (sadržaj) → **padding** (razmak unutra) → **border** (ivica) → **margin** (razmak spolja). Trik: padding = postava u jakni, margin = lični prostor oko tebe.

**P: Kako se pišu boje?**
O: Imenom (`red`, `white`) ili **hex kodom** (`#1B4965`). Palete biraš na **coolors.co**.

---

## 📐 Radionica 4 — Flexbox layout

**P: Čemu služi Flexbox?**
O: Da elemente poredjamo **u red**. Bez njega browser sve stavlja **jedno ispod drugog**.

**P: Koja 4 propertyja smo koristili i gdje idu?**
O: Sva 4 idu na **container** (`<section>`), NE na pojedinačnu karticu:
```css
.container {
  display: flex;        /* uključi Flexbox — poredja u red */
  gap: 10px;            /* razmak između kartica */
  flex-wrap: wrap;      /* prelama u novi red kad nema mjesta */
  justify-content: center; /* horizontalno poravnanje */
}
```

**P: Šta radi `display: flex`?**
O: Uključuje Flexbox — odmah poredja djecu u red. To je glavni prekidač.

**P: Šta radi `flex-wrap: wrap`?**
O: Kad nema mjesta u redu, kartice **padaju u novi red** umjesto da se stisnu. Bitno za male ekrane (telefon).

**P: Koje vrijednosti `justify-content` smo isprobali?**
O:
- `center` — kartice u sredini
- `space-between` — gura ih na krajeve, razmak ravnomjerno
- `end` (`flex-end`) — poravna na desni kraj
- `flex-start` — na lijevi kraj

**P: Zašto `object-fit: cover` na slikama?**
O: Da slike različitih dimenzija izgledaju **iste i uredne** — popune okvir bez deformacije. Ide uz fiksnu `height`:
```css
img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}
```

---

## ⚠️ Top 7 grešaka (provjeri prvo ovo kad nešto ne radi)

1. **Fali `<link rel="stylesheet">`** → CSS se uopšte ne primjenjuje
2. **Zaboravljena tačka-zarez `;`** → CSS prekida od te linije
3. **Class bez tačke u CSS-u** → `class="card"` u HTML-u, ali `.card` (sa tačkom) u CSS-u
4. **Nezatvoren tag** → `<section>` bez `</section>`. Trik: `Shift+Alt+F` (auto-format)
5. **`display: flex` na pogrešan element** → mora na **container**, ne na karticu
6. **Fali `flex-wrap: wrap`** → kartice se stisnu na malom ekranu
7. **Tipfeler u `href`** → link ne radi (imena su case-sensitive: `Best.html` ≠ `best.html`)

---

## 🧠 Tri rečenice koje sve sažimaju

- **HTML** = skelet (ŠTA je na stranici)
- **CSS** = boje i namještaj (KAKO izgleda)
- **Flexbox** = raspored namještaja u sobi (GDJE šta stoji)

---

## 🔗 Korisni linkovi

- HTML cheatsheet: https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Cheatsheet
- CSS reference: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference
- Boje (palete): https://coolors.co
- Fontovi: https://fonts.google.com
