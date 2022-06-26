// const API_URL = "https://api.scripture.api.bible/v1/swagger.json"
// const bibleElement = document.querySelector(".bible");

// async function getBibleApi(){
//     const response = await fetch(API_URL);
//     const json = await response.json();
//     console.log(json.AudioBible);
// }
// getBibleApi();

// json.AudioBible.forEach


const API_url = "https://api.scripture.api.bible/v1/bibles/bibleId/books/bookId"

headers = {'api-key': 'api-key'}

response = requests.request("GET", url, headers=headers)

print(response.text)