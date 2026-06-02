# R5 — Instruktor live coding (tačan redoslijed + šta reći)

Ovo je tvoj **scenario** za uživo kucanje na projektoru. Kucaj polako, govori naglas svaku komandu, pravi pauzu da svi prepišu. Crveni tekst = šta reći grupi.

---

## PRIJE nego išta kucaš
Na tabli stoji crtež:
```
   [ TVOJ RAČUNAR ]                         [ GITHUB.COM ]
      (lokalno)         --- git push --->       (server)
   tvoj sajt, .git      <--- git clone ---     kopija sajta
```
> 🗣️ *"Lijevo ste vi. Desno je internet. `push` šalje desno, `clone`/`pull` povlači lijevo. To je cijela priča danas."*

---

## KORAK 1 — Provjera alata (svi kucaju za tobom)
```bash
git --version
gh --version
```
> 🗣️ *"Ako vam ovo ispiše broj — odlično, alat radi. Ako piše 'command not found', dignite ruku, instaliramo sa USB-a."*

**⏸️ Čekaj da SVI dobiju verziju prije dalje.**

---

## KORAK 2 — Predstavi se Gitu
```bash
git config --global user.name "Tvoje Ime"
git config --global user.email "tvoj@email.com"
```
> 🗣️ *"Git svaki vaš snimak potpisuje imenom. Ovo radite SAMO JEDNOM na ovom računaru. Email mora biti isti kao na GitHub nalogu."*

Provjera (opciono):
```bash
git config --global user.name
```

---

## KORAK 3 — Autentifikacija (NAJVAŽNIJI korak, idi polako)
> 🗣️ *"GitHub iz terminala ne prima lozinku. Umjesto toga, ovaj alat otvori browser i vi kliknete 'potvrđujem'. Radite jednom — poslije `push` samo radi."*

```bash
gh auth login
```
Vodi ih kroz odgovore NAGLAS (strelice + Enter):
1. **What account?** → `GitHub.com` → Enter
2. **Preferred protocol?** → `HTTPS` → Enter
3. **Authenticate Git with your GitHub credentials?** → `Yes` → Enter
4. **How would you like to authenticate?** → `Login with a web browser` → Enter
5. Terminal pokaže **one-time code** (npr. `A1B2-C3D4`).
   > 🗣️ *"Zapamtite ovaj kod. Pritisnite Enter, otvoriće se browser, nalijepite kod, kliknite Authorize."*
6. Browser → nalijepi kod → **Authorize**.
7. Terminal: `✓ Logged in as ...`

**⏸️ Ovo je tačka gdje se zaglavi najviše ljudi. Ne idi dalje dok SVI ne vide zelenu kvačicu. Lideri timova pomažu.**

---

## KORAK 4 — Napravi repo (na GitHubu, u browseru — pokaži na projektoru)
1. GitHub → gore desno **+** → **New repository**
2. **Repository name:** `moj-rozaje-sajt`
3. **Public** ✅
4. ✅ **Add a README file**
5. **Create repository**

> 🗣️ *"Ovo je sad prazan ormar na internetu. Ima samo jedan papir — README. Sad ćemo ga skinuti k sebi."*

Pokaži zeleno dugme **Code** → **HTTPS** → ikonica za kopiranje URL-a.

---

## KORAK 5 — Clone (skini repo)
> 🗣️ *"Prvo da budemo u pravom folderu — tu gdje držite svoje radove."*
```bash
cd ~/Documents        # ili gdje god drže foldere — prilagodi
git clone https://github.com/KORISNIK/moj-rozaje-sajt.git
cd moj-rozaje-sajt
```
> 🗣️ *"`clone` je skinuo cijeli repo. Sad otvorite ovaj folder u VS Code."*

Pokaži skriveni `.git`:
```bash
ls -a
```
> 🗣️ *"Vidite `.git`? To je mozak Gita — pamti svaku izmjenu. Nikad ga ne dirajte ručno."*

---

## KORAK 6 — Ubaci sajt
> 🗣️ *"Sad kopirajte SVOJ sajt — `index.html`, `style.css`, folder `images` — U OVAJ folder. Možete prevući mišem u VS Code."*

Provjeri da su unutra:
```bash
git status
```
> 🗣️ *"Vidite crveno? To su novi fajlovi koje Git PRIMIJETIO ali ih JOŠ NE prati. Sad ćemo mu reći da ih zapamti."*

---

## KORAK 7 — add → commit → push (analogija KUTIJE)
```bash
git add .
```
> 🗣️ *"Spakovali smo sve u kutiju za selidbu."*
```bash
git commit -m "Dodao svoj Rozaje sajt"
```
> 🗣️ *"Zalijepili nalepnicu i zatvorili kutiju. Poruka u navodnicima = nalepnica. Uvijek napišite šta ste uradili."*
```bash
git push
```
> 🗣️ *"Poslali kutiju u ormar na internetu."*

**➡️ Refresh GitHub stranicu u browseru.**
> 🗣️ *"VIDITE?! Vaš sajt je na internetu. Ovo je adresa koju možete poslati bilo kome na svijetu."* 🎉

---

## KORAK 8 — Petlja izmjene (uvježbaj ritam)
> 🗣️ *"Push nije jednokratno. Svaki put kad nešto promijenite — ponovite isti ritam. Hajde uživo."*

Promijeni naslov u `index.html` (dodaj svoje ime), sačuvaj, pa:
```bash
git status
git add .
git commit -m "Dodao svoje ime u naslov"
git push
```
Refresh → izmjena online.

Pokaži istoriju:
```bash
git log --oneline
```
I na GitHubu klikni **Commits** tab.
> 🗣️ *"Svaki red je jedan snimak u vremenu. Ovo je vaša vremenska mašina — možete se vratiti na bilo koje stanje."*

---

## Ritam da im se usadi (napiši na tablu i zaokruži)
```
   uredi  →  add  →  commit  →  push  →  refresh
```
> 🗣️ *"Ovo ćete raditi do kraja kursa, hiljadu puta. Zapamtite ova četiri koraka."*

---

## Brzi fix-evi kad nekom pukne (bez panike)
| Greška u terminalu | Uzrok | Fix |
|---|---|---|
| `Authentication failed` / traži lozinku | `gh auth login` nije prošao | Ponovi `gh auth login` |
| `please tell me who you are` | nema `git config` | Uradi KORAK 2 |
| `nothing to commit` | zaboravili `add` | `git add .` pa commit |
| `not a git repository` | nisu u repo folderu | `cd moj-rozaje-sajt` |
| `status` prazan a mijenjali fajl | fajl van repo foldera | provjeri `pwd`, kopiraj fajl u repo |
| slike se ne vide online | `images/` nije pushovan | provjeri da je folder u repou, `add` + `commit` + `push` |
