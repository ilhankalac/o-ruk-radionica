# Radionica 5 — Feedback i rezime

**Datum:** 2. jun 2026.
**Tema:** Git iz terminala + GitHub (sajt u cloud-u)
**Trajanje:** 2h

---

## 🎯 Velika ideja

**Do danas je vaš sajt živio SAMO na vašem računaru. Danas smo napravili kopiju koja živi na internetu.**

Ako vam disk crkne, ako izgubite laptop — rad je siguran na GitHubu. I, što je još važnije: dobili ste **link** koji možete poslati bilo kome — poslodavcu, fakultetu, drugu. To se zove **portfolio**. 🚀

---

## 👨‍💻 Mala priča: Linus Torvalds

Git nije pao s neba — napisao ga je **Linus Torvalds**, isti čovjek koji je napravio i **Linux** (operativni sistem koji danas vrti skoro cijeli internet — serveri, Android telefoni, superračunari).

Linus je 2005. napravio Git za **dvije nedjelje**, jer mu je trebao alat da hiljade ljudi širom svijeta rade na istom kodu (Linux kernelu) bez da se gaze. Danas Git koristi praktično svaki programer na planeti.

> Pouka: alati koje učite nisu "školski" — to su isti alati kojima se grade najveći projekti svijeta.

---

## 🧠 Git vs GitHub — najvažnija razlika dana

Ovo smo ponovili tri puta jer se najčešće miješa:

| | Šta je | Analogija |
|---|---|---|
| **Git** | program **na tvom računaru** koji pamti istoriju izmjena | **email program** (Outlook) |
| **GitHub** | sajt/server gdje **šalješ** te snimke da budu sigurni i vidljivi | **Gmail** |

**Git je program, GitHub je mjesto na koje šalješ.** Možeš koristiti Git i bez GitHuba — nisu ista stvar.

---

## 📦 Tok dana (analogija "selidbe u kutijama")

1. **`git clone`** → repo "dolazi" sa GitHuba na tvoj računar.
2. Ubaciš svoj sajt (`index.html`, `style.css`, `slike/`) u taj folder.
3. **`git add`** → "spakuj sve u kutiju."
4. **`git commit`** → "zalijepi nalepnicu (poruku) na kutiju i zatvori je."
5. **`git push`** → "pošalji kutiju u ormar (GitHub)."
6. **Refresh GitHub stranice → fajlovi se pojave.** ✅

---

## 🚀 Komande za PUSH (slanje na GitHub)

Ovo je petlja koju ponavljate **zauvijek** svaki put kad nešto promijenite:

```bash
git status                          # šta se promijenilo? (crveno = Git vidi nove fajlove)
git add .                           # spakuj SVE izmjene
git commit -m "Opis šta sam uradio" # snimi stanje + napiši poruku
git push                            # pošalji na GitHub
```

> Poslije ovoga: **refresh** GitHub stranice → izmjena je online.

---

## ⬇️ Komande za PULL (povlačenje sa GitHuba)

`pull` je suprotno od `push` — **povlači** izmjene sa GitHuba na tvoj računar. Trebaće kad radiš sa drugog računara ili kad neko iz tima nešto doda:

```bash
git pull                            # povuci najnovije stanje sa GitHuba
```

> Pravilo dobrog rada: **`git pull` na početku rada, `git push` na kraju.**

---

## 🔑 Setup (uradiš jednom)

```bash
git --version                       # provjera da Git postoji
gh --version                        # provjera GitHub CLI

git config --global user.name "Tvoje Ime"
git config --global user.email "tvoj@email.com"   # isti email kao na GitHubu

gh auth login                       # otvori browser → Authorize
```

> `gh auth login` je jedini "težak" korak — kad jednom prođe, `push` radi do kraja kursa bez lozinke.

---

## 🛟 Ako vam zapne (najčešće greške)

- **`push` traži lozinku / odbija** → `gh auth login` nije do kraja prošao. Ponovi ga.
- **`please tell me who you are`** → nisi uradio `git config user.name/email`.
- **`nothing to commit`** → zaboravio si `git add` prije commita.
- **`fatal: not a git repository`** → terminal nije u kloniranom folderu. `cd` u njega.
- **Slike se ne vide na GitHubu** → folder sa slikama nije kopiran/`add`-ovan.

---

## 🏠 Domaći

- Pošalji **link svog GitHub repoa** u grupu tima.
- Otvori repo nekog drugog i pogledaj njegove fajlove — *"vidite, sve je javno i čitljivo."*

Od danas svako od vas ima **lični GitHub portfolio.** Vidimo se sljedeći put! 🚀
