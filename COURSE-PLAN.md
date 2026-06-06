# Plan kursa — Rožaje web sajt

**11 radionica × 2h | ~6 vikenda | 15 srednjoškolaca · 4 tima | Solo instruktor**

> **Napomene o strukturi:**
> - Stara R2 (HTML skelet) i stara R3 (više stranica + navigacija) spojene su u jednu radionicu (R2) → ukupno **11 radionica umjesto 12**.
> - **Git = 2 radionice** (R5 osnove/cloud backup, R6 branch + Pull Request), **AI = 1 radionica** (R7).
> - **R8–R10 = timski projekat** sa GitHub PR workflow-om (instruktor review-uje i merge-uje PR-ove). **R11 = finalna prezentacija.**

---

## Pristup i strategija (naši zaključci)

### Faza 1 (R1–R7): Lični sajt + učenje
Svaki učenik gradi **svoj lični sajt o Rožajama** (raste R1 → R4). Folder beleški po radionici. Na **R5** uče Git osnove i pushuju lični sajt + beleške na **lični GitHub nalog** = lični portfolio. Na **R6** uče branch + Pull Request (postavlja se timski repo), na **R7** AI za sadržaj.

### Faza 2 (R8–R11): Timski projekat
Timovi uzimaju **najbolje ideje iz ličnih sajtova** i grade timski "Visit Rožaje" sajt. Svaki član radi na **svom branch-u → Pull Request**, a **instruktor review-uje i merge-uje** PR-ove na GitHub-u. Završna prezentacija na R11.

### Zašto ovaj pristup
- Svaki učenik dobija **svoj GitHub portfolio** (lični sajt + beleške)
- Timski projekat startuje sa **iskustvom iz prvih 7 radionica** (HTML, CSS, layout, Git, branch/PR, AI)
- **Bez Git konflikata** — lični i timski radovi su odvojeni
- Svaka radionica ima **vidljiv napredak** (lični sajt raste — motivacija)
- R1 ima **reference sajt** kao vizuelni cilj ("evo gradimo ovo")

---

## Jezik i konvencije

- **Programiranje se uči na srpskom** (objašnjenja, beleške, komentari u PLAN.md)
- **Kod je na engleskom** (industry standard):
  - File names: `index.html`, `attractions.html`, `style.css`
  - Class names: `.navbar`, `.card`, `.hero`
  - HTML attributes: `<img alt="...">`
- **Tekst sadržaj sajta:** srpski (h1, p, button labels)

---

## Reference sajt (`projects/reference-site/`)

Moderan tourism sajt koji **pokazuješ na R1** kao demo: *"Za 11 radionica vi gradite ovakav sajt."*

5 stranica, čist dizajn, Flexbox kartice, responsive. Ne fancy — **dostižno**.

---

## Struktura foldera za svakog učenika

```
StudentName/
├── workshops/                    ← beleške + vježbe po radionici
│   ├── R1-first-site/
│   │   ├── notes.md              ← šta sam danas naučio
│   │   └── practice.html         ← vježba sa instruktorom
│   ├── R2-html-structure/        ← skelet + više stranica/navigacija (spojeno)
│   ├── R3-css-styling/
│   ├── R4-css-layout/
│   ├── R5-git-cloud/             ← commit/push/pull, lični repo
│   ├── R6-git-branch-pr/         ← branch + Pull Request, timski repo
│   └── R7-ai/                    ← AI etika + sadržaj
└── my-rozaje-site/               ← LIČNI sajt (raste R1 → R6)
    ├── index.html
    ├── attractions.html
    ├── accommodation.html
    ├── food.html
    ├── contact.html
    ├── style.css
    └── images/
```

**Backup do R5:** lider tima zip-uje cijeli folder na USB/Google Drive na kraju svake radionice.
**Od R5:** svako pushuje svoj folder na lični GitHub.

---

## Raspored 11 radionica

| # | Folder | Tema | Wow trenutak | Status |
|---|---|---|---|---|
| R1 | `R1-first-site` | Setup, prvi HTML (h1, p, img) | "Otvaram SVOJU stranicu" | ✅ 17. maj |
| R2 | `R2-html-structure` | header/main/section/footer/ul/a **+ 5 stranica + nav** | Klikaš kroz svoj "pravi sajt" | ✅ 23. maj |
| R3 | `R3-css-styling` | Boje + Google Fonts + box model | "Liči na pravi sajt" | ✅ 24. maj |
| R4 | `R4-css-layout` | Flexbox kartice (4 propertyja) | "Izgleda kao Airbnb" | ✅ 31. maj |
| R5 | `R5-git-cloud` | Git deo 1 — **terminal** (clone/add/commit/push) + `gh auth login`, lični GitHub | "Sajt je u cloud-u" | ✅ 2. jun |
| R6 | _(nije još)_ | Git deo 2 — branch + Pull Request, timski repo | "Moj PR je mergean" | slijedi |
| R7 | _(nije još)_ | AI — etika, halucinacije, sadržaj | "AI nije magija" | slijedi |
| R8 | _(nije još)_ | Timski projekat — start (JS utkano) | "Mi smo tim" | slijedi |
| R9 | _(nije još)_ | Timski projekat — sadržaj + responsive + polish | "Radi na telefonu" | slijedi |
| R10 | _(nije još)_ | Timski projekat — deploy + bug hunt + feature freeze | "Sajt je online" | slijedi |
| R11 | _(nije još)_ | Finale prezentacije + dodjela | URL pred publikom | slijedi |

---

## Ključni principi (kroz cijeli kurs)

1. **Kodiraj uživo, pravi greške pred njima.** Magija je proces debugovanja.
2. **Nikad polomljen sajt na kraju radionice.** Bolje manji feature urađen kako treba.
3. **Pravilo rotacije** (od R6+): štoperica na 15 min, mijenja se ko kuca u timu.
4. **AI je alat, ne autor:** "Ako ne možeš objasniti, ne možeš koristiti."
5. **Oni su programeri** — ne "učenici koji uče programiranje." Jezik oblikuje identitet.
6. **Slavi javno svaku pobjedu.** Mala pohvala pred grupom = najveća motivacija.

---

## Pred R1 — checklist

- [ ] VS Code instaliran kod svih (uputstvo poslano dan ranije)
- [ ] Live Server extension link spreman (autor: Ritwick Dey)
- [ ] **Reference sajt otvoren** u tabu (`projects/reference-site/index.html`)
- [ ] 3-4 inspirativna mala tourism sajta otvorena u tabovima
- [ ] USB sa offline VS Code installer-om
- [ ] Folder "resursi" sa 30+ slika Rožaja na USB-u
- [ ] 4 paleta boja otvoreno na coolors.co (za R3)
- [ ] 4 Claude naloga kreirana (za R6+)
- [ ] Domen rezervisan (nagrada pobjedničkom timu)
- [ ] Sertifikati dizajnirani (Canva, 15 min)
- [ ] Projektor/TV potvrđen u prostoriji

---

## Mjerenje uspjeha (kraj R11)

Svaki tim treba da može:
- ✅ Prikazati **live URL** svog sajta
- ✅ Objasniti strukturu foldera
- ✅ Uživo izmijeniti HTML/CSS (potvrda razumijevanja)
- ✅ Razdvojiti šta je AI napisao a šta oni
- ✅ Objasniti Git iz terminala (clone/add/commit/push) + šta je branch i Pull Request
- ✅ Objasniti **JEDAN** JS feature svog sajta

**Bonus za svakog učenika:** lični GitHub profil sa ličnim sajtom + beleškama iz svake radionice.
