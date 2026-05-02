# Plan kursa — Rožaje web sajt

**12 radionica × 2h | 6 vikenda | 15 srednjoškolaca · 4 tima | Solo instruktor**

---

## Pristup i strategija (naši zaključci)

### Faza 1 (R1–R6): Lični sajt + učenje
Svaki učenik gradi **svoj lični sajt o Rožajama** (raste R1 → R6). Folder beleški po radionici. Na **R6** uče Git i pushuju lični sajt + beleške na **lični GitHub nalog** = lični portfolio.

### Faza 2 (R7–R12): Timski projekat
Timovi uzimaju **najbolje ideje iz ličnih sajtova** i grade timski "Visit Rožaje" sajt. **Lider pushuje na tim repo.** Završna prezentacija na R12.

### Zašto ovaj pristup
- Svaki učenik dobija **svoj GitHub portfolio** (lični sajt + beleške)
- Timski projekat startuje sa **6 nedjelja iskustva** (HTML, CSS, layout, Git)
- **Bez Git konflikata** — lični i timski radovi su odvojeni
- Svaka radionica ima **vidljiv napredak** (lični sajt raste — motivacija)
- R1 imaju **reference sajt** kao vizuelni cilj ("evo gradimo ovo")

---

## Jezik i konvencije

- **Programiranje se uči na srpskom** (objašnjenja, beleške, komentari u PLAN.md)
- **Kod je na engleskom** (industry standard):
  - File names: `index.html`, `attractions.html`, `style.css`
  - Class names: `.navbar`, `.card`, `.hero`
  - HTML attributes: `<img alt="...">`
- **Tekst sadržaj sajta:** srpski (h1, p, button labels)

---

## Reference sajt (`reference-site/`)

Moderan tourism sajt koji **pokazuješ na R1** kao demo: *"Za 12 radionica vi gradite ovakav sajt."*

5 stranica, čist dizajn, Flexbox kartice, responsive. Ne fancy — **dostižno**.

---

## Struktura foldera za svakog učenika

```
StudentName/
├── workshops/                    ← beleške + vježbe po radionici
│   ├── R1-first-site/
│   │   ├── notes.md              ← šta sam danas naučio
│   │   └── practice.html         ← vježba sa instruktorom
│   ├── R2-html-structure/
│   ├── R3-multi-page/
│   ├── R4-css-styling/
│   ├── R5-css-layout/
│   └── R6-git-cloud/
└── my-rozaje-site/               ← LIČNI sajt (raste R1 → R6)
    ├── index.html
    ├── attractions.html
    ├── accommodation.html
    ├── food.html
    ├── contact.html
    ├── style.css
    └── images/
```

**Backup do R6:** lider tima zip-uje cijeli folder na USB/Google Drive na kraju svake radionice.
**Od R6:** svako pushuje svoj folder na lični GitHub.

---

## Raspored 12 radionica

| # | Folder | Tema | Wow trenutak |
|---|---|---|---|
| R1 | `R1-first-site` | Setup, prvi HTML (h1, p, img) | "Otvaram SVOJU stranicu" |
| R2 | `R2-html-structure` | header/main/section/footer/ul/a | Tim ima ime + slogan |
| R3 | `R3-multi-page` | 5 stranica + nav | Klikaš kroz svoj "pravi sajt" |
| R4 | `R4-css-styling` | Boje + Google Fonts | "Liči na pravi sajt" |
| R5 | `R5-css-layout` | Flexbox kartice (4 propertyja) | "Izgleda kao Airbnb" |
| R6 | _(nije još)_ | Git + lični GitHub push | "Sajt je u cloud-u" |
| R7 | _(nije još)_ | Timski projekat starts | "Mi smo tim" |
| R8 | _(nije još)_ | CSS polish + AI sadržaj | Polirano + tekstovi |
| R9 | _(nije još)_ | 1 JS feature (slideshow/menu) | "Sajt se pomjera" |
| R10 | _(nije još)_ | Responsive (mobile) | "Radi na telefonu" |
| R11 | _(nije još)_ | Netlify Drop deploy | "Sajt je online" |
| R12 | _(nije još)_ | Finale prezentacije | URL pred publikom |

---

## Ključni principi (kroz cijeli kurs)

1. **Kodiraj uživo, pravi greške pred njima.** Magija je proces debugovanja.
2. **Nikad polomljen sajt na kraju radionice.** Bolje manji feature urađen kako treba.
3. **Pravilo rotacije** (od R7+): štoperica na 15 min, mijenja se ko kuca u timu.
4. **AI je alat, ne autor:** "Ako ne možeš objasniti, ne možeš koristiti."
5. **Oni su programeri** — ne "učenici koji uče programiranje." Jezik oblikuje identitet.
6. **Slavi javno svaku pobjedu.** Mala pohvala pred grupom = najveća motivacija.

---

## Pred R1 — checklist

- [ ] VS Code instaliran kod svih (uputstvo poslano dan ranije)
- [ ] Live Server extension link spreman (autor: Ritwick Dey)
- [ ] **Reference sajt otvoren** u tabu (`reference-site/index.html`)
- [ ] 3-4 inspirativna mala tourism sajta otvorena u tabovima
- [ ] USB sa offline VS Code installer-om
- [ ] Folder "resursi" sa 30+ slika Rožaja na USB-u
- [ ] 4 paleta boja otvoreno na coolors.co (za R4)
- [ ] 4 Claude naloga kreirana (za R7+)
- [ ] Domen rezervisan (nagrada pobjedničkom timu)
- [ ] Sertifikati dizajnirani (Canva, 15 min)
- [ ] Projektor/TV potvrđen u prostoriji

---

## Mjerenje uspjeha (kraj R12)

Svaki tim treba da može:
- ✅ Prikazati **live URL** svog sajta
- ✅ Objasniti strukturu foldera
- ✅ Uživo izmijeniti HTML/CSS (potvrda razumijevanja)
- ✅ Razdvojiti šta je AI napisao a šta oni
- ✅ Objasniti GitHub Desktop (3 dugmeta)
- ✅ Objasniti **JEDAN** JS feature svog sajta

**Bonus za svakog učenika:** lični GitHub profil sa ličnim sajtom + beleškama iz svake radionice.
