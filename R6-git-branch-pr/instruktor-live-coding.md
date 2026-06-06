# R6 — Instruktor live coding (tačan redoslijed + šta reći)

Ovo je tvoj **scenario** za uživo na projektoru. Kucaj polako, govori naglas svaku komandu, pauza da svi prepišu. 🗣️ = šta reći grupi. ⏸️ = čekaj da SVI prođu prije dalje.

---

## PRIJE nego išta kucaš
Na tabli stoji crtež:
```
main:   ●──────●──────●──────────●   (zvanična verzija, svi je vide)
                \                /
moj-branch:      ●────●────●────     ← PR → review → MERGE
```
> 🗣️ *"Gore je `main` — glavna verzija. Dole je moj branch — moja kopija gdje radim na miru. Kad završim, šaljem Pull Request: 'molim da se ubaci u main'. Neko pregleda, odobri, i tek onda se spoji. To je cijela današnja priča."*

**Provjera prije časa:** svi učenici su dodati kao collaboratori na demo repo i prihvatili pozivnicu.

---

## KORAK 0 — Obnova R5 (svi za tobom, ~10 min)
> 🗣️ *"Prvo da provjerimo da od prošlog časa sve radi. Otvorite svoj lični repo, dodajte jedan red bilo gdje."*
```bash
git status
git add .
git commit -m "Obnova - mali update"
git push
```
> 🗣️ *"Ko dobije push bez traženja lozinke — odlično. Ko zapne, dignite ruku."*

**⏸️ Ne idemo dalje dok svima `push` ne prolazi. Ko ne radi → `gh auth login` ponovo. Lideri pomažu.**

---

## KORAK 1 — Koncepti na tabli (NIKO ne kuca, ~20 min)
Vidi PLAN.md sekciju 0:15–0:35. Tri stvari:
1. **Branch** = kopija dokumenta da probaš izmjenu bez diranja originala.
2. **PR** = molba + provjera ("pogledaj prije nego uđe u main").
3. Linija toka: `pull → checkout -b → radi → push → PR → review → merge`.

Popuni rječnik tabelu na tabli. Tek kad svi klimaju glavom — prelazimo na tastaturu.

---

## KORAK 2 — Svi se nakače na moj repo (clone)
> 🗣️ *"Poslao sam link u grupu. Otvorite ga. Vidite da imate dugme da pišete — to znači da ste collaborator, ovo je naš zajednički repo."*
```bash
git clone https://github.com/ilhankalac/radionica-demo.git
cd radionica-demo
```
> 🗣️ *"Svi vi sad imate ISTI repo na računaru. Ono što jedan pošalje, drugi može da povuče."*

**⏸️ Čekaj da svi uđu u folder (`cd`).**

---

## KORAK 3 — `git pull` (demonstracija čemu služi)
> 🗣️ *"Pravilo broj jedan timskog rada: prije nego počneš da radiš — povuci najnovije. Da vidite zašto, ja ću sad nešto da promijenim."*

**Ti** (na svom ekranu) dodaš red u README na `main` i pushneš. Onda grupa:
```bash
git pull
```
> 🗣️ *"Vidite? Pojavila vam se moja izmjena. To radi `pull` — dovlači tuđi rad k vama. Zamislite 4 člana tima — svako jutro `pull` da imate najnovije."*

---

## ☕ PAUZA

---

## KORAK 4 — Napravi svoj branch (SRCE časa)
> 🗣️ *"Sad svako pravi SVOJU kopiju. Ime branča = vaše ime, mala slova, crtica umjesto razmaka. Bez ćirilice."*
```bash
git checkout -b ime-prezime
```
> 🗣️ *"`-b` znači 'napravi novi'. Sad ste na svojoj kopiji, main je netaknut. Provjerite gdje ste:"*
```bash
git branch
```
> 🗣️ *"Zvjezdica pokazuje na vaš branch. Ako pokazuje na `main` — niste se prebacili, zovite me."*

**⏸️ Svako mora da vidi zvjezdicu na SVOM branchu prije izmjene.**

---

## KORAK 5 — Izmjena + commit
> 🗣️ *"Otvorite `ucesnici.html` i dodajte svoj red u listu — vaše ime."*

(npr. `<li>Marko Đukić</li>`)
```bash
git add .
git commit -m "Dodao Marko Djukic na listu ucesnika"
```
> 🗣️ *"Ovo je isto kao prošli čas — spakuj, snimi. Ništa novo."*

---

## KORAK 6 — Push branča (PAŽNJA: prvi put sa -u)
```bash
git push -u origin ime-prezime
```
> 🗣️ *"Sad je drugačije nego prošli put. `-u origin ime-prezime` kaže: napravi ovaj branch i na GitHubu i zapamti vezu. Ovo sa `-u` kucate SAMO prvi put za ovaj branch. Poslije je samo `git push`."*

**⏸️ Najčešća greška ovdje: zaborave `-u`, GitHub kaže "no upstream". Samo ponove komandu sa `-u origin ime-prezime`.**

---

## KORAK 7 — Otvori Pull Request
> 🗣️ *"Refreshujte repo stranicu na GitHubu. Vidite žuto dugme 'Compare & pull request'? Kliknite."*
- Provjeri smjer: **base: `main`** ← **compare: `ime-prezime`**.
- Naslov + kratak opis → **Create pull request**.
> 🗣️ *"Čestitam — upravo ste otvorili pravi Pull Request. Sad ja pregledam."*

---

## KORAK 8 — Review + MERGE uživo (WOW)
Na projektoru, uzmi 2–3 PR-a:
1. Otvori PR → tab **Files changed**.
   > 🗣️ *"Vidite — zeleno je tačno ono što je dodao. Ja vidim svaku izmjenu prije nego uđe u main."*
2. **Add review → Approve** (ili komentar "super, popravi ovo").
3. **Merge pull request → Confirm merge.**
4. Otvori `ucesnici.html` na `main` → ime je tu.
   > 🗣️ *"To što je sad u `main` — to je njegov kod, prošao je provjeru, ušao u zajednički projekat. Tačno ovako rade Google, Microsoft, sve ozbiljne ekipe."* ← **WOW**

> Ko otvori PR → javi, pregledamo zajedno. Ko završi rano → pomaže timu.

---

## KORAK 9 — Timska postavka (priprema za R8)
Pokaži na svom ekranu kako tim postavi repo da SAV kod ide kroz tvoj review:
1. Tim lider: **New repository** → Public → Add README.
2. **Settings → Collaborators** → dodaj **instruktora** + članove tima.
3. **Settings → Branches → Add branch protection rule** za `main`:
   - ✅ Require a pull request before merging
   - ✅ Require approvals (1)
> 🗣️ *"Od timskog projekta — niko ne kuca direktno u `main`. Svako na svom branchu, otvara PR, ja odobravam i mergeam. Tako je `main` uvijek ispravan i niko ne pokvari tuđi rad."*

---

## ZATVARANJE
- Show & tell: 2–3 učenika dijele ekran sa mergeanim PR-om.
- Domaći: link mergeanog PR-a u grupu + pogledaj tuđi PR (Files changed).
- 🗣️ *"Danas ste naučili kako radi pravi tim. Na R8 počinjemo timski projekat — i ovo je tačno tok kojim ćemo raditi."*
