// créer un objet movies qui contient un attribut data
// qui est un tableau d’objet de film. Chaque film est
// représenté par: title, description
// ajoutez une fonction add à l’intérieur de l’objet qui ajoute
// un film donné en paramètre
// ajoutez une fonction log qui affiche tous les titres de films.
// Utilisez this pour cela.

const movies = {
  data: [
    {
      title: 'film1',
      description: 'Ceci est le film 1.',
    },
    {
      title: 'film2',
      description: 'Ceci est le film 2.',
    },
    {
      title: 'film3',
      description: 'Ceci est le film 3.',
    },
  ],
  add: function(movie) {
    this.data.push(movie);
  },
  log: function() {
    const listTitleMovies = this.data.map(function(movie) {
      return movie.title;
    });
    console.log(listTitleMovies);
  },
};

movies.add({
  title: 'film4',
  description: 'Ceci est le film 4.',
});
movies.log();
