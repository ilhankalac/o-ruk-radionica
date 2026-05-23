# Radionica 2 — Feedback i rezime

**Datum:** 23. maj 2026.
**Tema:** HTML struktura sajta (skelet) + linkovanje stranica (multi-page)
**Trajanje:** 2h

---

## 🧱 Velika ideja

**HTML = skelet kuće, CSS = boje i namještaj.**

Do sada smo pisali stvari na stranicu. Danas smo učili da im damo **mjesto** — da sajt ima pravu strukturu kao pravi sajt, a ne samo gomilu teksta.

---

## 🏷 Tagovi koje smo obradili (kratko za šta je koji)

### Struktura sajta
- `<header>` — **vrh sajta**, kao naslovnica novina (naslov, logo, opis)
- `<main>` — **glavni sadržaj**, srce sajta (sve što je važno ide ovdje)
- `<section>` — **jedna cjelina** unutar main-a (npr. "O Rožajama", "Šta posjetiti", "Kontakt")
- `<footer>` — **podnožje** sajta (copyright, kontakt info, korisni linkovi)
- `<nav>` — **navigacija**, linkovi ka drugim stranicama sajta (obradili na kraju, iz Radionice 3)

### Naslovi i tekst
- `<h1>` — najveći naslov (samo jedan po stranici, glavni naslov)
- `<h2>`, `<h3>`, `<h4>` — manji naslovi, idu po hijerarhiji (h2 unutar sekcije, h3 ispod h2, itd.)
- `<p>` — **paragraf** (jedan pasus teksta)

### Liste
- `<ul>` — **unordered list**, lista sa tačkicama (kad redoslijed nije važan)
- `<ol>` — **ordered list**, lista sa brojevima (kad je redoslijed važan — npr. top 5 filmova)
- `<li>` — **list item**, jedna stavka u listi (ide unutar `<ul>` ili `<ol>`)

### Linkovi
- `<a href="...">Tekst</a>` — **anchor**, link koji vodi na drugi sajt ili drugu stranicu

### Komentari
- `<!-- ovo je komentar -->` — tekst koji browser ne prikazuje, služi nama da pišemo bilješke u kodu

---

## 🔗 Linkovanje stranica

Linkove smo prvo radili na **eksterni sajt** (npr. `<a href="https://mubi.com">mubi.com</a>`) — tu se ide na **drugi sajt na internetu**.

Onda smo prešli na **lokalno linkovanje** — link između naših vlastitih fajlova u istom folderu:

```html
<a href="best-film.html">Idi na stranicu najboljeg filma</a>
```

Razlika:
- **`https://...`** → vodi na neki tuđi sajt na internetu
- **`ime-fajla.html`** → vodi na našu drugu stranicu u istom folderu

Tako smo povezali `index.html` → `best-film.html` → `worst-film.html` i mogli smo klikati kroz "naš mali sajt" lokalno.

---

## ✅ Šta treba da ponesete sa današnje radionice

- Razlika **strukture i stila** — HTML daje skelet, CSS dolazi tek sljedeći put
- Da znate **gdje koji tag ide** (header gore, main u sredini, footer dole)
- Razlika između `<ul>` (tačkice) i `<ol>` (brojevi)
- Kako napraviti link na **drugi sajt** (`https://...`) i na **lokalnu stranicu** (`ime.html`)
- Da znate šta je `<nav>` i čemu služi

HTML cheatsheet ako želite da vidite sve tagove:

🔗 https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Cheatsheet

---

## ⚠️ Najčešće greške koje smo viđali

- **Nezatvoreni tagovi** — svaki `<section>` mora imati `</section>`. Trik: `Shift+Alt+F` u VS Code-u (auto-format) — odmah vidite gdje je problem
- **Tipfeler u `href`** — link vodi nigdje. Ime fajla mora biti **identično** (case-sensitive: `Best-film.html` ≠ `best-film.html`)
- **Miješanje `<section>` i `<div>`** — danas koristimo samo `<section>`, `<div>` ide kasnije

---

## 🔜 Šta radimo sljedeći put (ukratko)

**Radionica 4 — CSS (boje i namještaj).** Do sada smo gradili **skelet** sajta — sve je crno-bijelo i izgleda "ružno", ali ima strukturu. Sljedeći put dolazi **CSS** — boje, fontovi, razmaci, sve što čini da sajt izgleda kao pravi sajt.

Sjetite se: HTML = skelet, **CSS = boje i namještaj**. ✅

---

## 🛠 Ako niste bili danas — kako da budete spremni

1. Ako još niste, instalirajte **VS Code** + **Live Server** ekstenziju (objasnjeno u finalnom izvještaju sa Radionice 1)

2. Napravite folder `r2/` pored `r1/`:

   ```
   mzdpr_radionica/
     r1/
     r2/
       class/
       exercises/
       notes.md
   ```

3. U `class/` napravite `index.html` (kucajte `!` + Tab za HTML skelet) i probajte sami strukturu:

   ```html
   <header>
     <h1>Naslov sajta</h1>
   </header>

   <main>
     <section>
       <h2>Prva sekcija</h2>
       <p>Neki tekst...</p>
     </section>
   </main>

   <footer>
     <p>© 2026 Vaše ime</p>
   </footer>
   ```

4. Otvorite sa **Live Server** i provjerite da radi.

Pitajte u grupi ako nešto zaglavi.

---

**Domaći:** nema.

Vidimo se sljedeći put! 🚀
