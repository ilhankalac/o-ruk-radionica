# Radionica 6 — Git iz terminala deo 2: Branch + Pull Request

**Trajanje:** 2h | **Cilj:** Svaki učenik se nakači na **zajednički repo**, povuče kod (`pull`), napravi **svoj branch**, pošalje izmjenu i otvori **Pull Request** — a instruktor ga uživo **review-uje i merge-uje** na `main`. Na kraju postavljamo timski workflow za R8.

> **Wow trenutak:** *"Moj Pull Request je mergean na `main` — moj kod je upravo ušao u zajednički projekat."*

## Šta radimo danas
Ne gradimo novi sajt. Učimo **timski Git tok** na jednom **demo repou instruktora**. Do sada je svako radio sam na svom repou (R5). Danas prvi put više ljudi radi na **istom kodu** — bez gaženja jedni drugima preko prsta. Ključ je: **branch** (moje sigurno mjesto za rad) i **Pull Request** (molba da moj rad uđe u zajedničku verziju, uz provjeru).

---

## Filozofija toka (zašto ovim redom)

**Collaborator model, BEZ forkova.** Instruktor unaprijed doda sve učenike kao collaboratore na demo repo. Svi kloniraju **isti** repo, prave **svoj branch** i otvore PR **unutar istog repoa**. Namjerno izbjegavamo fork — to je još jedan koncept (dvije kopije repoa, "origin" vs "upstream") koji početniku zamagli sliku. Isti tok koristimo i u timskom projektu (R8), pa ga vrijedi savladati jednom kako treba.

**Zašto branch prije nego diraju zajednički `main`.** `main` = zvanična, ispravna verzija koju svi vide. Ako svako gura direktno u `main`, gaze jedni drugima izmjene. Branch = *"napravim sebi kopiju, radim na njoj koliko hoću, original ostaje netaknut dok ne budem siguran."*

**Pull Request = molba + provjera.** PR nije "samo dugme za slanje". To je: *"završio sam na svom branchu, molim da se ovo ubaci u `main` — neka neko pogleda prije."* Taj "neko" si **ti (instruktor)**. Ovo je srž timskog rada: niko ne ubacuje kod u `main` dok ga neko ne pregleda.

**Prvo glava, pa prsti.** Kao i na R5 — prvih 20 min crtamo na tabli i pričamo, niko ne kuca.

---

## Pripremi prije časa (KRITIČNO)
- [x] **Demo repo spreman** — `radionica-demo` (`https://github.com/ilhankalac/radionica-demo`), **Public**, sa `index.html`, `ucesnici.html` (lista gdje svako doda svoj `<li>`), `style.css`, `README.md`. Fajlovi su u `radionica-demo/` folderu — pushuj ih na repo prije časa.
- [ ] **Svi učenici dodati kao collaboratori UNAPRIJED** — Settings → Collaborators → dodaj svaki GitHub username. **Traži usernamove dan ranije** (i da prihvate pozivnicu prije časa — stiže im na mejl/u Notifications). Plan B: dodaješ uživo dok rade uvod.
- [ ] **Provjera da `push` i dalje radi kod svih** — `gh auth status` mora reći "Logged in". Ako je neko od R5 promijenio računar — ponovi `gh auth login`.
- [ ] **Crtež na tabli** (ostaje cijeli čas):
  ```
  main:   ●──────●──────●──────────●  (zvanična verzija)
                  \                /
  moj-branch:      ●────●────●────   ← PR → review → merge
  ```
- [ ] **5 komandi dana na tablu:** `pull · checkout -b · add/commit · push -u · (PR na GitHubu)`.
- [ ] Stabilan internet (sve zavisi od mreže — plan B: telefon hotspot).
- [ ] Tvoj nalog spreman da **uživo merge-uješ PR-ove** pred grupom (projektor).

---

## Vremenica (2h)

### 0:00–0:15 — OBNOVA prošlog časa (R5)
Brzo, da zagrijemo prste i potvrdimo da auth radi prije nego krenemo u novo.
- Usmeno, pitanjima grupi: *"Šta radi `clone`? `add`? `commit`? `push`? Razlika Git vs GitHub?"*
- Svi otvore svoj lični repo iz R5, naprave sitnu izmjenu (npr. dodaju red u `notes.md`) i prođu petlju:
  ```bash
  git status
  git add .
  git commit -m "Obnova - mali update"
  git push
  ```
- **Cilj provjere:** svima `push` prolazi bez traženja lozinke. Ko zapne → `gh auth login` ponovo, lideri pomažu.
- Rječnik podsjetnik na tabli: `repo · clone · commit · push · pull`.

### 0:15–0:35 — KONCEPTI: branch i Pull Request (BEZ kucanja)
Niko ne dira tastaturu. Tabla + analogije.

**1) Šta je `branch`** (analogija "kopija dokumenta")
- *"Zamisli zajednički Word dokument koji svi koriste. Hoćeš da probaš veliku izmjenu, ali se bojiš da ne pokvariš original. Šta radiš? Napraviš **kopiju**, radiš na kopiji. Ako ispadne dobro — vratiš u original. Ako ne — obrišeš kopiju, original je netaknut."*
- **Branch = ta kopija.** `main` = original koji svi vide.
- *"Možeš imati 10 ljudi, svako na svojoj kopiji, niko ne smeta drugom."*

**2) Šta je Pull Request (PR)** (najvažnija rečenica dana — ponovi 3 puta)
- **PR = "molim da se moj branch ubaci u `main` — pogledaj prije nego odobriš."**
- *"To NIJE samo slanje. To je molba + provjera. Neko (ja) pogleda kod, kaže 'ok' ili 'popravi ovo', pa tek onda uđe u `main`."*
- Zašto: *"u pravim firmama niko ne gura kod direktno u glavnu verziju. Sve ide kroz PR koji neko pregleda. Danas radite kao prave dev ekipe."*

**3) Cijela priča u jednoj liniji** (pokaži na crtežu na tabli):
> `pull` (uzmi najnovije) → `checkout -b` (napravi svoju kopiju) → radi → `push` (pošalji svoju kopiju) → **PR** → review → **merge** u `main`.

**Rječnik na tablu (ostaje cijeli čas):**
| Riječ | Šta znači "ljudski" |
|---|---|
| `branch` | moja kopija koda gdje radim bez diranja originala |
| `main` | zvanična, glavna verzija koju svi vide |
| `checkout -b` | napravi novi branch i prebaci se na njega |
| `pull` | povuci najnovije izmjene sa GitHuba |
| Pull Request (PR) | molba da se moj branch ubaci u `main` + provjera |
| `review` | neko pregleda kod prije nego uđe |
| `merge` | spoji odobreni branch u `main` |

### 0:35–0:48 — Nakači se na moj repo (clone)
- Svako otvori demo repo na GitHubu (pošalji link u grupu): potvrde da vide poruku da su **collaborator** (imaju dugme da pišu, ne samo "Fork").
- **Code → HTTPS → kopiraj URL**, pa u radnom folderu:
  ```bash
  git clone https://github.com/ilhankalac/radionica-demo.git
  cd radionica-demo
  ```
- Otvore folder u VS Code. Poenta: *"svi vi imate ISTI repo na računaru. Ono što jedan pošalje, drugi mogu da povuku."*

### 0:48–0:55 — `git pull` (povuci najnovije prije rada)
- Pravilo broj 1 timskog rada: **prije nego počneš da radiš — `pull`.**
- Demonstracija uživo: **ti** napraviš sitnu izmjenu na `main` (npr. dodaš red u README) i pushneš. Onda svi:
  ```bash
  git pull
  ```
- Vide da im se izmjena pojavila lokalno. *"Eto čemu služi `pull` — dovlači tuđi rad k tebi."*

### 0:55–1:05 — PAUZA ☕

### 1:05–1:30 — Branch + izmjena + push (SRCE radionice)
1. **Napravi svoj branch** (ime po sebi, malim slovima, bez razmaka i ćirilice):
   ```bash
   git checkout -b ime-prezime
   ```
   > *"`-b` znači 'napravi novi'. Sad si na SVOJOJ kopiji. Provjeri: `git branch` — zvjezdica pokazuje gdje si."*
2. **Napravi malu izmjenu** u demo repou — npr. dodaj svoj `<li>Ime Prezime</li>` u `ucesnici.html` (ili svoju karticu). Sitno, da svako stigne.
3. **Spakuj i snimi:**
   ```bash
   git add .
   git commit -m "Dodao Ime Prezime na listu ucesnika"
   ```
4. **Pošalji svoj branch na GitHub:**
   ```bash
   git push -u origin ime-prezime
   ```
   > *"`-u origin ime-prezime` znači: napravi ovaj branch i na GitHubu i zapamti vezu. Ovo kucaš sa `-u` SAMO prvi put za ovaj branch — poslije je samo `git push`."*

### 1:30–1:45 — Otvori Pull Request + uživo merge (WOW)
- Refresh demo repo na GitHubu → žuti baner **"Compare & pull request"** → klikni.
- Naslov PR-a (jasan) + kratak opis šta si uradio → **Create pull request**.
- **Instruktor uživo, na projektoru, review-uje i merge-uje 2–3 PR-a:**
  - Otvoriš PR, pokažeš tab **Files changed** (*"ovdje vidim tačno šta si promijenio — zeleno = dodato"*).
  - **Add review → Approve** (ili komentar "super, samo ovo popravi").
  - **Merge pull request → Confirm merge.**
  - Pokaži kako se izmjena sad vidi na `main` / `ucesnici.html`. ← **WOW TRENUTAK.**
  > *"To što je sad u `main` — to je tvoj kod, koji je prošao provjeru i ušao u zajednički projekat. Tačno ovako rade timovi u svijetu."*
- Ostali: ko otvori PR → javi, pregledamo zajedno. Ko završi rano pomaže timu.

### 1:45–2:00 — Priprema za TIMSKI projekat (R8) + show & tell
Pokaži kako tim postavlja repo tako da **sav kod ide kroz tvoj review**:
1. **Tim lider** pravi timski repo (npr. `visit-rozaje-tim1`), Public, sa README.
2. **Settings → Collaborators** → doda **instruktora** (i ostale članove tima).
3. **Settings → Branches → Add branch protection rule** za `main`:
   - ✅ **Require a pull request before merging**
   - ✅ **Require approvals** (1) — *"to znači: niko ne može da gurne u `main` dok ja ne odobrim PR."*
- Objasni pravilo od R8: *"Od timskog projekta — niko ne kuca direktno u `main`. Svako radi na svom branchu, otvara PR, ja pregledam i merge-ujem. Tako znamo da je `main` uvijek ispravan."*
- **Show & tell:** 2–3 učenika dijele ekran sa svojim **mergeanim PR-om**. Slavi javno.

---

## "Wow" trenutak
**1:30–1:45 — merge PR-a uživo.** Branch koji je učenik napravio prije 10 minuta upravo je ušao u `main`.
Reci: **"Ovo je tačno kako rade prave dev ekipe — Google, Microsoft, svi. Vi ste danas otvorili i mergeali pravi Pull Request."**

## Pitfalls (spreman da gasim požare)
- **`push` branch odbijen / traži pristup** (#1 ubica vremena) → učenik **nije dodat kao collaborator** ili nije prihvatio pozivnicu. Provjeri Settings → Collaborators, neka prihvati mejl/Notifications. Drugo: `gh auth status`.
- **Radili na `main`, ne na svom branchu** → zaboravili `git checkout -b`. Provjera: `git branch` (zvjezdica). Spas: `git checkout -b ime-prezime` (nezacommitovane izmjene idu sa njim), pa commit/push.
- **`push` kaže "no upstream branch"** → prvi put treba `git push -u origin ime-prezime`, ne samo `git push`.
- **PR otvoren u pogrešnom smjeru** → provjeri da je "base: `main`" ← "compare: `ime-prezime`".
- **Merge konflikt** (dvoje diralo isti red) → *"javite mi, riješimo zajedno"* — ne ulazi u rješavanje konflikta sa cijelom grupom danas; po potrebi odradi 1-na-1.
- **Branch ime sa razmacima / ćirilicom / velikim slovima** → koristi `ime-prezime` (mala slova, crtice).
- **`pull` javlja konflikt jer su mijenjali `main` lokalno** → nisu trebali dirati `main`; objasni da rad ide na branch.

## Domaći
- Pošalji **link svog mergeanog PR-a** u grupu (chat tima).
- Otvori PR nekog drugog na demo repou, pogledaj **Files changed** — *"vidite tuđu izmjenu i da je prošla review."*

---

## Cheat sheet (kratko — puna verzija u `cheat-sheet-git-branch.md`)
```bash
# 0) Uvijek prvo povuci najnovije
git pull

# 1) Napravi SVOJ branch i prebaci se na njega
git checkout -b ime-prezime

# 2) (uradi izmjenu u fajlu) pa spakuj i snimi
git add .
git commit -m "Opis sta sam uradio"

# 3) Pošalji svoj branch na GitHub (SAMO prvi put sa -u)
git push -u origin ime-prezime
#   poslije, za isti branch: samo  git push

# 4) Na GitHubu: "Compare & pull request" -> Create pull request
#    Instruktor: review -> Approve -> Merge

# Korisno
git branch                 # gdje sam? (zvjezdica)
git checkout main          # vrati se na main
git status                 # šta se promijenilo?
```

## Šta NE diramo danas (vrati ako pitaju: "kasnije, prvo ovo savladajte")
- **Fork** (radimo collaborator model, jedan repo) → kasnije/po potrebi
- **Rješavanje merge konflikata** u dubinu → 1-na-1 kad se desi
- `rebase`, `git merge` iz terminala, više remote-ova, `git remote add`
- `force push`, brisanje branchova, `stash`
- `.gitignore` u dubinu → spomeni samo da postoji
