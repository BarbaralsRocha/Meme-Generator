const textInput = document.getElementById('text-input')
const coontainer = document.getElementById('meme-image-container')
const memeTextImage = document.getElementById('meme-text')
const memeImage = document.getElementById('meme-image');
const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');


function textMeme(){
        let textInserido = textInput.value
        memeTextImage.innerText = textInserido
        
}
textMeme()
textInput.addEventListener('keyup', textMeme)

let loadFile = function(event) {
    memeImage.src = URL.createObjectURL(event.target.files[0]);
    memeImage.onload = function() {
      URL.revokeObjectURL(memeImage.src) // free memory
    }
}
function changeFire(){
    fire.addEventListener('click', function(){
        coontainer.style.border='3px dashed red'
    })
}
changeFire()

function changeWater(){
    water.addEventListener('click', function(){
        coontainer.style.border='5px double blue'
    })
}
changeWater()

function changeEarth(){
    earth.addEventListener('click', function(){
        coontainer.style.border='6px groove green'
    })
}
changeEarth()
