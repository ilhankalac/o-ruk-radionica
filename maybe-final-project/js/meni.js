/* ============================================================
   MENI.JS — jedini JavaScript na cijelom sajtu
   ------------------------------------------------------------
   Posao mu je SAMO jedan: kad si na telefonu i klikneš na
   hamburger dugme (tri crtice), otvori ili zatvori listu
   linkova. Ništa više.

   Kako radi (u tri koraka):
     1. Pronađemo dugme i listu po njihovom "id"-u iz HTML-a.
     2. Kad se klikne dugme -> dodaj/skloni klasu "otvoren".
        (CSS klasa "otvoren" je ta koja listu prikaže.)
     3. Kad se klikne bilo koji link -> zatvori meni
        (da se ne zaglavi otvoren nakon prelaska na drugu stranu).
   ============================================================ */

// 1. Uzmemo elemente iz stranice po njihovom id-u.
var dugme = document.getElementById("hamburger");
var lista = document.getElementById("meni-lista");

// 2. Kad korisnik klikne na hamburger, "preklopi" klasu otvoren.
//    toggle = ako klase nema -> dodaj je; ako je ima -> skloni je.
dugme.addEventListener("click", function () {
  lista.classList.toggle("otvoren");

  // Pristupačnost: javimo čitačima ekrana da li je meni otvoren.
  var jeOtvoren = lista.classList.contains("otvoren");
  dugme.setAttribute("aria-expanded", jeOtvoren);
});

// 3. Kad se klikne bilo koji link u meniju, zatvori listu.
var linkovi = lista.querySelectorAll("a");
linkovi.forEach(function (link) {
  link.addEventListener("click", function () {
    lista.classList.remove("otvoren");
    dugme.setAttribute("aria-expanded", "false");
  });
});
