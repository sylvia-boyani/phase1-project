const API_URL = "https://api.scripture.api.bible/v1/swagger.json"

async function getBibleApi(){
    const response = await fetch(API_URL);
    const json = await response.json();
    console.log(json);
}
getBibleApi();