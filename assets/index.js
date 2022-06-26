const API_URL = "https://api.scripture.api.bible/v1/swagger.json"
const bibleElement = document.querySelector(".bible");

async function getBibleApi(){
    const response = await fetch(API_URL);
    const json = await response.json();
    console.log(json.AudioBible);
}
getBibleApi();

json.AudioBible.forEach