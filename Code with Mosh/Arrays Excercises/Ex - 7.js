const movies = [
    {title : 'a', year : 2018, rating: 4.5 },
    {title : 'b', year : 2018, rating: 4.7 },
    {title : 'c', year : 2018, rating: 1 },
    {title : 'd', year : 2017, rating: 4.5 },
];

// Get all movies in 2018 with rating > 4
// Sorted descending by rating
// show the titles

const output = getMovies(movies);

console.log(output);

function getMovies(listOfMovies) {
    return listOfMovies.filter(m => m.year == 2018 && m.rating > 4).sort((a,b) => b.rating - a.rating).map( m=> m.title);
    
}