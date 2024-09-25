const recentMovies = [
    {
      title: "The Great Adventure",
      releaseDate: "2023-07-15",
      actors: ["Alex Johnson", "Samantha Bloom", "Michael Cane"]
    },
    {
      title: "Lost in Time",
      releaseDate: "2023-05-22",
      actors: ["Clara Hughes", "Robert Smith", "Emily Stone"]
    },
    {
      title: "Mystery of the Blue Ocean",
      releaseDate: "2023-08-30",
      actors: ["Henry Gold", "Natalie Port", "Bruce Wayne"]
    },
    {
      title: "Cybernetic",
      releaseDate: "2023-09-12",
      actors: ["Aaron Stark", "Lisa Ray", "Jeremy Irons"]
    },
    {
      title: "The Hidden World",
      releaseDate: "2023-10-05",
      actors: ["Sophia Loren", "Daniel Craig", "Emma Watson"]
    }
  ];

  function filterByTitle (movies, searchedTitle) {

    const filteredMovies = []; // Tableau pour stocker les films 

    for(i=0; i < movies.length; i++){

        if(movies[i].title.toLowerCase().includes(searchedTitle.toLowerCase())){
            filteredMovies.push(movies[i]); // Ajouter les films correspondants dans le tableau

        }
    }

    return filteredMovies; // Retourner le tableau filtré

  }

  const result = filterByTitle(recentMovies, "the");
  console.log(filterByTitle(recentMovies, "the"));