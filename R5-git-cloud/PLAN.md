# Radionica 5 — Git iz terminala + GitHub (cloud backup)

**Trajanje:** 2h | **Cilj:** Svaki učenik ima GitHub nalog, napravi repo, **klonira** ga, **pushuje svoj lični Rožaje sajt** iz terminala, i vidi izmjene **online**.

> **Wow trenutak:** *"Moj sajt je u cloud-u — mogu ga otvoriti sa bilo kog računara na svijetu."*

## Šta gradimo danas
Ne gradimo novi kod. Uzimamo **postojeći lični sajt** (R1→R4) i prvi put ga šaljemo na internet preko Git-a iz terminala. Od danas svako ima **lični GitHub portfolio**.

---

## Filozofija toka (zašto ovim redom)
Idemo **linearnim modelom** koji je najlakši za glavu početnika:

> napravi prazan repo online → `git clone` → ubaci svoj sajt u taj folder → `add` → `commit` → `push` → refresh u browseru.

**Namjerno izbjegavamo** `git init` + `git remote add` na prvoj Git radionici — previše koncepata odjednom. Klon prvo = *"repo dolazi k tebi, pa ga ti puniš"*. Mnogo lakša slika u glavi.

**Autentifikacija = `gh auth login` (GitHub CLI).** GitHub od 2021. ne prima lozinku u terminalu. SSH ključevi i tokeni su previše za prvi čas. `gh auth login` otvori browser, klikneš potvrdu, i `git push` radi do kraja kursa. Ovo je JEDINI težak korak dana — kad prođe, sve teče.

---

## Pripremi prije časa (KRITIČNO)
- [ ] **`git` instaliran kod svih** — provjera: `git --version`. Offline installer na USB-u.
- [ ] **`gh` (GitHub CLI) instaliran kod svih** — provjera: `gh --version`. Offline installer na USB-u.
- [ ] **VS Code + integrisani terminal** rade kod svih (Terminal → New Terminal).
- [ ] Svaki učenik **zna gdje mu je folder ličnog sajta** (`my-rozaje-site/`).
- [ ] Tvoj demo GitHub nalog spreman + prazan repo da pokažeš tok unaprijed.
- [ ] Crtež na tabli spreman: **"računar (lokalno) ↔ strelica push/pull ↔ GitHub (server)"**.
- [ ] Stabilan internet (sve zavisi od mreže danas — imaj plan B: telefon hotspot).
- [ ] Napiši **5 komandi dana** na tablu unaprijed: `clone · status · add · commit · push`.

---

## Vremenica (2h)

### 0:00–0:20 — UVOD: koncepti (BEZ kucanja, samo priča + tabla)
Danas prvih 20 min **niko ne dira tastaturu.** Prvo glava, pa prsti.

**1) Lokalno vs server** (analogija sveske)
- *Lokalno* = sveska na tvom stolu. Samo ti je vidiš. Ako je izgubiš/pocijepaš — nema je.
- *Server* = ormar u školi gdje svako može da pogleda kopiju. Ako pukne tvoj disk, kopija je sigurna u ormaru.
- "Vaš sajt do danas postoji SAMO na vašem računaru. Danas pravimo kopiju koja živi na internetu."

**2) Git vs GitHub** (najvažnija rečenica dana — ponovi je 3 puta)
- **Git** = program NA tvom računaru. Pamti **istoriju** izmjena — kao "undo" koji nikad ne zaboravlja, ali ti njemu kažeš KAD da zapamti stanje.
- **GitHub** = sajt/server gdje **šalješ** te snimke da budu sigurni i vidljivi svima.
- *"Git je kao email program, GitHub je kao Gmail. Možeš email i bez Gmaila. Nisu ista stvar."*

**3) Zašto je ovo dobro** (3 razloga, napiši na tablu)
- **Backup** — disk crkne, rad ostaje na GitHubu.
- **Istorija** — možeš da se vratiš na "kako je bilo juče" kad nešto pokvariš.
- **Portfolio + saradnja** — poslodavac/fakultet vidi tvoj GitHub. Tim radi na istom kodu.

**Rječnik na tablu (ostaje cijeli čas):**
| Riječ | Šta znači "ljudski" |
|---|---|
| `repo` | folder projekta koji Git prati |
| `clone` | skini repo sa GitHuba na svoj računar |
| `commit` | snimi trenutno stanje (zapamti) |
| `push` | pošalji snimke na GitHub |
| `pull` | povuci tuđe/nove izmjene sa GitHuba |

### 0:20–0:38 — SETUP (idemo zajedno, niko ne ide naprijed)
Najrizičniji dio. **Pravilo: čekamo da SVI prođu svaki korak prije sljedećeg.** Lider tima pomaže svom timu.

1. **GitHub nalog** — svako pravi na github.com.
   > "Ime profesionalno — ovo je vaš portfolio, ne gejmerski nick. `marko-djukic` da, `xX_killer_Xx` ne."
2. **Provjera Git-a:** `git --version` → mora ispisati verziju.
3. **Predstavi se Git-u** (potpisuje svaki commit):
   ```bash
   git config --global user.name "Tvoje Ime"
   git config --global user.email "tvoj@email.com"
   ```
   > Email **isti** kao na GitHub nalogu.
4. **Autentifikacija — `gh auth login`:**
   ```bash
   gh auth login
   ```
   Odgovori na pitanja (objasni svako uživo):
   - `GitHub.com` (Enter)
   - `HTTPS` (Enter)
   - "Authenticate Git with your GitHub credentials?" → **Yes**
   - `Login with a web browser` → kopira kod, otvori browser, nalijepi, **Authorize**.
   > Kad ovo prođe — *"od sad pa do kraja kursa `push` samo radi, nećete više kucati lozinku."*

### 0:38–0:48 — Napravi repo online + pogledaj ga
- GitHub → **New repository**:
  - Ime: `moj-rozaje-sajt`
  - **Public** (da bude portfolio)
  - ✅ **Add a README file** (da repo ne bude prazan — lakše za clone)
- Prošetaj kroz GitHub UI uživo: gdje su fajlovi, gdje je zeleno dugme **Code** (tu je clone URL).

### 0:48–0:58 — `git clone` (repo "dolazi" na računar)
- Na repo stranici: **Code → HTTPS → kopiraj URL.**
- U terminalu, u radnom folderu:
  ```bash
  git clone https://github.com/korisnik/moj-rozaje-sajt.git
  ```
- Otvore folder u VS Code → vide `README.md`.
- Pokaži skriveni `.git` folder: *"ovo je mozak Gita — ovdje čuva svu istoriju. Ne dirajte ga."*
- Poenta: **"sad isti repo postoji na DVA mjesta — na tvom računaru i na GitHubu."**

### 0:58–1:08 — PAUZA ☕

### 1:08–1:35 — Prvi push (SRCE radionice)
1. Kopiraju svoj lični sajt (`index.html`, `style.css`, `images/`...) **U** klonirani folder.
2. `git status` → objasni boje: **crveno = Git vidi nove fajlove ali ih još ne prati.**
3. Tri komande, svaka sa analogijom (analogija "kutije za selidbu"):
   ```bash
   git add .
   ```
   > "Spakuj sve u kutiju."
   ```bash
   git commit -m "Dodao svoj Rožaje sajt"
   ```
   > "Zalijepi nalepnicu na kutiju i zatvori je. Poruka = nalepnica: piši šta si uradio."
   ```bash
   git push
   ```
   > "Pošalji kutiju u ormar (GitHub)."
4. **Refresh GitHub stranice → fajlovi se pojave.** ← **WOW TRENUTAK.**
   > "To što vidite na internetu — to je vaš sajt. Sa bilo kog računara na svijetu sad možete da ga skinete."

### 1:35–1:50 — Petlja izmjene (da skapiraju da nije jednokratno)
Cilj: usaditi ritam **uredi → add → commit → push → refresh.**
- Promijene jedan naslov u `index.html` (npr. dodaju svoje ime).
- ```bash
  git status        # vidi šta se promijenilo (crveno)
  git add .
  git commit -m "Promijenio naslov na pocetnoj"
  git push
  ```
- Refresh GitHub → izmjena tu.
- Pokaži **Commits** tab na GitHubu: *"ovo je vaša vremenska mašina — svaki commit je snimak."*
- Ako stignemo, u terminalu: `git log --oneline`.

### 1:50–2:00 — Solo + push beleški + show & tell
- Svako napravi `notes.md` (iz šablona) u folderu beleški i **pushuje i njega**.
- **Pravilo:** ko završi rano → pomaže timu da svi prođu push. Niko ne ide kući dok mu sajt nije online.
- 2-3 učenika dijele ekran sa svojim **live GitHub repoom**. Slavi javno.

---

## "Wow" trenutak
**1:35 — refresh GitHub stranice i fajlovi se pojave.**
Reci: **"Ovo je adresa koju možeš poslati bilo kome. Tvoj kod je sad na istom mjestu gdje veliki projekti svijeta drže svoj kod."**

## Pitfalls (spreman da gasim požare)
- **`push` traži lozinku / odbije auth** (#1 ubica vremena) → `gh auth login` nije do kraja prošao. Ponovi ga.
- **`commit` greška "please tell me who you are"** → nismo uradili `git config user.name/email`.
- **`nothing to commit`** → zaboravili `git add` prije commita.
- **`git status` prazan iako su mijenjali fajl** → mijenjali fajl VAN kloniranog foldera. Provjeri da si u pravom folderu (`pwd` / pogledaj VS Code naslov).
- **`fatal: not a git repository`** → terminal nije u kloniranom folderu. `cd` u njega.
- **Klonirali u pogrešan folder pa "izgubili" repo** → `pwd` da vidiš gdje si, ili kloniraj ponovo.
- **Slike se ne vide na GitHubu** → folder `images/` nije kopiran u repo, ili nije `add`-ovan.

## Domaći
- Pošalji **link svog GitHub repoa** u grupu (chat tima).
- Otvori repo nekog drugog iz grupe i pogledaj njegove fajlove — *"vidite, sve je javno i čitljivo."*

---

## Cheat sheet (za live coding — pun tok dana)
```bash
# 1) Jednom, na početku (predstavi se Gitu)
git --version
gh --version
git config --global user.name "Tvoje Ime"
git config --global user.email "tvoj@email.com"
gh auth login                      # browser → Authorize

# 2) Skini repo sa GitHuba
git clone https://github.com/korisnik/moj-rozaje-sajt.git

# (ubaci fajlove svog sajta u taj folder)

# 3) Petlja koju ponavljaš ZAUVIJEK
git status                         # šta se promijenilo?
git add .                          # spakuj sve
git commit -m "Opis šta sam uradio"
git push                           # pošalji na GitHub

# Bonus
git log --oneline                  # istorija commitova
```

## Šta NE diramo danas (vrati ako pitaju: "kasnije, prvo ovo savladajte")
- `branch` i Pull Request → **R6**
- `pull` u dubinu (samo spomeni da postoji za "povuci tuđe")
- SSH ključevi / tokeni → kasnije
- `.gitignore`, `merge`, `rebase`, konflikti → kasnije
- `git init` + `remote add` → ne treba jer kloniramo
