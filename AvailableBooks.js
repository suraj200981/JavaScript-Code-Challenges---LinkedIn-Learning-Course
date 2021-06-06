/*Instructions: 

Develop an inventory application for a bookstore
you need to create a book class which provides information about different books in the store.
Each book will have a title, autor, ISBN and keep track of the number of available copies (numCopies) .

You need a way to get each book availablity getAvailability() => "out of stock" if 0 copies, "low stock" if <10 copies and "in stock" otherwise.

need a function for selling a book sell(numSold)

restock fucntion restock(numCopies)

*/

//book class
class Book {
    constructor(title, author, ISBN, numCopies) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;
    }

    //Availability function
    getAvailability() {
        if (this.numCopies == 0) {
            return "out of stock"
        } else if (this.numCopies < 10) {
            return "low stock"
        } else {
            return "In stock"
        }
    }

    restock(restockVal) {
        this.numCopies +=restockVal;
    }

    //Selling books functions
    sell(numSold) {
        this.numCopies -=numSold;
       
    }


}



//let HarryPotter = new Book("Harry Potter And The Chamber Of Secrets", "JK Rowling", "133-92-95-12-301", 100);
let BookOfGod = new Book("Religon and God", "David Collins", "3193-13-13-313-12", 0);
//let DiaryOfAKid = new Book("Diary Of A Whimpy Kid", "Suraj Sharma", "38913-1344-2432-12", 9);

console.log("Title: " + BookOfGod.title);
console.log("Copies left: " + BookOfGod.getAvailability());
BookOfGod.restock(12);
console.log("After restock: " + BookOfGod.getAvailability());


