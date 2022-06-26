
// function getBibleBook(){
//     fetch('https://getbible.net/v2/kjv/books.json')
//     .then(response => response.json()) 
//     .then(books => {
//         books.map((book) => {
//             let ul = document.getElementById("bibleBooks")
//             let li = document.querySelector(".lists")
//             li.innerText = book.name   
//             ul.appendChild(li)

//         })
//     })
// }

// getBibleBook()

const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  users.forEach(user => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value)
    user.element.classList.toggle("hide", !isVisible)
  })
})

fetch("https://dog.ceo/api/breeds/image/random/3")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      header.textContent = user.name
      body.textContent = user.email
      userCardContainer.append(card)
      return { name: user.name, email: user.email, element: card }
    })
  })

  //dog api
 

const API_URL = 'https://dog.ceo/api/breeds/image/random/3';
const randomDogsElement = document.querySelector('.random-dogs');
const loadingElement = document.querySelector('.loading');
const goButton = document.querySelector('.go-button');

loadingElement.style.display = 'none';

async function getRandomDogs() {
  randomDogsElement.innerHTML = '';
  loadingElement.style.display = '';
  const response = await fetch(API_URL);
  const json = await response.json();
  console.log(json.message);
  json.message.forEach(dogImage => {
    randomDogsElement.innerHTML += `
    <div class="column">
      <div class="card">
        <div class="card-image">
          <figure class="image">
            <img src="${dogImage}" alt="Placeholder image">
          </figure>
        </div>
      </div>
    </div>
    `;
   
  });
  loadingElement.style.display = 'none';
}

goButton.addEventListener('click', getRandomDogs);

