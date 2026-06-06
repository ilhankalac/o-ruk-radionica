# Radionica demo — Branch & Pull Request

Ovo je **zajednički repo** za vježbu na Radionici 6. Svi smo collaboratori na njemu.

Cilj: svako napravi **svoj branch**, doda svoje ime na stranicu `ucesnici.html`, pošalje izmjenu i otvori **Pull Request**. Instruktor pregleda i merge-uje na `main`.

## Šta radiš (ukratko)

```bash
git pull                           # 1) povuci najnovije
git checkout -b ime-prezime        # 2) napravi svoj branch
# 3) otvori ucesnici.html i dodaj svoj <li> u listu
git add .
git commit -m "Dodao Ime Prezime na listu ucesnika"
git push -u origin ime-prezime     # 4) posalji svoj branch
# 5) na GitHubu: "Compare & pull request" -> Create pull request
```

Pravila branch imena: **mala slova, crtice umjesto razmaka, bez ćirilice** (npr. `marko-djukic`).

Sve komande i pomoć kad nešto pukne → vidi `cheat-sheet-git-branch.md` u materijalima radionice.
