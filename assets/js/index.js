
function getBibleBook(){
    fetch('https://getbible.net/v2/kjv/books.json')
    .then(response => response.json()) 
    .then(books => {
        books.map((book) => {
            let ul = document.getElementById("bibleBooks")
            let li = document.querySelector(".lists")
            li.innerText = book.name
            ul.appendChild(li)

        })
    })
}

getBibleBook()