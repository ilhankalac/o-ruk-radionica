# Radionica 2 — HTML Structure (skelet sajta)

**Trajanje:** 2h | **Cilj:** Razumiju razliku između **strukture** (HTML) i **stila** (CSS dolazi). Lični sajt dobija pravu strukturu.

## Šta gradimo danas
Proširenu naslovnu (`index.html`) sa zaglavljem, glavnim sadržajem (3 sekcije) i podnožjem. Bez stila — još uvijek izgleda "ružno", ali ima strukturu kao pravi sajt.

---

## Pripremi prije časa
- [ ] Imaš spremnu analogiju: **HTML = skelet kuće, CSS = boje i namještaj**
- [ ] Lista 6 novih tag-ova: `<header>`, `<main>`, `<section>`, `<footer>`, `<ul>`, `<a>`
- [ ] Provjeri da svi imaju domaći (5 slika Rožaja). Ako nemaju → USB sa rezervom.
- [ ] **Reference sajt** spreman da se Inspect-uje (pokazuješ pravi `<header>`, `<main>`, `<footer>`)

---

## Vremenica (2h)

### 0:00–0:10 — Review
"Ko se sjeća šta je tag?" — neka neko podsjeti grupu.
Ako su zaboravili — to je **normalno**, jedna nedjelja je prošla. Brzo ponovi `<h1>`, `<p>`, `<img>`.

### 0:10–0:40 — Mini-lekcija (kucaš uživo)
**Velika ideja:** "Do sada ste pisali stvari na stranicu. Sad učimo da im damo MJESTO."

Uvedi tag-ove jedan po jedan:
- `<header>` — "vrh sajta, kao naslovnica novina"
- `<main>` — "glavni sadržaj, srce sajta"
- `<section>` — "jedna cjelina unutar main-a"
- `<footer>` — "podnožje — copyright, kontakt"
- `<ul>` + `<li>` — "**unordered list** — lista sa tačkicama"
- `<a href="...">` — "**anchor** — link na drugi sajt ili stranicu"

> **Trik za pažnju:** otvori reference sajt → desni klik → **Inspect** → pokaži im `<header>`, `<main>`, `<footer>` u kodu. **"Vidite — isto kao mi, samo veće."**

### 0:40–1:00 — Vođena vježba (svi rade isto)
Svi otvaraju `my-rozaje-site/index.html` (sa prošle radionice) i prepravljaju da koristi pravu strukturu:

```html
<header>
  <h1>Ime sajta</h1>
</header>

<main>
  <section>
    <h2>O Rožajama</h2>
    <p>...</p>
  </section>

  <section>
    <h2>Šta posjetiti</h2>
    <ul>
      <li>...</li>
    </ul>
  </section>

  <section>
    <h2>Kontakt</h2>
  </section>
</main>

<footer>
  <p>© 2026 Marko</p>
</footer>
```

### 1:00–1:10 — PAUZA ☕

### 1:10–1:50 — Lični sadržaj + timski identitet
Dva koraka:

**1. Tim donosi 3 odluke** (15 min):
- **Ime tima/sajta** ("Rožaje na dlanu", "Visit Rožaje", "Moje Rožaje")
- **Slogan** (jedna rečenica)
- **3 glavne boje** (samo dogovor, pišu na papir — kodiramo na R4)

**2. Svako popunjava SVOJ sajt** stvarnim sadržajem (25 min):
- Pravi tekstovi o Rožajama (ne lorem ipsum)
- Slike iz domaćeg
- Lista 3-4 stvari pod "Šta posjetiti"

> **Pravilo:** trči između svih 15 učenika. Najčešći problem: nezatvoreni tagovi.

#### Beleške
`workshops/R2-html-structure/notes.md` — "šta sam danas naučio o strukturi".

### 1:50–2:00 — Show & tell
Svaki tim **čita slogan + ime sajta** naglas. Pljesak.

---

## "Wow" trenutak
**1:50 — kad tim pročita svoj slogan i ime sajta naglas pred drugima.**
Identitet je nastao. To više nije "neki sajt", to je **njihov** sajt.

## Pitfalls
- Nezatvoreni tagovi → uči ih `Shift+Alt+F` (auto-format) → odmah vide gdje je problem
- Neko hoće da kuca CSS jer mu je dosadno → vrati ga: "danas struktura, sljedeći put boje"
- Tim se ne može dogovoriti za ime → daj im 5 min limit + glasanje
- Mješaju `<section>` i `<div>` → reci: "danas samo `<section>`, `<div>` kasnije"

## Domaći
**Nema.** Reci im to da se osjećaju "profesionalno": **"Programeri imaju dane odmora, vi ste odradili posao."**

---

## Cheat sheet (za live coding)
```html
<header>
  <h1>...</h1>
</header>

<main>
  <section>
    <h2>...</h2>
    <p>...</p>
  </section>
</main>

<footer>...</footer>

<ul>
  <li>Stavka 1</li>
  <li>Stavka 2</li>
</ul>

<a href="https://primjer.com">Tekst linka</a>
```
