class Movie {
    constructor(title, director, genre, releaseYear, rating) {
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.rating = rating;

    }


    getOverview() {
        console.log("Movie: " + this.title);
        console.log("Genre: " + this.genre);
        console.log("Director: " + this.director);
        console.log("Release year: " + this.releaseYear);
        console.log("Rating: " + this.rating);

    }
}

let film1 = new Movie("Harry Potter", "Chris Davidson", "Fantasy", "2004", "4 Stars");
let film2 = new Movie("Superbad", "Seth Rogan", "Comedy", "2008", "5 Stars");

film1.getOverview();
console.log("");
film2.getOverview();