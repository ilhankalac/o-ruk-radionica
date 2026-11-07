# O ruk! — Web radionice (Rožaje)

Materijali sa web radionica za srednjoškolce u Rožajama, održanih u okviru projekta **Mladi za digitalnu promociju Rožaja**.

Kroz **12 radionica** učenici su prošli HTML, CSS, Git, GitHub i AI alate. Prva polovina je bila teorija i praksa kroz live coding, a druga rad po timovima na pravim projektima: grane, Pull Request-ovi, code review i objavljivanje sajta na internet. Svaki učenik je izašao sa svojim sajtom i portfoliom na GitHub-u.

**Tri tima, tri sajta koja su sada online:**

- [dozivirozaje.me](https://dozivirozaje.me) — turistički vodič kroz grad i okolinu
- [guidetourrozaje.me](https://guidetourrozaje.me) — vodič kroz ture i znamenitosti Rožaja
- [skijalistestedim.me](https://skijalistestedim.me) — skijalište Štedim

Cijela priča o radionicama: **[Mladi za digitalnu promociju Rožaja](https://ilhan.io/blogs/mladi-za-digitalnu-promociju-rozaja)**

> Kompletan plan kursa, strategija i raspored: **[COURSE-PLAN.md](COURSE-PLAN.md)**

---

## Radionice

Najbitnije radionice imaju svoj folder sa planom časa i materijalima. Ostatak kursa je bio timski rad na projektima.

| # | Folder | Tema |
|---|--------|------|
| R1 | [`R1-first-site/`](R1-first-site/) | Setup + prvi HTML (h1, p, img) |
| R2 | [`R2-html-structure/`](R2-html-structure/) | HTML skelet (header/main/footer) + više stranica + navigacija |
| R3 | [`R3-css-styling/`](R3-css-styling/) | CSS — boje, Google Fonts, box model |
| R4 | [`R4-css-layout/`](R4-css-layout/) | CSS Layout — Flexbox kartice |
| R5 | [`R5-git-cloud/`](R5-git-cloud/) | Git deo 1 — terminal (clone/add/commit/push) + GitHub |
| R6 | [`R6-git-branch-pr/`](R6-git-branch-pr/) | Git deo 2 — branch + Pull Request (timski repo) |
| R7 | [`R7-ai-coding-agents/`](R7-ai-coding-agents/) | AI i coding agenti (Claude Code) |

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
