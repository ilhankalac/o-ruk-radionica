# O ruk! — Web radionice (Rožaje)

Materijali za kurs web programiranja za srednjoškolce. Kroz **6 radionica** svaki učenik gradi svoj lični sajt o Rožajama — od prvog `<h1>` do sajta na internetu sa Git-om i Pull Request-ovima.

> Kompletan plan kursa, strategija i raspored: **[COURSE-PLAN.md](COURSE-PLAN.md)**

---

## Radionice

| # | Folder | Tema |
|---|--------|------|
| R1 | [`R1-first-site/`](R1-first-site/) | Setup + prvi HTML (h1, p, img) |
| R2 | [`R2-html-structure/`](R2-html-structure/) | HTML skelet (header/main/footer) + više stranica + navigacija |
| R3 | [`R3-css-styling/`](R3-css-styling/) | CSS — boje, Google Fonts, box model |
| R4 | [`R4-css-layout/`](R4-css-layout/) | CSS Layout — Flexbox kartice |
| R5 | [`R5-git-cloud/`](R5-git-cloud/) | Git deo 1 — terminal (clone/add/commit/push) + GitHub |
| R6 | [`R6-git-branch-pr/`](R6-git-branch-pr/) | Git deo 2 — branch + Pull Request (timski repo) |

Svaki folder radionice ima istu strukturu:

- **`PLAN.md`** — plan časa (šta se gradi, korak po korak)
- **`final-report.md`** — izvještaj nakon održane radionice
- **`starter/`** — početni fajlovi za učenike
- **`Fotografije/`** — fotografije sa radionice
- (po potrebi) `instruktor-live-coding.md`, `cheat-sheet-*.md`, demo folderi

---

## Projekti (`projects/`)

Standalone web projekti koji nisu vezani za jednu radionicu:

- **[`projects/reference-site/`](projects/reference-site/)** — referentni turistički sajt koji se pokazuje na R1 kao vizuelni cilj ("ovo gradimo").
- **[`projects/final-project/`](projects/final-project/)** — skelet timskog "Visit Rožaje" projekta za završne radionice. Vidi `VODIC-ZA-NASTAVNIKA.md` unutra.

---

## Korisni materijali

- **[cheat-sheet-pitanja-odgovori.md](cheat-sheet-pitanja-odgovori.md)** — česta pitanja i odgovori
- **[R5-git-cloud/cheat-sheet-git.md](R5-git-cloud/cheat-sheet-git.md)** — Git osnovne komande
- **[R6-git-branch-pr/cheat-sheet-git-branch.md](R6-git-branch-pr/cheat-sheet-git-branch.md)** — Git branch + Pull Request

Demo za vježbu branch/PR-a (R6) je u [`R6-git-branch-pr/radionica-demo/`](R6-git-branch-pr/radionica-demo/); živa verzija sa branch/PR historijom: <https://github.com/ilhankalac/radionica-demo>.

---

## Kako pokrenuti sajt

Svaki sajt je čist HTML/CSS — bez build alata. Otvori `index.html` duplim klikom u browseru, ili koristi **Live Server** ekstenziju u VS Code-u.
