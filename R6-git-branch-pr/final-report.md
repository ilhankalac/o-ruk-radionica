# Radionica 6 — Feedback i rezime

**Datum:** 6. jun 2026.
**Tema:** Git iz terminala deo 2 — Branch + Pull Request (timski tok)
**Trajanje:** 2h

---

## 🎯 Velika ideja

**Do danas je svako radio sam na svom repou. Danas smo prvi put svi radili na ISTOM kodu — bez gaženja jedni drugima.**

Naučili smo kako pravi timovi rade: svako napravi **svoju kopiju (branch)**, uradi izmjenu, i pošalje **molbu (Pull Request)** da njegov rad uđe u zajedničku verziju — a neko to **pregleda (review)** prije nego odobri. Tačno ovako rade Google, Microsoft i sve ozbiljne dev ekipe. 🚀

---

## 🧠 Dvije najvažnije riječi dana

| Riječ | Šta znači "ljudski" |
|---|---|
| **branch** | moja kopija koda gdje radim bez diranja originala |
| **main** | zvanična, glavna verzija koju svi vide |
| **Pull Request (PR)** | molba da se moj branch ubaci u `main` + provjera |
| **review** | neko pregleda kod prije nego uđe |
| **merge** | spoji odobreni branch u `main` |

> Analogija koju smo ponovili: *zajednički Word dokument. Bojiš se da pokvariš original → napraviš **kopiju**, radiš na njoj. Dobro ispadne → vratiš u original. Loše → obrišeš, original netaknut.* Branch = ta kopija.

---

## 🔁 Cijela priča u jednoj liniji

> `pull` (uzmi najnovije) → `checkout -b` (napravi svoju kopiju) → radi → `push` (pošalji kopiju) → **PR** → review → **merge** u `main`.

```
main:   ●──────●──────●──────────●  (zvanična verzija)
                \                /
moj-branch:      ●────●────●────   ← PR → review → merge
```

---

## 💻 Komande dana (timski tok)

```bash
git pull                              # 0) uvijek prvo povuci najnovije
git checkout -b ime-prezime           # 1) napravi SVOJ branch i prebaci se
# (uradi izmjenu u fajlu)
git add .                             # 2) spakuj
git commit -m "Opis sta sam uradio"   #    snimi
git push -u origin ime-prezime        # 3) pošalji branch (SAMO prvi put sa -u)
#   svaki sljedeći put za isti branch: samo  git push
```

Pa na GitHubu: **"Compare & pull request" → naslov + opis → Create pull request.**
Instruktor: **Files changed → Review → Approve → Merge.** ✅

> Korisno za snalaženje: `git branch` (zvjezdica = gdje sam), `git checkout main` (vrati se na main).

---

## ⭐ WOW trenutak

**Merge PR-a uživo na projektoru.** Branch koji je učenik napravio prije 10 minuta upravo je ušao u `main` zajedničkog repoa.

> *"To što je sad u `main` — to je tvoj kod, koji je prošao provjeru i ušao u zajednički projekat. Tačno ovako rade prave dev ekipe."*

---

## 🛟 Najčešće greške (i rješenja)

- **`push` branch odbijen / traži pristup** → nisi dodat kao collaborator ili nisi prihvatio pozivnicu (mejl/Notifications). Provjera: `gh auth status`.
- **"no upstream branch"** → prvi put treba `git push -u origin ime-prezime`, ne samo `git push`.
- **Greškom radim na `main`** → zaboravljen `git checkout -b`. Provjera `git branch`; spas: `git checkout -b ime-prezime` pa commit/push.
- **PR u pogrešnom smjeru** → mora biti **base: `main`** ← **compare: `ime-prezime`**.
- **Branch ime sa razmacima / ćirilicom / velikim slovima** → koristi `ime-prezime` (mala slova, crtice).

---

## 🔮 Šta slijedi (timski projekat — R8)

Postavili smo pravila timskog rada:
- Tim lider pravi timski repo (Public, sa README), doda **instruktora** i članove kao collaboratore.
- **Settings → Branches → branch protection** za `main`: *Require a pull request* + *Require approvals (1)*.
- **Pravilo od R8:** niko ne kuca direktno u `main`. Svako radi na svom branchu, otvara PR, instruktor pregleda i merge-uje. Tako je `main` uvijek ispravan.

---

## 🏠 Domaći

- Pošalji **link svog mergeanog PR-a** u grupu tima.
- Otvori PR nekog drugog na demo repou i pogledaj **Files changed** — *"vidite tuđu izmjenu i da je prošla review."*

Danas ste otvorili i mergeali svoj prvi pravi Pull Request. Spremni ste za timski projekat. Vidimo se! 🚀
