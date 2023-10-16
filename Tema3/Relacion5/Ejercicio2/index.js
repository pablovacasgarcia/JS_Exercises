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
    constructor(books){
        this.books=books;
        this.readBooks=(books.filter((book)=>book.read==true)).length;
        this.notReadBooks=(books.filter((book)=>book.read==false)).length;
        this.index=books.indexOf(books.find((book)=>book.read==false));
        this.actualBook=books[index];
        this.lastBook=null;
        this.nextBook=books.slice(index).find((book)=>book.read==false)
    }

    add(book){
        this.books.push(book);
        if (book.read==false){
            this.notReadBooks+=1;
        } else {
            this.readBooks+=1;
        }
    }

    finishCurrentBook(){
        this.readBooks++;
        this.notReadBooks--;
        this.lastBook=this.actualBook;
        this.actualBook=this.nextBook;
        this.index++;
        this.nextBook=books.slice(index).find((book)=>book.read==false)
    }
}

class Book{

    constructor(title, genre, author, read, readDate=null){
        this.title=title;
        this.genre=genre;
        this.author=author;
        this.read=read;
        this.readDate=readDate;
    }
ç
}