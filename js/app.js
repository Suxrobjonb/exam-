// ulanishi
let elForm = document.querySelector(".form");
let elInput = document.querySelector(".input__dictionary");
let elSearchBtn = document.querySelector(".site__search");
let elResaultBox = document.querySelector(".box__resault") 
let commitRes = document.querySelector(".about__the-result");
let ReadingEl = document.querySelector(".site__resault-title");
let elExample = document.querySelector(".exaple");
let elAudio = document.querySelector(".audio__sound");

elForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    // backend
     fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${elInput.value}`)
     .then(response => response.json())
     .then(data => {
      console.log(data);
        data.forEach(resaultEl => {
            // lug'atni aytilishi
            commitRes.innerHTML = resaultEl.meanings[0].definitions[0].definition;
            // ta'rifi
            ReadingEl.innerHTML =  resaultEl.word + " - " + resaultEl.phonetics[1].text.split('').slice(1, -1).join('');
            // audiosi
            elAudio.setAttribute("controls", "")
            elAudio.src = resaultEl.phonetics[0].audio;
            console.log(resaultEl);
            
          });       
     })                         
    })

    

