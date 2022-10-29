/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus su 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
class Movie {
  title;
  director;
  budget;
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }

  wasExpensive(budget) {
    if (budget > 100_000_000) {
      console.log(true);
    } else console.log(false);
  }
}

const theMovie = new Movie("Brave Jack", "Eimas Sipas", 200_000_000);

console.log(theMovie);

theMovie.wasExpensive();
