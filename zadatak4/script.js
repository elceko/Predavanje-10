// Zadatak 4 – Tajmer i odbrojavanje
//
// SMJERNICE:
// 1. Deklarirajte let intervalID = null IZVAN event listenera – mora biti dostupno Stopu
// 2. setInterval(fn, 1000) poziva funkciju svake 1000ms i vraća ID koji morate pohraniti
// 3. clearInterval(intervalID) zaustavlja interval – koristite i u Stopu i kad dođe do 0
// 4. Svake sekunde smanjite preostaloVrijeme-- i ažurirajte element.textContent
// 5. Onemogućite Start (gumb.disabled = true) dok odbrojavanje teče da nema duplikata
// 6. Bonus: dodajte Reset gumb koji vraća sve na početno stanje
//
// KLJUČNE METODE:
//   setInterval(funkcija, ms)   → pokretanje intervala, vraća ID
//   clearInterval(id)           → zaustavljanje intervala
//   parseInt(vrijednost)        → pretvorba stringa u broj
//   element.disabled = true     → onemogućavanje gumba
//   element.disabled = false    → omogućavanje gumba
//   element.classList.remove('skriveno')  → prikazivanje sakrivenog elementa
//
// VAŽNO: ID intervala morate spremiti u varijablu da biste mogli pozvati clearInterval!
//   let intervalID = null;
//   intervalID = setInterval(fn, 1000);   // pokretanje
//   clearInterval(intervalID);             // zaustavljanje

document.addEventListener('DOMContentLoaded', function () {

    // TODO: Dohvatite elemente
     const inputSekunde   = document.getElementById('sekunde');
     const gumbStart      = document.getElementById('gumb-start');
     const gumbStop       = document.getElementById('gumb-stop');
     const gumbReset      = document.getElementById('gumb-reset');
     const prikazVremena  = document.getElementById('prikaz-vremena');
     const porukaIsteka   = document.getElementById('poruka-isteka');

    // Varijabla za ID intervala – MORA biti izvan event listenera!
    // let intervalID = null;
    // let preostaloVrijeme = 0;

    // TODO: Event listener za Start
    gumbStart.addEventListener('click', function () {
         preostaloVrijeme = parseInt(inputSekunde.value);
         if (isNaN(preostaloVrijeme) || preostaloVrijeme <= 0) {
             alert('Unesite pozitivan broj!');
             return;
         }
    //
    //     // Sakrij poruku isteka (ako je bila prikazana od ranije)
         porukaIsteka.classList.add('skriveno');
    //
    //     // Ažuriraj prikaz
         prikazVremena.textContent = preostaloVrijeme;
    //
    //     // Onemogući Start, omogući Stop
         gumbStart.disabled = true;
         gumbStop.disabled  = false;
    //
    //     // Pokreni interval
         intervalID = setInterval(function () {
             preostaloVrijeme--;
             prikazVremena.textContent = preostaloVrijeme;
    //
             if (preostaloVrijeme <= 0) {
                 clearInterval(intervalID);
                 porukaIsteka.classList.remove('skriveno');
                 gumbStart.disabled = false;
                 gumbStop.disabled  = true;
             }
         }, 1000);
     });

    // TODO: Event listener za Stop
     gumbStop.addEventListener('click', function () {
         clearInterval(intervalID);
         gumbStart.disabled = false;
         gumbStop.disabled  = true;
     });

    // TODO (BONUS): Gumb Reset – vraća sve na početno stanje
     gumbReset.addEventListener('click', function () {
        clearInterval(intervalID);
        intervalID = null;
        preostaloVrijeme = 0;
        prikazVremena.textContent = preostaloVrijeme;
        gumbStart.disabled = false;
        gumbStop.disabled  = true;
     });

});
