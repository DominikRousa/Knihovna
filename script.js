const books = []

var nlist = document.getElementById('bname')

function addBook(){

    const book = {
        title: "",
        author: "",
        genre: "",
        year: 0,
    }

    book.title = document.getElementById('title').value
    book.author = document.getElementById('author').value
    book.genre = document.getElementById('genre').value
    book.year = parseInt(document.getElementById('publishedYear').value)

    books.push(book)

    console.log(books)

    displayList()
}

function displayList(){

    list.innerHTML = ""

    for(let i = 0; i < books.length; i++){
        list.innerHTML += books[i].title + " " + books[i].author + " " + books[i].genre + " " + books[i].year + " "
    }

}