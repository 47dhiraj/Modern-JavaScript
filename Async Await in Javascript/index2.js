// About the evolution of Promises to Async Await in Javascript



// Example 1 : Nice way of fetching API using async await
const fetchMovies = async (name) => {

    try
    {
        const response = await fetch(`https://yts.mx/api/v2/list_movies.json?query_term=${name}`);

        const data = await response.json();

        console.log(data)

    }
    catch(err)
    {
        console.log(err)
    }

}

fetchMovies('Hitman')









