# Radionica 7 — AI i coding agenti (Claude Code)

**Trajanje:** 2h | **Cilj:** Učenici razumiju **šta je AI** i ko ga pravi (OpenAI, Anthropic, Google — trka za najbolji model), shvate razliku između **chatbota** i **coding agenta**, dobiju i uloguju **Claude Code** u terminalu, i sa njim naprave/poprave **HTML+CSS sajt o nečemu što su VEĆ radili ručno** — pri čemu **oni vode, a AI izvršava**.

> **Wow trenutak:** *"Rekao sam na našem jeziku šta hoću, a ono je samo napisalo i izmijenilo fajlove — a ja tačno razumijem svaku liniju jer sam to već učio sam."*

## Šta radimo danas
Ne učimo "kako da nam AI uradi domaći". Učimo da je **AI alat, a ne autor.** Prvih ~40 min je **glava** (šta je AI, ko ga pravi, šta je coding agent). Onda svako pokrene **Claude Code** i sa njim **rekonstruiše jednu stranicu koju je već pravio ručno** (npr. film stranica iz R2/R3 ili stranica svog Rožaje sajta). Pošto su HTML i CSS već učili — oni su **kontrolori kvaliteta**: čitaju šta AI napiše, traže da objasni, i prave izmjene. Tačno kao review PR-a na R6, samo što je "kolega" AI.

---

## Filozofija toka (zašto ovim redom)

**Pravilo broj 1 cijelog časa (napiši na tablu, ponovi 3 puta):**
> **„Ako ne možeš da objasniš šta je AI napisao — ne smiješ to da koristiš.”**

Zato je AI radionica **tek sedma**, a ne prva. Prvih 6 radionica su gradili sami da **znaju da prepoznaju dobar od lošeg koda.** AI bez tog znanja = magija u koju slijepo vjeruješ. AI sa tim znanjem = supermoć.

**Prvo glava, pa prsti** — kao na R5/R6. AI teorija je kratka i konkretna, bez naučne fantastike. Cilj: skinuti misticizam (*"AI nije svjesno biće, nije Google, ne zna istinu — to je mašina koja predviđa sljedeću riječ, vrlo dobro"*).

**Chatbot vs coding agent — to je srž dana.** ChatGPT u browseru ti *napiše tekst koji ti prekopiraš*. Coding agent (Claude Code) **sam čita i mijenja tvoje fajlove i pokreće komande u tvom folderu** — ali te svaki put pita za dozvolu. Ta razlika ("ono dira moje fajlove") je "wow", ali i tačka gdje učimo oprez.

**Namjerno biramo zadatak koji su VEĆ radili ručno.** Tako mogu da uporede ("ja sam ovo kucao 40 min, ono za 30 sek") i — što je važnije — **da ocijene da li je AI uradio dobro.** Ne damo im nepoznat zadatak gdje bi morali slijepo vjerovati.

**Default režim dozvola = AI pita za SVE.** Ne uključujemo "auto-accept". Učenik mora da pročita i odobri svaku izmjenu. To je pedagogija, ne tehnička sitnica: **oni su glavni, AI traži dozvolu.**

---

## Pripremi prije časa (KRITIČNO)
- [ ] **Claude Code instaliran na svim računarima** — provjera: `claude --version`. Instalacija (treba internet):
  - macOS/Linux: `curl -fsSL https://claude.ai/install.sh | bash`
  - Windows (PowerShell): `irm https://claude.ai/install.ps1 | iex`
  - (alternativa, ako imaju Node 18+: `npm install -g @anthropic-ai/claude-code`)
- [ ] **Nalozi za svaki tim spremni** — login podaci na papiriću po stolu (Claude.ai pretplata ili Console). **Provjeri da svaki nalog ima kredit / važeću pretplatu UNAPRIJED** (#1 ubica časa ako "ne radi").
- [ ] **Probaj cijeli tok sam jutros** na jednom đačkom nalogu: `claude` → `/login` → jedan prompt koji mijenja fajl → odobravanje. Da znaš tačno šta će vidjeti.
- [ ] **Folder za vježbu spreman kod svih** — neka svaki učenik zna gdje mu je stara stranica iz R2/R3 (ili njegov Rožaje sajt). Plan B: prazan folder `ai-vjezba/` i kreću od nule.
- [ ] **Stabilan internet** — Claude Code NE radi offline. Plan B: telefon hotspot.
- [ ] **Tabla — 3 logoa i jedna rečenica:** OpenAI (ChatGPT) · Anthropic (Claude) · Google (Gemini) → *"tri firme se takmiče ko će napraviti pametniji model."*
- [ ] **Crtež na tabli (ostaje cijeli čas):**
  ```
  CHATBOT (browser):     ti pišeš  →  ono ti vrati TEKST  →  ti kopiraš u fajl
  CODING AGENT (Claude Code):  ti pišeš  →  ono SAMO čita/mijenja fajlove  →  pita te: "smijem?"
  ```
- [ ] Projektor — da uživo pokažeš svoj Claude Code prije nego oni krenu.

---

## Vremenica (2h)

### 0:00–0:20 — ŠTA JE AI (bez kucanja, samo priča + tabla)
Niko ne dira tastaturu. Skidamo misticizam.

**1) Šta je AI „ljudski”** (analogija auto-complete na telefonu)
- *"Kad kucaš poruku, telefon predlaže sljedeću riječ. AI model je to isto — samo ogroman, naučen na skoro cijelom internetu. Predviđa sljedeću riječ, pa sljedeću, i tako napiše cijeli pasus ili kod."*
- Ključno: *"On NE 'zna' istinu i NIJE svjestan. Zato ume da slaže ubjedljivo — to zovemo **halucinacija**."*
- *"Nije pretraživač. Google ti nađe postojeću stranicu. AI ti **proizvede** nov tekst — koji može biti tačan ili izmišljen."*

**2) Kako se „uči” model** (jednostavno)
- *"Pokažeš mu milijarde primjera teksta i koda, i on uhvati šablone — kako izgleda dobra rečenica, kako izgleda ispravan HTML. Nije bubао napamet, uhvatio je obrasce."*

**3) Trka — ko pravi najbolji model** (3 logoa na tabli)
| Firma | Model | 
|---|---|
| **OpenAI** | ChatGPT / GPT |
| **Anthropic** | Claude *(njega koristimo danas)* |
| **Google** | Gemini |
- *"Ove tri (i još par) se takmiče ko će napraviti pametniji, brži i sigurniji model. Svakih par mjeseci izađe bolji — zato se priča stalno mijenja. To je dobra trka za nas korisnike."*
- *"Svi rade na sličan način. Mi danas koristimo Claude jer je jak za kod."*

### 0:20–0:38 — OD CHATBOTA DO CODING AGENTA (i dalje bez kucanja)
**1) Chatbot — što već poznaju**
- *"ChatGPT/Claude u browseru: pitaš, dobiješ odgovor kao u poruci. Ako hoćeš kod — on ga napiše u prozoru, a TI ga rukom prekopiraš u svoj fajl. Ti si kurir."*

**2) Coding agent — novi nivo** (pokaži crtež sa table)
- *"Coding agent kao Claude Code živi u **terminalu** (onom istom iz R5/R6), unutar TVOG foldera. Kažeš mu šta hoćeš — on **sam otvori fajl, napiše/izmijeni kod, i može da pokrene komandu**. Nema kopiranja."*
- **Ali — bezbjednost:** *"Pošto dira tvoje fajlove, svaki put te PITA: 'smijem li da izmijenim ovaj fajl?' Ti gledaš šta hoće i kažeš da/ne. Ti si šef, ono je pripravnik."*

**3) Zašto baš vi to smijete da koristite** (poveži sa R1–R6)
- *"Pripravniku moraš da pregledaš rad. Vi UMETE — šest radionica ste pisali HTML i CSS. Prepoznaćete ako napiše glupost. Zato AI u vašim rukama nije varanje — nego ubrzanje."*
- **Pravilo dana opet:** *"Ako ne možeš da objasniš liniju koju je napisao — ne ide u sajt."*

### 0:38–0:55 — SETUP: pokreni i uloguj Claude Code (idemo zajedno)
Najrizičniji tehnički dio — **čekamo da SVI prođu svaki korak.** Lideri pomažu timu.

1. **Provjera da je instaliran:**
   ```bash
   claude --version
   ```
   > Ako javlja grešku → instaliran nije; lider/instruktor odradi instalaciju (vidi pripremu).
2. **Uđi u folder vježbe** (njihova stara stranica) i pokreni agenta:
   ```bash
   cd putanja/do/foldera
   claude
   ```
3. **Login** — prvi put te pita; ako ne, ukucaj:
   ```
   /login
   ```
   > Otvori browser → uloguj se nalogom sa papirića → **Authorize** → vrati se u terminal. (*"Isto kao `gh auth login` na R5 — browser potvrda."*)
4. **Pozdravna provjera** — neka svako ukuca prost prompt na našem jeziku:
   ```
   Reci mi ukratko koje fajlove vidiš u ovom folderu.
   ```
   > Kad svako dobije odgovor koji nabraja njihove fajlove → *"agent te vidi, spremni smo."*

> 🗣 *"Pišete mu normalno, na našem jeziku. Ne mora engleski, ne mora 'programerski'."*

### 0:55–1:05 — PAUZA ☕

### 1:05–1:40 — SRCE: rekonstruiši stranicu koju si VEĆ pravio
Cilj: uporede ručni rad i AI, i **vježbaju da odobravaju/odbijaju** izmjene.

1. **Prvi pravi zadatak** — neka traže nešto što znaju kako treba da izgleda. Primjer prompta:
   ```
   Napravi index.html i style.css za jednostavnu stranicu o mom omiljenom filmu:
   naslov, slika (placehold.co), pasus opisa i listu od 3 razloga zašto ga volim.
   Neka liči na ono što smo radili na radionicama — header, main, footer.
   ```
2. **Agent traži dozvolu da napravi/izmijeni fajl → STANI i pročitaj.**
   - 🗣 *"Prije nego stisnete 'da' — pogledajte ŠTA hoće da napiše. Vidite zeleno = dodaje. To je kao 'Files changed' na PR-u sa R6."*
   - Odobre (`y` / Enter za dozvolu). Otvore rezultat u browseru (Live Server) → *"radi!"*
3. **Kontrola kvaliteta (najvažnije):** otvore fajl koji je AI napisao i instruktor pita grupu:
   - *"Nađite `<h1>`. Nađite gdje je `display: flex`. Objasnite mi šta radi `.card`."*
   - Ako neko ne razumije liniju → traže od AI: `Objasni mi šta radi ova linija: ...`
4. **Tražene izmjene (iterate):** neka mijenjaju kroz razgovor, ne ručno:
   ```
   Promijeni boju headera u tamnoplavu i povećaj naslov.
   Dodaj još jednu sekciju sa mojom omiljenom scenom.
   ```
   - Svaki put: **pročitaj izmjenu → odobri → refresh.**

### 1:40–1:55 — „Uhvati grešku” + ti si glavni
Učimo da AI griješi i da ga MI ispravljamo.
- **Namjerno traži nešto pa traži suprotno**, ili pitaj nešto van foldera, da vide da zna da pogriješi/izmisli. *"Vidite — nije savršen. Zato ga ti provjeravaš."*
- **Pravilo „objasni ili briši”:** svako pokaže timu **jednu liniju** koju je AI napisao i objasni je svojim riječima. Ko ne može → taj dio se vraća/uči, ne ostaje.
- Ako su na svom Rožaje sajtu: neka urade **jednu stvarnu, korisnu izmjenu** koju će zadržati (npr. AI im sredi razmake/boje na postojećoj stranici) — pa to kasnije i pushuju (Git iz R5).

### 1:55–2:00 — Show & tell + domaći
- 2–3 učenika dijele ekran: pokažu prompt koji su dali i rezultat, i **objasne jednu liniju koda.** Slavi javno.
- Najveća pohvala ide onome ko je **uhvatio grešku AI-a**, ne onome ko je najviše napravio.

---

## "Wow" trenutak
**1:05–1:15 — prvi put kad agent sam napravi fajlove iz jedne rečenice na našem jeziku.**
Reci: **„Niste kopirali ništa. Rekli ste šta hoćete, ono je napisalo kod i izmijenilo fajlove. A vi razumijete svaku liniju — jer ste šest radionica učili sami. To je razlika između vas i nekoga ko samo lijepi tuđi kod.”**

## Pitfalls (spreman da gasim požare)
- **„Ne radi / traži login stalno”** (#1 ubica vremena) → nalog bez kredita/pretplate, ili `/login` nije do kraja prošao u browseru. Provjeri nalog UNAPRIJED; ponovi `/login`.
- **`claude: command not found`** → nije instaliran ili terminal ne vidi instalaciju. Zatvori/otvori terminal, provjeri instalaciju (vidi pripremu).
- **Agent mijenja pogrešan folder / „ne vidi” fajlove** → pokrenut iz pogrešnog foldera. Izađi (`Ctrl+C` ili `/exit`), `cd` u pravi folder, pa opet `claude`.
- **Učenik slijepo stiska „da” na sve** → zaustavi grupu: *"prvo se pročita ŠTA mijenja, pa onda dozvola."* Vrati pravilo dana.
- **Učenik traži da AI „uradi cijeli sajt” pa ne razumije ništa** → vrati na manji korak: jedna stranica, jedna izmjena, pa objasni. Kvantitet nije cilj.
- **Halucinacija/izmišljen sadržaj** → iskoristi kao lekciju, ne kao kvar: *"vidite zašto provjeravamo."*
- **Internet pukne** → Claude Code ne radi offline; pređi na rezervu (hotspot) ili odradi diskusiju/teoriju dok se vrati.
- **AI piše na engleskom iako su pisali na našem** → samo traže: `Odgovaraj mi na našem jeziku.`

## Domaći
- Uzmi **jednu svoju stranicu** i sa Claude Code uradi **jednu izmjenu** koju razumiješ — pa u grupu pošalji: (1) prompt koji si dao, (2) **objašnjenje jedne linije** koju je AI napisao.
- Razmisli i napiši 2 rečenice: *"Šta AI radi dobro, a gdje moram da ga provjeravam?"*

---

## Cheat sheet (za live coding)
```bash
# 1) Provjeri instalaciju
claude --version

# 2) Uđi u folder svog projekta i pokreni agenta
cd putanja/do/foldera
claude

# 3) Prvi put: uloguj se (browser -> Authorize)
/login

# 4) Pričaj s njim NORMALNO, na našem jeziku, npr:
#    "Napravi index.html i style.css za stranicu o ..."
#    "Objasni mi šta radi ova linija: ..."
#    "Promijeni boju headera u tamnoplavu."

# Korisne komande unutar Claude Code
/help          # spisak komandi
/clear         # počni razgovor iz početka (zaboravi prethodno)
/login         # uloguj se / promijeni nalog
/exit          # izađi iz agenta (ili Ctrl+C)

# Zlatno pravilo: prije nego odobriš izmjenu — PROČITAJ šta mijenja.
```

## Šta NE diramo danas (vrati ako pitaju: "kasnije, prvo ovo savladajte")
- **Auto-accept / „YOLO” režim dozvola** → NE uključujemo; učenik mora da odobrava svaku izmjenu (to je poenta).
- API ključevi, plaćanje po tokenu, modeli/cijene u dubinu → samo spomeni da postoji
- Pisanje vlastitih agenata, MCP, hooks, slash-komande na mjeru → daleko van nivoa
- Git iz Claude Code-a (commit/push kroz agenta) → koriste Git ručno kao na R5/R6
- "AI da uradi cijeli timski projekat" → AI je pomoć na R8–R11, ne zamjena za rad tima
