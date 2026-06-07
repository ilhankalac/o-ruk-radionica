# Radionica 7 — Feedback i rezime

**Datum:** 7. jun 2026.
**Tema:** AI i coding agenti — Claude Code u terminalu
**Trajanje:** 2h

---

## 🎯 Velika ideja

**Šest radionica ste sve kucali sami. Danas ste prvi put rekli na našem jeziku šta hoćete — a mašina je sama napisala i izmijenila fajlove.**

Ali poenta nije "AI nam radi domaći". Poenta je: **AI je alat, a ne autor.** Vi ste šef, AI je pripravnik. Pošto ste HTML i CSS učili sami, vi prepoznajete dobar od lošeg koda — zato AI u vašim rukama nije varanje, nego **supermoć.** 🚀

> **Pravilo dana (ponovili smo ga tri puta):** *„Ako ne možeš da objasniš šta je AI napisao — ne smiješ to da koristiš.”*

---

## 🧠 Šta je AI, bez mistike

| Pojam | Šta znači „ljudski” |
|---|---|
| **AI model** | ogroman auto-complete naučen na skoro cijelom internetu — predviđa sljedeću riječ, pa sljedeću |
| **halucinacija** | kad AI ubjedljivo izmisli nešto netačno (jer ne „zna” istinu, samo pogađa) |
| **nije pretraživač** | Google ti nađe postojeću stranicu; AI ti **proizvede** nov tekst — tačan ili izmišljen |

> Skinuli smo misticizam: *AI nije svjesno biće, nije Google, ne zna istinu — to je mašina koja vrlo dobro predviđa sljedeću riječ.*

---

## 🏁 Trka — ko pravi najbolji model

| Firma | Model |
|---|---|
| **OpenAI** | ChatGPT / GPT |
| **Anthropic** | Claude *(njega smo koristili danas)* |
| **Google** | Gemini |

> Tri firme se takmiče ko će napraviti pametniji, brži i sigurniji model. Svakih par mjeseci izađe bolji — zato se priča stalno mijenja. **Dobra trka za nas korisnike.** Mi smo uzeli Claude jer je jak za kod.

---

## ⚡ Najvažnija razlika dana: chatbot vs coding agent

```
CHATBOT (browser):          ti pišeš  →  ono ti vrati TEKST  →  ti KOPIRAŠ u fajl
CODING AGENT (Claude Code): ti pišeš  →  ono SAMO čita/mijenja fajlove  →  pita te: „smijem?”
```

- **Chatbot** (ChatGPT/Claude u browseru) ti napiše kod u prozoru, a ti si **kurir** koji ga rukom prekopira.
- **Coding agent** (Claude Code) živi u **terminalu**, unutar tvog foldera — sam otvori fajl, napiše/izmijeni kod, pokrene komandu. **Nema kopiranja.**
- Ali pošto dira tvoje fajlove, **svaki put te PITA za dozvolu.** Ti gledaš zeleni diff (kao „Files changed” na PR-u sa R6) i kažeš da/ne.

> 🔑 **Default režim: AI pita za SVE.** Nismo uključivali „auto-accept”. Prvo se pročita ŠTA mijenja, pa onda dozvola. Vi ste glavni, AI traži dozvolu.

---

## 💻 Komande dana (setup + rad)

```bash
# 1) Provjeri da je instaliran
claude --version

# 2) Uđi u folder svog projekta i pokreni agenta
cd putanja/do/foldera
claude

# 3) Prvi put: uloguj se (browser → Authorize, kao gh auth login sa R5)
/login

# 4) Pričaj s njim NORMALNO, na našem jeziku:
#    „Napravi index.html i style.css za stranicu o ...”
#    „Objasni mi šta radi ova linija: ...”
#    „Promijeni boju headera u tamnoplavu.”

# Korisne komande unutar Claude Code
/help     # spisak komandi
/clear    # počni razgovor iz početka
/login    # uloguj se / promijeni nalog
/exit     # izađi (ili Ctrl+C)
```

> Zlatno pravilo: **prije nego odobriš izmjenu — PROČITAJ šta mijenja.**

---

## ⭐ WOW trenutak

**Prvi put kad je agent iz JEDNE rečenice sam napravio fajlove.** Na demou smo uzeli namjerno ružnu Matrix stranicu (`index.html`, bez CSS-a) i rekli:

> *„Stilizuj ovu stranicu da liči na pravi moderan sajt: lijepe boje, font, razmaci, da naslov bude upadljiv. Napravi style.css.”*

Refresh → pravi sajt. *„Niste kopirali ništa. Rekli ste šta hoćete, ono je napisalo kod i izmijenilo fajlove. A vi razumijete svaku liniju — jer ste šest radionica učili sami. To je razlika između vas i nekoga ko samo lijepi tuđi kod.”*

---

## 🕵️ „Uhvati grešku” — i AI griješi

Najveća pohvala dana nije išla onome ko je najviše napravio, nego onome ko je **uhvatio grešku AI-a.** Namjerno smo tražili stvari da vidimo da AI ume da pogriješi i izmisli.

> *„Vidite — nije savršen. Zato ga TI provjeravaš.”* Halucinacija nije kvar, nego lekcija zašto čitamo svaku liniju.

**Pravilo „objasni ili briši”:** svako je pokazao timu jednu liniju koju je AI napisao i objasnio je svojim riječima. Ko nije mogao — taj dio se ne zadržava.

---

## 🛟 Najčešće greške (i rješenja)

- **`claude: command not found`** → nije instaliran ili terminal ne vidi instalaciju. Zatvori/otvori terminal, provjeri instalaciju.
- **„Traži login stalno / ne radi”** → nalog bez kredita/pretplate ili `/login` nije do kraja prošao u browseru. Ponovi `/login`.
- **Agent „ne vidi” fajlove / mijenja pogrešan folder** → pokrenut iz pogrešnog foldera. `/exit`, pa `cd` u pravi folder, pa opet `claude`.
- **Slijepo stiskanje „da” na sve** → STANI. Prvo se pročita ŠTA mijenja, pa dozvola.
- **„Uradi mi cijeli sajt” pa ništa ne razumijem** → vrati na manji korak: jedna stranica, jedna izmjena, pa objasni. Kvantitet nije cilj.
- **AI piše na engleskom** → samo traži: `Odgovaraj mi na našem jeziku.`
- **Internet pukne** → Claude Code NE radi offline. Hotspot ili teorija dok se vrati.

---

## 🔮 Šta NISMO dirali (namjerno — kasnije)

- Auto-accept / „YOLO” režim dozvola — učenik mora da odobrava svaku izmjenu (to je poenta).
- API ključevi, plaćanje po tokenu, modeli/cijene u dubinu — samo smo spomenuli da postoji.
- Pisanje vlastitih agenata, MCP, hooks — daleko van nivoa za sad.
- Git iz Claude Code-a — Git i dalje radimo ručno kao na R5/R6.
- „AI da uradi cijeli timski projekat” — AI je **pomoć** na R8–R11, ne zamjena za rad tima.

---

## 🏠 Domaći

- Uzmi **jednu svoju stranicu** i sa Claude Code uradi **jednu izmjenu koju razumiješ.** Pošalji u grupu: (1) prompt koji si dao, (2) **objašnjenje jedne linije** koju je AI napisao.
- Napiši 2 rečenice: *„Šta AI radi dobro, a gdje moram da ga provjeravam?”*

---

Danas ste dobili supermoć — ali samo zato što ste prvih šest radionica gradili temelj sami. **Vi vodite, AI izvršava.** Vidimo se na timskom projektu! 🚀
