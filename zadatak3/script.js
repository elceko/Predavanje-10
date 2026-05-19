// Zadatak 3 – Dinamička lista
//
// SMJERNICE:
// 1. Funkcija dodajStavku() čita input, kreira <li> s document.createElement('li')
// 2. Unutar <li> kreirajte <span> za tekst i <button> za brisanje
// 3. Gumbu za brisanje dodajte event listener koji poziva li.remove()
// 4. Nakon dodavanja ispraznite input: input.value = ''
// 5. Ažurirajte broj stavki: lista.children.length
// 6. Bonus: dodajte i unos pritiskom na Enter (keydown event, event.key === 'Enter')
//
// KLJUČNE METODE:
//   document.createElement('li')           → kreira novi HTML element
//   element.textContent = 'tekst'          → postavljanje teksta elementa
//   element.classList.add('klasa')         → dodavanje CSS klase
//   roditeljElement.appendChild(dijete)    → dodavanje elementa kao dijete
//   element.remove()                       → brisanje elementa iz DOM-a
//   liElement.querySelector('span')        → dohvat djeteta unutar <li>
//   input.value = ''                       → pražnjenje inputa
//   lista.children.length                  → broj djece liste

document.addEventListener('DOMContentLoaded', function () {

    // TODO: Dohvatite potrebne elemente
    const input       = document.getElementById('unos-tekst');
    const gumbDodaj   = document.getElementById('gumb-dodaj');
    const lista       = document.getElementById('lista');
    const brojStavki  = document.getElementById('broj-stavki');

    // POMOĆNA FUNKCIJA – ažurira prikaz broja stavki
    function azurirajBroj() {
         brojStavki.textContent = 'Broj stavki: ' + lista.children.length;
     }

    // POMOĆNA FUNKCIJA – dodaje novu stavku
     function dodajStavku() {
         const tekst = input.value.trim();
         if (tekst === '') return; // ne dodaj praznu stavku
    
    //     // Kreiraj <li> element
         const li = document.createElement('li');
    //
    //     // Kreiraj <span> za tekst stavke
         const span = document.createElement('span');
         span.textContent = tekst;
    //
    //     // TODO: Kreirajte <button> za brisanje s klasom 'gumb-obrisi'
         const gumbObrisi = document.createElement('button');
          gumbObrisi.textContent = 'Obriši';
          gumbObrisi.classList.add('gumb-obrisi');
          gumbObrisi.addEventListener('click', function () {
              li.remove();
              azurirajBroj();
          });
    //
    //     // Složi elemente zajedno
          li.appendChild(span);
          li.appendChild(gumbObrisi);
          lista.appendChild(li);
    
         input.value = ''; // isprazni input
          azurirajBroj();
     }

    // TODO: Event listener za gumb Dodaj
     gumbDodaj.addEventListener('click', dodajStavku);

    // TODO (BONUS): Dodaj stavku i pritiskom Enter tipke
     input.addEventListener('keydown', function (event) {
         if (event.key === 'Enter') dodajStavku();
     });

});
