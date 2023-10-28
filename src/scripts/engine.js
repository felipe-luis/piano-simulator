const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");

let audio = new Audio("./src/tunes/a.wav")

let mapedKeys = [];

const playTune = (key) => {
    audio.src = `./src/tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key=${key}]`);
    clickedKey.classList.add('active')
    setTimeout(()=>{
        clickedKey.classList.remove('active');
    },500)
}

pianoKeys.forEach((key) =>{
    key.addEventListener('click', ()=> playTune(key.textContent))
    mapedKeys.push(key.textContent);

})

document.addEventListener('keydown', (event)=>{

    if(mapedKeys.includes(event.key)){
        playTune(event.key);

    }
})


function handleVolume(e){
    audio.volume = e.target.value
}

function showHideKeys(){
    pianoKeys.forEach(key => key.classList.toggle("hide"))
}

volumeSlider.addEventListener('input', handleVolume)

keysCheck.addEventListener('click', showHideKeys)