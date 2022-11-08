const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const btn = document.getElementById("search-btn");
//const sound = document.getElementById("sound");

btn.addEventListener('click', () => {
    let inputtext = document.getElementById("input-text").value;
    //console.log(inputtext);
    fetch(`${url}${inputtext}`)
    .then((response) => response.json())
    .then((data) => {
        //console.log(data);
        result.innerHTML=`<div class="word">
        <h3>${inputtext}</h3>
    </div>
    <div class="details">
        <p>${data[0].meanings[0].partOfSpeech}</p>
        <p>${data[0].phonetic}</p>
    </div>
    <p class="word-meaning">
        ${data[0].meanings[0].definitions[0].definition}
    </p>
    <p class="word-example">
        ${data[0].meanings[0].definitions[0].example || "No example found." }
    </p>`;
    //sound.setAttribute("src",`https:${data[0].phonetics[1].audio}`);
    });
    // .catch(() => {
    //     result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
    // });
});
// function playSound(){
//     sound.play();
// }