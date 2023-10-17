/*An object-oriented book-list!

Create a class BookList

Create another class called Book

BookLists should have the following properties:

Number of books marked as read
Number of books marked not read yet
A reference to the next book to read (book object)
A reference to the current book being read (book object)
A reference to the last book read (book object)
An array of all the Books

Each Book should have several properties:
Title
Genre
Author
Read (true or false)
Read date, can be blank, otherwise needs to be a JS Date() object
Every Booklist should have a few methods:

.add(book)
should add a book to the books list.
.finishCurrentBook()
should mark the book that is currently being read as "read"
Give it a read date of new Date(Date.now())
Change the last book read to be the book that just got finished
Change the current book to be the next book to be read
Change the next book to be read property to be the first unread book you find in the list of books
Booklists and Books might need more methods than that. Try to think of more that might be useful.*/

class Booklist{
    constructor(books=[]){
        this.books=books;
        this.readBooks=(books.filter((book)=>book.read==true)).length;
        this.notReadBooks=(books.filter((book)=>book.read==false)).length;
        this.index=books.indexOf(books.find((book)=>book.read==false));
        this.actualBook=books[this.index];
        this.lastBook=null;
        this.nextBook=books.slice(this.index+1).find((book)=>book.read==false)
    }

    add(book){
        this.books.push(book);
        if (book.read==false){
            this.notReadBooks+=1;
        } else {
            this.readBooks+=1;
        }
        if (this.books.indexOf(book)==0){
            this.actualBook=book;
        }
    }

    finishCurrentBook(){
        if (this.actualBook.read!=true){
            this.readBooks++;
            this.notReadBooks--;
            this.actualBook.read=true;
            this.actualBook.readDate=new Date(Date.now());
            this.lastBook=this.actualBook;
        } else {
            console.log("Ya te has terminado el libro actual.")
        }
        
        if (this.nextBook==undefined){
            console.log("No hay más libros por leer, añade más libros para seguir leyendo");
        } else {
            this.actualBook=this.nextBook;
            this.index=this.books.indexOf(this.actualBook);
            this.nextBook=this.books.slice(this.index+1).find((book)=>book.read==false)
        }
        
    }
}

class Book{

    constructor(title, genre, author, read=false, readDate=null){
        this.title=title;
        this.genre=genre;
        this.author=author;
        this.read=read;
        this.readDate=readDate;
    }

}



//Pruebas
/*libros = [
libro1=new Book("Libro1", "genero", "autor"),
libro2=new Book("Libro2", "genero", "autor", true, new Date(Date.now())),
libro3=new Book("Libro3", "genero", "autor"),
libro4=new Book("Libro4", "genero", "autor", true, new Date(Date.now())),
libro5=new Book("Libro5", "genero", "autor"),
libro6=new Book("Libro6", "genero", "autor"),
libro7=new Book("Libro7", "genero", "autor") ]


libreria= new Booklist(libros);

libreria.add(libro8=new Book("Libro8", "genero", "autor"));
libreria.finishCurrentBook();
libreria.finishCurrentBook();


console.log(libreria.books);
console.log(libreria.readBooks)
console.log(libreria.notReadBooks)*/

libreria= new Booklist();
libreria.add(libro8=new Book("Libro8", "genero", "autor"));
libreria.finishCurrentBook();
libreria.finishCurrentBook();


console.log(libreria.books);
console.log(libreria.readBooks)
console.log(libreria.notReadBooks)