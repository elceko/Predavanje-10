// Zadatak 2 – Kalkulator
//
// SMJERNICE:
// 1. Koristite parseFloat(input.value) za pretvorbu teksta u broj
// 2. Provjerite isNaN(broj) – vraća true ako vrijednost nije valjani broj
// 3. Napišite jednu pomoćnu funkciju dohvatiBrojeve() koja čita oba inputa i vraća { a, b } ili null
// 4. Za svaki gumb pozovite tu funkciju, a zatim izvršite odgovarajuću operaciju
// 5. Za dijeljenje: ako je b === 0, prikažite poruku greške umjesto rezultata
// 6. Rezultat pišite u element.textContent = 'Rezultat: ' + vrijednost
//
// KORISNE METODE:
//   parseFloat('3.14')          → pretvara string u decimalni broj
//   parseInt('42')              → pretvara string u cijeli broj
//   Number(vrijednost)          → još jedan način pretvorbe u broj
//   isNaN(vrijednost)           → vraća true ako vrijednost NIJE broj
//   element.textContent = tekst → ispisuje tekst u element
//   element.classList.add()     → dodaje CSS klasu
//   element.classList.remove()  → uklanja CSS klasu

document.addEventListener('DOMContentLoaded', function () {

    // TODO: Dohvatite inpute i div za rezultat
    const input1   = document.getElementById('broj1');
    const input2   = document.getElementById('broj2');
    const rezultat = document.getElementById('rezultat');

    // POMOĆNA FUNKCIJA – dohvaća i validira unos
    function dohvatiBrojeve() {
    const a = parseFloat(input1.value);
    const b = parseFloat(input2.value);
    if (isNaN(a) || isNaN(b)) {
        rezultat.textContent = 'Unesite ispravne brojeve!';
             return null;
        }
         return { a, b };
     }

    // TODO: Zbrajanje
    document.getElementById('zbrajanje').addEventListener('click', function () {
        const brojevi = dohvatiBrojeve();
        if (brojevi === null) return;
        rezultat.textContent = 'Rezultat: ' + (brojevi.a + brojevi.b);
     });

    // TODO: Oduzimanje (slično kao zbrajanje)
    document.getElementById('oduzimanje').addEventListener('click', function () {
        const brojevi = dohvatiBrojeve();
        if (brojevi === null) return;
        rezultat.textContent = 'Rezultat: ' + (brojevi.a - brojevi.b);
        });
    // TODO: Množenje (slično kao zbrajanje)
    document.getElementById('mnozenje').addEventListener('click', function () {
        const brojevi = dohvatiBrojeve();
        if (brojevi === null) return;
        rezultat.textContent = 'Rezultat: ' + (brojevi.a * brojevi.b);
     });

    // TODO: Dijeljenje – OBAVEZNO provjerite je li b === 0!
    document.getElementById('dijeljenje').addEventListener('click', function () {
         const brojevi = dohvatiBrojeve();
         if (brojevi === null) return;
         if (brojevi.b === 0) {
             rezultat.textContent = 'Greška: ne može se dijeliti s nulom!';
             return;
         }
         rezultat.textContent = 'Rezultat: ' + (brojevi.a / brojevi.b);
     });

});
