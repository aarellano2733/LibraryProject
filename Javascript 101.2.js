function Library(){
this.init();
}
Library.prototype.init = function(){
  this.books = this.loadBooks();
}
Library.prototype.loadBooks = function(){
  var books = [{title: 'Book1', author: 'Name1', pages: 101, publishDate: 2001}, {title: 'Book2', author: 'Name2', pages: 102, publishDate: 2002}, {title: 'Book3', author: 'Name3', pages: 103, publishDate: 2003}];
  return books;
}
Library.prototype.addBook = function(newTitle, newAuthor, newPages, newPublishDate){
  var book = {title: newTitle, author: newAuthor, pages: newPages, publishDate: newPublishDate};
  this.books.push(book);
  return this.books;
}
Library.prototype.getBookByTitle = function(title){
  for(var index in this.books){
    if(this.books[index].title == title){
      return this.books[index];
    }
  }
  return console.log('Book not found');
}
Library.prototype.getBookByAuthor = function(author){
  for(var index in this.books){
    if(this.books[index].author == author){
      return this.books[index];
    }
  }
  return console.log('Book by author not found');
}
Library.prototype.removeBookByAuthor = function(author){
  for(i = this.books.length - 1; i >= 0; i--){
    if( this.books[i].author == author){
      this.books.splice(i, 1);
      return this.books[i];
    }
  }
  return console.log('Book by author not found')
}
Library.prototype.removeBookByTitle = function(title){
  for(i = this.books.length - 1; i >= 0; i--){
    if(this.books[i].title == title){
      this.books.splice(i, 1);
      return this.books[i];
    }
  }
  return console.log('Book title not found')
}
 Library.prototype.addBooks = function(arrayBooks){
   this.books.push(books2);
}
 Library.prototype.getBooksByAuthor = function(author){
   var booksByAuthor = [];
   for(i = this.books.length; i>= 1; i++){
    if(this.books[i].author == author){
      this.books[i].push(booksByAuthor)
      return this.booksByAuthor;
     }
   }
   return console.log('Books by author not found');
}
Library.prototype.getRandomBook = function(){
  var randBook = Math.floor(Math.random() * (this.books.length - 0 + 0)) + 0;
  return this.books[randBook];
}
Library.prototype.getRandomAuthor = function(){
  var randAuth = Math.floor(Math.random() * (this.books.length - 0 + 0)) + 0;
  var result = randAuth.filter(function( books ) {
  return books.author == author;
});
}
//Library.prototype.getRandomAuthor = function(){
  //var randAuth = (Math.random() * (this.books.length -1 + 1)) + 1;
  //return this.books[randAuth];
//}
var books2 = [{title: 'Book4', author: 'Name4', pages: 104, publishDate: 2004}, {title: 'Book5', author: 'Name5', pages: 105, publishDate: 2005}, {title: 'Book6', author: 'Name6', pages: 106, publishDate: 2006}];
