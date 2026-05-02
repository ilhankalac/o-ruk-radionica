# Radionica 1 — First Site (Setup + prvi HTML)

**Trajanje:** 2h | **Cilj:** Svaki učenik ima svoj `index.html` koji se otvara u browseru.

## Šta gradimo danas
Jednu HTML stranicu sa naslovom, slikom Rožaja i 3 pasusa "zašto volim svoj grad". To je **prva stranica njihovog ličnog sajta** koji raste R1 → R6.

---

## Pripremi prije časa
- [ ] VS Code instaliran kod svih (uputstvo poslano dan ranije)
- [ ] **Live Server** extension link (autor: Ritwick Dey)
- [ ] **Reference sajt** otvoren u tabu (`reference-site/index.html` preko Live Server)
- [ ] 2-3 inspirativna mala tourism sajta otvorena u tabovima
- [ ] USB sa offline VS Code installer-om (rezerva)
- [ ] Dogovoreni timovi (4 tima po 3-4 člana)

---

## Vremenica (2h)

### 0:00–0:15 — Welcome + "evo gdje idemo"
- Pozdrav: **"Zdravo, programeri."** (ne "učenici" — važi do R12)
- Najavi nagradu: pravi **domain** za pobjednički tim + sertifikati za sve
- **Otvori reference sajt** → klikni kroz nav → *"Za 6 vikenda — vi pravite ovakav sajt."*
- Pokaži još 2-3 mala tourism sajta iz tab-ova
- Najavi timove — neka svaki tim odabere ime

### 0:15–0:35 — "Šta se desi kad otkucaš google.com?"
Priča na tabli, **bez tehničkih detalja**:
1. Browser pita server: "Daj mi google.com"
2. Server šalje fajl (HTML)
3. Browser čita fajl i prikazuje

> **Analogija:** "Server je konobar, browser je gost, HTML je meni."

### 0:35–0:50 — SETUP (najteži dio dana)
1. Svako napravi **glavni folder** na desktopu sa svojim imenom (npr. `Marko-rozaje`)
2. Unutra napravi 2 podfoldera: `workshops/` i `my-rozaje-site/`
3. Otvori VS Code → `File → Open Folder → Marko-rozaje`
4. Instaliraj **Live Server** extension (Extensions tab, lijevo)
5. Pravimo prvi fajl u `my-rozaje-site/`: **desni klik → New File → `index.html`**
6. Ukucaj `!` + **Tab** → boilerplate se generiše ✨ **(prvi magic trenutak)**
7. Desni klik na fajl → **Open with Live Server**

> **Pitfall:** Windows skriva ekstenzije — pokaži "Show file extensions" odmah u Explorer opcijama. Inače dobiju `index.html.txt` i sajt ne radi.

### 0:50–1:00 — PAUZA ☕

### 1:00–1:30 — Prvi HTML tags (kucaš uživo)
Objasni svaki tag dok kucaš na projektoru:
- `<h1>` — najveći **heading** ("kao H1 u Wordu")
- `<p>` — **paragraph** (pasus)
- `<img src="..." alt="...">` — slika; `alt` je opis (za slijepe i kad slika ne učita)

> **Trik:** sačuvaj fajl (`Cmd/Ctrl + S`) — Live Server odmah refresh-uje. **"Vidite — ne morate F5!"**

Svako kuca u svoj `my-rozaje-site/index.html`:
```html
<h1>Zdravo, ja sam Marko iz tima Hajla</h1>
<p>Gradim sajt o Rožajama.</p>
```

### 1:30–1:55 — Solo zadatak
Svako u svom `index.html` dodaje:
1. **Sliku Rožaja** — Google Images → desni klik → Save image as → folder `images/` (napravi ga ako ne postoji)
2. **Naslov** sa imenom grada
3. **Tri pasusa** zašto vole Rožaje (lično, ne Wikipedia)

> **Najčešći problem:** slika ne radi → 90% je `slika.jpg.jpg` (skrivene ekstenzije) ili `Slika.JPG` (case-sensitive na nekim sistemima).

#### Beleške (paralelno)
Svako napravi i `workshops/R1-first-site/notes.md` — kratke beleške:
- "Šta sam danas naučio"
- 2-3 nove riječi (tag, element, attribute)
- 1 stvar koja mi je bila teška

### 1:55–2:00 — Show & tell
Svaki tim bira **jedan laptop** da pokaže pred grupom. Pljesak.

---

## "Wow" trenutak dana
**1:30 — kad sačuvaju fajl i Live Server prikaže njihovu sliku Rožaja sa njihovim tekstom.**
Reci: **"To što vidiš — to si TI napravio. Niko drugi na svijetu nema tu stranicu."**

## Pitfalls
- `index.html.txt` (skrivene ekstenzije na Windowsu)
- Slika u krivom folderu → relativna putanja ne radi
- Učenici hoće copy-paste sa Googla → "danas učimo da kucamo"
- Stari laptop bez admin prava → koristi USB ili pari sa drugim učenikom
- Folder hijerarhija ih zbuni — pokaži u sidebar-u sporo

## Domaći
Donijeti **5 fotografija Rožaja** sa telefona ili interneta. Mogu i lične (porodica, planina, baka na pijaci...). **Lične priče = najbolji sadržaj.**

---

## Cheat sheet (za live coding)
```html
<!DOCTYPE html>
<html lang="sr">
<head>
  <meta charset="UTF-8">
  <title>Rožaje — moj sajt</title>
</head>
<body>
  <h1>Naslov</h1>
  <p>Pasus teksta.</p>
  <img src="images/hajla.jpg" alt="Planina Hajla">
</body>
</html>
```

## Folder struktura na kraju R1
```
Marko-rozaje/
├── workshops/
│   └── R1-first-site/
│       └── notes.md
└── my-rozaje-site/
    ├── index.html
    └── images/
        └── hajla.jpg
```

## Backup plan
Ako Live Server ne radi → otvori `.html` direktno u Chrome (`File → Open`). Refresh sa F5.
