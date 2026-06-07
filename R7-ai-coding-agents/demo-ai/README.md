# demo-ai — instruktorski live demo za Claude Code (R7)

Mali folder za **prvi demo na projektoru** kad instaliramo Claude Code. `index.html` je
namjerno **ružan, bez CSS-a** — da transformacija jednom rečenicom bude dramatična.

## Tok demoa (3 čina)

1. Otvori `index.html` u browseru **prije časa** → ružno je (to je startna tačka).
2. U terminalu, u ovom folderu:
   ```bash
   cd R7-ai-coding-agents/demo-ai
   claude
   ```
3. **Čin 1 — "ono te VIDI":**
   ```
   Koje fajlove vidiš u ovom folderu i o čemu je ova stranica?
   ```
4. **Čin 2 — "jedna rečenica, pravi sajt" (WOW):**
   ```
   Stilizuj ovu stranicu da liči na pravi moderan sajt: lijepe boje,
   font, razmaci, da naslov bude upadljiv. Napravi style.css.
   ```
   > Kad zatraži dozvolu — STANI, pokaži zeleni diff ("kao Files changed na PR-u"), pa odobri → refresh.
5. **Čin 3 — "ti si glavni, i razumiješ":**
   ```
   Promijeni boju naslova u tamnoplavu i dodaj malo razmaka oko slike.
   ```
   > Odobri → refresh. Pa otvori `style.css` i pokaži `color:` / `margin:` — "ovo smo učili na R3/R4".

## Reset za sljedeću grupu

Demo izmijeni/doda fajlove (`style.css` itd.). Da vratiš na ružnu početnu verziju:

```bash
git checkout R7-ai-coding-agents/demo-ai/index.html   # vrati index.html
git clean -fd R7-ai-coding-agents/demo-ai/            # obriši šta je AI napravio (style.css...)
```
