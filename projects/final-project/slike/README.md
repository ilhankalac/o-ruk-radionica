# Folder „slike”

Ovdje idu sve fotografije sajta.

> **Glavna slika (`rozaje-hero.jpg`)** je fotografija vrha **Hajla** (planina
> iznad Rožaja). Autor: **Theresa Schmalenbach**, izvor **Outdooractive**.
>
> ⚠️ **VAŽNO O LICENCI:** ova slika je **zaštićena autorskim pravima** i ovdje
> stoji **samo privremeno**, kao placeholder za izgled. **Prije objave sajta**
> (a obavezno ako se nudi opštini/turističkoj organizaciji) mora se zamijeniti
> **vlastitom fotografijom Rožaja** ili fotografijom za koju imaš pisanu
> dozvolu. Ne objavljuj sajt javno sa ovom slikom.

> **Napomena:** ostale slike u folderu su privremene **SVG ilustracije**
> (`priroda.svg`, `hajla-vrh.svg`, `ganica-kula.svg` ...). One služe samo da
> sajt ne bude prazan dok se ne nađu prave fotografije. Svaki tim ih
> **zamjenjuje pravim `.jpg` fotografijama** istog imena teme. U HTML-u onda
> samo promijeniš nastavak, npr. `slike/hajla-vrh.svg` → `slike/hajla-vrh.jpg`.

## Pravila za slike (VAŽNO — pročitaj prije ubacivanja)

1. **Veličina ispod 300 KB po slici.**
   Velike slike usporavaju sajt, posebno na telefonu. Prije ubacivanja
   smanji/kompresuj sliku (npr. na sajtu tipa *squoosh.app* ili *tinypng.com*).

2. **Uredna imena fajlova — malim slovima, bez razmaka i bez kvačica.**
   Koristi crticu `-` umjesto razmaka. Bez „č, ć, ž, š, đ”.

   Dobro:  `hajla-vrh.jpg`, `izvor-ibra.jpg`, `ganica-kula.jpg`
   Loše:   `Hajla Vrh.JPG`, `slika1.jpg`, `IMG_2931.jpeg`

3. **Format:** `.jpg` za fotografije, `.png` ako slika ima providnu pozadinu
   (npr. logo). Za najmanju veličinu može i `.webp`.

4. **Dimenzije:** za hero/velike slike dovoljno je oko 1600 px širine.
   Nema potrebe za fotografijama od 6000 px — samo zauzimaju prostor.

5. **Autorska prava:** koristi **svoje** fotografije ili one za koje imaš
   dozvolu. Ne skidaj nasumične slike sa interneta.

## Predložena imena (da svi timovi koriste ista)

| Stranica       | Ime fajla            | Šta prikazuje              |
|----------------|----------------------|---------------------------|
| Početna (hero) | `rozaje-panorama.jpg`| panorama grada            |
| Priroda        | `hajla-vrh.jpg`      | vrh planine Hajla         |
| Priroda        | `izvor-ibra.jpg`     | izvor rijeke Ibar         |
| Kuhinja        | `pita-sac.jpg`       | pita ispod sača           |
| Kultura        | `ganica-kula.jpg`    | Ganića kula               |
| Kultura        | `drvorezbarstvo.jpg` | rezbareno drvo            |

## Kako se slika ubacuje u stranicu

U HTML-u, na mjestu placeholdera, koristi:

```html
<img src="slike/hajla-vrh.jpg" alt="Vrh planine Hajla iznad Rožaja">
```

> **`alt` tekst je obavezan** — to je opis slike za one koji je ne vide
> (slabovidi, ili kad se slika ne učita). Napiši kratko šta je na slici.
