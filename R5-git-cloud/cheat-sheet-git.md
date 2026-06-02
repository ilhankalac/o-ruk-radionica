# Git cheat sheet — drži na stolu 📄

> **Ritam koji ponavljaš ZAUVIJEK:** `uredi → add → commit → push → refresh`

---

## 5 riječi koje moraš znati
| Riječ | Ljudski |
|---|---|
| **repo** | folder projekta koji Git prati |
| **clone** | skini repo sa GitHuba na svoj računar |
| **commit** | snimi trenutno stanje (zapamti) |
| **push** | pošalji snimke na GitHub |
| **pull** | povuci nove izmjene sa GitHuba |

**Git** = program na MOM računaru (pamti istoriju).
**GitHub** = sajt gdje ŠALJEM kod (backup + portfolio).
*(Kao email vs Gmail — nije isto!)*

---

## Podešavanje (radim SAMO JEDNOM)
```bash
git config --global user.name "Moje Ime"
git config --global user.email "moj@email.com"
gh auth login      # → browser → Authorize
```

## Skini repo
```bash
git clone <URL sa zelenog dugmeta Code>
cd ime-repoa
```

## Petlja koju ponavljam svaki put
```bash
git status                    # šta se promijenilo?
git add .                     # spakuj sve u kutiju
git commit -m "Šta sam uradio"   # zatvori kutiju + nalepnica
git push                      # pošalji na GitHub
```
Pa **refresh** GitHub stranicu → vidim izmjene online. ✅

## Korisno
```bash
git log --oneline    # moja istorija (vremenska mašina)
pwd                  # gdje sam trenutno? (koji folder)
ls -a                # šta ima u folderu (i skriveni .git)
```

---

## Ako nešto pukne 🔧
| Piše... | Uradi |
|---|---|
| traži lozinku / `Authentication failed` | `gh auth login` ponovo |
| `please tell me who you are` | uradi `git config` (gore) |
| `nothing to commit` | zaboravio si `git add .` |
| `not a git repository` | `cd` u folder repoa |
| `status` prazan a mijenjao sam fajl | nisi u pravom folderu — provjeri `pwd` |

> **Zlatno pravilo:** kad ne znaš šta se dešava → kucaj `git status`. On ti uvijek kaže gdje si.
