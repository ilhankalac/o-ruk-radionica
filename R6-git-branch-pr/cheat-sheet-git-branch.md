# Cheat sheet — R6: Branch + Pull Request (timski tok)

Štampaj i podijeli, ili drži na projektoru. Komande su za **collaborator model** (svi rade na ISTOM repou, svako na svom branchu). Branch ime: **mala slova, crtice, bez razmaka i ćirilice** (npr. `marko-djukic`).

---

## Cijela priča u 6 koraka

```bash
# 1) Skini zajednički repo (samo prvi put)
git clone https://github.com/INSTRUKTOR/rozaje-tim-demo.git
cd rozaje-tim-demo

# 2) Povuci najnovije PRIJE nego počneš da radiš
git pull

# 3) Napravi SVOJ branch i prebaci se na njega
git checkout -b ime-prezime

# 4) (uradi izmjenu u fajlu) pa spakuj i snimi
git add .
git commit -m "Opis sta sam uradio"

# 5) Pošalji svoj branch na GitHub (SAMO prvi put sa -u)
git push -u origin ime-prezime
#   svaki sljedeći put za isti branch:  git push

# 6) Na GitHubu: žuto dugme "Compare & pull request"
#    -> naslov + opis -> "Create pull request"
#    Instruktor: review -> Approve -> "Merge pull request"
```

---

## Komande — šta koja radi

| Komanda | Šta radi |
|---|---|
| `git pull` | povuci najnovije izmjene sa GitHuba (radi PRIJE rada) |
| `git checkout -b ime-prezime` | napravi novi branch i prebaci se na njega |
| `git branch` | pokaži sve branchove (zvjezdica = gdje si sad) |
| `git checkout main` | vrati se na `main` |
| `git checkout ime-prezime` | prebaci se na postojeći branch |
| `git status` | šta se promijenilo / na kom sam branchu |
| `git add .` | spakuj sve izmjene |
| `git commit -m "..."` | snimi (zapamti) stanje |
| `git push -u origin ime-prezime` | pošalji NOVI branch na GitHub (prvi put) |
| `git push` | pošalji nove commitove (kad branch već postoji na GitHubu) |

---

## Pull Request — koraci na GitHubu (klikom)

1. Refresh repo stranicu → žuti baner **"Compare & pull request"** → klik.
2. Provjeri smjer: **base: `main`** ← **compare: `ime-prezime`**.
3. Napiši jasan **naslov** + kratak **opis** šta si uradio.
4. **Create pull request.**
5. (Instruktor) tab **Files changed** → pregled → **Review → Approve**.
6. (Instruktor) **Merge pull request → Confirm merge.** Gotovo — kod je u `main`.

---

## Timska postavka (za R8 projekat)

```
Tim lider na GitHubu:
  New repository -> Public -> Add README

  Settings -> Collaborators:
     + dodaj instruktora
     + dodaj članove tima

  Settings -> Branches -> Add branch protection rule (za "main"):
     [x] Require a pull request before merging
     [x] Require approvals (1)   <- niko ne mergea u main bez review-a instruktora
```

---

## Kad nešto pukne (brza pomoć)

| Problem | Rješenje |
|---|---|
| `push` traži pristup / odbijen | Nisi collaborator ili nisi prihvatio pozivnicu (mejl/Notifications). Provjera: `gh auth status` |
| "no upstream branch" pri `push` | Prvi put treba `git push -u origin ime-prezime` |
| Greškom radim na `main` | `git branch` da provjeriš; `git checkout -b ime-prezime` da prebaciš rad na svoj branch |
| Ne znam gdje sam | `git branch` (zvjezdica) ili `git status` |
| Merge konflikt | Javi instruktoru — rješavamo zajedno |
