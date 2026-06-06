# Domaći — Radionica 6: Novi repo + branch

**Cilj:** sam/sama prođi cijeli tok od nule — napravi novi repo, postavi mali HTML/CSS projekat, pushuj ga, pa napravi branch i dodaj nešto na njemu.

---

## 1) Napravi novi repo na GitHubu
- **New repository** → ime po izboru (npr. `moj-mini-sajt`) → **Public** → ✅ **Add a README** → **Create**.

## 2) Kloniraj ga na računar i ubaci projekat
```bash
git clone https://github.com/TVOJ-USERNAME/moj-mini-sajt.git
cd moj-mini-sajt
```
- Napravi mali projekat: `index.html` + `style.css` (slobodno iskoristi nešto sa prošlih radionica — kartica, lista, šta god).

## 3) Pushuj projekat na `main`
```bash
git add .
git commit -m "Pocetni sajt - html i css"
git push
```
> Refresh GitHub stranicu → fajlovi su online. ✅

## 4) Napravi svoj branch i dodaj nešto na njemu
```bash
git checkout -b dodatak
```
- Dodaj jednu izmjenu (npr. novo dugme, sekcija, boja, novi `<h2>`).
```bash
git add .
git commit -m "Dodao novi dio na sajt"
git push -u origin dodatak
```

---

## Šta predaješ
Pošalji u grupu **link svog repoa** + napiši da imaš branch `dodatak`.

> Bonus (ko hoće): otvori **Pull Request** za branch `dodatak` → `main`.
