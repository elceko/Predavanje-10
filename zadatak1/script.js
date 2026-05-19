// Zadatak 1 – Validacija forme
//
// SMJERNICE:
// 1. Koristite event.preventDefault() da spriječite reload stranice pri submitu forme
// 2. Za svako polje dohvatite vrijednost s .value.trim() – trim() uklanja razmake s rubova
// 3. Provjerite uvjete: prazno polje (=== ''), sadrži '@' (.includes('@')), duljina (.length >= 6)
// 4. Grešku prikažite u <span> elementu ispod odgovarajućeg inputa (postavite .textContent)
// 5. Koristite classList.add('greska') za crveni stil i classList.remove('greska') za uklanjanje
// 6. Koristite varijablu imaGresaka = true/false da pratite je li bilo grešaka
//
// KORISNE METODE I SVOJSTVA:
//   document.getElementById('id')        → dohvat elementa po ID-u
//   element.value.trim()                 → čitanje vrijednosti inputa (trim = uklanja razmake)
//   element.value.trim() === ''          → provjera je li polje prazno
//   tekst.includes('@')                  → provjera sadrži li string znak @
//   tekst.length >= 6                    → provjera duljine stringa
//   element.textContent = 'poruka'       → postavljanje teksta elementa
//   element.classList.add('klasa')       → dodavanje CSS klase
//   element.classList.remove('klasa')    → uklanjanje CSS klase
//   element.style.display = 'block'      → prikazivanje sakrivenog elementa
//   element.style.display = 'none'       → sakrivanje elementa

document.addEventListener('DOMContentLoaded', function () {

    // TODO: Dohvatite formu
    const forma = document.getElementById('forma');

    // TODO: Dohvatite inpute
    const inputIme     = document.getElementById('ime');
    const inputEmail   = document.getElementById('email');
    const inputLozinka = document.getElementById('lozinka');

    // TODO: Dohvatite elemente za greške (koje ste dodali u HTML)
    const greskaIme     = document.getElementById('greska-ime');
    const greskaEmail   = document.getElementById('greska-email');
    const greskaLozinka = document.getElementById('greska-lozinka');

    // TODO: Dohvatite element za poruku uspjeha
    const poruka = document.getElementById('poruka-uspjeha');

    // TODO: Dodajte event listener na submit
    forma.addEventListener('submit', function (event) {
    event.preventDefault(); // spriječava reload stranice
    //
    let imaGresaka = false;
    //
    //     // Provjera polja Ime
         if (inputIme.value.trim() === '') {
            greskaIme.textContent = 'Ime je obavezno!';
             imaGresaka = true;
         } else {
             greskaIme.textContent = '';
         }
    //
    //     // TODO: Provjera polja Email (mora sadržavati '@')
        if (!inputEmail.value.inclues('@')) {
            greskaEmail.textContent = 'Email mora sadržavati @!';
            imaGresaka = true;
        } else {
            greskaEmail.textContent = '';
        }
    //     // TODO: Provjera polja Lozinka (minimalno 6 znakova)
        if (inputLozinka.value.length < 6) {
            greskaLozinka.textContent = 'Lozinka mora imati najmanje 6 znakova!';
            imaGresaka = true;
        } else {
            greskaLozinka.textContent = '';
        }
    
    //     // Ako nema grešaka – prikaži poruku uspjeha
         if (!imaGresaka) {
             poruka.textContent = 'Forma je uspješno poslana!';
         } else {
             poruka.textContent = '';
         }
    });

});
