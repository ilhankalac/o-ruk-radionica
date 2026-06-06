# Otkrij Rožaje — vodič za nastavnika i timove

Turistički vodič kroz Rožaje, napravljen čistim **HTML-om i CSS-om** (plus
sasvim malo JavaScripta za hamburger meni). Bez frameworka, bez build alata.
Cijeli folder se **prevuče na [Netlify Drop](https://app.netlify.com/drop)** i
odmah radi — ili se samo dvoklikne `index.html` da se otvori u browseru.

---

## Ideja projekta: „zaključani skelet”

Ovaj folder je **referentni primjer i skelet** koji daješ timovima. Zamisao:

- **`index.html`** je već **potpuno gotov** — pokazuje kako finalni sajt
  treba da izgleda.
- Ostale stranice (`priroda`, `kuhinja`, `kultura`, `dogadjanja`, `kontakt`)
  su **skeleti**: imaju isti izgled, isti header/footer i pravi početni
  sadržaj, ali sa **jasno označenim praznim sekcijama** koje timovi popunjavaju.

### Šta je „zaključano”, a šta đaci diraju

| Dio                         | Smiju li đaci mijenjati? |
|-----------------------------|--------------------------|
| Header (gornja traka + meni)| **NE** — isti na svim stranicama |
| Footer (podnožje)           | **NE** — isti na svim stranicama |
| `css/stil.css`              | Samo uz dogovor (boje da, raspored pažljivo) |
| `js/meni.js`                | **NE** |
| Sekcije sadržaja u stranicama | **DA — tu je njihov posao** |

> Pravilo broj 1 za timove: **ako u kodu vidiš `<!-- OVDJE TIM UBACUJE ... -->`,
> tu pišeš. Sve ostalo ostavi kako jeste.**

---

## Kako tim radi (korak po korak)

1. Otvori stranicu svog tima (npr. `kuhinja.html`) u uređivaču teksta.
2. Pronađi komentare `<!-- OVDJE TIM UBACUJE ... -->`.
3. Upiši tekst / dodaj kartice / ubaci slike na tim mjestima.
4. Slike ubaci u folder `slike/` po pravilima iz `slike/README.md`.
5. Sačuvaj i dvoklikni `index.html` da provjeriš kako izgleda.
6. Provjeri na telefonu (ili suzi prozor browsera) da meni radi.

### Gotovi „blokovi” koje đaci mogu kopirati

Da im bude lakše, u CSS-u već postoje gotovi stilovi. Đaci samo kopiraju
isječak i mijenjaju tekst:

**Mini-kartica** (za jelo, planinu, događaj, kontakt):
```html
<div class="mini-karta">
  <h3>Naslov</h3>
  <p>Kratak opis.</p>
</div>
```

**Lista sa strelicama:**
```html
<ul class="lista-cek">
  <li>Prva stavka</li>
  <li>Druga stavka</li>
</ul>
```

**Istaknuta info-kutija:**
```html
<div class="info-kutija">
  <strong>Savjet:</strong> tekst savjeta.
</div>
```

**Slika:**
```html
<img src="slike/ime-slike.jpg" alt="Kratak opis slike">
```

---

## Podjela na timove (prijedlog)

| Tim | Stranica         | Zadatak |
|-----|------------------|---------|
| 1   | `priroda.html`   | Hajla, izvor Ibra, staze, aktivnosti |
| 2   | `kuhinja.html`   | Jela + stvarni restorani/kuće hrane |
| 3   | `kultura.html`   | Ganića kula, drvorezbarstvo, zanati |
| 4   | `dogadjanja.html`| Kalendar manifestacija + kako doći |
| 5   | `kontakt.html`   | Kontakti, važni brojevi, karta |

`index.html` ostaje zajednički i ne dijeli se timovima.

---

## Šta je već ugrađeno (a đaci ne moraju da brinu)

- **Responsivnost** — sajt radi na telefonu; meni se skuplja u hamburger.
- **Tipografija** — dva Google fonta (Playfair Display + Inter).
- **Pristupačnost** — `lang`, `alt` (kad se doda slika), `aria` na meniju.
- **SEO osnove** — `<title>` i `<meta name="description">` na svakoj strani.
- **Štampa** — `Ctrl/Cmd + P` daje čistu verziju (vodič kao brošura/PDF).

---

## Vizija (zašto ovo nije „samo vježba”)

Cilj je da na kraju ovo bude **stvaran, tačan vodič kroz Rožaje** — nešto što
turistička organizacija ili opština mogu realno koristiti. Zato:

- **Sadržaj mora biti tačan** — provjeren iz zvaničnih izvora, ne izmišljen.
- **Fotografije moraju biti prave** i, po mogućnosti, autorske.
- **Jezik je crnogorski**, pismo i ton dostojanstveni (ovo predstavlja grad).

### Mogući pravci nadogradnje (za naprednije / sljedeću godinu)
- Galerija fotografija po sekcijama.
- Stranica „Smještaj” (hoteli, planinske kuće, katuni).
- Preuzimanje PDF brošure (već radi preko štampe).
- Kasnije, ako zatreba: prebacivanje na engleski kao druga verzija sajta.

---

## Tehnički podsjetnik

```
final-project/
├── index.html          (POČETNA — gotova, primjer)
├── priroda.html        (skelet)
├── kuhinja.html        (skelet)
├── kultura.html        (skelet)
├── dogadjanja.html     (skelet)
├── kontakt.html        (skelet)
├── css/stil.css        (zajednički stil — komentarisan)
├── js/meni.js          (samo hamburger meni)
├── slike/              (slike idu ovdje — vidi README)
└── VODIC-ZA-NASTAVNIKA.md  (ovaj fajl)
```

**Objava na internetu:** idi na <https://app.netlify.com/drop> i prevuci
**cijeli folder** `final-project` u prozor. Dobićeš javni link za par
sekundi. (Ako želiš svoju adresu/domen, to se podešava kasnije u Netlify-ju.)
