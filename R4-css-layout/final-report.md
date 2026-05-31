# Radionica 4 — Feedback i rezime

**Datum:** 31. maj 2026.
**Tema:** CSS Layout — Flexbox (kartice u redovima)
**Trajanje:** 2h

---

## 🎯 Velika ideja

**Bez Flexbox-a browser sve stavlja jedno ispod drugog. Sa Flexbox-om kažemo: "stavi ih u red."**

Do sada smo imali boje, fontove i razmake — ali sve je stajalo vertikalno, jedno ispod drugog, kao Word dokument. Danas smo naučili da **rasporedimo elemente u red** i da napravimo **kartice** — onaj isti pattern koji vidite na Airbnb-u, Booking-u i praktično svakom modernom sajtu.

To što ste danas napravili — to je layout sa pravih sajtova. 🚀

---

## 🛠 Flexbox — samo 4 propertyja (i pokrivaju 80% slučajeva)

Flexbox ima 20+ propertyja, ali mi smo se danas držali **4** koja rješavaju većinu situacija. **Sva 4 idu na container** (na `<section>`), ne na pojedinačne kartice.

```css
.container {
  display: flex;        /* aktivira Flexbox — naređa djecu u red */
  gap: 10px;            /* razmak između kartica */
  flex-wrap: wrap;      /* prelama u novi red kad nema mjesta */
  justify-content: ...; /* horizontalno poravnanje kartica */
}
```

### Šta radi koji property

- **`display: flex`** — uključuje Flexbox na containeru. Čim ga dodaš, djeca (`<article>`) se naredjaju **u red** umjesto jedno ispod drugog. Ovo je prekidač koji sve pokreće.
- **`gap`** — razmak **između** kartica. Čišće od margina jer ne moraš da brineš o "prvoj" i "posljednjoj" kartici.
- **`flex-wrap: wrap`** — kad nema dovoljno mjesta u redu, kartice **padaju u novi red** umjesto da se stisnu. Bez ovoga se na malom ekranu sve sabije.
- **`justify-content`** — **horizontalno** poravnanje kartica u redu.

---

## 📐 `justify-content` — tri varijante koje smo isprobali

Danas smo napravili **tri containera** i na svakom probali drugačiju vrijednost `justify-content`, da uživo vidimo razliku:

| Container | Vrijednost | Šta radi |
|-----------|-----------|----------|
| `.container` | `space-between` | gura kartice na **krajeve**, razmak se ravnomjerno rasporedi između njih |
| `.container-2` | `center` | kartice **centrirane** u sredini reda |
| `.container-3` | `end` | kartice poravnate **na desni kraj** |

```css
.container   { justify-content: space-between; }
.container-2 { justify-content: center; }
.container-3 { justify-content: end; }
```

> **Trik:** najlakše se nauči tako što promijeniš vrijednost → save → pogledaš. `flex-start` (lijevo), `center` (sredina), `flex-end`/`end` (desno), `space-between` (na krajeve).

---

## 🖼 Kartice i slike

Da kartice izgledaju uredno, stilizovali smo i pojedinačnu karticu i slike u njoj:

```css
.single-attraction {
  border-radius: 12px;   /* zaobljeni uglovi */
  border: 1px solid black;
  padding: 20px;         /* vazduh unutar kartice (box model iz R3!) */
}

img {
  width: 100%;           /* slika popuni širinu kartice */
  height: 400px;         /* sve slike iste visine */
  object-fit: cover;     /* slika se "kropuje" da popuni okvir bez deformacije */
}
```

**Zašto `object-fit: cover`?** Slike su različitih dimenzija. Bez ovoga bi se razvukle i izgledale deformisano. Sa `cover` + fiksnom `height`, sve slike izgledaju **isto i uredno** — popune okvir, a višak se "iseče".

---

## ✅ Šta treba da ponesete sa današnje radionice

- **`display: flex`** ide na **container** (`<section>`), ne na pojedinačnu karticu
- Sva 4 propertyja (`display`, `gap`, `flex-wrap`, `justify-content`) idu **na isti container**
- `flex-wrap: wrap` je obavezan da se kartice ne stisnu na malom ekranu
- Razlika između `justify-content` vrijednosti: `center` / `space-between` / `end` / `flex-start`
- `object-fit: cover` + fiksna `height` = slike iste visine, bez deformacije
- `gap` je čistiji način za razmak između elemenata nego `margin`

---

## ⚠️ Najčešće greške koje smo viđali

- **`display: flex` na pogrešan element** → ako ga staviš na `.single-attraction` umjesto na container, ništa se ne raspoređuje u red. Mora na **container**.
- **Zaboravljen `flex-wrap: wrap`** → kartice se stisnu na malom ekranu umjesto da padnu u novi red.
- **Slike različitih dimenzija bez `object-fit`** → kartice nisu iste visine, sve izgleda neuredno.
- **Zaboravljena tačka-zarez `;`** → CSS prekida da radi od te linije (klasika iz R3).
- **Klasa u HTML-u bez tačke u CSS-u** → `class="container"` u HTML-u, ali `.container` (sa tačkom) u CSS-u.

---

## 🔜 Šta radimo sljedeći put

Naučili smo da naredjamo elemente **u red** (horizontalno). Sljedeći put idemo dublje u Flexbox:

- **`align-items`** — vertikalno poravnanje (gore / sredina / dole)
- **`flex-direction`** — red vs. kolona
- **`flex: 1 1 280px`** — kako da kartice budu **iste širine** i da se same rastežu

Sjetite se: **HTML = skelet, CSS = boje i namještaj, Flexbox = raspored stvari u sobi.** ✅

---

## 🛠 Ako niste bili danas — kako da budete spremni

1. U `class/` folderu napravite `index.html` i `styles.css` (povezane sa `<link rel="stylesheet" href="styles.css">` u `<head>`).

2. U HTML napravite container sa dvije kartice:
   ```html
   <section class="container">
     <article class="single-attraction">
       <h1>Hajla</h1>
       <p>Dobra planina</p>
       <img src="LINK_DO_SLIKE" alt="">
     </article>
     <article class="single-attraction">
       <h1>Ahmica</h1>
       <p>Još bolja planina</p>
       <img src="LINK_DO_SLIKE" alt="">
     </article>
   </section>
   ```

3. U `styles.css` dodajte:
   ```css
   .container {
     display: flex;
     gap: 10px;
     flex-wrap: wrap;
     justify-content: center;
   }

   .single-attraction {
     border-radius: 12px;
     border: 1px solid black;
     padding: 20px;
   }

   img {
     width: 100%;
     height: 400px;
     object-fit: cover;
   }
   ```

4. Otvorite sa **Live Server** → dvije kartice treba da stoje **jedna pored druge**. Promijenite `justify-content` na `center`, `space-between`, `end` i gledajte razliku. Ako radi — sve štima ✅

---

**Domaći:** razmislite u timu — koji je vaš **glavni "wow" feature** oko kojeg gradite priču (planina, kuhinja, istorija, sportovi...)? To se zove **theme** sajta i trebaće na timskom projektu.

Vidimo se sljedeći put! 🚀
